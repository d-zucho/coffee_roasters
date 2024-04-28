import MaxWidthWrapper from '@/components/MaxWidthWrapper'

const AboutHero = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className=' w-full h-auto bg-about-hero-mobile md:bg-about-hero-tablet md:h-[500px] xl:bg-about-hero-desktop lg:h-[600px] bg-cover bg-right bg-no-repeat rounded-lg'>
          <div className='text-center md:text-left flex flex-col justify-center h-full items-center md:items-start gap-6 py-14 px-6'>
            <h1 className='text-lightCream heading2 md:text-[48px] font-fraunces md:max-w-sm lg:text-h1 lg:max-w-xl'>
              About Us
            </h1>
            <p className='text-lightCream/80 font-barlow max-w-md'>
              Coffeeroasters began its journey of exotic discovery in 1999,
              highlighting stories of coffee from around the world. We have
              since been dedicated to bring the perfect cup - from bean to brew
              - in every shipment.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default AboutHero
