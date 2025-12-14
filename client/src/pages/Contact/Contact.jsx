// src/pages/Contact/Contact.js
import "./Contact.css";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { httpsCallable, connectFunctionsEmulator } from "firebase/functions";
import { functions } from "../../firebase";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Download,
  Briefcase,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState({
    type: "idle",
    message: "",
  });

  useEffect(() => {
    const useEmu = String(process.env.REACT_APP_USE_FUNCTIONS_EMULATOR) === "true";
    const isLocal = window.location.hostname === "localhost";

    if (useEmu && isLocal) {
      try {
        connectFunctionsEmulator(functions, "127.0.0.1", 5001);
      } catch {}
    }
  }, []);

  const canSubmit = useMemo(() => {
    const emailOk = form.email.trim().includes("@");
    const msgOk = form.message.trim().length >= 8;
    return form.name.trim() && emailOk && msgOk && !isSubmitting;
  }, [form, isSubmitting]);

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (status.type !== "idle") setStatus({ type: "idle", message: "" });
  }

  function dismissStatus() {
    setStatus({ type: "idle", message: "" });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const payload = {
      ...form,
      page: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    };

    try {
      const sendMessage = httpsCallable(functions, "createContactMessage");
      const result = await sendMessage(payload);

      if (!result?.data?.ok) throw new Error(result?.data?.error);

      setForm({ name: "", email: "", company: "", message: "" });

      setStatus({
        type: "success",
        message: "Thanks for reaching out. I’ll get back to you within 24–48 hours.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err?.message || "Something went wrong. Please try again, or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="contact page">
      <div className="contact__inner page__inner">

        {/* HERO */}
        <header className="contact__hero">
          <p className="contact__kicker">Let’s connect</p>

          <h1 className="contact__title">Want to work together?</h1>

          <p className="contact__subtitle">
            If you’re hiring for a Solutions or Customer Engineer role — or you need someone who can turn
            ambiguity into shipped systems — I’d love to hear what you’re working on.
          </p>

          <div className="contact__availability">
            <div className="contact__availabilityTop">
              <span className="contact__statusDot" aria-hidden="true" />
              <div className="contact__availabilityText">
                <div className="contact__statusTitle">Open to work</div>
                <div className="contact__statusSub">
                  Full-time • Part-time • Contract • Limited freelance
                </div>
              </div>
            </div>

            <div className="contact__ctaRow">
              <a
                className="contact__ctaBtn contact__ctaBtn--primary"
                href="mailto:danober.dev@gmail.com?subject=Let%E2%80%99s%20connect"
              >
                <Mail size={16} />
                Email me
              </a>

              <a className="contact__ctaBtn" href="/media/Dan%20Ober%20Resume.pdf" download>
                <Download size={16} />
                Resume
              </a>

              <Link className="contact__ctaBtn" to="/projects">
                View projects
              </Link>
            </div>

            <div className="contact__micro">
              Quick note: emailing is fastest. I typically respond within 24–48 hours.
            </div>
          </div>
        </header>

        {/* ================================
            TWO COLUMN LAYOUT STARTS HERE
           ================================ */}
        <div className="contact__twoColumn">

          {/* LEFT — FORM */}
          <section className="contact__formCard" aria-label="Contact form">
            <div className="contact__cardHead">
              <div className="contact__cardTitle">Start a conversation</div>
              <div className="contact__cardSub">
                Tell me a bit about what you’re building or hiring for.
              </div>
            </div>

            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__formGrid">
                <label className="contact__field">
                  <span className="contact__fieldLabel">Name</span>
                  <input
                    className="contact__input"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    required
                  />
                </label>

                <label className="contact__field">
                  <span className="contact__fieldLabel">Email</span>
                  <input
                    className="contact__input"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    required
                  />
                </label>
              </div>

              <label className="contact__field">
                <span className="contact__fieldLabel">Company / role</span>
                <input
                  className="contact__input"
                  name="company"
                  type="text"
                  placeholder="Company + role (optional)"
                  value={form.company}
                  onChange={(e) => updateField("company", e.target.value)}
                />
              </label>

              <label className="contact__field">
                <span className="contact__fieldLabel">Message</span>
                <textarea
                  className="contact__textarea"
                  name="message"
                  rows={6}
                  placeholder="What can I help with?"
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  required
                />
              </label>

              <div className="contact__formActions">
                <button className="contact__submit" type="submit" disabled={!canSubmit}>
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>

                <a className="contact__resumeLink" href="/media/Dan%20Ober%20Resume.pdf" download>
                  <Download size={14} />
                  Resume (PDF)
                </a>
              </div>

              {status.type === "success" && (
                <div className="contact__callout contact__callout--success">
                  <CheckCircle2 size={18} />
                  <div className="contact__calloutBody">
                    <div className="contact__calloutTitle">Message sent</div>
                    <div className="contact__calloutText">{status.message}</div>
                  </div>
                  <button type="button" className="contact__calloutBtn" onClick={dismissStatus}>
                    OK
                  </button>
                </div>
              )}

              {status.type === "error" && (
                <div className="contact__callout contact__callout--error">
                  <AlertTriangle size={18} />
                  <div className="contact__calloutBody">
                    <div className="contact__calloutTitle">Something went wrong</div>
                    <div className="contact__calloutText">{status.message}</div>
                  </div>
                  <button type="button" className="contact__calloutBtn" onClick={dismissStatus}>
                    OK
                  </button>
                </div>
              )}

              {status.type === "idle" && (
                <div className="contact__formHint">
                  This sends via Firebase Functions (no mailto). If anything fails, email is always available.
                </div>
              )}
            </form>
          </section>

          {/* RIGHT — DIRECT CONTACT */}
          <section className="contact__card contact__card--below contact__directCard">
            <div className="contact__cardHead">
              <div className="contact__cardTitle">Direct contact</div>
              <div className="contact__cardSub">Pick what’s easiest.</div>
            </div>

            <div className="contact__rows">
              <div className="contact__row">
                <div className="contact__label">
                  <Mail size={14} /> Email
                </div>
                <div className="contact__value">
                  <a className="contact__link" href="mailto:danober.dev@gmail.com">
                    danober.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact__row">
                <div className="contact__label">
                  <Phone size={14} /> Mobile
                </div>
                <div className="contact__value">
                  <a className="contact__link" href="tel:+15084466548">
                    (508) 446-6548
                  </a>
                </div>
              </div>

              <div className="contact__row">
                <div className="contact__label">
                  <MapPin size={14} /> Location
                </div>
                <div className="contact__value">Nashville, TN • Remote-friendly</div>
              </div>

              <div className="contact__row">
                <div className="contact__label">
                  <Briefcase size={14} /> Roles
                </div>
                <div className="contact__value">
                  Solutions Engineer • Customer Engineer • Technical Success
                </div>
              </div>
            </div>

            <div className="contact__social">
              <a
                className="contact__socialBtn"
                href="https://www.linkedin.com/in/daniel-ober/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </section>

        </div>
      </div>
    </section>
  );
}