import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

interface SharedHeroProps {
  title: string
  subtitle: string
  image: string
  buttonLabel?: string
}

const SharedHero = ({
  title,
  subtitle,
  image,
  buttonLabel,
}: SharedHeroProps) => {
  return (
    <div>
      <MaxWidthWrapper>
        <div
          className={`w-full h-auto bg-${image}-hero-mobile md:bg-${image}-hero-tablet md:h-[500px] lg:bg-${image}-hero-desktop lg:h-[600px] bg-cover bg-right bg-no-repeat rounded-lg`}
        >
          <div className='text-center md:text-left flex flex-col justify-center h-full items-center md:items-start gap-6 py-14 px-6'>
            <h1 className='text-lightCream heading2 md:text-[48px] font-fraunces md:max-w-sm lg:text-h1 lg:max-w-lg'>
              {title}
            </h1>
            <p className='text-lightCream/80 font-barlow max-w-md'>
              {subtitle}
            </p>
            {/* include if buttonLabel 
            was given in props */}
            {buttonLabel && (
              <Link
                href='/plan'
                className={cn(
                  buttonVariants(),
                  'max-w-[200px] text-[16px] text-lightCream font-semibold font-fraunces py-6'
                )}
              >
                {buttonLabel}
              </Link>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default SharedHero
