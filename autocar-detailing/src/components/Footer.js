// Footer.js
import React from 'react';
import '../css/Footer.css'; // Importa los estilos

function Footer() {
  return (
    <footer className="footer">
      <div className="cover_footer">
        <div className="footer-logo">
          <img className="logo" src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" />
        </div>

          <nav className="footer-nav">
            <h3>SITIOS</h3>
            <a href="#inicio">INICIO</a>
            <a href="#aboutus">SOBRE NOSOTROS</a>
            <a href="#contact">CONTACTO</a>
          </nav>
          <div className="footer-social">
            <h3></h3>
            <a href="https://wa.me/3424732022" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/img/wsp.png`} alt="WhatsApp" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/autocardetailing970/" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/img/ig.png`} alt="WhatsApp" className="social-icon" />
            </a>
            {/* <a href="https://www.instagram.com/tu-instagram" target="_blank" rel="noopener noreferrer">
              <img src="/ruta-icono-instagram.png" alt="Instagram" className="social-icon" />
            </a> */}
          </div>
        </div>

    </footer>
  );
}

export default Footer;
