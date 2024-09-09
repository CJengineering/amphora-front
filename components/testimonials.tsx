'use client'
import Testimonial from '@/components/testimonial'
import GregImage from '@/public/images/research-team/greg-sixt.jpg'
import KenImage from '@/public/images/research-team/kenneth-strzepek.jpg'
import JoelImage from '@/public/images/advisory-committee/Joel-K-Bourne.png'
import HowardImage from '@/public/images/advisory-committee/Howard-W-Buffett.png'
import RamiImage from '@/public/images/advisory-committee/Rami-Zurayk.png'
import LinusImage from '@/public/images/advisory-committee/Linus-Mofor.png'
import TracyImage from '@/public/images/advisory-committee/Tracy-McVeigh.png'
import FrankImage from '@/public/images/experts/Frank-Nti.jpg'

export default function Testimonials() {

  const testimonials01 = [
    {
      image: FrankImage,
      name: 'Frank Nti',
      user: 'Agricultural Economist',
      link: '#0',
      content: '',
    },
    {
      image: GregImage,
      name: 'Greg Sixt',
      user: 'Project Lead',
      link: '#0',
      content: '',
    },
    {
      image: KenImage,
      name: 'Ken Strzepek',
      user: 'Technical Lead',
      link: '#0',
      content: '',
    },
    {
      image: HowardImage,
      name: 'Howard W. Buffet',
      user: 'Columnbia University',
      link: '#0',
      content: '',
    },
  ]

  const testimonials02 = [
    {
      image: LinusImage,
      name: 'Linus Mofo',
      user: 'African Climate Policy Centre',
      link: '#0',
      content: '',
    },
    {
      image: JoelImage,
      name: 'Joel K. Bourne',
      user: 'National Geographic',
      link: '#0',
      content: '',
    },
    {
      image: TracyImage,
      name: 'Track McVeigh',
      user: 'The Guardian',
      link: '#0',
      content: '',
    },
    {
      image: RamiImage,
      name: 'Rami Zurayk',
      user: 'American University of Beirut',
      link: '#0',
      content: '',
    },
  ]

  return (
    <section className="bg-zinc-800">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-zinc-200">Team</h2>
          </div>
        </div>
        <div className="max-w-[94rem] mx-auto space-y-6">
          {/* Row #1 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3">
              {/* Items */}
              {testimonials01.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            {/* <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">

              {testimonials01.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div> */}
          </div>
          {/* Row #2 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3">
              {/* Items */}
              {testimonials02.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            {/* <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]" aria-hidden="true">

              {testimonials02.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div> */}
            {/* <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll group-hover:[animation-play-state:paused]"> */}
            {/* <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]"> */}
          </div >
          <div className="relative max-w-3xl mx-auto text-center pt-3 md:pt-6">
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div>
                <a className="btn font-mono text-zinc-100 bg-blue-500 hover:bg-blue-900 w-full shadow" href="/team">MEET THE TEAM</a>
              </div>
            </div>
          </div>
        </div >
      </div >
    </section >
  )
}