import { Australia, Canada, UnitedKingdom } from '@/icons/icons'
import { THeadquarter } from '@/types/aboutTypes'

interface HeadquarterCardProps {
  country: THeadquarter
}

const HeadquarterCard = ({ country }: HeadquarterCardProps) => {
  return (
    <article>
      <div className='py-10'>
        <img src={country.icon} alt='United Kingdom' />
      </div>
      <h3 className='heading4'>{country.country}</h3>
      <div className='flex flex-col text-gray pt-4'>
        <span>{country.street}</span>
        <span>{country.city}</span>
        <span>{country.code}</span>
        <span>{country.phone}</span>
      </div>
    </article>
  )
}

export default HeadquarterCard
