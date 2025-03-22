import { useTranslations } from 'next-intl'
import { HeroLeftImage } from '@/design/features/landing'
import { 
    buttonVariants, 
    Section, 
    ReviewCard 
} from '@/design/components'

export const FirstHero = () => {
    const t = useTranslations('FirstHero')
    return (
        <Section>
            <HeroLeftImage
                imgSrc='/images/landing/first-hero-image.png'
                banner={(<></>)}
                title={t('title')}
                description={t('description')}
                buttons={(
                    <>
                        <a
                            className={buttonVariants({ size: 'lg' })}
                            href={`/signin`}
                        >
                            {t('get_start')}
                        </a>
                    </>
                )}
                review={(
                    <>
                        <ReviewCard
                            img='/images/avatars/avatar_2.jpg'
                            name={t('reviewer_name')}
                            desc={t('reviewer_position')}
                            body={t('reviewer_opinion')}
                        />
                    </>
                )}
            />
        </Section>
    )
}
