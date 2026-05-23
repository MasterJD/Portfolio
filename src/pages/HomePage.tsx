import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export default function HomePage() {
  const { lang } = useLanguage()

  return (
    <>
      <div className="@container">
        <div className="flex flex-col gap-10 px-4 py-10 items-center justify-center">
          <div className="flex flex-col gap-8 w-full max-w-2xl">
            <div className="bg-white/80 dark:bg-black/80 border-2 border-black dark:border-white p-6 font-mono relative">
              <div className="absolute top-0 left-0 bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 text-[10px] uppercase font-bold">
                Terminal_Output
              </div>
              <div className="flex flex-col gap-4 mt-2">
                <p className="text-primary text-sm font-bold">$ system_boot --mode=ai_engineer</p>
                <h1 className="text-black dark:text-white text-3xl font-black leading-tight tracking-tight uppercase">
                  {lang === 'en' ? (
                    <span>Hello, I'm an <span className="text-primary">AI Engineer</span> & Full-Stack Developer.</span>
                  ) : (
                    <span>Hola, soy un <span className="text-primary">Ingeniero de IA</span> y Desarrollador Full-Stack.</span>
                  )}
                </h1>
                <p className="text-black/80 dark:text-white/80 text-base leading-relaxed">
                  {lang === 'en' ? (
                    <>
                      &gt; MSc in Software Design & Development with Emphasis on AI and Cloud Software Architecture.<br />
                      &gt; Specializing in AI-driven development, LLMs, cloud architectures, and building intelligent systems across the full software lifecycle.
                    </>
                  ) : (
                    <>
                      &gt; Máster en Diseño y Desarrollo de Software con Énfasis en IA y Arquitectura de Software en la Nube.<br />
                      &gt; Especializado en desarrollo impulsado por IA, LLMs, arquitecturas cloud, y construcción de sistemas inteligentes a lo largo del ciclo de vida del software.
                    </>
                  )}
                  <span className="terminal-cursor" />
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/projects"
                className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest border-b-4 border-r-4 border-black dark:border-white active:translate-y-1 active:border-b-0 transition-all"
              >
                {lang === 'en' ? 'View Projects' : 'Ver Proyectos'}
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent text-black dark:text-white font-bold uppercase tracking-widest border-4 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                {lang === 'en' ? 'Contact' : 'Contactar'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-black dark:text-white text-2xl font-bold leading-tight tracking-widest px-4 pb-6 pt-5 uppercase border-l-8 border-primary">
          // {lang === 'en' ? 'Highlights' : 'Destacados'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-4">
          {[
            { icon: 'psychology', title: 'AI', desc: 'LLMs, APIs & Models' },
            { icon: 'code', title: 'Full Stack Development', desc: 'Frontend & Backend Systems' },
            { icon: 'view_timeline', title: 'Software Lifecycle', desc: 'Design, Test & Maintain' },
            { icon: 'cloud', title: 'Software Cloud Architecture', desc: 'Scalable & Resilient Systems' },
            { icon: 'palette', title: 'Design Choices', desc: 'Architecture & UX Decisions' },
          ].map(item => (
            <div
              key={item.icon}
              className="flex flex-col gap-4 border-4 border-black dark:border-white bg-white/40 dark:bg-black/40 p-6 hover:bg-primary/20 transition-all group"
            >
              <div className="text-primary group-hover:text-black dark:group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-black dark:text-white text-lg font-bold uppercase">{item.title}</h2>
                <p className="text-black/60 dark:text-white/60 text-sm font-normal leading-normal uppercase">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-20 px-4">
        <div className="bg-black dark:bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-4 border-black dark:border-white">
          <div className="flex flex-col gap-2">
            <h3 className="text-white dark:text-black text-2xl font-black uppercase tracking-tighter">
              {lang === 'en' ? "Let's build something great" : 'Construyamos algo genial'}
            </h3>
            <p className="text-white/70 dark:text-black/70 font-bold uppercase text-sm">
              {lang === 'en' ? 'Available for new opportunities and collaborations.' : 'Disponible para nuevas oportunidades y colaboraciones.'}
            </p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <Link
              to="/contact"
              className="flex-1 md:flex-none px-10 py-4 bg-primary text-white font-bold uppercase hover:bg-primary/80 transition-all text-center"
            >
              {lang === 'en' ? 'Contact' : 'Contacto'}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
