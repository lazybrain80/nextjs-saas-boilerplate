import { useTranslations } from 'next-intl';
import { Section, HeroRightImage } from '@/design/features/landing';
import { buttonVariants, ReviewCard } from '@/design/components/ui';

export const SecondHero = () => {
    return (
        <Section>
            <HeroRightImage
                imgSrc="/images/landing/second-hero-image.png"
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
                            img="/images/avatars/avatar_1.jpg"
                            name="마이클 브라운"
                            desc="(기술 솔루션 운영 이사)"
                            body="nextjs boilerplate 덕분에 우리의 개발 과정이 혁신적으로 바뀌었습니다 - 매끄럽고, 안전하며, 간단합니다!"
                        />
                    </>
                )}
            />
        </Section>
    );
};
