import Hero from '@/components/home/Hero'
import OurCollection from '@/components/home/OurCollection'
import WhyUs from '@/components/home/WhyUs'

export default function Home() {
  return (
    <main className={'min-h-screen overflow-hidden'}>
      <div>
        <Hero />
        <OurCollection />
        <WhyUs />
        <p>asdasd</p>
      </div>
    </main>
  )
}
