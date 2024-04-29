import MaxWidthWrapper from '../MaxWidthWrapper'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'

const Hero = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className=' w-full h-auto bg-home-hero-mobile md:bg-home-hero-tablet md:h-[500px] lg:bg-home-hero-desktop lg:h-[600px] bg-cover bg-no-repeat rounded-lg'>
          <div className='text-center md:text-left flex flex-col justify-center h-full items-center md:items-start gap-6 py-14 px-6'>
            <h1 className='text-lightCream heading2 md:text-[48px] font-fraunces md:max-w-sm lg:text-h1 lg:max-w-lg'>
              Great coffee made simple.
            </h1>
            <p className='text-lightCream/80 font-barlow max-w-md'>
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
            <Link
              href='/subscribe'
              className={cn(
                buttonVariants(),
                'max-w-[200px] text-[16px] text-lightCream font-semibold font-fraunces py-6'
              )}
            >
              Create your plan
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Hero
