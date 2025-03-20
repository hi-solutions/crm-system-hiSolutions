// components/LanguageSwitcher.tsx
'use client'

import { usePathname, useRouter } from 'next/navigation'
import { locales, isRTL } from '@/middleware'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const currentLocale = pathname.split('/')[1]

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    router.push(newPath)
  }

  return (
    <select
      onChange={(e) => handleLanguageChange(e.target.value)}
      value={currentLocale}
      className={`p-2 border rounded ${isRTL(currentLocale) ? 'text-right' : 'text-left'}`}
      dir={isRTL(currentLocale) ? 'rtl' : 'ltr'}
    >
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale === 'ar' ? 'العربية' : locale.toUpperCase()}
        </option>
      ))}
    </select>
  )
}