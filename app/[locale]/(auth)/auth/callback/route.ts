// ref: https://github.com/vercel/next.js/blob/canary/examples/with-supabase/app/auth/callback/route.ts

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/libs/supabase/supabase-server-client';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const localPath = requestUrl.pathname.replace('/auth/callback', '');
  const originUrl = `${requestUrl.origin}${localPath}`;
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.exchangeCodeForSession(code);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.id) {
      return NextResponse.redirect(`${originUrl}/signin`);
    }

    // Check if user is subscribed, if not redirect to pricing page
    const { data: userSubscription } = await supabase
      .from('subscriptions')
      .select('*, prices(*, products(*))')
      .in('status', ['trialing', 'active'])
      .maybeSingle();

    if (!userSubscription) {
      return NextResponse.redirect(`${originUrl}/purchase`);
    } else {
      return NextResponse.redirect(`${originUrl}`);
    }
  }

  return NextResponse.redirect(originUrl);
}
