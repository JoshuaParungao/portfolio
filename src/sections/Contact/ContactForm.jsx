import React, { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [dispatched, setDispatched] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Joshua,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}`
    );

    const mailtoUri = `mailto:davensitsolutions@gmail.com?subject=${subject}&body=${body}`;

    setDispatched(true);

    // Trigger user's default email client
    window.location.href = mailtoUri;
  }

  const subjectEnc = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
  const bodyEnc = encodeURIComponent(
    `Hi Joshua,\n\n${formData.message || ''}\n\n---\nSender: ${formData.name || ''}\nEmail: ${formData.email || ''}`
  );
  const webGmailUri = `https://mail.google.com/mail/?view=cm&fs=1&to=davensitsolutions@gmail.com&su=${subjectEnc}&body=${bodyEnc}`;

  return (
    <div
      className="contact-form-card max-w-md mx-auto p-4 rounded bg-black border border-secondary"
      style={{ maxWidth: '540px', margin: 'auto' }}
    >
      {dispatched ? (
        <div className="alert alert-success bg-dark border-warning text-warning mb-0 text-center py-4">
          <i className="bi bi-check-circle-fill fs-2 d-block mb-2 text-warning" />
          <h5 className="fw-bold text-warning mb-2">Opening Email Client...</h5>
          <p className="small text-white-50 mb-3">
            Your message has been prepared for <strong>davensitsolutions@gmail.com</strong>.
          </p>
          <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
            <a
              href={webGmailUri}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning btn-sm fw-bold px-3 py-2 d-inline-flex align-items-center gap-2"
            >
              <i className="bi bi-google" /> Open in Gmail Web ↗
            </a>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm mt-1 text-white-50"
              onClick={() => {
                setDispatched(false);
                setFormData({ name: '', email: '', message: '' });
              }}
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label className="form-label text-warning small font-monospace">NAME</label>
            <input
              type="text"
              required
              className="form-control bg-dark text-light border-secondary"
              placeholder="Your full name"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label text-warning small font-monospace">EMAIL</label>
            <input
              type="email"
              required
              className="form-control bg-dark text-light border-secondary"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label text-warning small font-monospace">MESSAGE</label>
            <textarea
              required
              rows="3"
              className="form-control bg-dark text-light border-secondary"
              placeholder="Write your message or inquiry here..."
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 fw-bold d-flex align-items-center justify-content-center gap-2"
          >
            <i className="bi bi-send-fill" />
            <span>Send Message</span>
          </button>
        </form>
      )}

      {/* Direct Resume & CV Links */}
      <div className="mt-4 pt-3 border-top border-secondary text-center d-flex justify-content-center gap-2 flex-wrap">
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vT0CVm0BnUEz4D95pB2y8HAEVLxfit8E2Jvgz0JVG8l38Oih6chE2NfXXWWal2AhBPPO9PHPXY7hgvS/pub"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-warning btn-sm rounded-pill px-3"
        >
          📄 View Resume ↗
        </a>
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vSg11jlvRJMj0LNO4gz43SJrGPqZ-v_K6jY3W-KPIOnceJAhNG_-PnVi-y8paJtxBvA5wZHNMmKEwZw/pub"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-warning btn-sm rounded-pill px-3"
        >
          📁 View CV ↗
        </a>
      </div>
    </div>
  );
}

export default ContactForm;
