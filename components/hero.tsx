import Link from 'next/link'
import Image from 'next/image'
import HeroImage from '@/public/images/JAMEEL_INDEX_HERO_IMAGE.png'
import Stats from '@/components/stats'

export default function Hero() {
  return (
    <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-zinc-100 before:-z-10">
      <div className="pt-32 pb-12 md:pt-32 md:pb-20">
        {/* Section content */}
        <div className="px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
              <div className="text-center pb-12 md:pb-0">
              <h1 className="font-mono text-4xl sm:text-7xl font-bold text-black pb-4 leading-none">
  <span className="block">JAMEEL INDEX</span>
  <span className="font-mono text-2xl mt-0 block">FOR FOOD TRADE AND VULNERABILITY</span>
</h1>

      <p className="text-lg sm:text-2xl text-zinc-500 mb-3 sm:mb-8">
                Founded by the Abdul Latif Jameel Water and Food Systems Lab at MIT (J-WAFS) in partnership with the FACT Alliance and Community Jameel, the Jameel Index measures global food security vulnerability, dependence on global trade, and regional threats impacting food goods' trade.
                </p>
                
              </div>
          
          </div>
          <div className="max-w-6xl mx-auto sm:px-0 flex justify-center pb-12 md:pb-9 relative before:absolute before:-top-12 before:w-96 before:h-96 before:bg-zinc-900 before:opacity-[.15] before:rounded-full before:blur-3xl before:-z-10">
            <Link href="/score-chart" className='hover:cursor-pointer'>
            <Image className="" src={HeroImage} alt="Hero" priority />
            </Link>
          </div>

          <div className="relative max-w-3xl mx-auto text-center pt-3 md:pt-6">
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div>
                <a className="btn text-base sm:text-2xl font-mono text-zinc-100 bg-blue-500 hover:bg-blue-900 w-full shadow" href="/score-chart">EXPLORE</a>
              </div>
            </div>
          </div>
        </div>
        {/* Image */}


        {/* Stats */}
        {/* <Stats /> */}

      </div>
    </section>
  )
}