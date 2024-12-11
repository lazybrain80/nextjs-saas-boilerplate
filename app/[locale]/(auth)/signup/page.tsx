import { signInWithOAuth } from '../auth-actions';
import { AuthUI } from '../auth-ui';

export default async function SignUp({
  params
}:{
  params: { locale: string };
}) {
  const { locale } = await params;

  return (
    <section className='py-xl m-auto flex h-full max-w-lg items-center'>
      <AuthUI locale={locale} mode='signup' signInWithOAuth={signInWithOAuth} />
    </section>
  );
}
