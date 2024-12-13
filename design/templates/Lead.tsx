import { useTranslations } from 'next-intl';

import { buttonVariants, AnimatedGradientText } from '@/design/components/ui';
import { Section, LeadMain } from '@/design/features/landing';
import { ChevronRight } from "lucide-react"
import { cn } from "@/utils/cn";

export const Lead = () => {
  const t = useTranslations('Main');

  return (
    <Section className="h-max bg-gradient-to-r from-indigo-300 ">
      <LeadMain
        banner={(
          <AnimatedGradientText>
            🚀 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
              )}
            >
              {t('introducing')}
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        )}
        title={t.rich('title', {
          important: chunks => (
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {chunks}
            </span>
          ),
        })}
        description={t('description')}
        buttons={(
          <>
            <a
              className={buttonVariants({ size: 'lg' })}
              href="https://github.com/ixartz/SaaS-Boilerplate"
            >
              {t('primary_button')}
            </a>
          </>
        )}
      />
    </Section>
  );
};
