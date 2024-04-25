import { howItWorksData } from '@/textData/howItWorksData'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import { whyUsData } from '@/textData/whyUsData'

const HowItWorks = () => {
  return (
    <section id='how-it-works'>
      <MaxWidthWrapper>
        <h3 className='text-center md:text-left heading3 text-gray font-fraunces'>
          How it works
        </h3>
        <div className=' py-10'>
          <div className='hidden md:grid md:grid-cols-3 items-center'>
            {whyUsData.map((step) => (
              <div className='flex items-center steps'>
                <div className='border-t' />
                <span className='hidden md:block w-[32px] h-[32px] border-2 border-darkCyan rounded-full'></span>
                <div className='border-t-2 border-paleOrange w-full step' />
              </div>
            ))}
          </div>
          <div className='text-darkBlue mt-10 grid md:grid-cols-3 gap-5'>
            {howItWorksData.map((step) => (
              <>
                <div
                  key={step.step}
                  className='text-center max-w-sm md:max-w-md mx-auto md:text-left'
                >
                  <h3 className='heading1 text-paleOrange font-fraunces'>
                    {step.step}
                  </h3>
                  <h2 className='text-darkBlue heading4'>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
              </>
            ))}
          </div>
          <div className='py-12 mx-auto w-fit md:mx-0'>
            <Link
              href='/plan'
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
    </section>
  )
}

export default HowItWorks
