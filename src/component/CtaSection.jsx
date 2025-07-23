import WhatsApp from "./icons/WhatsApp";
import Curriculum from '../../public/Curriculum Cv.pdf'

export default function CtaSection() {
  return (
    <section id="contacto" className="scroll-mt-28 text-white pt-24 text-center px-6">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        ¿Buscas un desarrollador comprometido <br /> con el éxito de tu proyecto?
      </h2>
      <p className="text-gray-300 text-lg mb-10">
        Me adapto fácilmente a equipos, flujos ágiles y nuevas tecnologías. <br />
Si buscas alguien que aporte más que código, ¡hablemos!
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Botón con fondo degradado */}
        <a
          href="#contacto"
          className="flex gap-2 items-center px-6 py-3 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-violet-500 to-pink-500 shadow-md hover:scale-105 transition-transform"
        >
          <WhatsApp/> Contáctame
        </a>

        {/* Botón con borde degradado */}
        <a
          href={Curriculum}
          download
          className="relative px-6 py-3 text-lg font-semibold rounded-full text-white border hover:scale-105 transition-transform"
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
}
