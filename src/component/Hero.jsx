import WhatsApp from "./icons/WhatsApp";
import Link from "./icons/Link";
import Github from "./icons/Github";
import Instagram from "./icons/Instagram";
import Linkedin from "./icons/Linkedin";
import Cv from "./icons/Cv";
import Curriculum from '../../public/Curriculum Cv.pdf'

export default function Hero() {
    return (
            <section id="inicio" className="scroll-mt-28">
                <div className="Hero_Parrafo pl-5 font-black flex items-center mt-28 flex-col gap-2 h-[60vh]">
                    <h2 className="text-6xl md:text-7xl mb-6 text-shadow text-center">
                        Desarrollador<br />
                        <span className="text-violet-700 text-shadow-lg">Full Stack</span>
                    </h2>
                    <span className="text-gray-400 text-lg max-w-2xl text-center">
                        Creación de aplicaciones web dinámicas, eficientes e intuitivas para ofrecer excelencia digital.
                    </span>

                    <div className="flex flex-wrap justify-center gap-3 my-4">
                        <span className="p-2 border-2 border-gray-500 rounded-full text-sm text-gray-400">JavaScript</span>
                        <span className="p-2 border-2 border-gray-500 rounded-full text-sm text-gray-400">TailwindCSS</span>
                        <span className="p-2 border-2 border-gray-500 rounded-full text-sm text-gray-400">React</span>
                        <span className="p-2 border-2 border-gray-500 rounded-full text-sm text-gray-400">Node.Js</span>
                        <span className="p-2 border-2 border-gray-500 rounded-full text-sm text-gray-400">Firebase</span>
                        <span className="p-2 border-2 border-gray-500 rounded-full text-sm text-gray-400">Supabase</span>
                    </div>

                    <div className="botones flex gap-8">
                        <a href="#proyectos" className="bg-gradient-to-r from-violet-600 to-violet-400 text-white px-5 py-2 rounded-xl text-xl shadow-lg flex gap-2 items-center hover:scale-110 transition-all cursor-pointer">
                            <Link/> Proyectos
                        </a>
                        <a href={Curriculum} download className="px-3 py-2 rounded-xl border text-xl flex gap-2 items-center hover:scale-110 hover:text-violet-500 transition-all cursor-pointer">
                            <Cv /> Curriculum
                        </a>
                    </div>

                </div>

                <div className="Hero_Imagen">{/* Aquí podrías poner una imagen o avatar si deseas */}</div>
            </section>
    );
}
