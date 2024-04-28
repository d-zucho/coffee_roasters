import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import Nav from './Nav'
import Link from 'next/link'
import MobileNav from './MobileNav'

function Header() {
  return (
    <header className='w-full'>
      <MaxWidthWrapper className='py-[45px]'>
        <div className='flex-between'>
          <div>
            <Link href='/'>
              <Image
                src='/assets/shared/desktop/logo.svg'
                alt='Logo'
                width={200}
                height={20}
              />
            </Link>
          </div>

          <div>
            <div className='hidden md:block'>
              <Nav />
            </div>
            <div className='block md:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
