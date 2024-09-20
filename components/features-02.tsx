import Image from 'next/image'
import FeatureImage01 from '@/public/images/J-WAFS.png'
import FeatureImage02 from '@/public/images/IFPRI.png'
import FeatureImage03 from '@/public/images/OXFORD.png'
import FeatureImage04 from '@/public/images/UAEU.png'
import FeatureImage05 from '@/public/images/CSU.png'
import FeatureImage06 from '@/public/images/food-climate-alliance-logo-gold.png'
import FeatureImage07 from '@/public/images/CJ.png'

export default function Features02() {
  return (
    <section>
      <div className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="font-mono text-2xl leading-tight md:text-4xl font-bold text-zinc-900 mb-4">A global endeavour</h2>
            <p className="text-lg text-zinc-500">The Jameel Index is developed by the FACT Alliance, a research platform of the Abdul Latif Jameel Food and Water Systems Lab (J-WAFS) at MIT, and is built by experts from global academic and research institutions specialised in agriculture, nutrition, and food systems.</p>
          </div>

          {/* First Row */}
          <div className="max-w-xs mx-auto sm:max-w-none grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <Image className="w-full h-auto object-contain" src={FeatureImage01} alt="J-WAFS logo" />
            <Image className="w-full h-auto object-contain" src={FeatureImage06} alt="FACT Alliance logo" />
          </div>

          {/* Second Row */}
          <div className="max-w-xs mx-auto sm:max-w-none grid grid-cols-3 md:grid-cols-3 gap-8 sm:gap-4 lg:gap-4">
            <Image className="w-full h-auto object-contain" src={FeatureImage02} alt="IFPRI logo" />
            <Image className="w-full h-auto object-contain" src={FeatureImage03} alt="Oxford University logo" />
            <Image className="w-full h-auto object-contain" src={FeatureImage04} alt="United Arab Emirates University logo" />
          </div>

          {/* Third Row */}
          <div className="max-w-xs mx-auto sm:max-w-none grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <Image className="w-full h-auto object-contain" src={FeatureImage05} alt="Colorado State University logo" />
            <Image className="w-full h-auto object-contain" src={FeatureImage07} alt="Community Jameel logo" />
          </div>
        </div>
      </div>
    </section>
  )
}
