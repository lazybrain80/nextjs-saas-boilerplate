import { useTranslations } from 'next-intl';
import { Section, HeroLeftImage } from '@/design/features/landing';
import { buttonVariants, ReviewCard } from '@/design/components/ui';
import Image from 'next/image';


export const FirstHero = () => {

    return (
        <Section>
            <HeroLeftImage
                imgSrc="/images/landing/first-hero-image.png"
                banner={(<></>)}
                title="nextjs boilerplate 소개 및 판매"
                description="nextjs boilerplate를 판매합니다. 이 프로젝트가 가진 기능을 소개하고 어떻게 설치하는지 그리고 사용하는 방법도 설명해주었으면 합니다."
                buttons={(
                    <>
                        <a
                            className={buttonVariants({ size: 'lg' })}
                            href={`/signin`}
                        >
                            {'무료 평가판 시작하기'}
                        </a>
                    </>
                )}
                review={(
                    <>
                        <ReviewCard
                            img="/images/avatars/avatar_2.jpg"
                            name="에밀리 존슨"
                            desc="(크리에이티브 솔루션즈 프로젝트 매니저)"
                            body="nextjs boilerplate는 혁신적입니다! 우리의 데이터 프로세스를 신속하게 간소화했습니다!"
                        />
                    </>
                )}
            />
        </Section>
    );
};
