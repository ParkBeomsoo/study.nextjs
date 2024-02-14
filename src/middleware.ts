import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'
import { locales } from './navigation'

/**
 * 국제화 (i18n)
 * ko-KR : Korean (Korea)
 * en-US : English (United States)
 * zh-CN : Chinese (S)
 * zh-TW : Chinese (T)
 * ja-JP : Japanese (Japan)
 */

export default async function middleware(request: NextRequest) {
    const acceptLanguage: string =
        request.headers.get('accept-language') || process.env.DEFAULT_LOCALE
    const defaultLocales = locales.filter((locale: string) => {
        if (acceptLanguage.startsWith(locale)) return true
        else return false
    })
    const defaultLocale = defaultLocales[0] || process.env.DEFAULT_LOCALE

    const handleI18nRouting = createMiddleware({
        locales,
        defaultLocale,
        localePrefix: process.env.LOCALE_PREFIX || ('always' as any),
        localeDetection: true
    })
    const response = handleI18nRouting(request)

    if (response.cookies.get('NEXT_LOCALE' as any)) {
        response.cookies.delete('NEXT_LOCALE' as any)
    }

    return response
}

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
}
