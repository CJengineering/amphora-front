export const metadata = {
  title: 'Contact | Jameel Index for Food and Trade Vulnerability',
  description: 'Get in touch with the Jameel Index team to learn more about our data, methodology, and how to use our data for your research.',
}

import ContactForm from '@/components/custom/contact-form'
import Blocks from './blocks'
import Community from './community'

export default function Home() {
  return (
    <>
      {/* Demo form */}
      <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-zinc-100 before:-z-10">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="px-4 sm:px-6">

            {/* Page header */}
            <div className="max-w-xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="font-mono text-4xl md:text-5xl font-bold text-black pb-4">Get in touch</h1>
              <p className="text-lg text-zinc-500">Do you want to partner with the Jameel Index?
                <br></br>Reach out to us for more information how you can help build the world's leading index on food and trade vulnerability.</p>
            </div>

            {/* Form */}
            <ContactForm />

          </div>
        </div>
      </section>

      {/* <Blocks /> */}
      {/* <Community />       */}
    </>
  )
}
