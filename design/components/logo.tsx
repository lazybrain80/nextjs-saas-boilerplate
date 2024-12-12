import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href='/' className='flex items-center text-2xl font-semibold'>
      <Image
        className='mr-2'
        src='/icon_logo.svg'
        width={40}
        height={40}
        priority
        quality={100}
        alt='Saas Boilerplate'
      />
      <span className='font-alt text-2xl text-black'>Saas Boilerplate</span>
    </Link>
  );
}
