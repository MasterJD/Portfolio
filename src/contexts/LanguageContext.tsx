import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import translations from '../data/translations.json'

export type Lang = 'en' | 'es'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (en: string, es: string) => string
  tKey: (path: string) => string
  tKeyAll: <T = unknown>(path: string) => T
}

const LanguageContext = createContext<LanguageContextType | null>(null)

function resolvePath(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part]
    }
    const arrMatch = part.match(/^(\d+)$/)
    if (arrMatch && Array.isArray(acc)) {
      return acc[parseInt(arrMatch[1], 10)]
    }
    return undefined
  }, obj)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem('lang') as Lang | null
    return stored || 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
    document.documentElement.dataset.lang = lang
  }, [lang])

  const t = (en: string, es: string) => lang === 'en' ? en : es

  const tKey = (path: string): string => {
    const enKey = `${path}.english`
    const esKey = `${path}.spanish`
    const enVal = resolvePath(translations as unknown as Record<string, unknown>, enKey)
    const esVal = resolvePath(translations as unknown as Record<string, unknown>, esKey)
    if (typeof enVal !== 'string' || typeof esVal !== 'string') {
      console.warn(`Missing translation for key: ${path}`)
      return path
    }
    return lang === 'en' ? enVal : esVal
  }

  const tKeyAll = <T = unknown>(path: string): T => {
    const resolved = resolvePath(translations as unknown as Record<string, unknown>, path)
    return resolved as T
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tKey, tKeyAll }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
