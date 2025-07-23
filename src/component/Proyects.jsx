import Miniatura_CCFM2 from '../../public/Markud/Miniatura CCFM2.jpg';
import Miniatura_Motulmotos from '../../public/Markud/PAGEMOTULMOTOS.JPG';
import Miniatura_veterinaria from '../../public/Markud/848shots_so.png';
import Miniatura_Ecommerce from '../../public/Markud/Miniatura_Ecommerce-Motulmotos.png';
import Miniatura_Tenicafe from '../../public/Markud/Miniatura_TecniCafe.png';

import Link from './icons/Link';
import Github from './icons/Github';

const proyectos = [
  {
    titulo: 'CCFM2',
    descripcion: 'Landing page moderna para un centro de formación musical.',
    imagen: Miniatura_CCFM2,
    tags: ['React', 'Tailwind'],
  },
  {
    titulo: 'Motulmotos',
    descripcion: 'Sitio web institucional para taller y repuestos de motos.',
    imagen: Miniatura_Motulmotos,
    tags: ['React', 'Tailwind'],
  },
  {
    titulo: 'Veterinaria',
    descripcion: 'Web informativa para servicios veterinarios y agendamiento.',
    imagen: Miniatura_veterinaria,
    tags: ['Html','Css','JavaScript'],
  },
  {
    titulo: 'Ecommerce Motulmotos',
    descripcion: 'Tienda online funcional conectada con WooCommerce.',
    imagen: Miniatura_Ecommerce,
    link: 'https://motulmotostore.com/tienda/',
    tags: ['WordPress', 'WooCommerce','Hostinger'],
  },
  {
    titulo: 'Tecnicafé',
    descripcion: 'Landing moderna para empresa de café con contacto directo.',
    imagen: Miniatura_Tenicafe,
    link: 'https://tecnicafe.vercel.app/',
    tags: ['React', 'Tailwind','Vite'],
  },
  {
    titulo: 'Inventary Book',
    descripcion: 'Landing moderna para empresa de café con contacto directo.',
    imagen: Miniatura_Tenicafe,
    link: 'https://tecnicafe.vercel.app/',
    tags: ['React', 'Tailwind'],
  },
];

export default function Proyects() {
  return (
    <section id="proyectos" className="scroll-mt-28 py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center text-white mb-16">Proyectos Web</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {proyectos.map((proyecto, index) => (
          <ProjectCard key={index} {...proyecto} />
        ))}
      </div>

      {/* Botón Ver más */}
        <div className="mt-10 flex justify-center">
        <a
            href="https://github.com/OsneiverC" // reemplaza por tu GitHub real
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-lg transition text-sm flex items-center gap-2"
        >
            <Github /> Ver más proyectos
        </a>
        </div>
    </section>
  );
}

function ProjectCard({ titulo, descripcion, imagen, link, tags }) {
  return (
    <div className="bg-[#121018] rounded-xl overflow-hidden shadow-lg hover:shadow-violet-700 transition-all duration-300 flex flex-col">
      <figure>
        <img src={imagen} alt={titulo} className="w-full h-56 object-cover" />
      </figure>
      <div className="p-5 flex flex-col justify-between flex-1">
        <h3 className="text-2xl font-bold text-white mb-2">{titulo}</h3>
        <p className="text-sm text-gray-400 mb-4">{descripcion}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-violet-800 text-violet-200 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between gap-3 mt-auto">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              <Link /> Visitar
            </a>
          ) : (
            <button className="flex items-center gap-2 border border-violet-500 text-violet-300 px-4 py-2 rounded-lg text-sm hover:bg-violet-800 transition">
              <Link /> Visitar
            </button>
          )}
          <button className="flex items-center gap-2 border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition">
            <Github /> Repo
          </button>
        </div>
      </div>
    </div>
  );
}
