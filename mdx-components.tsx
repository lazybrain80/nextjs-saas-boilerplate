import type { MDXComponents } from 'mdx/types';
import Image from 'next/image'
import { MdxCard } from '@/design/components'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    blockquote: (props: any) => <blockquote className='border-l-4 pl-4 italic my-4' {...props} />,
    code: (props: any) => <code className='rounded p-1' {...props} />,
    Card: MdxCard,
    Image,
    ...components,
  };
}