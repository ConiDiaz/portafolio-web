import React from 'react';

export default function Contact() {
  const handleEmailClick = () => {
    navigator.clipboard.writeText('c.diazolg@gmail.com');
    alert('Correo copiado al portapapeles');
  };

  return (
    <section className="contact-page">
      <div className="inner">
        <div className="contact-grid">
          
          <div className="contact-left">
            <h1 className="contact-title">CONTACTO</h1>
          </div>

          <p className="contact-lead">Si quieres colaborar o tienes un proyecto en mente, puedes escribirme.</p>
          
          <div className="contact-right">
            <div className="contact-links">
              <a 
                href="https://www.behance.net/" 
                target="_blank"  
                rel="noopener noreferrer"  
              >
                BEHANCE
              </a>
              
              <a 
                href="https://www.instagram.com/lymxrxncix" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                INSTAGRAM
              </a>
              
              <div 
                onClick={handleEmailClick} 
                style={{cursor: 'pointer'}}  
              >
                C.DIAZOLG@GMAIL.COM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}