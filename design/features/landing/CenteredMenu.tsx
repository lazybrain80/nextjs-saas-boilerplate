'use client';

import Link from 'next/link';

import { ToggleMenuButton } from '@/design/components';
import { useMenu } from '@/hooks/use-menu';
import { cn } from '@/utils/helpers';

export const CenteredMenu = ({
  logo,
  children,
  rightMenu,
}: {
  logo: React.ReactNode;
  children: React.ReactNode;
  rightMenu: React.ReactNode;
}) => {
  return (
    <div className="container flex flex-wrap items-center justify-between">
      <div className="hidden gap-6 md:flex">
        {logo}
      </div>

      {children}

      <div
        className={cn('flex items-center space-x-3')}
      >
        <ul className="flex flex-row items-center gap-x-1.5 text-lg font-medium [&_li[data-fade]:hover]:opacity-100 [&_li[data-fade]]:opacity-60">
          {rightMenu}
        </ul>
      </div>
    </div>
  );
};
