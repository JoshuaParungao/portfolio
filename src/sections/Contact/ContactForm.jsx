import React, { useState } from 'react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="contact-form-card max-w-md mx-auto p-4 rounded bg-black border border-secondary" style={{ maxWidth: '540px', margin: 'auto' }}>
      {submitted ? (
        <div className="alert alert-success bg-dark border-warning text-warning mb-0 text-center">
          <i className="bi bi-check-circle-fill me-2" />
          Thank you! Message dispatched to system core.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label className="form-label text-warning small font-monospace">NAME</label>
            <input
              type="text"
              required
              className="form-control bg-dark text-light border-secondary"
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
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Send Message
          </button>
        </form>
      )}

      {/* Direct Resume Link */}
      <div className="mt-4 pt-3 border-top border-secondary text-center">
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vT0CVm0BnUEz4D95pB2y8HAEVLxfit8E2Jvgz0JVG8l38Oih6chE2NfXXWWal2AhBPPO9PHPXY7hgvS/pub"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-warning btn-sm rounded-pill px-4"
        >
          <i className="bi bi-file-earmark-person-fill me-1" />
          View Professional Resume / CV ↗
        </a>
      </div>
    </div>
  );
}

export default ContactForm;
