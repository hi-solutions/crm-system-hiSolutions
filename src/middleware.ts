// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'


export const locales = ['en', 'ar']
export const defaultLocale = 'ar'


export const rtlLanguages = ['ar']

export const isRTL = (locale: string) => rtlLanguages.includes(locale)

function getLocale(request: NextRequest): string {
    // First check for locale in cookies
    const localeCookie = request.cookies.get('NEXT_LOCALE')
    if (localeCookie?.value) {
        return localeCookie.value
    }

    
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
    const locale = matchLocale(languages, locales, defaultLocale)

    return locale
}

export const middleware = (request: NextRequest) => {
    
    const { pathname } = request.nextUrl
    

    if (
        pathname.includes('/_next/') ||
        pathname.includes('/favicon.ico') ||
        pathname.includes('/images/') ||
        pathname.endsWith('.svg') ||
        pathname.endsWith('.jpg') ||
        pathname.endsWith('.png') ||
        pathname.endsWith('.woff') ||
        pathname.endsWith('.woff2') ||
        pathname.endsWith('.css') ||
        pathname.endsWith('.js')
    ) {
        return NextResponse.next()
    }
    
    const search = request.nextUrl.search 

    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        const response = NextResponse.redirect(
            new URL(`/${locale}${pathname}${search}`, request.url)
        )
        

        if (!request.cookies.has('NEXT_LOCALE')) {
            response.cookies.set('NEXT_LOCALE', locale)
        }
        
        return response
    }
}

export const matcher = [
  '/(.*)'
];