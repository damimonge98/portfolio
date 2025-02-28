import React from 'react';
import '../css/Services.css'; // Importamos el archivo CSS externo

const WorkMosaic = ({ images }) => {
    return (
        <section id="work-mosaic">
            <h2>SERVICIOS</h2>
            <div className="grid-mosaic">
                {images.slice(0, 9).map((image, index) => (
                    <div className="grid-item" key={index}>
                        <img src={image.src} alt={image.alt} loading="lazy"></img>
                        <div className="card-content">
                            <h3 className="card-title">{image.title}</h3>
                            <p className="card-description">{image.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkMosaic;
