import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import JwafsLogo from '@/public/images/J-WAFS.png'

export default function Header() {
  return (
    <header className="absolute top-2 md:top-6 w-full z-30">
      <div className="px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between h-14 px-3">

            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              
              {/* <Link className="flex items-center justify-center" href="/">
                <Image src={Logo} width={24} height={24} alt="Logo" />
               */}
              <Link className="flex items-center justify-center" href="/">
              <p className="font-mono font-bold text-xl uppercase">Jameel Index</p>
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="flex grow">

              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link className="text-sm font-medium text-zinc-500 hover:text-zinc-900 px-3 lg:px-5 py-2 flex items-center transition" href="/team">Team</Link>
                </li>
                <li>
                  <Link className="text-sm font-medium text-zinc-500 hover:text-zinc-900 px-3 lg:px-5 py-2 flex items-center transition" href="/contact">Contact</Link>
                </li>
                <li className="ml-1">
                  <Link className="btn-sm text-zinc-100 bg-blue-600 hover:bg-zinc-800 w-full shadow" href="/score-chart">Score Chart</Link>
                </li>
                <li><Image src={JwafsLogo} width={120} height={24} alt="Logo" /></li>
              </ul>

            </nav>

          </div>
        </div>
      </div>
    </header>
  )
}
