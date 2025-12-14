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
  X,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Inline status (no popup)
  const [status, setStatus] = useState({
    type: "idle", // "idle" | "success" | "error"
    message: "",
  });

  // Optional: emulator support (off by default)
  useEffect(() => {
    const useEmu = String(process.env.REACT_APP_USE_FUNCTIONS_EMULATOR) === "true";
    const isLocalhost =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

    if (useEmu && isLocalhost) {
      try {
        connectFunctionsEmulator(functions, "127.0.0.1", 5001);
      } catch {
        // ignore double-connect warnings during hot reload
      }
    }
  }, []);

  const canSubmit = useMemo(() => {
    const emailOk = form.email.trim().length > 3 && form.email.includes("@");
    const msgOk = form.message.trim().length >= 8;
    return form.name.trim().length > 0 && emailOk && msgOk && !isSubmitting;
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
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      message: form.message.trim(),
      page: typeof window !== "undefined" ? window.location.href : "",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      timestamp: new Date().toISOString(),
    };

    try {
      const sendMessage = httpsCallable(functions, "createContactMessage");
      const result = await sendMessage(payload);

      const ok = result?.data?.ok ?? true;
      if (!ok) {
        throw new Error(result?.data?.error || "Request failed. Check function logs.");
      }

      setForm({ name: "", email: "", company: "", message: "" });

      setStatus({
        type: "success",
        message: "Message sent. I typically respond within 24–48 hours.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err?.message ||
          "Something went wrong sending your message. Please try again, or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="contact page">
      <div className="contact__inner page__inner">
        <header className="contact__hero">
          <div className="contact__heroTop">
            <p className="contact__kicker">Let’s connect</p>
          </div>

          <h1 className="contact__title">Want to work together?</h1>

          <p className="contact__subtitle">
            If you’re hiring for a Solutions Engineer / Customer Engineer role — or you need someone
            who can translate ambiguity into shipped systems — I’d love to talk.
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
                className="contact__btn contact__btn--primary"
                href="mailto:danober.dev@gmail.com?subject=Let%E2%80%99s%20connect"
              >
                <Mail size={16} />
                Email me
              </a>

              <a
                className="contact__btn"
                href="/media/Dan%20Ober%20Resume.pdf"
                download
                aria-label="Download resume PDF"
              >
                <Download size={16} />
                Resume (PDF)
              </a>

              <Link className="contact__btn" to="/projects">
                View projects
              </Link>
            </div>

            <div className="contact__micro">I typically respond within 24–48 hours.</div>
          </div>
        </header>

        <div className="contact__grid">
          {/* LEFT */}
          <section className="contact__card">
            <div className="contact__cardHead">
              <div className="contact__cardTitle">Direct contact</div>
              <div className="contact__cardSub">Pick what’s easiest.</div>
            </div>

            <div className="contact__rows">
              <div className="contact__row">
                <div className="contact__label">
                  <Mail size={14} />
                  Email
                </div>
                <div className="contact__value">
                  <a className="contact__link" href="mailto:danober.dev@gmail.com">
                    danober.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact__row">
                <div className="contact__label">
                  <Phone size={14} />
                  Mobile
                </div>
                <div className="contact__value">
                  <a className="contact__link" href="tel:+15084466548">
                    (508) 446-6548
                  </a>
                </div>
              </div>

              <div className="contact__row">
                <div className="contact__label">
                  <MapPin size={14} />
                  Location
                </div>
                <div className="contact__value">Nashville, TN • Remote-friendly</div>
              </div>

              <div className="contact__row">
                <div className="contact__label">
                  <Briefcase size={14} />
                  Roles
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
                <Linkedin size={16} />
                LinkedIn
              </a>

              <a
                className="contact__socialBtn"
                href="https://github.com/daniel-ober"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </section>

          {/* RIGHT */}
          <section className="contact__formCard" aria-label="Contact form">
            <div className="contact__cardHead">
              <div className="contact__cardTitle">Start a conversation</div>
              <div className="contact__cardSub">This goes straight to my inbox.</div>
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
                  placeholder="Optional"
                  value={form.company}
                  onChange={(e) => updateField("company", e.target.value)}
                />
              </label>

              <label className="contact__field">
                <span className="contact__fieldLabel">Message</span>
                <textarea
                  className="contact__textarea"
                  name="message"
                  rows={7}
                  placeholder="What are you hiring for, and what would you like to learn?"
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

              {status.type === "success" ? (
                <div className="contact__notice contact__notice--success" role="status" aria-live="polite">
                  <span className="contact__noticeIcon" aria-hidden="true">
                    <CheckCircle2 size={16} />
                  </span>
                  <span className="contact__noticeText">{status.message}</span>
                  <button type="button" className="contact__noticeBtn" onClick={dismissStatus} aria-label="Dismiss">
                    <X size={16} />
                  </button>
                </div>
              ) : status.type === "error" ? (
                <div className="contact__notice contact__notice--error" role="status" aria-live="polite">
                  <span className="contact__noticeIcon" aria-hidden="true">
                    <AlertTriangle size={16} />
                  </span>
                  <span className="contact__noticeText">{status.message}</span>
                  <button type="button" className="contact__noticeBtn" onClick={dismissStatus} aria-label="Dismiss">
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div className="contact__formHint">
                  This sends via Firebase Functions. If anything fails, email is always available.
                </div>
              )}
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}