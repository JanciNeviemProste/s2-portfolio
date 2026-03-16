import { useState } from 'react'

const navLinks = [
  { label: 'Domov', href: '#hero' },
  { label: 'Služby', href: '#features' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="text-white font-bold text-xl tracking-tight hover:text-blue-400 transition-all duration-300">
            Martin Fotograf
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-gray-800 transition-all duration-300"
            aria-label="Otvoriť menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-all duration-300 py-2 px-2 rounded-lg hover:bg-gray-800 font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
