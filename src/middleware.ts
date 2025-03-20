// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

// List of all supported locales
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

    // Fall back to header negotiation
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
    const locale = matchLocale(languages, locales, defaultLocale)

    return locale
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const search = request.nextUrl.search // Get query string

    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        const response = NextResponse.redirect(
            new URL(`/${locale}${pathname}${search}`, request.url)
        )
        
        // Set cookie if it doesn't exist
        if (!request.cookies.has('NEXT_LOCALE')) {
            response.cookies.set('NEXT_LOCALE', locale)
        }
        
        return response
    }
}

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
}