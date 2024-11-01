'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeatureIllustration from '@/public/images/feature-illustration.png'
import FeatureImage01 from '@/public/images/GLOBAL_FOOD_DEMAND.png'
import FeatureImage02 from '@/public/images/SUPPLY_BALANCE.png'
import FeatureImage03 from '@/public/images/BILATERAL_TRADE.png'
import FeatureImage04 from '@/public/images/CLIMATE_CHANGE.png'

export default function Features01() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])   

  return (
    <section className="relative bg-zinc-50">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center pb-12">
            <h2 className="font-mono text-3xl md:text-3xl font-bold text-zinc-900 pb-6">Bridging knowledge gaps on how climate variability and change affect global food trade</h2>
            <p className="text-lg text-zinc-500">The Jameel Index measures countries' dependence on food and animal feed imports, in the context of a country’s ability to pay for imports, and the reliability and robustness of food trade supply chains. The Jameel Index currently analyses historical trends in food trade vulnerability at national, regional, and global scale. Future global change scenarios are coming in 2025.</p>
          </div>
          <div>
            {/* Tabs buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <button
                className={`text-left px-4 py-5 border border-transparent rounded ${tab !== 1 ? 'bg-zinc-100 opacity-60 hover:opacity-100 transition' : '[background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] shadow-sm rotate-1'}`}
                onClick={(e) => { e.preventDefault(); setTab(1); }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-mono font-semibold text-zinc-900">Global food demand</div>
                  <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== 1 ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                  </svg>
                </div>
                <div className="text-sm text-zinc-500">Measures worldwide need for food imports.</div>
              </button>
              <button
                className={`text-left px-4 py-5 border border-transparent rounded ${tab !== 2 ? 'bg-zinc-100 opacity-60 hover:opacity-100 transition' : '[background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] shadow-sm rotate-1'}`}
                onClick={(e) => { e.preventDefault(); setTab(2); }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-mono font-semibold text-zinc-900">Supply balance</div>
                  <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== 2 ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                  </svg>
                </div>
                <div className="text-sm text-zinc-500">Assesses the equilibrium between domestic demand and domestic supply and imports/exports.</div>
              </button>
              <button
                className={`text-left px-4 py-5 border border-transparent rounded ${tab !== 3 ? 'bg-zinc-100 opacity-60 hover:opacity-100 transition' : '[background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] shadow-sm rotate-1'}`}
                onClick={(e) => { e.preventDefault(); setTab(3); }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-mono font-semibold text-zinc-900">Bilateral trade</div>
                  <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== 3 ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                  </svg>
                </div>
                <div className="text-sm text-zinc-500">Tracks the imports and exports between individual countries.</div>
              </button >
              <button
                className={`text-left px-4 py-5 border border-transparent rounded ${tab !== 4 ? 'bg-zinc-100 opacity-60 hover:opacity-100 transition' : '[background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] shadow-sm rotate-1'}`}
                onClick={(e) => { e.preventDefault(); setTab(4); }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-mono font-semibold text-zinc-900">Climate change</div>
                  <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== 4 ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                  </svg>
                </div>
                <div className="text-sm text-zinc-500">Evaluates climate impacts on crop yields and the implications for food trade. (Coming in 2025)</div>
              </button >
            </div>
            {/* Tabs items */}
            <div className="relative lg:max-w-none [mask-image:linear-gradient(white_0%,white_calc(100%-40px),_transparent_calc(100%-1px))] -mx-6">
              <div className="relative flex flex-col pt-12 md:pt-20 mx-6" ref={tabs}>
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  className="w-full text-center"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-4"
                  beforeEnter={() => heightFix()}
                  unmount={false}                      
                >
                  <div className="inline-flex relative align-top">
                    <Image className="rounded" src={FeatureImage01} width={600} height={360} alt="Feature 01" />
                    {/* <Image className="absolute top-0 left-full -translate-x-[70%] -mr-20 max-md:w-[45%]" src={FeatureIllustration} width={273} height={288} alt="Illustration" aria-hidden="true" /> */}
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  className="w-full text-center"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-4"
                  beforeEnter={() => heightFix()}
                  unmount={false}                      
                >
                  <div className="inline-flex relative align-top">
                    <Image className="rounded" src={FeatureImage02} width={600} height={360} alt="Feature 02" />
                    {/* <Image className="absolute top-0 left-full -translate-x-[70%] -mr-20 max-md:w-[45%]" src={FeatureIllustration} width={273} height={288} alt="Illustration" aria-hidden="true" /> */}
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  className="w-full text-center"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-4"
                  beforeEnter={() => heightFix()}
                  unmount={false}                      
                >
                  <div className="inline-flex relative align-top">
                    <Image className="rounded" src={FeatureImage03} width={600} height={360} alt="Feature 03" />
                    {/* <Image className="absolute top-0 left-full -translate-x-[70%] -mr-20 max-md:w-[45%]" src={FeatureIllustration} width={273} height={288} alt="Illustration" aria-hidden="true" /> */}
                  </div>
                </Transition>
                {/* Item 4 */}
                <Transition
                  show={tab === 4}
                  className="w-full text-center"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-4"
                  beforeEnter={() => heightFix()}
                  unmount={false}                      
                >
                  <div className="inline-flex relative align-top">
                    <Image className="rounded" src={FeatureImage04} width={600} height={360} alt="Feature 04" />
                    {/* <Image className="absolute top-0 left-full -translate-x-[70%] -mr-20 max-md:w-[45%]" src={FeatureIllustration} width={273} height={288} alt="Illustration" aria-hidden="true" /> */}
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}