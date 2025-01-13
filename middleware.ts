import createMiddleware from "next-intl/middleware";
import { routing } from './i18n/routing';
import { type NextRequest } from 'next/server'
import { updateSession } from '@/libs/supabase'

export default createMiddleware(routing);

export const config = {
    matcher: [
        '/',
        '/(en|ko)/:path*',
    ],
};

// TODO: bug!!! middleware is not working
// export async function middleware(request: NextRequest) {
//     return await updateSession(request)
// }
