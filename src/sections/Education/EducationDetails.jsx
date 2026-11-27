import React from 'react';

export function EducationDetails() {
  const schoolLogos = [
    { src: 'https://admissions.ua.edu.ph/wp-content/uploads/2017/09/logo.png', alt: 'University of the Assumption' },
    { src: 'https://snc.edu.ph/img/logo.png', alt: 'SNC' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73kVjMAXIFckRLB7rzkR9HhFrsI6xwbrzbQ&s', alt: 'School' },
    { src: 'https://www.arellano.edu.ph/images/Arellano_University_New_Logo.png', alt: 'Arellano University' },
    { src: 'https://shsmarianomarcosmemorialhs.unaux.com/wp-content/uploads/2021/06/cropped-logo2.png', alt: 'Mariano Marcos' }
  ];

  return (
    <div className="education-details">
      <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#222' }}>
        Incoming 3rd year IT student at the <strong>University of the Assumption</strong>, where I am developing
        high-level proficiencies in enterprise software engineering, relational database management, and computer networking.
      </p>

      <div className="school-logos-container my-4">
        <div className="school-logos">
          {schoolLogos.map((s, idx) => (
            <img key={idx} src={s.src} alt={s.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationDetails;
