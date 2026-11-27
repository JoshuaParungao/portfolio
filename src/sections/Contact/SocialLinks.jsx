import React from 'react';
import { socialLinks } from '../../config/socialLinksConfig';

export function SocialLinks() {
  return (
    <div className="social-links-wrapper mb-4 d-flex justify-content-center flex-wrap">
      {socialLinks.map((s, idx) => (
        <a
          key={idx}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link-item"
        >
          <i className={s.iconClass} />
          <span>{s.name}</span>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
