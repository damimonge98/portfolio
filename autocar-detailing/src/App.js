import Header from './components/Header';
import Banner from './sections/Banner';
import Services from './sections/Services';
import AboutUs from './sections/AboutUs';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

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
    title: "MÉCANICA LIGERA"
  }
  // Agrega más imágenes según sea necesario
];

function App() {
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowServices(true);
    }, 500); // Ajusta el tiempo según sea necesario
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Header/>
      <Banner/>
      {showServices && <Services images={images} />}
      {showServices && <AboutUs/>}
      {showServices && <Footer/>}
    </div>
  );
}

export default App;
