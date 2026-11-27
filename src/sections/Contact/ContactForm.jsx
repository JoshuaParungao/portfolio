import React, { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/davensitsolutions@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name} (${formData.email})`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok && data.success !== 'false') {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrorMessage(
        'Could not send message automatically. Please click the direct email link below or email davensitsolutions@gmail.com directly.'
      );
      setStatus('error');
    }
  }

  return (
    <div
      className="contact-form-card max-w-md mx-auto p-4 rounded bg-black border border-secondary"
      style={{ maxWidth: '540px', margin: 'auto' }}
    >
      {status === 'success' ? (
        <div className="alert alert-success bg-dark border-warning text-warning mb-0 text-center py-4">
          <i className="bi bi-check-circle-fill fs-2 d-block mb-2 text-warning" />
          <h5 className="fw-bold text-warning mb-1">Message Dispatched!</h5>
          <p className="small text-white-50 mb-3">
            Thank you! Your inquiry has been sent to <strong>davensitsolutions@gmail.com</strong>. I will get back to you shortly.
          </p>
          <button
            type="button"
            className="btn btn-outline-warning btn-sm"
            onClick={() => setStatus('idle')}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {status === 'error' && (
            <div className="alert alert-danger bg-dark border-danger text-light small mb-3">
              <i className="bi bi-exclamation-triangle-fill text-danger me-2" />
              {errorMessage}
              <div className="mt-2">
                <a
                  href={`mailto:davensitsolutions@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`}
                  className="btn btn-sm btn-outline-warning mt-1"
                >
                  <i className="bi bi-envelope me-1" /> Open Default Mail Client
                </a>
              </div>
            </div>
          )}

          <div className="mb-3 text-start">
            <label className="form-label text-warning small font-monospace">NAME</label>
            <input
              type="text"
              required
              disabled={status === 'loading'}
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
              disabled={status === 'loading'}
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
              disabled={status === 'loading'}
              className="form-control bg-dark text-light border-secondary"
              placeholder="Write your message or inquiry here..."
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn btn-primary w-100 fw-bold d-flex align-items-center justify-content-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                <span>Sending Message...</span>
              </>
            ) : (
              <span>Send Message</span>
            )}
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
