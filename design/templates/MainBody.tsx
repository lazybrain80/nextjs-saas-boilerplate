import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { badgeVariants, buttonVariants } from '@/design/components/ui';
import { Section, CenteredMain } from '@/design/features/landing';

export const MainBody = () => {
  const t = useTranslations('Main');

  return (
    <Section className="py-36">
      <CenteredMain
        banner={(
          <a
            className={badgeVariants()}
            href="https://twitter.com/ixartz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogoIcon className="mr-1 size-5" />
            {' '}
            {t('follow_twitter')}
          </a>
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

            <a
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              href="https://github.com/ixartz/SaaS-Boilerplate"
            >
              <GitHubLogoIcon className="mr-2 size-5" />
              {t('secondary_button')}
            </a>
          </>
        )}
      />
    </Section>
  );
};
