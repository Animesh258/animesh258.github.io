import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useToast } from "../../context/ToastContext";
import { RiMapPinUserFill } from "react-icons/ri";
import { socialLinks } from "../../configs/staticConfigs";
import { emailConfig } from "../../configs/envConfig";
import BadgeTag from "../ui/BadgeTag";
import Tooltip from "../common/Tooltip";
import { useTheme } from "../../context/ThemeContext";


const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSent, setLastSent] = useState(null);
  const [verified, setVerified] = useState(false);
  const formRef = useRef();
  const recaptchaRef = useRef();
  const { showToast } = useToast();
  const { theme } = useTheme();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value.trimStart() });

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleBlur = (e) => {
      const { name, value } = e.target;
      if (name === "name" && value.trim().length < 2) {
        showToast("warning", "Please enter your full name.");
      } else if (name === "email" && value && !validateEmail(value)) {
        showToast("warning", "Please enter a valid email address.");
      } else if (name === "message" && value.trim().length < 10) {
        showToast("info", "Your message seems too short — add a bit more context!");
      }
    };

    

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formRef.current) return;

      const honeypot = formRef.current.querySelector('[name="_honeypot"]').value;
      if (honeypot) return;

      const now = Date.now();
      if (lastSent && now - lastSent < 60000) {
        showToast("info", "⏳ Please wait a moment before sending again.");
        return;
      }

      if (!verified) {
        showToast("warning", "⚠️ Please complete the reCAPTCHA check first.");
        return;
      }

      setIsSubmitting(true);

      emailjs
        .sendForm(emailConfig.service, emailConfig.template, formRef.current, emailConfig.publickey)
        .then(
          () => {
            showToast("success", "✅ Message sent successfully!");
            formRef.current.reset();
            setForm({ name: "", email: "", message: "" });
            recaptchaRef.current.reset();
            setVerified(false);
            setLastSent(Date.now());
          },
          () => {
            showToast("error", "❌ Failed to send. Please try again later.");
            recaptchaRef.current?.reset();
            setVerified(false);
          }
        )
        .finally(() => setIsSubmitting(false));
    };

  return (
    <section
      id="contact"
      className="section-container pt-36 pb-10 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
    >
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start justify-between">
        {/* --- Left Column --- */}
        <div className="space-y-10">
          <BadgeTag badgeLabel="⃝✔ Open for opportunities" />

          <p className="text-2xl font-heading leading-tight">
            Let’s turn a quick message into{" "}
            <span className="text-accent-primary dark:text-accent-secondary font-bold text-4xl transition-colors duration-500">
              meaningful collaboration!
            </span>
          </p>

          <p className="text-lg text-[var(--color-text-secondary)]">
            Looking for someone who bridges{" "}
            <span className="font-bold">data and design</span>? Here's how you
            can <span className="font-bold">reach me</span>. I’m currently
            exploring new and exciting opportunities — eager to apply my
            analytical skills and passion for elegant code to a new team.
            Let’s create impact together!
          </p>

          <div className="flex items-center space-x-3 text-lg">
            <Tooltip label="Location" side="bottom">
              <RiMapPinUserFill className="text-accent-primary dark:text-accent-secondary text-2xl transition-colors duration-500" />
            </Tooltip>
            <span className="font-semibold">Kolkata, India</span>
          </div>

          <div className="flex space-x-6 pt-4">
            {socialLinks.map(({ icon: Icon, href, label }, idx) => (
              <Tooltip key={idx} label={label} side="bottom">
                <a
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-accent-secondary transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="text-3xl" />
                </a>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* --- Right Column: Contact Form --- */}
        <div className="bg-white py-4 px-6 rounded-xl shadow-2xl dark:bg-neutral-dark transition-colors duration-500">
          <h3 className="text-2xl font-heading mb-8 text-center">
            Just a message away
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4"
            noValidate
          >
            {/* Honeypot field */}
            <input
              type="text"
              name="_honeypot"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            <input
              type="text"
              name="name"
              placeholder="Your name, please"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-3 border-b-2 border-support-muted focus:border-accent-primary outline-none transition-all duration-300 bg-transparent placeholder-neutral-500"
              required
              minLength={2}
            />

            <input
              type="email"
              name="email"
              placeholder="Your professional email address"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-3 border-b-2 border-support-muted focus:border-accent-primary outline-none transition-all duration-300 bg-transparent placeholder-neutral-500"
              required
            />

            <textarea
              name="message"
              placeholder="Share a bit about the role or project..."
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-3 h-32 border-b-2 border-support-muted focus:border-accent-primary outline-none transition-all duration-300 resize-none bg-transparent placeholder-neutral-500"
              required
              minLength={10}
            ></textarea>

            {/* Google reCAPTCHA */}
            <div className="flex justify-center">
              {emailConfig.recapchakey ? (
                <ReCAPTCHA
                  key={theme} // 👈 this forces re-render when theme changes
                  sitekey={emailConfig.recapchakey}
                  onChange={() => setVerified(true)}
                  ref={recaptchaRef}
                  theme={theme === "dark" ? "dark" : "light"} // dynamic theme binding
                />
              ) : (
                <p className="text-sm text-red-500">
                  ⚙️ reCAPTCHA key missing — form temporarily disabled.
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={
                isSubmitting ||
                !emailConfig.recapchakey ||
                !form.name ||
                !form.email ||
                !form.message
              }
              className="btn-primary w-full text-lg py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Let’s Connect!"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
