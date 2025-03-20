import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export const locales = ['en', 'ar'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'ar'
export const rtlLanguages = ['ar']

export const isRTL = (locale: string) => rtlLanguages.includes(locale)

export function useLanguage() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLocale, setCurrentLocale] = useState<Locale>(defaultLocale)

  useEffect(() => {

    const savedLocale = localStorage.getItem('language') as Locale
    const initialLocale = savedLocale && locales.includes(savedLocale) ? savedLocale : defaultLocale
    setCurrentLocale(initialLocale)

    const segments = pathname.split('/')

    if (segments[1] !== initialLocale) {
      segments[1] = initialLocale
      router.push(segments.join('/'))
    }
  }, [])

  const changeLanguage = (newLocale: Locale) => {
    if (!locales.includes(newLocale)) return

    localStorage.setItem('language', newLocale)
    setCurrentLocale(newLocale)

    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return {
    currentLocale,
    changeLanguage,
    isRTL: isRTL(currentLocale)
  }
} 