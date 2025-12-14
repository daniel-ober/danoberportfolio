"use strict";

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { Resend } = require("resend");

admin.initializeApp();

function escapeHtml(input) {
  if (typeof input !== "string") return "";
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getResendKey() {
  const cfg = functions.config();
  let key = "";

  if (cfg && cfg.resend && cfg.resend.key) {
    key = String(cfg.resend.key);
  }

  return key.trim();
}

function buildSubject(name, email) {
  if (name) return "New contact form message from " + name;
  return "New contact form message from " + email;
}

function buildEmailHtml(docId, name, email, message) {
  const safeName = escapeHtml(name || "Website Visitor");
  const safeEmail = escapeHtml(email || "");
  const safeMsg = escapeHtml(message || "").replace(/\n/g, "<br/>");

  const lines = [];
  lines.push("<div style=\"font-family:Arial;line-height:1.5;\">");
  lines.push("<h2 style=\"margin:0 0 12px;\">New Contact</h2>");

  lines.push(
    "<p style=\"margin:0 0 6px;\">" +
      "<strong>Name:</strong> " +
      safeName +
      "</p>"
  );

  lines.push(
    "<p style=\"margin:0 0 6px;\">" +
      "<strong>Email:</strong> " +
      safeEmail +
      "</p>"
  );

  lines.push(
    "<p style=\"margin:12px 0 6px;\">" +
      "<strong>Message:</strong>" +
      "</p>"
  );

  lines.push("<div style=\"padding:12px;border:1px solid #eee;\">");
  lines.push(safeMsg);
  lines.push("</div>");

  lines.push(
    "<p style=\"margin:12px 0 0;color:#666;font-size:12px;\">"
  );
  lines.push("Doc ID: " + escapeHtml(docId));
  lines.push("</p>");
  lines.push("</div>");

  return lines.join("");
}

function buildEmailText(docId, name, email, message) {
  const parts = [];
  parts.push("New Contact Form Message");
  parts.push("");
  parts.push("Name: " + (name || "Website Visitor"));
  parts.push("Email: " + (email || ""));
  parts.push("");
  parts.push("Message:");
  parts.push(message || "");
  parts.push("");
  parts.push("Doc ID: " + docId);
  return parts.join("\n");
}

function getErrorMessage(err) {
  if (!err) return "Unknown error";
  if (err.message) return String(err.message);
  return "Unknown error";
}

function looksLikeResendError(sendResult) {
  if (!sendResult) return true;
  if (sendResult.error) return true;
  if (sendResult.data && sendResult.data.id) return false;
  return false;
}

exports.emailContactMessage = functions
  .region("us-central1")
  .firestore
  .document("contact_messages/{docId}")
  .onCreate(async (snap, context) => {
    const docId = context.params.docId;
    const data = snap.data() || {};

    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const message = String(data.message || "").trim();

    const apiKey = getResendKey();
    if (!apiKey) {
      await snap.ref.set(
        {
          emailStatus: "error",
          emailError: "Missing Resend key (config or env).",
          emailAttemptedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
      return null;
    }

    if (!email || !message) {
      await snap.ref.set(
        {
          emailStatus: "skipped",
          emailError: "Missing required fields: email or message.",
          emailAttemptedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
      return null;
    }

    const resend = new Resend(apiKey);

    const subject = buildSubject(name, email);
    const html = buildEmailHtml(docId, name, email, message);
    const text = buildEmailText(docId, name, email, message);

    try {
      const sendResult = await resend.emails.send({
        from: "Dan Ober Portfolio <onboarding@resend.dev>",
        to: ["danober.dev@gmail.com"],
        replyTo: email,
        subject: subject,
        html: html,
        text: text,
      });

      console.log("Resend sendResult:", sendResult);

      if (looksLikeResendError(sendResult)) {
        await snap.ref.set(
          {
            emailStatus: "error",
            emailError: "Resend send failed (see resendResponse).",
            resendResponse: sendResult || null,
            emailAttemptedAt: admin.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
        return null;
      }

      await snap.ref.set(
        {
          emailStatus: "sent",
          resendId: String(sendResult.data.id),
          resendResponse: sendResult || null,
          emailAttemptedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
    } catch (err) {
      const errMsg = getErrorMessage(err);
      console.error("emailContactMessage failed:", err);

      await snap.ref.set(
        {
          emailStatus: "error",
          emailError: errMsg,
          emailAttemptedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
    }

    return null;
  });

exports.createContactMessage = functions
  .region("us-central1")
  .https
  .onCall(async (data) => {
    const name = String((data && data.name) || "").trim();
    const email = String((data && data.email) || "").trim();
    const message = String((data && data.message) || "").trim();

    if (!email || !message) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "Email and message are required."
      );
    }

    try {
      const ref = await admin.firestore().collection("contact_messages").add({
        name: name || null,
        email: email,
        message: message,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        source: "portfolio_contact_form",
        emailStatus: "pending",
      });

      return { ok: true, id: ref.id };
    } catch (err) {
      const msg = getErrorMessage(err);
      console.error("createContactMessage failed:", err);
      throw new functions.https.HttpsError("internal", msg);
    }
  });