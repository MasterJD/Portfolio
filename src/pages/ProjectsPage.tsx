import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ProjectModal from '../components/ProjectModal'
import { projects, techIconMap, type Project } from '../data/projects'
import projectContent from '../data/projects-content.json'

function getTechIconMarkup(tech: string, sizeClass: string, extraClasses = '') {
  const entry = techIconMap[tech]
  if (entry?.src) {
    const classes = `${sizeClass} ${entry.className || ''} ${extraClasses}`.trim()
    return `<img src="${entry.src}" alt="${tech} icon" class="${classes}">`
  }
  const fc = sizeClass.includes('w-') ? 'text-base' : sizeClass
  return `<span class="material-symbols-outlined ${fc} ${extraClasses}">code</span>`
}

export default function ProjectsPage() {
  const { lang } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const content = projectContent[lang] || projectContent.en
  const plannedProjects = content.plannedProjects || []
  const plannedProjectsTitle = content.plannedProjectsTitle || 'Planned Personal Projects'

  const getProjectCopy = (projectId: number) =>
    content.projects.find(p => p.id === projectId) || null

  const getPlannedProjectsContent = () => content

  return (
    <>
      <div className="w-full mt-8">
        <div className="relative overflow-hidden bg-white dark:bg-black border-4 border-black/10 dark:border-white/10 rounded-none min-h-[200px] flex items-end justify-center">
          <div
            className="absolute inset-0 opacity-40 bg-repeat-x bg-bottom h-full w-full grayscale contrast-125"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuePnd2067DL01jRoo6YVEwQjjgsTk4A57Yq_LKkYziFpAeF7W8ujdbjVcRA68ap2U-ZuGV6OHPTRPcQ6PlqGuHlZU15biNLYnnFOAAplBZYYTyqUuaCDn46-u2Hn7NvPWQl9qMOp1rMSU-og45Nnphm5yRl1Kn1UTyhEIHEvDWL6V09XveCVbbnwX3eJG-bmXVTwZlGT--TWrs90EppTEpfiWt1CLhicaO33VXlggo7d8Ein_oJz40P_7du5nivqy9J7zixslFOE")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent" />
          <div className="relative z-10 p-8 text-center">
            <p className="text-black/70 dark:text-white/70 tracking-wider text-base font-medium leading-relaxed max-w-xl mx-auto">
              {lang === 'en'
                ? "Here's a selection of projects I've worked on, showcasing different technologies and problem-solving approaches."
                : 'Aquí hay una selección de proyectos en los que he trabajado, mostrando diferentes tecnologías y enfoques de resolución de problemas.'}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full py-8">
        <h1 className="text-black dark:text-white tracking-widest text-xl font-bold leading-tight text-center uppercase">
          {lang === 'en' ? '< My Projects Gallery />' : '< Galería de Proyectos />'}
        </h1>
      </div>

      <div className="w-full pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
          {projects.map(project => {
            const copy = getProjectCopy(project.id)
            const title = copy?.title || 'Project'
            const previewIcons = project.technologies
              .slice(0, 5)
              .map(tech => getTechIconMarkup(tech, 'w-5 h-5'))
              .join('')
            const imageMarkup = project.images.length > 0
              ? `<img src="${project.images[0]}" alt="${title} preview" class="w-full h-full object-cover">`
              : `<span class="material-symbols-outlined text-6xl text-black/80 dark:text-white/80 pixelated">${project.icon}</span>`

            return (
              <div
                key={project.id}
                className="group relative bg-gray-100 dark:bg-[#1c1c1c] border-4 border-black dark:border-white flex flex-col items-center p-6 transition-all duration-75 cartridge-hover cursor-pointer aspect-[3/4] justify-between"
                onClick={() => setSelectedProject(project)}
              >
                <div className="w-full h-2/3 border-2 border-black/40 dark:border-white/40 bg-white dark:bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-500 to-transparent" />
                  <div dangerouslySetInnerHTML={{ __html: imageMarkup }} />
                </div>
                <div className="w-full text-center mt-3">
                  <h2 className="text-black dark:text-white text-lg font-bold leading-tight uppercase tracking-tighter mb-2">{title}</h2>
                  <div className="flex flex-wrap justify-center gap-2 mb-3" dangerouslySetInnerHTML={{ __html: previewIcons }} />
                  <div className="h-1 w-full bg-black/20 dark:bg-white/20 rounded-full mt-3" />
                </div>
                <div className="tooltip-pixel absolute -top-12 left-1/2 -translate-x-1/2 hidden bg-black dark:bg-white text-white dark:text-black px-3 py-2 border-2 border-black dark:border-white whitespace-nowrap items-center gap-3 z-20">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs font-bold">{tech}</span>
                  ))}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-black dark:bg-white border-b-2 border-r-2 border-black dark:border-white rotate-45" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="px-4 pb-16">
        <div className="bg-white/80 dark:bg-black/80 border-2 border-black dark:border-white p-6 font-mono relative">
          <div className="absolute top-0 left-0 bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 text-[10px] uppercase font-bold">
            Terminal_Output
          </div>
          <div className="mt-3">
            <h2 className="text-black dark:text-white text-base font-bold uppercase tracking-widest mb-4">
              {plannedProjectsTitle}
            </h2>
            <ul className="flex flex-col gap-2 text-black/80 dark:text-white/80 text-sm leading-relaxed">
              {plannedProjects.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary font-bold">&gt;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
