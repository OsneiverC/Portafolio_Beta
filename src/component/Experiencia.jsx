import Github from "./icons/Github";
import Work from "./icons/Work";

const experiencia = [
  {
    cargo: 'Profesor de programacion web',
    empresa: 'Syntacti',
    fecha: 'Dic 2023 — Presente',
    descripcion:
      'En mi rol como docente en Syntacti, impartí clases de programación web a estudiantes de nivel introductorio e intermedio, enfocándome en el desarrollo de habilidades técnicas y pensamiento lógico mediante: Diseño y ejecución de planes de clase estructurados en HTML, CSS, JavaScript, Bootstrap y jQuery. Enseñanza de buenas prácticas en desarrollo web, responsive design y estructuración semántica del contenido.',
  },
  {
    cargo: 'Soporte Tecnico en Sistemas',
    empresa: 'Clinica Valledupar',
    fecha: 'May 2021 — Nov 2023',
    descripcion:
      'Durante mi tiempo en la Clínica Valledupar, brindé soporte técnico integral en sistemas, contribuyendo a la continuidad operativa de los servicios de salud mediante: Diagnóstico, mantenimiento preventivo y correctivo de equipos de cómputo, impresoras y redes internas. Instalación, configuración y actualización de software clínico y administrativo. Soporte técnico a usuarios (médicos, personal administrativo y de enfermería), resolviendo incidentes relacionados con hardware, sistemas operativos, conectividad y aplicaciones internas. Gestión y seguimiento de tickets de soporte',
  },
  {
    cargo: 'Atención al Cliente',
    empresa: 'MotulMotos',
    fecha: 'May 2020 — May 2021',
    descripcion:
      'Durante mi experiencia en el área de atención al cliente, me enfoqué en brindar un servicio ágil, empático y resolutivo, fortaleciendo la relación entre la empresa y sus usuarios. Entre mis responsabilidades destacadas: Atención presencial, telefónica y/o por canales digitales, resolviendo inquietudes, reclamos o solicitudes de manera oportuna. Manejo de bases de datos de clientes, actualizaciones de información y seguimiento a casos abiertos.',
  },
];

export default function Experiencia() {
  return (
    <section id="experiencia" className="scroll-mt-28 py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-center text-white mb-16">Experiencia</h2>

      <div className="relative border-l-2 border-violet-600 pl-6">
        {experiencia.map((exp, idx) => (
          <div key={idx} className="relative mb-12">
            {/* Icono */}
            <span className="absolute left-[-45px] top-1 bg-violet-600 text-white rounded-full p-2">
                <Work/>
            </span>

            {/* Tarjeta */}
            <div className="bg-[#121018] rounded-xl p-6 border border-gray-700 hover:shadow-violet-700 transition">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-white">{exp.cargo}</h3>
                <span className="text-sm text-gray-400">{exp.fecha}</span>
              </div>
              <p className="text-violet-400 font-medium">{exp.empresa}</p>
              <p className="text-sm text-gray-300 mt-2">{exp.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
