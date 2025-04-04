import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

import { buttonVariants, AnimatedGradientText, ReviewCard, Section } from '@/design/components'
import { LeadMain } from '@/design/features/landing'
import { ChevronRight } from '@/design/icons'
import { cn } from '@/utils/cn'

export const Lead = () => {
  const t = useTranslations('Main')
  const locale = useLocale()

  return (
    <Section className="h-max animate-gradient bg-gradient-to-r from-[#2b9cf8] via-[#7902f8] to-[#f902bb] bg-300%">
      <LeadMain
        banner={
          <Link href={`/${locale}/docs`}>
            <div className="flex items-center justify-center w-[30%] space-x-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-gray-900 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg group">
              🚀 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{' '}
              <AnimatedGradientText text={t('introducing')} />
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </div>
          </Link>
        }
        title={t.rich('title', {
          important: chunks => (
            <span className="animate-gradient bg-gradient-to-r from-[#f889da] via-[#b877fd] to-[#75bdf8] bg-clip-text text-transparent bg-300%">
              {chunks}
            </span>
          ),
        })}
        description={t('description')}
        buttons={
          <>
            <a className={buttonVariants({ size: 'lg' })} href={`/${locale}/signin`}>
              {t('primary_button')}
            </a>
          </>
        }
        review={
          <>
            <ReviewCard
              img="/images/avatars/avatar_0.jpg"
              name="존 스미스"
              desc="(IT 매니저, Tech Innovations)"
              body="이 nextjs boilerplate는 우리의 작업 방식을 근본적으로 변화시켰습니다. 데이터 공유가 직관적이고 안전해졌습니다."
            />
          </>
        }
      />
    </Section>
  )
}
