import React from 'react';

export default function Profile() {
  return (
    <section className="profile-page">
      <div className="inner">
        <header className="profile-hero">
          <h1 className="hero-name">CONSTANZA DÍAZ</h1>
          <p className="profile-lead">Diseñadora visual que equilibra método y sensibilidad. Exploro geometría, contraste y composición para transformar ideas en sistemas visuales claros, coherentes y con identidad, intención y carácter.</p>
        </header>

        <div className="profile-photo-wrap">
          <img src="/Imagenes/perfil/image.jpg" alt="Constanza Díaz" className="profile-photo" />
        </div>

        <div className="profile-grid">
          <div className="profile-left" />
          <div className="profile-right">
            <h2 className="section-title">SERVICIOS</h2>
            <ul className="services">
              <li>IDENTIDAD VISUAL</li>
              <li>BRANDING</li>
              <li>DISEÑO EDITORIAL</li>
              <li>DISEÑO DIGITAL / UI</li>
              <li>DIRECCIÓN DE ARTE</li>
              <li>COMPOSICIÓN Y RETOQUE</li>
              <li>SISTEMAS GRÁFICOS</li>
              <li>FOTOGRAFÍA</li>
            </ul>
          </div>
        </div>

        <div className="profile-contact-grid">
          <div className="contact-left">
            <h2 className="section-title">CREACIÓN</h2>
            <p className="contact-lead">Transformamos ideas en experiencias visuales únicas, donde cada detalle refleja creatividad, intención y la esencia de tu proyecto.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
