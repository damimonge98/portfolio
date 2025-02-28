import React, { useState, useEffect } from 'react';
import '../css/Banner.css';


const Banner = () => {
    const [isResponsive, setIsResponsive] = useState(false);

    useEffect(() => {
        // Función para verificar el ancho de la pantalla
        const handleResize = () => {
            setIsResponsive(window.innerWidth < 768); // Cambia 768 por el ancho deseado
        };

        // Agregar un listener para el evento de cambio de tamaño
        window.addEventListener('resize', handleResize);

        // Llamar la función inicialmente para establecer el estado correcto
        handleResize();

        // Limpiar el listener cuando se desmonte el componente
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="banner">
            <img
                rel="preload"
                src={
                    isResponsive
                        ? `${process.env.PUBLIC_URL}/img/banner_responsive.webp`
                        : `${process.env.PUBLIC_URL}/img/banner.webp`
                }
                alt="Banner"
            />
        </div>
    );
};

export default Banner;
