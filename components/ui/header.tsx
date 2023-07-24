import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4" aria-label="Cruip">
              <h1 className="text-xl font-bold">PEBBL</h1>
              <img src="/pebbl.png" className="w-10 h-10" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
