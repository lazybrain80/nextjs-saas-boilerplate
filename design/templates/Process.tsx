import { useTranslations } from 'next-intl';

import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/design/components/ui';
import { Section } from '@/design/features/landing';
import { cn } from "@/utils/cn";

export const Process = () => {

    return (
        <Section className='md:mb-[10rem]'>
            <div className='h-[28rem] rounded-3xl bg-violet-100 text-center items-center justify-center flex flex-col'>
                <div className="mt-1 text-5xl font-bold">
                    nextjs boilerplate 소개 및 판매
                </div>
                <div className="mt-2 text-lg text-muted-foreground">
                    nextjs boilerplate를 판매합니다. 이 프로젝트가 가진 기능을 소개하고 어떻게 설치하는지 그리고 사용하는 방법도 설명해주었으면 합니다.
                </div>
                <div className='hidden md:grid grid-cols-1 md:grid-cols-3 w-8/12 absolute space-x-5 mt-[30rem]'>
                    <Card className='h-[21rem] rounded-3xl shadow-xl'>
                        <CardHeader>
                            <CardTitle className='text-3xl mb-5'>
                                <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-4xl">
                                    <span className="text-purple-500">1</span>
                                </div>
                                기능 소개
                            </CardTitle>
                            <CardContent>
                                Next.js boilerplate의 모든 기능을 알아보고, 각 기능의 이점과 고유 판매 포인트를 확인하세요.
                            </CardContent>
                        </CardHeader>
                    </Card>
                    <Card className='h-[21rem] rounded-3xl shadow-xl'>
                        <CardHeader>
                            <CardTitle className='text-3xl mb-5'>
                                <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-4xl">
                                    <span className="text-purple-500">2</span>
                                </div>
                                설치 가이드
                            </CardTitle>
                            <CardContent>
                                Boilerplate를 설치하는 방법에 대한 단계별 가이드를 이용하여 쉽게 설치해보세요.
                            </CardContent>
                        </CardHeader>
                    </Card>
                    <Card className='h-[21rem] rounded-3xl shadow-xl'>
                        <CardHeader>
                            <CardTitle className='text-3xl mb-5'>
                                <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-4xl">
                                    <span className="text-purple-500">3</span>
                                </div>
                                사용 방법
                            </CardTitle>
                            <CardContent>
                                설치 후 Next.js boilerplate 사용법과 일반적인 사용 사례에 대한 설명을 제공합니다.
                            </CardContent>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </Section>
    );
};
