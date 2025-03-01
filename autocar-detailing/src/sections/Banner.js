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

        // Precargar ambas imágenes para mejorar el LCP
        const preloadImageResponsive = document.createElement('link');
        preloadImageResponsive.rel = 'preload';
        preloadImageResponsive.as = 'image';
        preloadImageResponsive.href = `${process.env.PUBLIC_URL}/img/banner_responsive.webp`;
        document.head.appendChild(preloadImageResponsive);

        const preloadImageDesktop = document.createElement('link');
        preloadImageDesktop.rel = 'preload';
        preloadImageDesktop.as = 'image';
        preloadImageDesktop.href = `${process.env.PUBLIC_URL}/img/banner.webp`;
        document.head.appendChild(preloadImageDesktop);

        // Limpiar el listener y eliminar los preload al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
            document.head.removeChild(preloadImageResponsive); // Eliminar el preload responsive
            document.head.removeChild(preloadImageDesktop);   // Eliminar el preload desktop
        };
    }, []);

    return (
        <div className="banner">
            <img
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
