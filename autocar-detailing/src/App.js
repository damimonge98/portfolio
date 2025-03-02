
import Header from './components/Header';
import Banner from './sections/Banner';
import Services from './sections/Services';
import AboutUs from './sections/AboutUs';
import Footer from './components/Footer';
import { useEffect } from 'react';

const images = [
  { src: `${process.env.PUBLIC_URL}/img/foto1.webp`, 
    alt: 'Limpieza de tapizados', 
    title: "LIMPIEZA DE TAPIZADOS / RESTAURACIÓN DE PLÁSTICOS",
    description: ""
  },
  { src: `${process.env.PUBLIC_URL}/img/foto2.webp`, 
    alt: 'Púlidos, lustrados y tratamientos acrilicos', 
    title: "PULIDOS / LUSTRADOS / TRATAMIENTOS ÁCRILICOS"},

  { 
    src: `${process.env.PUBLIC_URL}/img/foto3.webp`, 
    alt: 'Lavados', 
    title: "LAVADOS A DETALLE / LAVADOS DE MOTOR"
  },

  { 
    src: `${process.env.PUBLIC_URL}/img/foto4.webp`, 
    alt: 'Cambios de aceite', 
    title: "MÉCANICA LIGERA / CAMBIOS DE ACEITE Y FILTROS"
  }
  // Agrega más imágenes según sea necesario
];

function App() {
  useEffect(() => {
    // Preload de la imagen del banner
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = `${process.env.PUBLIC_URL}/img/banner.svg`;
    link.as = 'image';
    document.head.appendChild(link);

    return () => document.head.removeChild(link);
  }, []);

  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Services images={images} />
     <AboutUs/>
     <Footer/>
    </div>
  );
}

export default App;
