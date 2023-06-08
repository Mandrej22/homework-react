import React from 'react'
import '../services/services.css'
import ServicesDesign from '../../assets/svgs/Group 1045.svg'

function Services() {
  const paragraphs = {
    paragraph1: 'We are one of the few companies which create their own products, and we are proud to mention SHIFT and eTenderi.',
    paragraph2: 'We make software according to your wishes and needs. Our team of dedicated programmers and IT professionals will create an easy-to-use solution for you, with unique user experience and attractive design.',
    paragraph3: 'So far we have met the requirements of the following clients: Agency for electronical communications and postal services, Societe Generale bank, Ministry of Economy, Ministry of Justice, Volcano and others.',
  };

  return (
    <section className="services">
      <h1>Software development</h1>
      <div className="services-card">
        <img src={ServicesDesign} alt="design" width="675" height="450"/>
        <img src=""/>
        {Object.values(paragraphs).map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </section>
  );
}

export default Services