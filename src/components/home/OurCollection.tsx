import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import collectionData from '@/textData/ourCollectionData'
import CollectionItem from './CollectionItem'

function OurCollection() {
  return (
    <section className='w-full py-28 relative'>
      <MaxWidthWrapper>
        <h2 className='heading2 md bg-gradient-to-b from-gray to-transparent font-fraunces bg-clip-text text-transparent text-center pb-8 md:pb-0 sm:text-h1 md:text-[100px] xl:text-huge asbolute'>
          our collection
        </h2>
        <div className='space-y-24 sm:space-y-0 grid sm:grid-cols-2 gap-4 lg:grid-cols-4 sm:-mt-10'>
          {collectionData.map((item) => (
            <CollectionItem
              key={item.key}
              name={item.name}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default OurCollection
