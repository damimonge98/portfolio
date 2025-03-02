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
            <h3>SECCIONES</h3>
            <a href=".banner">INICIO</a>
            <a href="#work-mosaic">SERVICIOS</a>
            <a href="#about-us">SOBRE NOSOTROS</a>
            <a href="https://wa.me/3424732022">CONTACTO</a>
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
      <div className="footer-credits">
                 <p>Dami estuvo aquí ... 👨‍💻🚀</p>
      </div> 
    </footer>
    
  );
}

export default Footer;
