import Logo_React from '../../public/React.webp'
import Logo_JavaScript from '../../public/JavaScript-logo.webp'
import Logo_TailwindCss from '../../public/Tailwind_CSS_Logo.webp'
import Logo_Firebase from '../../public/Logo_firebase.webp'
import Logo_Supabase from '../../public/Supabase_logo.webp'
import Logo_Git from '../../public/Git_Logo.webp'
import Logo_Boostrap from '../../public/Bootstrap_Logo.webp'
import Logo_Nodejs from '../../public/Nodejs-logo.webp'
import Logo_Notion from '../../public/notion.webp'
import Logo_Mysql from '../../public/Mysql_Logo.webp'

const Skills = () => {
  return (
    <section id='skills' className="scroll-mt-28 mt-20 text-center px-4">
      <h3 className="font-bold text-5xl mb-10">Tecnologías</h3>

      <div className="flex flex-wrap justify-center gap-8 max-w-screen-xl mx-auto px-4">
        {[
          { logo: Logo_JavaScript, name: 'JavaScript' },
          { logo: Logo_React, name: 'React' },
          { logo: Logo_TailwindCss, name: 'TailwindCSS' },
          { logo: Logo_Firebase, name: 'Firebase' },
          { logo: Logo_Supabase, name: 'Supabase' },
          { logo: Logo_Git, name: 'Git' },
          { logo: Logo_Boostrap, name: 'Bootstrap' },
          { logo: Logo_Nodejs, name: 'Node.js' },
          { logo: Logo_Notion, name: 'Notion' },
          { logo: Logo_Mysql, name: 'Mysql' }

        ].map((tech, i) => (
          <div
            key={i}
            className="w-40 md:w-48 p-4 flex flex-col items-center rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            <figure className="w-20 h-20 mb-2 flex justify-center items-center">
              <img src={tech.logo} alt={tech.name} draggable="false" className="w-full object-contain" />
            </figure>
            <span className="text-sm font-semibold text-gray-200">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
