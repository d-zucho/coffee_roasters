import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import Nav from './Nav'
import Link from 'next/link'

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
                height={25}
              />
            </Link>
          </div>
          <Nav />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
