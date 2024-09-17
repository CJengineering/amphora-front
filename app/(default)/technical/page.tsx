import Accordion from '@/components/accordion'
import React from 'react'

export default function page() {
  return (
    <section>
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="font-mono text-2xl leading-tight md:text-4xl font-bold text-zinc-900 mb-4">In collaboration with</h2>
          <p className="text-lg text-zinc-500">The Jameel Index is developed by the FACT Alliance, a research platform of the Abdul Latif Jameel Food and Water Systems Lab (J-WAFS) at MIT and is built by experts from global academic and research institutions specialised in agriculture, nutrition, and food systems.</p>
        </div>
        
        <div className=" ">
            <Accordion  title={''} id={''} >
                <div slot="title">J-WAFS logo</div>
                <div slot="content">
                    <img src="/images/J-WAFS.png" alt="J-WAFS logo" />
                </div>
            </Accordion>
            <Accordion  title={''} id={''} >
                <div slot="title">J-WAFS logo</div>
                <div slot="content">
                    <img src="/images/J-WAFS.png" alt="J-WAFS logo" />
                </div>
            </Accordion>
            <Accordion  title={''} id={''} >
                <div slot="title">J-WAFS logo</div>
                <div slot="content">
                    <img src="/images/J-WAFS.png" alt="J-WAFS logo" />
                </div>
            </Accordion>
            <Accordion  title={''} id={''} >
                <div slot="title">J-WAFS logo</div>
                <div slot="content">
                    <img src="/images/J-WAFS.png" alt="J-WAFS logo" />
                </div>
            </Accordion>
       
       
        </div>
      </div>
    </div>
  </section>
  )
}
