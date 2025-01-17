import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { type NextRequest } from 'next/server'
import { updateSession } from '@/libs/supabase'

const handleI18nRouting = createMiddleware(routing)

export async function middleware(request: NextRequest) {
    const response = handleI18nRouting(request)
    // A `response` can now be passed here
    return await updateSession(request, response)
}

export const config = {
    matcher: [
        '/',
        '/(en|ko)/:path*',
    ],
}