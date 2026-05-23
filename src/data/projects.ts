export interface Project {
  id: number
  icon: string
  images: string[]
  technologies: string[]
  demoUrl: string
  githubUrl: string
  demoEnabled: boolean
  githubEnabled: boolean
}

export interface ProjectCopy {
  id: number
  title: string
  description: string
}

export interface ProjectContent {
  en: {
    projects: ProjectCopy[]
    plannedProjectsTitle: string
    plannedProjects: string[]
  }
  es: {
    projects: ProjectCopy[]
    plannedProjectsTitle: string
    plannedProjects: string[]
  }
}

export const projects: Project[] = [
  {
    id: 1,
    icon: 'calendar_month',
    images: ['/assets/projects/Planning_Tool_01.png'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    demoUrl: '',
    githubUrl: 'https://github.com',
    demoEnabled: false,
    githubEnabled: true,
  },
]

export const techIconMap: Record<string, { src: string; className?: string }> = {
  React: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  'Node.js': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  MongoDB: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  Express: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', className: 'dark:invert' },
  'Tailwind CSS': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
}
