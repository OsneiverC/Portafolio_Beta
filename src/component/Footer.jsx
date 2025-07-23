import Github from "./icons/Github";
import Instagram from "./icons/Instagram";
import Linkedin from "./icons/Linkedin";

export default function Footer() {
  return (
    <footer className=" text-white pt-10 pb-6 relative mt-32 overflow-hidden">
      {/* Curva superior en violeta suave */}
      <div className="absolute -top-12 left-0 w-full h-12 bg-violet-600 rounded-b-[50%] opacity-40 z-0"></div>

      <div className="flex flex-col items-center gap-4 z-10 relative">
        {/* Redes sociales */}
        <div className="flex gap-6 text-2xl">
          <a href="#" className="hover:text-violet-500 transition-colors border-2 border-white p-2 rounded-xl"> <Github/></a>
          <a href="#" className="hover:text-violet-500 transition-colors border-2 border-white p-2 rounded-xl"> <Instagram /></a>
          <a href="#" className="hover:text-violet-500 transition-colors border-2 border-white p-2 rounded-xl"> <Linkedin /></a>
          
                       
                        
        </div>

        {/* Enlaces de navegación */}
        <div className="flex flex-wrap justify-center gap-4 text-sm underline text-white">
          <a href="#presentacion" className="hover:text-violet-500">Presentación</a>
          <a href="#proyectos" className="hover:text-violet-500">Proyectos</a>
          <a href="#experiencia" className="hover:text-violet-500">Experiencia</a>
          <a href="#contacto" className="hover:text-violet-500">Contacto</a>
        </div>

        {/* Derechos reservados */}
        <p className="text-xs mt-2 text-gray-400">@2024 | Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
