import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import Nav from './Nav'

function Header() {
  return (
    <header>
      <MaxWidthWrapper className='py-[45px]'>
        <div className='flex-between'>
          <Image
            src='/assets/shared/desktop/logo.svg'
            alt='Logo'
            width={200}
            height={25}
          />
          <Nav />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
