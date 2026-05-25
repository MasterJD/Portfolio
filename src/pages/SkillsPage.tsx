import { useLanguage } from '../contexts/LanguageContext'

type TechItem = { label: string; img?: string; className?: string; icon?: string; color?: string; svg?: string }

const techSections: { categoryKey: string; items: TechItem[] }[] = [
  {
    categoryKey: 'programmingLanguages',
    items: [
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', label: 'Python' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', label: 'JavaScript' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', label: 'TypeScript' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', label: 'Java' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', label: 'C' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', label: 'PHP' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg', label: 'R' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', label: 'HTML' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', label: 'CSS' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg', label: 'Lua' },
      { icon: 'gamepad', label: 'GDScript', color: '#478CBF' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', label: 'Bash', className: 'dark:invert' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg', label: 'PowerShell' },
    ],
  },
  {
    categoryKey: 'frameworksFullStack',
    items: [
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', label: 'React' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', label: 'Next.js', className: 'dark:invert' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', label: 'Angular' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg', label: 'Godot' },
      { icon: 'favorite', label: 'Löve2D', color: '#FF69B4' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', label: 'Node.js' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', label: 'Express.js', className: 'dark:invert' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', label: 'Tailwind CSS' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', label: 'Bootstrap' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', label: 'jQuery' },
      { icon: 'layers', label: 'MERN Stack', color: '#00D8FF' },
      { icon: 'layers', label: 'MEAN Stack', color: '#DD0031' },
    ],
  },
  {
    categoryKey: 'apisCommunication',
    items: [
      { icon: 'api', label: 'REST APIs', color: '#0078D4' },
      { icon: 'api', label: 'SOAP APIs', color: '#5C2D91' },
      { icon: 'key', label: 'JWT', color: '#000000', className: 'dark-invert' },
      { icon: 'wifi', label: 'WebSockets', color: '#010101' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', label: 'GraphQL' },
      { icon: 'swap_horiz', label: 'Axios', color: '#5A29E4' },
    ],
  },
  {
    categoryKey: 'databases',
    items: [
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', label: 'PostgreSQL' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', label: 'MongoDB' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', label: 'MySQL' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', label: 'Redis' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', label: 'SQLite' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', label: 'Firebase Realtime DB' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg', label: 'DynamoDB' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', label: 'SQL Server' },
    ],
  },
  {
    categoryKey: 'cloudDevops',
    items: [
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', label: 'AWS' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', label: 'Azure' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', label: 'Google Cloud' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', label: 'Docker' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', label: 'Kubernetes' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg', label: 'GitHub Actions' },
      { icon: 'sync', label: 'CI/CD', color: '#2088FF' },
      { icon: 'layers', label: 'Terraform', color: '#7B42BC' },
      { icon: 'account_tree', label: 'CloudFormation', color: '#FF4F8B' },
      { icon: 'cloud', label: 'GitHub Pages', color: '#222222' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', label: 'Nginx' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', label: 'Vercel', className: 'dark:invert' },
      { icon: 'cloud_sync', label: 'Serverless', color: '#FD5750' },
    ],
  },
  {
    categoryKey: 'awsServices',
    items: [
      { icon: 'function', label: 'Lambda', color: '#FF9900' },
      { icon: 'api', label: 'API Gateway', color: '#FF4F8B' },
      { icon: 'dns', label: 'EC2', color: '#FF9900' },
      { icon: 'deployed_code', label: 'ECS', color: '#FF9900' },
      { icon: 'cloud_upload', label: 'S3', color: '#569A31' },
      { icon: 'archive', label: 'S3 Glacier', color: '#3F8624' },
      { icon: 'monitoring', label: 'CloudWatch', color: '#FF4F8B' },
      { icon: 'swap_horiz', label: 'EventBridge', color: '#FF4F8B' },
      { icon: 'account_tree', label: 'Step Functions', color: '#FF4F8B' },
      { icon: 'model_training', label: 'SageMaker', color: '#01A88D' },
      { icon: 'document_scanner', label: 'Textract', color: '#01A88D' },
      { icon: 'record_voice_over', label: 'Polly', color: '#01A88D' },
      { icon: 'smart_toy', label: 'Lex', color: '#01A88D' },
      { icon: 'key', label: 'Secrets Manager', color: '#DD344C' },
      { icon: 'backup', label: 'AWS Backup', color: '#3F8624' },
      { icon: 'track_changes', label: 'CloudTrail', color: '#DD344C' },
      { icon: 'batch_prediction', label: 'AWS Batch', color: '#FF9900' },
      { icon: 'settings', label: 'Parameter Store', color: '#DD344C' },
      { icon: 'database', label: 'PartiQL', color: '#FF9900' },
      { icon: 'foundation', label: 'Bedrock', color: '#01A88D' },
    ],
  },
  {
    categoryKey: 'azureDevops',
    items: [
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', label: 'Azure' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg', label: 'Azure DevOps' },
      { icon: 'dashboard', label: 'Azure Boards', color: '#0078D4' },
      { icon: 'source', label: 'Azure Repos', color: '#0078D4' },
      { icon: 'quick_reference_all', label: 'Azure Doc Intelligence', color: '#0078D4' },
      { icon: 'sync', label: 'Azure Workflows', color: '#0078D4' },
      { icon: 'rocket_launch', label: 'Azure Pipelines', color: '#0078D4' },
      { icon: 'checklist', label: 'Azure Test Plans', color: '#0078D4' },
    ],
  },
  {
    categoryKey: 'developmentTesting',
    items: [
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', label: 'VS Code' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', label: 'Git' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', label: 'GitHub', className: 'dark:invert' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', label: 'Postman' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg', label: 'SonarQube' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', label: 'Jest' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg', label: 'Pytest' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg', label: 'npm' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg', label: 'ESLint' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', label: 'Figma' },
      { icon: 'vpn_lock', label: 'Ngrok', color: '#1F1E37' },
      { icon: 'schema', label: 'Lucidchart', color: '#F96B13' },
      { icon: 'headset_mic', label: 'Zendesk', color: '#03363D' },
      { icon: 'checklist', label: 'Scrum', color: '#2088FF' },
      { icon: 'view_column', label: 'Trello', color: '#0079BF' },
      {
        svg: `<svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z" fill="#58A6FF"/><path d="M7.5 9.5L4 12l3.5 2.5M16.5 9.5L20 12l-3.5 2.5M9 16l3 3 3-3" stroke="#58A6FF" stroke-width="1.5" stroke-linecap="round"/></svg>`,
        label: 'GitHub Copilot',
      },
      { icon: 'auto_awesome', label: 'Claude Code', color: '#D97757' },
      { icon: 'psychology', label: 'ChatGPT', color: '#10A37F' },
      { icon: 'auto_awesome', label: 'HuggingFace', color: '#FFD21E' },
      { icon: 'terminal', label: 'LM Studio', color: '#10A37F' },
      { icon: 'code', label: 'Open Code', color: '#000000', className: 'dark-invert' },
      { icon: 'api', label: 'AI APIs', color: '#10A37F' },
      { icon: 'auto_awesome', label: 'AI Driven Development', color: '#4285F4' },
      { icon: 'playground', label: 'Outlier Playground', color: '#6C47FF' },
    ],
  },
  {
    categoryKey: 'architectureProcesses',
    items: [
      { icon: 'account_tree', label: 'Microservices', color: '#2088FF' },
      { icon: 'layers', label: 'Infrastructure as Code', color: '#7B42BC' },
      { icon: 'code_blocks', label: 'Code Auditing', color: '#DD344C' },
      { icon: 'description', label: 'ADRs', color: '#569A31' },
      { icon: 'article', label: 'RFCs', color: '#FF9900' },
      { icon: 'analytics', label: 'RCAs', color: '#DD344C' },
      { icon: 'monitoring', label: 'Post-Release Monitoring', color: '#FF4F8B' },
      { icon: 'build', label: 'Hotfixes', color: '#FF6B6B' },
      { icon: 'bug_report', label: 'Defects', color: '#FF6B6B' },
      { icon: 'track_changes', label: 'Bug Tracking', color: '#FF6B6B' },
      { icon: 'layers', label: 'Dev/Stage/Prod Environments', color: '#2088FF' },
    ],
  },
  {
    categoryKey: 'enterpriseApps',
    items: [
      { icon: 'business', label: 'SAP S/4HANA', color: '#0FAAFF' },
      { icon: 'business', label: 'Ariba', color: '#FF5900' },
      { icon: 'payments', label: 'Coupa', color: '#0047BB' },
      { icon: 'account_balance', label: 'Workday Financials', color: '#FF7F2A' },
      { icon: 'source', label: 'Workday Strategic Sourcing', color: '#FF7F2A' },
    ],
  },
  {
    categoryKey: 'osVirtualization',
    items: [
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg', label: 'Windows' },
      { icon: 'terminal', label: 'Windows Server', color: '#0078D4' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg', label: 'WSL/Ubuntu', className: 'dark:invert' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', label: 'Linux' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg', label: 'Debian' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', label: 'Kali Linux' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', label: 'Linux Mint' },
      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', label: 'CachyOS' },
      { icon: 'desktop_windows', label: 'VMware', color: '#60AFFF' },
      { icon: 'desktop_windows', label: 'VirtualBox', color: '#2F61A6' },
    ],
  },
  {
    categoryKey: 'productivityDocs',
    items: [
      { icon: 'description', label: 'Excel', color: '#217346' },
      { icon: 'description', label: 'Word', color: '#2B579A' },
      { icon: 'slideshow', label: 'PowerPoint', color: '#D04423' },
      { icon: 'menu_book', label: 'Technical README Writing', color: '#000000', className: 'dark-invert' },
      { icon: 'article', label: 'Operational Documentation', color: '#569A31' },
    ],
  },
]

export default function SkillsPage() {
  const { tKey } = useLanguage()

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-black dark:text-white text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
          {tKey('skills.sectionTitle')}
        </h1>
        <p className="text-black/60 dark:text-white/60 uppercase tracking-widest text-sm">
          // {tKey('skills.subtitle')}
        </p>
        <p className="text-black dark:text-white text-lg font-bold mt-6 max-w-2xl mx-auto italic leading-relaxed px-4 py-2 border-l-4 border-primary">
          {tKey('skills.note')}
        </p>
      </div>

      {techSections.map(section => (
        <section key={section.categoryKey} className="mb-16">
          <h2 className="text-black dark:text-white text-2xl font-bold leading-tight tracking-widest px-4 pb-6 pt-5 uppercase border-l-8 border-primary mb-8">
            // {tKey(`skills.categories.${section.categoryKey}`)}
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
                    className={`material-symbols-outlined text-4xl ${item.className || ''}`}
                    style={{ color: item.color || 'currentColor' }}
                  >
                    {item.icon}
                  </span>
                )}
                <span className="text-black dark:text-white text-xs font-bold uppercase tracking-widest text-center">
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
