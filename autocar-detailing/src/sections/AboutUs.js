import React from 'react';
import '../css/AboutUs.css';

const AboutUs = () => {
    return (
        <section id="about-us">
           <div className="about-container">
           <div className="about-content">
                <img 
                    src={`${process.env.PUBLIC_URL}/img/about-us.jpg`} 
                    alt="Nuestro servicio de detailing" 
                    className="about-image"
                />
                <div className="about-description">
                    <h2>SOBRE NOSOTROS</h2>
                    <p className="about-description">
                    Desde 2019, nos especializamos en brindar servicios de detailing de alta calidad para autos y motos, combinando experiencia, dedicación y las mejores técnicas del mercado. 
                    Nuestro compromiso es ofrecerte un cuidado excepcional para tu vehículo, desde lavados rápidos y efectivos hasta tratamientos completos de detailing que restauran el brillo y la protección de cada superficie. 
                    <br/>
                    Entendemos que tu auto o moto es más que un medio de transporte; es una inversión y una parte importante de tu día a día. 
                    Por eso, estamos aquí para asegurarnos de que luzca impecable y protegido, adaptando cada servicio a tus necesidades específicas.
                    </p>    
                </div>
                
            </div>
           </div>
            

            <div className="location">
                <h3>📌 DONDE ENCONTRARNOS</h3>
                <div className="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4242.782759200408!2d-60.68006512348313!3d-31.612883505779457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9f8d1381661%3A0xad8f70c5bdd6f9be!2s%C3%81ngel%20Cassanello%20970%2C%20S3004EAN%20Santa%20Fe%20de%20la%20Vera%20Cruz%2C%20Santa%20Fe!5e1!3m2!1ses-419!2sar!4v1730754619351!5m2!1ses-419!2sar" 
                        width="600" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <p>
                    Estamos ubicados en:
                    <br />
                    Angel Casanello 972, ciudad de Santa Fe
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
