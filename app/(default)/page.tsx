export const metadata = {
  title: 'Jameel Index for Food and Trade Vulnerability',
  description: 'The Jameel Index measures global food security vulnerability, dependence on global trade, and regional threats impacting trade of food goods.',
ogImage: 'https://storage.googleapis.com/cj-tech-381914-goalertbucket/JAMEEL_INDEX_OG.jpg',
}

import Hero from '@/components/hero'
import Features01 from '@/components/features-01'
import Features02 from '@/components/features-02'
import Features03 from '@/components/features-03'
import PricingTabs from '@/components/pricing-tabs'
import Testimonials from '@/components/testimonials'
import Cta from '@/components/cta'
import Accordion from '@/components/accordion'

export default function Home() {
  return (
    <>
      <Hero />
      <Features01 />
      <Features02 />
      {/* <Features03 /> */}
      {/* <Testimonials /> */}
      <Cta />
    </>
  )
}
