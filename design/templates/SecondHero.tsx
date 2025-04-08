import { useTranslations } from 'next-intl'
import { HeroRightImage } from '@/design/features/landing'
import { buttonVariants, ReviewCard, Section } from '@/design/components'

export const SecondHero = () => {
  const t = useTranslations('SecondHero')
  return (
    <Section>
      <HeroRightImage
        imgSrc="/images/landing/second-hero-image.png"
        banner={<></>}
        title={t('title')}
        description={t('description')}
        buttons={
          <>
            <a className={buttonVariants({ size: 'lg' })} href={`/signin`}>
              {t('get_start')}
            </a>
          </>
        }
        review={
          <>
            <ReviewCard
              img="/images/avatars/avatar_1.jpg"
              name={t('reviewer_name')}
              desc={t('reviewer_position')}
              body={t('reviewer_opinion')}
            />
          </>
        }
      />
    </Section>
  )
}
