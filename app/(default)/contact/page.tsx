export const metadata = {
  title: 'Contact | Jameel Index for Food and Trade Vulnerability',
  description: 'Get in touch with the Jameel Index team to learn more about our data, methodology, and how to use our data for your research.',
}

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
            <div className="max-w-[25rem] mx-auto p-6 rounded-lg shadow-2xl bg-gradient-to-b from-zinc-100 to-zinc-50/70 relative before:absolute before:-top-12 before:-left-16 before:w-96 before:h-96 before:bg-zinc-900 before:opacity-[.15] before:rounded-full before:blur-3xl before:-z-10">

              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="name">Full Name</label>
                    <input id="name" className="form-input text-sm w-full" type="text" placeholder="Full name" required />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="email">Work Email</label>
                    <input id="email" className="form-input text-sm w-full" type="email" placeholder="your@email.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="channel">How did you hear about us?</label>
                    <select id="channel" className="form-select w-full" required>
                      <option>Social media</option>
                      <option>Online search</option>
                      <option>In-person</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Project Details</label>
                    <textarea id="message" className="form-textarea text-sm w-full" rows={4} placeholder="Let us know..." required></textarea>
                  </div>
                </div>
                <div className="mt-5">
                  <button className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow">Get in touch</button>
                </div>
              </form>

              <div className="text-center mt-6">
                <div className="text-xs text-zinc-500">
                  By submitting you agree we can contact you.
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* <Blocks /> */}
      {/* <Community />       */}
    </>
  )
}
