import React, { useEffect, useState } from 'react';
import Cv from './icons/Cv';
import Home from './icons/Home';
import WhatsApp from './icons/WhatsApp';
import Certificate from './icons/Certificate';
import Check from './icons/Check';
import Curriculum from '../../public/Curriculum.pdf'
import Tools from './icons/tools';

export default function Header() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  // Cambiar fondo al hacer scroll
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);

  // Observador de sección activa
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      root: null,
      threshold: 0.6, // porcentaje visible para activarse
      rootMargin: '-30% 0px -30% 0px', // activa cuando está en el centro
    }
  );

  sections.forEach(section => observer.observe(section));

  return () => {
    window.removeEventListener('scroll', handleScroll);
    sections.forEach(section => observer.unobserve(section));
  };
}, []);
  return (
    <header className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-evenly items-center transition-all duration-300 ${scrolled ? 'bg-transparent backdrop-blur-lg shadow-md' : 'bg-transparent backdrop-blur'}`}>
      {/* Nombre del sitio */}
      <div className="flex items-center gap-2">
        <h1 className="font-black text-2xl md:text-3xl">PORTAFOLIO</h1>
      </div>

      {/* Navegación */}
      <ul className="hidden md:flex gap-6 text-sm font-semibold px-5 py-3 rounded-full ">
        <li className={`${activeSection === 'inicio' ? 'text-violet-500 border-b-2 border-violet-500' : 'hover:text-violet-600'}`}>
          <a href="#inicio" className="flex items-center gap-2">
            <Home /> INICIO
          </a>
        </li>
        <li className={`${activeSection === 'skills' ? 'text-violet-500 border-b-2 border-violet-500' : 'hover:text-violet-600'}`}>
          <a href="#skills" className="flex items-center gap-2">
            <Tools/> TECNOLOGIAS
          </a>
        </li>
        <li className={`${activeSection === 'proyectos' ? 'text-violet-500 border-b-2 border-violet-500' : 'hover:text-violet-600'}`}>
          <a href="#proyectos" className="flex items-center gap-2">
            <Check /> PROYECTOS
          </a>
        </li>
        <li className={`${activeSection === 'contacto' ? 'text-violet-500 border-b-2 border-violet-500' : 'hover:text-violet-600'}`}>
          <a href="#contacto" className="flex items-center gap-2">
            <WhatsApp /> CONTACTO
          </a>
        </li>
      </ul>

      {/* Botón CV */}
      <a href={Curriculum} download className="border border-violet-900 p-2 rounded-xl bg-violet-600 text-white flex items-center gap-2 hover:scale-105 transition text-sm">
        <Cv /> Descargar CV
      </a>
    </header>
  );
}
