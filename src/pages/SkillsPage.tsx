import { useLanguage } from '../contexts/LanguageContext'

type TechItem = { label: string; img?: string; className?: string; icon?: string; color?: string; svg?: string }

const techSections: { titleEn: string; titleEs: string; items: TechItem[] }[] = [
  {
    titleEn: 'Programming Languages',
    titleEs: 'Lenguajes de Programación',
    items: [
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', label: 'Python' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', label: 'JavaScript' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', label: 'TypeScript' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', label: 'C' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', label: 'Java' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', label: 'PHP' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg', label: 'R' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', label: 'Bash', className: 'dark:invert' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg', label: 'PowerShell' },
    ],
  },
  {
    titleEn: 'Frontend',
    titleEs: 'Frontend',
    items: [
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', label: 'React' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', label: 'Next.js', className: 'dark:invert' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', label: 'Angular' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', label: 'Vue.js' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', label: 'Tailwind' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', label: 'Bootstrap' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', label: 'jQuery' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', label: 'HTML5' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', label: 'CSS3' },
    ],
  },
  {
    titleEn: 'Backend',
    titleEs: 'Backend',
    items: [
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', label: 'Node.js' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', label: 'Express', className: 'dark:invert' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', label: 'FastAPI' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', label: 'GraphQL' },
      { icon: 'api', label: 'REST API', color: '#0078D4' },
    ],
  },
  {
    titleEn: 'AI & Machine Learning',
    titleEs: 'AI & Machine Learning',
    items: [
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', label: 'NumPy' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', label: 'Pandas' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', label: 'Scikit-learn' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', label: 'TensorFlow' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', label: 'PyTorch' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg', label: 'Jupyter' },
      { icon: 'neurology', label: 'LLMs', color: '#10A37F' },
      {
        svg: `<svg class="w-10 h-10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C8.68 2.64 10.72 4.68 16 6C10.72 7.32 8.68 9.36 8 12C7.32 9.36 5.28 7.32 0 6C5.28 4.68 7.32 2.64 8 0Z" fill="url(#g-grad)"/><defs><linearGradient id="g-grad" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#4285F4"/><stop offset="1" stop-color="#9B72CB"/></linearGradient></defs></svg>`,
        label: 'Gemini API',
      },
      { icon: 'api', label: 'OpenAI API', color: '#10A37F' },
      { icon: 'edit_note', label: 'Prompting', color: '#FF6B6B' },
    ],
  },
  {
    titleEn: 'Data Formats',
    titleEs: 'Formatos de Datos',
    items: [
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg', label: 'JSON' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg', label: 'XML' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg', label: 'YAML', className: 'dark:invert' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg', label: 'Markdown', className: 'dark:invert' },
    ],
  },
  {
    titleEn: 'Database',
    titleEs: 'Database',
    items: [
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', label: 'PostgreSQL' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', label: 'MongoDB' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', label: 'MySQL' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', label: 'Redis' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', label: 'Firebase' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg', label: 'DynamoDB' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', label: 'SQL Server' },
    ],
  },
  {
    titleEn: 'Amazon Web Services',
    titleEs: 'Amazon Web Services',
    items: [
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', label: 'AWS' },
      { icon: 'function', label: 'Lambda', color: '#FF9900' },
      { icon: 'cloud_upload', label: 'S3', color: '#569A31' },
      { icon: 'api', label: 'API Gateway', color: '#FF4F8B' },
      { icon: 'dns', label: 'EC2', color: '#FF9900' },
      { icon: 'deployed_code', label: 'ECS', color: '#FF9900' },
      { icon: 'monitoring', label: 'CloudWatch', color: '#FF4F8B' },
      { icon: 'account_tree', label: 'Step Functions', color: '#FF4F8B' },
      { icon: 'swap_horiz', label: 'EventBridge', color: '#FF4F8B' },
      { icon: 'key', label: 'Secrets Manager', color: '#DD344C' },
      { icon: 'layers', label: 'CloudFormation', color: '#FF4F8B' },
      { icon: 'track_changes', label: 'CloudTrail', color: '#DD344C' },
      { icon: 'archive', label: 'S3 Glacier', color: '#3F8624' },
      { icon: 'backup', label: 'AWS Backup', color: '#3F8624' },
      { icon: 'batch_prediction', label: 'Batch', color: '#FF9900' },
      { icon: 'settings', label: 'Parameter Store', color: '#DD344C' },
    ],
  },
  {
    titleEn: 'AWS AI Tools',
    titleEs: 'AWS AI Tools',
    items: [
      { icon: 'model_training', label: 'SageMaker', color: '#01A88D' },
      { icon: 'smart_toy', label: 'Lex', color: '#01A88D' },
      { icon: 'document_scanner', label: 'Textract', color: '#01A88D' },
      { icon: 'record_voice_over', label: 'Polly', color: '#01A88D' },
      { icon: 'foundation', label: 'Bedrock', color: '#01A88D' },
    ],
  },
  {
    titleEn: 'Microsoft Azure / DevOps',
    titleEs: 'Microsoft Azure / DevOps',
    items: [
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', label: 'Azure' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg', label: 'Azure DevOps' },
      { icon: 'dashboard', label: 'Azure Boards', color: '#0078D4' },
      { icon: 'source', label: 'Azure Repos', color: '#0078D4' },
      { icon: 'rocket_launch', label: 'Azure Pipelines', color: '#0078D4' },
      { icon: 'checklist', label: 'Test Plans', color: '#0078D4' },
      { icon: 'quick_reference_all', label: 'Doc Intelligence', color: '#0078D4' },
    ],
  },
  {
    titleEn: 'DevOps & Infrastructure',
    titleEs: 'DevOps & Infrastructure',
    items: [
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', label: 'Docker' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', label: 'Kubernetes' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', label: 'Git' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', label: 'GitHub', className: 'dark:invert' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg', label: 'GH Actions' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', label: 'Linux' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg', label: 'WSL/Ubuntu', className: 'dark:invert' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', label: 'Nginx' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', label: 'Vercel', className: 'dark:invert' },
      { icon: 'cloud_sync', label: 'Serverless', color: '#FD5750' },
      { icon: 'sync', label: 'CI/CD', color: '#2088FF' },
    ],
  },
  {
    titleEn: 'Tools & AI Assistants',
    titleEs: 'Tools & AI Assistants',
    items: [
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', label: 'VS Code' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', label: 'Postman' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', label: 'Figma' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', label: 'Jest' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg', label: 'Pytest' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg', label: 'SonarQube' },
      { icon: 'vpn_lock', label: 'Ngrok', color: '#1F1E37' },
      { icon: 'schema', label: 'Lucid Charts', color: '#F96B13' },
      { icon: 'flight', label: 'GitHub Copilot', color: '#000000' },
      { icon: 'auto_awesome', label: 'Claude', color: '#D97757' },
      { icon: 'psychology', label: 'ChatGPT', color: '#10A37F' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg', label: 'NPM' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pypi/pypi-original.svg', label: 'Pip/PyPI' },
    ],
  },
]

export default function SkillsPage() {
  const { lang, t } = useLanguage()

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-black dark:text-white text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
          {lang === 'en' ? 'Skills &' : 'Habilidades &'}{' '}
          <span className="text-primary">{lang === 'en' ? 'Technologies' : 'Tecnologías'}</span>
        </h1>
        <p className="text-black/60 dark:text-white/60 uppercase tracking-widest text-sm">
          // {t('Loading arsenal...', 'Cargando arsenal...')}
        </p>
        <p className="text-black dark:text-white text-lg font-bold mt-6 max-w-2xl mx-auto italic leading-relaxed px-4 py-2 border-l-4 border-primary">
          {t(
            'Note: Skill levels vary across technologies. Some have been used extensively in production environments, while others have been explored through courses, personal projects, or academic work.',
            'Nota: Los niveles de habilidad varían entre tecnologías. Algunas han sido utilizadas extensivamente en entornos de producción, mientras que otras han sido exploradas a través de cursos, proyectos personales o trabajo académico.'
          )}
        </p>
      </div>

      {techSections.map(section => (
        <section key={section.titleEn} className="mb-16">
          <h2 className="text-black dark:text-white text-2xl font-bold leading-tight tracking-widest px-4 pb-6 pt-5 uppercase border-l-8 border-primary mb-8">
            // {lang === 'en' ? section.titleEn : section.titleEs}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
            {section.items.map(item => (
              <div
                key={item.label}
                className="tech-card flex flex-col items-center gap-3 p-4 border-4 border-black dark:border-white bg-white/50 dark:bg-black/50"
              >
                {item.img ? (
                  <img src={item.img} alt={item.label} className={`w-10 h-10 ${item.className || ''}`} />
                ) : item.svg ? (
                  <div dangerouslySetInnerHTML={{ __html: item.svg }} />
                ) : (
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{ color: item.color || 'currentColor' }}
                  >
                    {item.icon}
                  </span>
                )}
                <span className="text-black dark:text-white text-xs font-bold uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
