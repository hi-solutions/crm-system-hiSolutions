import { headers } from 'next/headers'
import { locales, defaultLocale } from '@/middleware'


export type SupportedLanguage = typeof locales[number]


export function getLanguageFromPath(pathname: string): SupportedLanguage {
  const segment = pathname.split('/')[1]
  return locales.includes(segment as SupportedLanguage) 
    ? (segment as SupportedLanguage) 
    : defaultLocale
}


export async function getLanguageServer(): Promise<SupportedLanguage> {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || ''
  return getLanguageFromPath(pathname)
}