import Image from 'next/image'
import MaxWidthWrapper from '../MaxWidthWrapper'

const OurCommitment = () => {
  return (
    <section className='mt-20'>
      <MaxWidthWrapper>
        {/* WRAPPER -- FLEX CONTAINER */}
        <div className='md:flex md:justify-between ,items-center gap-10 lg:gap-20 mx-auto w-fit'>
          {/* LEFT COLUMN */}
          <div className='h-[500px] max-w-[400px] flex-1 mx-auto flex items-center'>
            <Image
              src={'/assets/about/mobile/image-commitment.jpg'}
              alt='Our commitment'
              width={412}
              height={500}
              className='rounded-lg'
            />
          </div>
          {/* RIGHT COLUMN */}
          <div className='flex-1 pt-5 md:pt-0 flex justify-center items-center flex-col text-center md:text-left mx-auto'>
            <div className=''>
              <h2 className='heading4 text-darkBlue pb-5'>Our Commitment</h2>
              <p className='text-gray max-w-lg mx-auto'>
                We’re built on a simple mission and a commitment to doing good
                along the way. We want to make it easy for you to discover and
                brew the world’s best coffee at home. It all starts at the
                source. To locate the specific lots we want to purchase, we
                travel nearly 60 days a year trying to understand the challenges
                and opportunities in each of these places. We collaborate with
                exceptional coffee growers and empower a global community of
                farmers through with well above fair-trade benchmarks. We also
                offer training, support farm community initiatives, and invest
                in coffee plant science. Curating only the finest blends, we
                roast each lot to highlight tasting profiles distinctive to
                their native growing region.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default OurCommitment
