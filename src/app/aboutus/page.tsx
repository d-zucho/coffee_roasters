import SharedHero from '@/components/SharedHero'
import AboutHero from './AboutHero'
import OurCommitment from '@/components/about/OurCommitment'
import TopQuality from '@/components/about/TopQuality'

const aboutTitle = 'About Us'
const aboutSubtitle =
  'Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.'

const page = () => {
  return (
    <div>
      <SharedHero title={aboutTitle} subtitle={aboutSubtitle} image='about' />
      <OurCommitment />
      <TopQuality />
    </div>
  )
}

export default page
