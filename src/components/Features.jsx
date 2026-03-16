const services = [
  {
    icon: '📷',
    heading: 'Svadobná fotografia',
    description:
      'Zachytávam každý výnimočný moment vášho svadebného dňa s citom a profesionalitou.',
    image: 'https://loremflickr.com/800/600/wedding,photography?random=2',
    imageAlt: 'Svadobná fotografia — zachytenie výnimočných momentov svadby',
  },
  {
    icon: '👤',
    heading: 'Portrétna fotografia',
    description:
      'Profesionálne portréty pre jednotlivcov, rodiny a firemné účely.',
    image: 'https://loremflickr.com/800/600/portrait,photography?random=3',
    imageAlt: 'Portrétna fotografia — profesionálne portréty pre jednotlivcov a rodiny',
  },
  {
    icon: '🏢',
    heading: 'Komerčná fotografia',
    description:
      'Produktová a komerčná fotografia pre firmy a marketingové kampane.',
    image: 'https://loremflickr.com/800/600/commercial,photography?random=4',
    imageAlt: 'Komerčná fotografia — produktová fotografia pre firemných klientov',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Moje Služby
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ponúkam profesionálne fotografické služby na vysokej úrovni.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.heading}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 hover:border-gray-600/50 hover:shadow-xl hover:shadow-black/30"
            >
              {/* Service image */}
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Icon and heading */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl" role="img" aria-hidden="true">
                  {service.icon}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {service.heading}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
