import Hero from '@/components/home/Hero'
import HowItWorks from '@/components/home/HowItWorks'
import OurCollection from '@/components/home/OurCollection'
import WhyUs from '@/components/home/WhyUs'

export default function Home() {
  return (
    <main className={'min-h-screen overflow-hidden'}>
      <div>
        <Hero />
        <OurCollection />
        <WhyUs />

        <HowItWorks />
      </div>
    </main>
  )
}
