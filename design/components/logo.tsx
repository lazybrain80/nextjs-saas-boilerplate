import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href='/' className='flex items-center text-xl font-semibold'>
      <Image
        src='/logo.png'
        width={40}
        height={40}
        priority
        quality={100}
        alt='Saas Boilerplate'
      />
      <span className='font-alt text-xl text-black'>Saas Boilerplate</span>
    </Link>
  );
}
