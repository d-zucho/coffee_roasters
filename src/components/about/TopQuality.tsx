import MaxWidthWrapper from '../MaxWidthWrapper'

const TopQuality = () => {
  return (
    <section className='mt-48 md:mt-60'>
      <MaxWidthWrapper className='relative'>
        <div className='bg-about-quality-mobile md:bg-about-quality-tablet lg:bg-about-quality-desktop rounded-lg bg-no-repeat object-center bg-cover p-5 lg:max-h-[375px]'>
          <div className='lg:flex lg:justify-between'>
            <div className='w-full sm:w-[85%] mx-auto relative -mt-20 sm:-mt-40 lg:-mt-40 flex-1 lg:order-2'>
              <picture className=''>
                <source
                  srcSet='/assets/about/desktop/image-quality.jpg'
                  media='(min-width: 1024px)'
                />
                <source
                  srcSet='/assets/about/tablet/image-quality.jpg'
                  media='(min-width: 768px)'
                />
                <img
                  src='/assets/about/mobile/image-quality.jpg'
                  alt='Quality above all else'
                  className='rounded-lg object-cover mx-auto w-full lg:w-5/6 lg:max-w-[400px]'
                />
              </picture>
            </div>
            <div className='text-center pt-10 lg:text-left max-w-lg mx-auto flex-1 lg:order-1'>
              <h2 className='heading4 text-white'>Uncompromising Quality</h2>
              <p className='text-lightCream/70 py-10'>
                Although we work with growers who pay close attention to all
                stages of harvest and processing, we employ, on our end, a
                rigorous quality control program to avoid over-roasting or
                baking the coffee dry. Every bag of coffee is tagged with a
                roast date and batch number. Our goal is to roast consistent,
                user-friendly coffee, so that brewing is easy and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default TopQuality
