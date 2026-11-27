import React from 'react';
import { ContactInformation } from './ContactInformation';
import { SocialLinks } from './SocialLinks';
import { ContactForm } from './ContactForm';
import './contact.css';

export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <ContactInformation />
        <SocialLinks />
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
