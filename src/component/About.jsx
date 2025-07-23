import Foto_Perfil from '../../public/51908.jpg'

export default function About() {
  return (
    <section id="inicio" className="text-white py-20 px-6 relative overflow-hidden">
      {/* Texto superior */}
          <h4 className="text-violet-400 font-bold text-5xl text-center">Acerca de mí</h4>
          <p className="text-gray-300 text-center">Transformando conceptos en soluciones digitales impactantes y fluidas.</p>
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Texto principal */}
        <div className="max-w-xl flex flex-col gap-6">

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            <span className="text-violet-500">Hola soy</span><br />
            <span className="text-white">Osneiver Cardenas</span>
          </h1>

          <p className="text-gray-300 text-lg">
            Desarrollador web con pasión por el código bien hecho y las interfaces que no hacen llorar al usuario (ni al programador) Me especializo en JavaScript y React, creando sitios web modernos, funcionales y responsivos.preferiblemente con buen diseño, buen rendimiento y, por supuesto, un buen ☕café..
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="/CV.pdf" download className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow-lg">
               Descargar CV
            </a>
            <a href="#proyectos" className="border border-violet-500 hover:bg-violet-500 hover:text-white text-violet-400 px-4 py-2 rounded-md flex items-center gap-2">
               Ver proyectos
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-violet-500 shadow-lg shadow-violet-700/40">
            <img src={Foto_Perfil} alt="Osneiver Cardenas" className="object-cover w-full h-full" />
          </div>
          <div className="absolute top-[-20%] left-[-20%] w-[120%] h-[120%] rounded-full bg-violet-500 opacity-20 blur-3xl z-[-1]"></div>
        </div>
      </div>

      {/* Tarjetas inferiores */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
        <div className="bg-[#14142B] rounded-2xl p-6 text-white shadow-md hover:shadow-violet-700/20 transition">
          <div className="flex items-center gap-4">
            {/* <div className="text-3xl"><HiOutlineDocumentText /></div> */}
            <div>
              <p className="text-sm text-gray-400">PROYECTOS TOTALES</p>
              <h3 className="text-3xl font-bold">14</h3>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Soluciones web innovadoras diseñadas</p>
        </div>

        <div className="bg-[#14142B] rounded-2xl p-6 text-white shadow-md hover:shadow-violet-700/20 transition">
          <div className="flex items-center gap-4">
            {/* <div className="text-3xl"><BsFillBookmarkCheckFill /></div> */}
            <div>
              <p className="text-sm text-gray-400">CERTIFICADOS</p>
              <h3 className="text-3xl font-bold">6</h3>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Competencias profesionales validadas</p>
        </div>

        <div className="bg-[#14142B] rounded-2xl p-6 text-white shadow-md hover:shadow-violet-700/20 transition">
          <div className="flex items-center gap-4">
            {/* <div className="text-3xl"><HiOutlineGlobeAlt /></div> */}
            <div>
              <p className="text-sm text-gray-400">AÑOS DE EXPERIENCIA</p>
              <h3 className="text-3xl font-bold">3</h3>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Viaje de aprendizaje continuo</p>
        </div>
      </div>
    </section>
  )
}
