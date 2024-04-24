import Image from 'next/image'
import React from 'react'

type CollectionItemProps = {
  name: string
  image: string
  description: string
}

const CollectionItem = ({ name, image, description }: CollectionItemProps) => {
  return (
    <article className='text-center flex flex-col max-w-sm items-center mx-auto'>
      <Image src={image} alt={name} width={225} height={170} />
      <h4 className='heading4'>{name}</h4>
      <p className=' max-w-xs'>{description}</p>
    </article>
  )
}

export default CollectionItem
