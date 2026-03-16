export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Martin Novák{' '}
              <span className="text-blue-400">— Fotograf</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed">
              Zachytávam momenty, ktoré zostanú navždy. Profesionálna fotografia pre svadby, portréty a komerčné projekty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#features"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                Zobraziť práce
              </a>
              <a
                href="#contact"
                className="inline-block border border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/5"
              >
                Kontaktovať
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-3xl -z-10 scale-95" />
              <img
                src="https://loremflickr.com/1200/800/photography,portrait?random=1"
                alt="Profesionálna portrétna fotografia od Martina Nováka"
                className="w-full rounded-2xl shadow-2xl shadow-black/50 object-cover aspect-[3/2]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
