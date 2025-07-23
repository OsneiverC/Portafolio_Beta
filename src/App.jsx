import About from './component/About';
import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';
import Proyects from './component/Proyects';
import Skills from './component/Skills';
import CtaSection from './component/CtaSection';
import Github from './component/icons/Github';
import Instagram from './component/icons/Instagram';
import Linkedin from './component/icons/Linkedin';
import Trayectoria from './component/Experiencia';
import './app.css'
import Experiencia from './component/Experiencia';

// Opcional: Asegúrate de tener FontAwesome si usas esos iconos
// También puedes usar SVGs directamente o bibliotecas como react-icons

function App() {
  return (
    <>
      <div className='relative overflow-hidden'>
        {/* Circulos de fondo decorativos */}
        <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-violet-500 opacity-40 rounded-full blur-3xl z-[-1]" />
        <div className="absolute top-[50%] left-[-200px] w-72 h-72 bg-violet-500 opacity-40 rounded-full blur-3xl z-[-1]" />
        <div className="absolute bottom-[-80px] right-[-100px] w-96 h-96 bg-violet-700 opacity-30 rounded-full blur-3xl z-[-1]" />

        {/* Redes sociales a la izquierda */}
        <div className="hidden md:fixed left-6 bottom-0 md:flex flex-col items-center gap-5 z-50 text-white">
          <a href="#" className="hover:text-violet-400"><Github /> </a>
          <a href="#" className="hover:text-violet-400"><Instagram/></a>
          <a href="#" className="hover:text-violet-400"><Linkedin/></a>
          <div className="w-px h-24 bg-violet-400 mt-3" />
        </div>

        {/* Correo a la derecha */}
        <div className="hidden fixed right-6 bottom-0 md:flex flex-col items-center z-50 text-white">
          <p className="text-sm text-violet-300 tracking-widest"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
            Osneiver2020gmail.com
          </p>
          <div className="w-px h-24 bg-violet-400 mt-2" />
        </div>

        {/* Contenido del portafolio */}
        <Header />
        <Hero />
        <About />
        <Skills />
        <Proyects />
        <Experiencia/>
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
