import { headers } from 'next/headers'
import { locales, defaultLocale } from '@/middleware'

// Type for supported languages
export type SupportedLanguage = typeof locales[number]

// Get language from pathname
export function getLanguageFromPath(pathname: string): SupportedLanguage {
  const segment = pathname.split('/')[1]
  return locales.includes(segment as SupportedLanguage) 
    ? (segment as SupportedLanguage) 
    : defaultLocale
}

// Server-side language detection
export function getLanguageServer(): SupportedLanguage {
  const headersList = headers()
  const pathname = headersList.get('x-pathname') || ''
  return getLanguageFromPath(pathname)
}