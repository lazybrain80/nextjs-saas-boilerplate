import React from 'react'

import { cn } from '@/utils/helpers'

export const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('container', className)} {...props} />
)

Container.displayName = 'Container'
