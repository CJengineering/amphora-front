import Image from 'next/image'
import AnaImage from '@/public/images/advisory-committee/Ana-Bucher.png'
import CedricImage from '@/public/images/advisory-committee/Cedric-Pene.jpg'
import ChristianImage from '@/public/images/advisory-committee/Christian-Man.jpg'
import HowardImage from '@/public/images/advisory-committee/Howard-W-Buffett.png'
import JoelImage from '@/public/images/advisory-committee/Joel-K-Bourne.png'
import LinusImage from '@/public/images/advisory-committee/Linus-Mofor.png'
import NizarImage from '@/public/images/advisory-committee/Nizar-Zaied.jpg'
import RamiImage from '@/public/images/advisory-committee/Rami-Zurayk.png'
import ReinetteImage from '@/public/images/advisory-committee/Reinette-Van-der-Merwe.png'
import TracyImage from '@/public/images/advisory-committee/Tracy-McVeigh.png'
import GregImage from '@/public/images/research-team/greg-sixt.jpg'
import KenImage from '@/public/images/research-team/kenneth-strzepek.jpg'
import DanaImage from '@/public/images/experts/Dana-Hoag.jpg'
import FrankImage from '@/public/images/experts/Frank-Nti.jpg'
import FranziskaImage from '@/public/images/experts/Franziska-Schuenemann.jpg'
import JamesImage from '@/public/images/experts/James-Neumann.jpg'
import JenniferImage from '@/public/images/experts/Jennifer-Morris.jpg'
import MarkImage from '@/public/images/experts/Mark-Rosegrant.jpg'
import TehminaImage from '@/public/images/experts/Tehmina-Kahn.jpg'
import WillImage from '@/public/images/experts/Will-Masters.jpg'
import ChrisImage from '@/public/images/research-team/chris-maynard.jpg'
import ShigieSyang from '@/public/images/experts/Shigie_Syang.jpg'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Team | Jameel Index for Food Trade and Vulnerability',
  description: 'Description of the team page',
}




  export default function Hero() {
    return (
        <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-zinc-100 before:-z-10">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="px-4 sm:px-6">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-mono text-4xl md:text-5xl font-bold text-black pb-4">
                Team</h1>
              <p className="text-lg text-zinc-500">The Jameel Index was developed and built by a team of global experts in food systems, agriculture, nutrition and economics from some of the world's leading academic institutions and international organisations. </p>
            </div>
         </div>  
         </div> 

{/* Advisory committee */}

<div className="pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="pb-6"><h2 className="font-mono text-center text-2xl font-bold text-black pb-3">Advisory Committee</h2></div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-16 text-center">
            {/* Item #1 */}
            <div>
              <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={JoelImage} alt="Hero" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Joel K. Bourne</h3>
              <p className="text-sm text-zinc-500">Author and journalist, National Geographic</p>
            </div>

            <div>
              <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={AnaImage} alt="Hero" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Ana Bucher</h3>
              <p className="text-sm text-zinc-500">Environment, Natural Resource, and Blue Economy Global Practice of the World Bank Group</p>
            </div>

            <div>
              <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={ChristianImage} alt="Hero" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Christian Man</h3>
              <p className="text-sm text-zinc-500">Independent Advisor, Global Agriculture and Food Systems</p>
            </div>

            <div>
              <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={HowardImage} alt="Hero" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Howard W. Buffet</h3>
              <p className="text-sm text-zinc-500">Columbia University&rsquo;s School of International and Public Affairs</p>
            </div>

            <div>
              <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={LinusImage} alt="Hero" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Linus Mofor</h3>
              <p className="text-sm text-zinc-500">African Climate Policy Centre</p>
            </div>

            <div>
              <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={CedricImage} alt="Hero" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Cédric Pené</h3>
              <p className="text-sm text-zinc-500">World Trade Organization</p>
            </div>

            <div>
              <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={NizarImage} alt="Hero" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Nizar Zaied</h3>
              <p className="text-sm text-zinc-500">Islamic Development Bank</p>
            </div>

            <div>
              <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={RamiImage} alt="Hero" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Rami Zurayk</h3>
              <p className="text-sm text-zinc-500">American University of Beirut</p>
            </div>

            <div>
              <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={ReinetteImage} alt="Hero" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Reinette Van der Merwe</h3>
              <p className="text-sm text-zinc-500">First Capital Bank Botswana</p>
            </div>

            <div>
              <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={TracyImage} alt="Hero" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Tracy McVeigh</h3>
              <p className="text-sm text-zinc-500">The Guardian</p>
            </div>

          </div>
          <div className="grid grid-cols-12 border-t border-zinc-200 mt-12"></div>
        </div>
      </div>

{/* Research team */}

         <div className="pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-4">
            <div className="pb-6"><h2 className="font-mono text-center text-2xl font-bold text-black pb-3">Experts methodology review panel</h2></div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-16 text-center">
            {/* Item #1 */}
            <div>
            <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={DanaImage} alt="Dana Hoag< headshot" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Dana Hoag</h3>
              <p className="text-sm text-zinc-500">Agricultural and Resource Economics Professor, Colorado State University</p>
            </div>

            <div>
            <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={TehminaImage} alt="Tehmina Shaukat Khan headshot" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Tehmina Shaukat Khan</h3>
              <p className="text-sm text-zinc-500">Lead Country Economist and Program Leader, World Bank</p>
            </div>

            <div>
            <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={ChristianImage} alt="Christian Man headshot" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Christian Man</h3>
              <p className="text-sm text-zinc-500">Independent Advisor, Global Agriculture and Food Systems</p>
            </div>
            

            <div>
            <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={WillImage} alt="Will Masters headshot" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Will Masters</h3>
              <p className="text-sm text-zinc-500">Professor, Friedman School of Nutrition Science and Policy, Tufts University</p>
            </div>
            
            <div>
            <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={JenniferImage} alt="Jennifer Morris headshot" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Jennifer Morris</h3>
              <p className="text-sm text-zinc-500">Principal Research Scientist, MIT Joint Program on the Science and Policy of Global Change</p>
            </div>
            

            <div>
            <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={JamesImage} alt="James Neumann headshot" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">James Neumann</h3>
              <p className="text-sm text-zinc-500">Principal, Industrial Economics Incorporated</p>
            </div>
            
            
            <div>
            <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={FrankImage} alt="Frank Nti headshot" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Frank Nti</h3>
              <p className="text-sm text-zinc-500">Agricultural Economist</p>
            </div>
            

            <div>
            <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={CedricImage} alt="Greg Sixt headshot" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Cédric Pené</h3>
              <p className="text-sm text-zinc-500">Counsellor, Agriculture and Commodities Division, World Trade Organization</p>
            </div>
            

            <div>
            <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={MarkImage} alt="Mark Rosegrant headshot" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Mark Rosegrant</h3>
              <p className="text-sm text-zinc-500">Research Fellow Emeritus, International Food Policy Research Institute (IFPRI)</p>
            </div>
            

            <div>
            <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={FranziskaImage} alt="Franziska Schünemann headshot" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Franziska Schünemann</h3>
              <p className="text-sm text-zinc-500">Professor Doctor, Chair of Bioeconomy and Computational Science Hub, Institute of Economics, University of Hohenheim</p>
            </div>
            

            <div>
            <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
               <Image className="rounded-full" src={ShigieSyang} alt="Shigie Syang headshot" priority /> 
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Shigie Yang</h3>
              <p className="text-sm text-zinc-500">Economist, World Bank</p>
            </div>
          </div>
          <div className="grid grid-cols-12 border-t border-zinc-200 mt-12"></div>
        </div>
      </div>

      {/* Experts */}


      <div className="pb-12 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-4">
            <div className="pb-6"><h2 className="font-mono text-center text-2xl font-bold text-black pb-3">Research team</h2></div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-16 text-center">
            {/* Item #1 */}
            <div>
            <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={GregImage} alt="Greg Sixt headshot" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Greg Sixt</h3>
              <p className="text-sm text-zinc-500">Project Lead</p>
            </div>
            {/* Item #2 */}
            <div>
            <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={KenImage} alt="Ken Strzepek headshot" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Ken Strzepek</h3>
              <p className="text-sm text-zinc-500">Technical Lead</p>
            </div>
            {/* Item #3 */}
            <div>
            <div className="w-28 h-28 inline-flex items-center justify-center mb-3">
              <Image className="rounded-full" src={ChrisImage} alt="Chris Maynard headshot" priority />
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Chris Maynard</h3>
              <p className="text-sm text-zinc-500">Research assistant</p>
            </div>
          </div>
          {/* <div className="grid grid-cols-12 border-t border-zinc-200 mt-12"></div> */}
        </div>

      </div>
      <div className="pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-4">
      <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-16 text-center">
          <div className="pb-3 text-left">
            <h3 className="font-mono text-lg font-bold pb-6">International Food Policy Research Insitute (IFPRI)</h3>
          <ul>
            <li className="pb-3"><h4>Keith Wiebe, Project Lead for IFPRI</h4></li>
            <li className="pb-3"><h4>Sherwin Gabriel, Economist</h4></li>
            <li className="pb-3"><h4>Faaiqa Hartley, Economist</h4></li>
            <li className="pb-3"><h4>Rehab Osman, Macroeconomic Modeler</h4></li>
            <li className="pb-3"><h4>Ricky Robertson, Crop Modeler</h4></li>
            <li className="pb-3"><h4>Tim Sulser, Economist</h4></li>
            <li className="pb-3"><h4>Tim Thomas, Economist</h4></li>
            <li className="pb-3"><h4>Dirk Willenbockel, Macroeconomic Modeler</h4></li>
          </ul>
          </div>

          <div className="pb-3 text-left">
            <h3 className="font-mono text-lg font-bold pb-6">University of Oxford Martin School</h3>
          <ul>
            <li className="pb-3"><h4>Jim Hall, Project Lead for University of Oxford</h4></li>
            <li className="pb-3"><h4>Sir Charles Godfray, Senior Advisor</h4></li>
            <li className="pb-3"><h4>Anna Murgatroyd, Crop Modeler</h4></li>
            <li className="pb-3"><h4>Jasper Verschuur, Infrastructure Modeler</h4></li>
          </ul>
          </div>

          <div className="pb-3 text-left">
            <h3 className="font-mono text-lg font-bold pb-6">Ethiopian Institute for Agriculture Research (EIAR)</h3>
          <ul>
            <li className="pb-3"><h4>Girma Mamo, Project Lead for EIAR</h4></li>
            <li className="pb-3"><h4>Tadese Anberbir Aweke, Senior ICT and Digitalization Expert</h4></li>
            <li className="pb-3"><h4>Samuel Diro Chalkaba, Economist</h4></li>
            <li className="pb-3"><h4>Abu Tolcha Gari, Climate Change Modeler</h4></li>
            <li className="pb-3"><h4>Tadele Mamom, Economist</h4></li>
            <li className="pb-3"><h4>Tesfaye Solomon Eshetu, Economist</h4></li>
          </ul>
          </div>


          <div className="pb-3 text-left">
            <h3 className="font-mono text-lg font-bold pb-6">United Arab Emirates University</h3>
          <ul>
            <li className="pb-3"><h4>Eihab Fathelrahman, Agricultural Trade Modeler</h4></li>
            <li className="pb-3"><h4>Raeda Osman, Graduate Fellow</h4></li>
          </ul> 
          </div>

          
          <div className="pb-3 text-left">
            <h3 className="font-mono text-lg font-bold pb-6">Colorado State University</h3>
          <ul>
            <li className="pb-3"><h4>Dana Hoag, Senior Advisor</h4></li>
          </ul> 
          </div>
       </div>
      </div>
      </div>


        </section>
    );
  }