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

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const normalizeProject = (project: Project): Project => ({
  ...project,
  images: project.images.map(withBase),
})

const rawProjects: Project[] = [
  {
    id: 22,
    icon: 'calendar_month',
    images: [],
    technologies: ['React', 'Typescript', 'Vite', 'Tailwind CSS', 'Node.js'],
    demoUrl: '',
    githubUrl: 'https://github.com/MasterJD/Portfolio',
    demoEnabled: false,
    githubEnabled: true,
  },
  {
    id: 21,
    icon: 'calendar_month',
    images: [
      '/assets/projects/IDL_01.png',
      '/assets/projects/IDL_02.png',
      '/assets/projects/IDL_03.png',
      '/assets/projects/IDL_04.png',
      '/assets/projects/IDL_05.png',
      '/assets/projects/IDL_06.png',
      '/assets/projects/IDL_07.png',
      '/assets/projects/IDL_08.png',
      '/assets/projects/IDL_09.png',
      '/assets/projects/IDL_10.png',
      '/assets/projects/IDL_11.png',
      '/assets/projects/IDL_12.png',
      '/assets/projects/IDL_13.png',
      '/assets/projects/IDL_14.png',
      '/assets/projects/IDL_15.png',
      '/assets/projects/IDL_16.png',
    ],
    technologies: ['React', 'Typescript', 'DaisyUI', 'Firebase', 'Node.js', 'ESLint', 'Vite', 'Xenova', 'Vosk', 'Gemini API', 'pysentimiento', 'HuggingFace'],
    demoUrl: '',
    githubUrl: '',
    demoEnabled: false,
    githubEnabled: false,
  },
  {
    id: 20,
    icon: 'calendar_month',
    images: ['/assets/projects/EXP_01.png', '/assets/projects/EXP_02.png', '/assets/projects/EXP_03.png'],
    technologies: ['React', 'Typescript', 'SCSS', 'Firebase', 'Node.js'],
    demoUrl: 'https://exptracker-bd6f9.web.app/',
    githubUrl: '',
    demoEnabled: true,
    githubEnabled: false,
  },
  {
    id: 19,
    icon: 'calendar_month',
    images: ['/assets/projects/OP_01.png', '/assets/projects/OP_02.png', '/assets/projects/OP_03.png', '/assets/projects/OP_04.png', '/assets/projects/OP_05.png'],
    technologies: ['React', 'Typescript', 'Tailwind CSS', 'Node.js'],
    demoUrl: 'https://masterjd.github.io/One-Piece-OP-ED/',
    githubUrl: '',
    demoEnabled: true,
    githubEnabled: false,
  },
  {
    id: 18,
    icon: 'calendar_month',
    images: ['/assets/projects/Humanda_01.png'],
    technologies: ['React', 'Typescript', 'Vite', 'Firebase', 'Tailwind CSS', 'Jest', 'Node.js'],
    demoUrl: 'https://humanda.net',
    githubUrl: '',
    demoEnabled: true,
    githubEnabled: false,
  },
  {
    id: 17,
    icon: 'calendar_month',
    images: ['/assets/projects/Zelda_01.png', '/assets/projects/Zelda_02.png'],
    technologies: ['React', 'Javascript', 'HTML', 'CSS'],
    demoUrl: 'https://masterjd.github.io/zdquest',
    githubUrl: 'https://github.com/MasterJD/zdquest',
    demoEnabled: true,
    githubEnabled: true,
  },
  {
    id: 16,
    icon: 'calendar_month',
    images: ['/assets/projects/YTSP_01.png', '/assets/projects/YTSP_02.png', '/assets/projects/YTSP_03.png'],
    technologies: ['React', 'Typescript', 'Vite', 'Firebase', 'Tailwind CSS', 'Jest', 'Node.js'],
    demoUrl: 'https://yt-synced-watch.web.app/',
    githubUrl: '',
    demoEnabled: true,
    githubEnabled: false,
  },
  {
    id: 15,
    icon: 'calendar_month',
    images: ['/assets/projects/Kutta_01.png', '/assets/projects/Kutta_02.png', '/assets/projects/Kutta_03.png'],
    technologies: ['Math.js', 'Javascript', 'HTML', 'Bootstrap'],
    demoUrl: 'https://masterjd.github.io/Runge-Kutta-Approximation/',
    githubUrl: 'https://github.com/MasterJD/Runge-Kutta-Approximation',
    demoEnabled: true,
    githubEnabled: true,
  },
  {
    id: 14,
    icon: 'calendar_month',
    images: ['/assets/projects/Euler_01.png', '/assets/projects/Euler_02.png', '/assets/projects/Euler_03.png'],
    technologies: ['Math.js', 'Javascript', 'HTML', 'Bootstrap'],
    demoUrl: 'https://masterjd.github.io/Ecuaciones_Diferenciales-Grupo07/',
    githubUrl: 'https://github.com/MasterJD/Euler-Approximation',
    demoEnabled: true,
    githubEnabled: true,
  },
  {
    id: 13,
    icon: 'calendar_month',
    images: ['/assets/projects/Latex_01.png', '/assets/projects/Latex_02.png', '/assets/projects/Latex_03.png'],
    technologies: ['MongoDB', 'EJS', 'Bootstrap'],
    demoUrl: '',
    githubUrl: 'https://github.com/MasterJD/LaTeX-Equation-Viewer',
    demoEnabled: false,
    githubEnabled: true,
  },
  {
    id: 12,
    icon: 'calendar_month',
    images: ['/assets/projects/Scarlett_01.png', '/assets/projects/Scarlett_02.png', '/assets/projects/Scarlett_03.png', '/assets/projects/Scarlett_04.png', '/assets/projects/Scarlett_05.png', '/assets/projects/Scarlett_06.png', '/assets/projects/Scarlett_07.png'],
    technologies: ['Angular', 'Typescript', 'Firebase', 'Angular Material', 'Node.js', 'Crypto.js', 'Express'],
    demoUrl: 'https://scarlett-9fe46.web.app/',
    githubUrl: '',
    demoEnabled: true,
    githubEnabled: false,
  },
  {
    id: 11,
    icon: 'calendar_month',
    images: ['/assets/projects/Heroes_01.png', '/assets/projects/Heroes_02.png', '/assets/projects/Heroes_03.png'],
    technologies: ['Angular', 'Typescript', 'MySQL', 'Angular Material', 'Node.js', 'Crypto.js', 'Express'],
    demoUrl: '',
    githubUrl: 'https://github.com/MasterJD/SuperHeroDB',
    demoEnabled: false,
    githubEnabled: true,
  },
  {
    id: 10,
    icon: 'calendar_month',
    images: ['/assets/projects/SaltPepper_01.png', '/assets/projects/SaltPepper_02.png'],
    technologies: ['Python', 'TKinter', 'MatplotLib', 'Numpy', 'CV2'],
    demoUrl: '',
    githubUrl: 'https://github.com/MasterJD/Salt-and-Pepper-Noise-Algorithm',
    demoEnabled: false,
    githubEnabled: true,
  },
  {
    id: 9,
    icon: 'calendar_month',
    images: ['/assets/projects/Tienda_01.png'],
    technologies: ['Angular', 'Typescript', 'Angular Material', 'Firebase', 'Node.js', 'Crypto.js', 'Express'],
    demoUrl: '',
    githubUrl: 'https://github.com/MasterJD/Marcajes',
    demoEnabled: false,
    githubEnabled: true,
  },
  {
    id: 8,
    icon: 'calendar_month',
    images: ['/assets/projects/Marcaje_01.png', '/assets/projects/Marcaje_02.png'],
    technologies: ['PHP', 'Javascript', 'JQuery', 'MySQL', 'Bootstrap', 'WAMP Server'],
    demoUrl: '',
    githubUrl: 'https://github.com/MasterJD/Marcajes',
    demoEnabled: false,
    githubEnabled: true,
  },
  {
    id: 7,
    icon: 'calendar_month',
    images: ['/assets/projects/Motion_01.png', '/assets/projects/Motion_02.png'],
    technologies: ['Python', 'TKinter', 'MatplotLib'],
    demoUrl: '',
    githubUrl: 'https://github.com/MasterJD/Projectile-Motion-Simulator',
    demoEnabled: false,
    githubEnabled: true,
  },
  {
    id: 6,
    icon: 'calendar_month',
    images: ['/assets/projects/Taylor_01.png', '/assets/projects/Taylor_02.png', '/assets/projects/Taylor_03.png', '/assets/projects/Taylor_04.png'],
    technologies: ['C'],
    demoUrl: '',
    githubUrl: 'https://github.com/MasterJD/Taylor-Approximation',
    demoEnabled: false,
    githubEnabled: true,
  },
  {
    id: 5,
    icon: 'calendar_month',
    images: ['/assets/projects/Fractal_03.png', '/assets/projects/Fractal_02.png', '/assets/projects/Fractal_01.png', '/assets/projects/Fractal_04.png'],
    technologies: ['Python', 'PyTurtle'],
    demoUrl: '',
    githubUrl: 'https://github.com/MasterJD/koch-fractal',
    demoEnabled: false,
    githubEnabled: true,
  },
  {
    id: 4,
    icon: 'calendar_month',
    images: ['/assets/projects/Recursion_01.png'],
    technologies: ['Java'],
    demoUrl: '',
    githubUrl: 'https://github.com/MasterJD/recursion-afd_afn-grammar_automatat',
    demoEnabled: false,
    githubEnabled: true,
  },
  {
    id: 3,
    icon: 'calendar_month',
    images: ['/assets/projects/Gradient_Descent_01.png', '/assets/projects/Gradient_Descent_02.png', '/assets/projects/Gradient_Descent_03.png', '/assets/projects/Gradient_Descent_04.png'],
    technologies: ['Java'],
    demoUrl: '',
    githubUrl: 'https://github.com/MasterJD/Gradient-Descent',
    demoEnabled: false,
    githubEnabled: true,
  },
  {
    id: 2,
    icon: 'calendar_month',
    images: ['/assets/projects/JPEG_Handler_01.png'],
    technologies: ['Java'],
    demoUrl: '',
    githubUrl: 'https://github.com/MasterJD/JPEG-Handler',
    demoEnabled: false,
    githubEnabled: true,
  },
  {
    id: 1,
    icon: 'calendar_month',
    images: ['/assets/projects/Planning_Tool_01.png'],
    technologies: ['PHP', 'Bootstrap', 'MySQL', 'HTML', 'CSS'],
    demoUrl: '',
    githubUrl: 'https://github.com/MasterJD/Planning_Grupo04',
    demoEnabled: false,
    githubEnabled: true,
  },
]

export const projects = rawProjects.map(normalizeProject)

export const techIconMap: Record<string, { src: string; className?: string }> = {
  React: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  'Node.js': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  MongoDB: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  Express: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', className: 'dark:invert' },
  'Tailwind CSS': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  Python: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  JavaScript: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  Javascript: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  TypeScript: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  Typescript: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  Java: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  PHP: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  C: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  HTML: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  CSS: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  Bootstrap: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  Angular: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  'Angular Material': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  Firebase: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  MySQL: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  Vite: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  Jest: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
  SCSS: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
  JQuery: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
  Numpy: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  'Math.js': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  EJS: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  CV2: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
  MatplotLib: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
  TKinter: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  PyTurtle: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  'WAMP Server': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
  Docker: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  ESLint: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg' },
  'Gemini API': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
  HuggingFace: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/huggingface/huggingface-original.svg' },
  'Crypto.js': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  DaisyUI: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  Xenova: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  Vosk: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  pysentimiento: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
}
