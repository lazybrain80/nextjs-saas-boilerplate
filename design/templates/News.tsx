import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Section } from '@/design/components'
import { NewsCard } from '@/design/features/landing/NewsCard'

const NewsInfo = [
    {
        date: '2023년 2월 15일',
        imgSrc: '/images/landing/news_image_0.jpg',
        title: '데이터 통합 전략 강화하기',
        content: '보안과 접근성을 보장하면서 데이터 통합 노력을 향상시키는 효과적인 기술을 발견하세요.',
        link:'/news/1'
    },
    {
        date: '2023년 2월 20일',
        imgSrc: '/images/landing/news_image_1.jpg',
        title: '클라우드에서 협업 극대화하기',
        content: '클라우드의 협업 도구를 활용하여 팀의 생산성 및 데이터 접근성을 향상시키는 방법을 배우세요.',
        link:'/news/1'
    },
    {
        date: '2023년 2월 25일',
        imgSrc: '/images/landing/news_image_2.jpg',
        title: '디지털 세계에서 데이터 보안하기',
        content: '상호 연결된 환경에서 데이터 보안을 보장하고 사용성을 최적화하기 위해 필수 전략을 탐구하세요.',
        link:'/news/1'
    },
]

export const News = () => {
    // const t = useTranslations('News')
    
    return (
        <Section
            title='최신 통찰력'
            subtitle='최신 소식'
            description='최신 디자인 및 사용자 경험 트렌드를 반영하여 작성된 기사를 탐색해 보세요. 콘텐츠를 추가하기만 하면 바로 게시할 수 있습니다.'
        >
            <div
                className='grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3'
            >
                {NewsInfo.map((news, index) => (
                    <NewsCard
                        key={index}
                        date={news.date}
                        imgSrc={news.imgSrc}
                        title={news.title}
                        content={news.content}
                        link={news.link}
                    />
                ))}
            </div>
        </Section>
    )
}