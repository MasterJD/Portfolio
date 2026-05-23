import { useEffect, useState, useCallback } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import type { Project } from '../data/projects'
import projectContent from '../data/projects-content.json'

interface Props {
  project: Project | null
  onClose: () => void
}

const techIconMap: Record<string, { src: string; className?: string }> = {
  React: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  'Node.js': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  MongoDB: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  Express: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', className: 'dark:invert' },
  'Tailwind CSS': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
}

function getTechIconMarkup(tech: string, sizeClass: string, extraClasses = '') {
  const entry = techIconMap[tech]
  if (entry?.src) {
    const classes = `${sizeClass} ${entry.className || ''} ${extraClasses}`.trim()
    return `<img src="${entry.src}" alt="${tech} icon" class="${classes}">`
  }
  const fc = sizeClass.includes('w-') ? 'text-base' : sizeClass
  return `<span class="material-symbols-outlined ${fc} ${extraClasses}">code</span>`
}

export default function ProjectModal({ project, onClose }: Props) {
  const { lang } = useLanguage()
  const [imageIndex, setImageIndex] = useState(0)

  const content = projectContent[lang] || projectContent.en
  const projectCopy = project
    ? content.projects.find(p => p.id === project.id)
    : null
  const titleText = projectCopy?.title || project?.icon || 'Project'
  const descriptionText = projectCopy?.description || ''

  const images = project?.images || []
  const hasMultiple = images.length > 1

  const nextImage = useCallback(() => {
    if (hasMultiple) setImageIndex(i => (i + 1) % images.length)
  }, [hasMultiple, images.length])

  const prevImage = useCallback(() => {
    if (hasMultiple) setImageIndex(i => (i - 1 + images.length) % images.length)
  }, [hasMultiple, images.length])

  useEffect(() => {
    setImageIndex(0)
  }, [project])

  useEffect(() => {
    if (!project) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [project, onClose, nextImage, prevImage])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="modal-backdrop absolute inset-0 bg-black/80 opacity-100" onClick={onClose} />
      <div className="modal-content relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-black border-4 border-black dark:border-white scale-100 opacity-100">
        <div className="sticky top-0 bg-white dark:bg-black border-b-4 border-black dark:border-white p-4 flex items-center justify-between z-10">
          <h3 className="text-black dark:text-white text-xl font-bold uppercase tracking-tight">
            {titleText}
          </h3>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center border-2 border-black dark:border-white text-black dark:text-white hover:bg-primary hover:border-primary hover:text-white transition-all"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6">
          {images.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-6">
                {hasMultiple && (
                  <button
                    onClick={prevImage}
                    className="shrink-0 w-12 h-12 flex items-center justify-center border-2 border-black dark:border-white text-black dark:text-white hover:bg-primary hover:border-primary hover:text-white transition-all"
                    aria-label="Previous image"
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                )}
                <div className="flex-1 border-2 border-black/20 dark:border-white/20 bg-gray-100 dark:bg-[#1c1c1c] aspect-video flex items-center justify-center overflow-hidden">
                  <img src={images[imageIndex]} alt={`${titleText} screenshot`} className="w-full h-full object-contain" />
                </div>
                {hasMultiple && (
                  <button
                    onClick={nextImage}
                    className="shrink-0 w-12 h-12 flex items-center justify-center border-2 border-black dark:border-white text-black dark:text-white hover:bg-primary hover:border-primary hover:text-white transition-all"
                    aria-label="Next image"
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                )}
              </div>
              {hasMultiple && (
                <div className="mt-4 flex justify-center gap-3">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImageIndex(i)}
                      className={`w-2 h-2 transition-colors ${i === imageIndex ? 'bg-primary' : 'bg-black/40 dark:bg-white/40'}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {descriptionText && (
            <div className="mb-6">
              <h4 className="text-black dark:text-white text-sm font-bold uppercase tracking-widest mb-2">
                {lang === 'en' ? 'Description' : 'Descripción'}
              </h4>
              <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">{descriptionText}</p>
            </div>
          )}

          <div className="mb-6">
            <h4 className="text-black dark:text-white text-sm font-bold uppercase tracking-widest mb-3">
              {lang === 'en' ? 'Technologies' : 'Tecnologías'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <div
                  key={tech}
                  className="flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider border-2 border-black dark:border-white text-black dark:text-white bg-white/50 dark:bg-black/50"
                  dangerouslySetInnerHTML={{
                    __html: `${getTechIconMarkup(tech, 'w-4 h-4', 'shrink-0')} <span>${tech}</span>`
                  }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {project.demoEnabled && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold uppercase tracking-widest text-sm border-b-4 border-r-4 border-black dark:border-white hover:bg-primary/80 active:translate-y-1 active:border-b-0 transition-all"
              >
                <span className="material-symbols-outlined text-lg">open_in_new</span>
                <span>{lang === 'en' ? 'Live Demo' : 'Demo en Vivo'}</span>
              </a>
            )}
            {project.githubEnabled && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-transparent text-black dark:text-white font-bold uppercase tracking-widest text-sm border-4 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
