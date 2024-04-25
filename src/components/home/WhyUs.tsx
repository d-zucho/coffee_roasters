import { whyUsData } from '@/textData/whyUsData'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Image from 'next/image'

const WhyUs = () => {
  return (
    <section id='why-us' className='w-full border mb-20'>
      <MaxWidthWrapper className=''>
        <div className='bg-darkBlue rounded-lg text-lightCream pt-10 py-5'>
          <div className='text-center max-w-xl mx-auto space-y-10'>
            <h2 className='heading3 font-fraunces text-center'>
              Why choose us?
            </h2>
            <p>
              A large part of our role is choosing which particular coffees will
              be featured in our range. This means working closely with the best
              coffee growers to give you a more impactful experience on every
              level.
            </p>
          </div>

          <div className='text-center grid lg:grid-cols-3 gap-5 mt-10'>
            {whyUsData.map((fact) => (
              <article className='bg-darkCyan p-8 mx-auto rounded-lg flex items-center gap-10 flex-col'>
                <Image
                  src={fact.icon}
                  alt={fact.title}
                  width={50}
                  height={50}
                />
                <div className=''>
                  <h3 className='heading4 font-fraunces pb-5'>{fact.title}</h3>
                  <p className='max-w-sm'>{fact.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default WhyUs
