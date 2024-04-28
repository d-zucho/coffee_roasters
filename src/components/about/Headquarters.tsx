import { headquarters } from '@/textData/headquarters'
import MaxWidthWrapper from '../MaxWidthWrapper'
import HeadquarterCard from './HeadquarterCard'

const Headquarters = () => {
  return (
    <section className='my-32'>
      <MaxWidthWrapper>
        <h2 className='heading3 text-gray text-center md:text-left'>
          Headquarters
        </h2>
        <div className='flex flex-col items-center md:flex-row gap-5 justify-between'>
          {headquarters.map((location, index) => (
            <HeadquarterCard key={index} country={location} />
          ))}
        </div>
        <div></div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Headquarters
