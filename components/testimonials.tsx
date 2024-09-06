'use client'
import Testimonial from '@/components/testimonial'
import TestimonialImg01 from '@/public/images/testimonial-01.jpg'
import TestimonialImg02 from '@/public/images/testimonial-02.jpg'
import TestimonialImg03 from '@/public/images/testimonial-03.jpg'
import TestimonialImg04 from '@/public/images/testimonial-04.jpg'
import TestimonialImg05 from '@/public/images/testimonial-05.jpg'
import TestimonialImg06 from '@/public/images/testimonial-06.jpg'
import TestimonialImg07 from '@/public/images/testimonial-07.jpg'
import TestimonialImg08 from '@/public/images/testimonial-08.jpg'

export default function Testimonials() {

  const testimonials01 = [
    {
      image: TestimonialImg01,
      name: 'Chris Maynard',
      user: 'Graduate Fellow',
      link: '#0',
      content: 'Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.',
    },
    {
      image: TestimonialImg02,
      name: 'Greg Sixt',
      user: 'Technical Lead',
      link: '#0',
      content: 'Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.',
    },
    {
      image: TestimonialImg03,
      name: 'Ken Strzepek',
      user: 'Technical Lead',
      link: '#0',
      content: 'Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.',
    },
    {
      image: TestimonialImg04,
      name: 'Dana Hoag',
      user: 'Professor, Colorado State University',
      link: '#0',
      content: 'Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.',
    },
  ]

  const testimonials02 = [
    {
      image: TestimonialImg05,
      name: 'Linus Mofo',
      user: 'African Climate Policy Centre',
      link: '#0',
      content: 'Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.',
    },
    {
      image: TestimonialImg06,
      name: 'Howard W. Buffet',
      user: 'Columbia University',
      link: '#0',
      content: 'Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.',
    },
    {
      image: TestimonialImg07,
      name: 'Joel K. Bourne',
      user: 'National Geographic',
      link: '#0',
      content: 'Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.',
    },
    {
      image: TestimonialImg08,
      name: 'Rami Zurayk',
      user: 'American University of Beirut',
      link: '#0',
      content: 'Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.',
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
        </div >
      </div >
    </section >
  )
}