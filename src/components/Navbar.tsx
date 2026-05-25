import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'

const iconByPath: Record<string, string> = {
  '/': 'home',
  '/projects': 'folder_open',
  '/skills': 'psychology',
  '/contact': 'mail',
}

const navLinks = [
  { path: '/', en: 'Home', es: 'Inicio' },
  { path: '/projects', en: 'Projects', es: 'Proyectos' },
  { path: '/skills', en: 'Skills', es: 'Habilidades' },
  { path: '/contact', en: 'Contact', es: 'Contacto' },
]

export default function Navbar() {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)

  const currentIcon = iconByPath[location.pathname] || 'home'
  const currentPath = location.pathname

  const toggleLang = () => setLang(lang === 'en' ? 'es' : 'en')

  return (
    <>
      <header className="flex items-center justify-between border-b-4 border-solid border-black dark:border-white px-4 md:px-10 py-6 mb-8">
        <Link to="/" className="flex items-center gap-4 text-black dark:text-white no-underline">
          <div className="size-9 flex items-center justify-center bg-black dark:bg-white text-white dark:text-black">
            <span className="material-symbols-outlined">{currentIcon}</span>
          </div>
          <h2 className="text-black dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] uppercase">
            Javier Donado
          </h2>
        </Link>

        <div className="flex flex-1 justify-end gap-8 hidden md:flex">
          <div className="flex items-center gap-9">
            {navLinks.map(link => {
              const isActive = link.path === currentPath
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold leading-normal uppercase transition-colors ${
                    isActive
                      ? 'text-primary'
                      : 'text-black dark:text-white hover:text-primary'
                  }`}
                >
                  [ {link.en === 'Home' && link.es === 'Inicio' ? t('Home', 'Inicio') : t(link.en, link.es)} ]
                </Link>
              )
            })}
          </div>

          <div className="flex gap-2">
            <button
              onClick={toggleLang}
              className="flex items-center justify-center w-10 h-10 border-2 border-black dark:border-white bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors font-bold text-xs"
            >
              <span>{lang === 'en' ? 'ES' : 'EN'}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="group flex items-center justify-center w-10 h-10 border-2 border-black dark:border-white bg-transparent text-black dark:text-white transition-colors"
            >
              {theme === 'light' ? (
                <span className="material-symbols-outlined text-lg text-[#8FBCFF]">dark_mode</span>
              ) : (
                <span className="material-symbols-outlined text-lg text-[#F5B027]">light_mode</span>
              )}
            </button>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 border-2 border-black dark:border-white text-black dark:text-white"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-6 border-b-2 border-black dark:border-white mb-8">
          {navLinks.map(link => {
            const isActive = link.path === currentPath
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-bold uppercase transition-colors ${
                  isActive ? 'text-primary' : 'text-black dark:text-white hover:text-primary'
                }`}
              >
                [ {t(link.en, link.es)} ]
              </Link>
            )
          })}
          <button
            onClick={toggleLang}
            className="text-left text-black dark:text-white text-sm font-bold uppercase hover:text-primary transition-colors"
          >
            [ {t('Español', 'English')} ]
          </button>
          <button
            onClick={toggleTheme}
            className="text-left text-black dark:text-white text-sm font-bold uppercase hover:text-primary transition-colors"
          >
            [ {t('Toggle Theme', 'Cambiar Tema')} ]
          </button>
        </div>
      )}
    </>
  )
}
