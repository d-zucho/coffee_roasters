'use client'
import { useMediaQuery } from 'usehooks-ts'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'

const Hero = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1023px)')
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  const size = isMobile
    ? 'mobile'
    : isTablet
    ? 'tablet'
    : isDesktop
    ? 'desktop'
    : 'desktop'

  const image = `/assets/home/${size}/image-hero-coffeepress.jpg`

  return (
    <div>
      <MaxWidthWrapper>
        {/* <picture>
          <source
            media='(max-width: 768px)'
            srcSet='/assets/home/mobile/image-hero-coffeepress.jpg'
          />
          
          <source
            media='(min-width: 769px) and (max-width: 1023px)'
            srcSet='/assets/home/tablet/image-hero-coffeepress.jpg'
          />
          <Image
            src={'/assets/home/desktop/image-hero-coffeepress.jpg'}
            alt='hero'
            fill
          />
        </picture> */}
        <div className=' w-full h-[350px] bg-home-hero-mobile md:bg-home-hero-tablet md:h-[500px] lg:bg-home-hero-desktop lg:h-[600px] bg-cover bg-no-repeat rounded-lg'>
          <div className='text-center flex flex-col  content-center'>
            <h1 className='text-lightCream heading2 font-fraunces'>
              Great coffee made simple.
            </h1>
            <p className='text-lightCream/80 font-barlow max-w-lg mx-auto'>
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Hero
