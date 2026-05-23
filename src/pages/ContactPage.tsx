import { useLanguage } from '../contexts/LanguageContext'

export default function ContactPage() {
  const { lang, t } = useLanguage()

  return (
    <div className="flex-1 flex items-center justify-center py-20">
      <div className="max-w-[600px] w-full text-center px-4">
        <div className="mb-12">
          <h1 className="text-black dark:text-white text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
            {t("Let's Connect", 'Conectémonos')}
          </h1>
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm">
            // {t('Ready for new quests', 'Listo para nuevas aventuras')}
          </p>
        </div>

        <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-8 md:p-12 relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-primary" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-primary" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-primary" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-primary" />

          <div className="flex flex-col items-center gap-8">
            <div className="w-24 h-24 border-4 border-black dark:border-white flex items-center justify-center bg-[#0A66C2] text-white">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>

            <div className="space-y-4">
              <p className="text-black/70 dark:text-white/70 text-lg uppercase tracking-wider">
                {t('Find me on LinkedIn', 'Encuéntrame en LinkedIn')}
              </p>
              <p className="text-black/50 dark:text-white/50 text-sm">
                {t("Let's discuss your next project or just say hello!", '¡Hablemos de tu próximo proyecto o simplemente saluda!')}
              </p>
            </div>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-10 py-5 bg-primary text-white font-bold uppercase tracking-widest border-b-4 border-r-4 border-black dark:border-white hover:bg-primary/90 active:translate-y-1 active:border-b-0 transition-all"
            >
              <span>{t('Connect on LinkedIn', 'Conectar en LinkedIn')}</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center items-center gap-3">
          <div className="w-2 h-2 bg-green-500 animate-pulse" />
          <span className="text-[10px] text-gray-500 dark:text-zinc-500 uppercase tracking-widest">
            {t('Status: Available for opportunities', 'Estado: Disponible para oportunidades')}
          </span>
        </div>
      </div>
    </div>
  )
}
