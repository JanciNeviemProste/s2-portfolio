import { useState } from 'react'

const initialFormState = {
  meno: '',
  email: '',
  predmet: '',
  sprava: '',
}

const contactInfo = [
  { icon: '📧', label: 'martin.fotograf@email.sk', href: 'mailto:martin.fotograf@email.sk' },
  { icon: '📞', label: '+421 900 123 456', href: 'tel:+421900123456' },
  { icon: '📍', label: 'Bratislava, Slovensko', href: null },
  { icon: '🕐', label: 'Pondelok–Piatok: 9:00–18:00', href: null },
]

const inputClass =
  'bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full transition-all duration-200 placeholder-gray-500'

export default function Contact() {
  const [form, setForm] = useState(initialFormState)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setForm(initialFormState)
  }

  return (
    <section id="contact" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kontakt
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Rád si vypočujem váš projekt a navrhnem riešenie na mieru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-8 text-center">
                <p className="text-2xl mb-2">✅</p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Správa odoslaná!
                </h3>
                <p className="text-gray-400">
                  Ďakujem za váš záujem. Ozvem sa vám čo najskôr.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-blue-400 hover:text-blue-300 transition-all duration-200 text-sm"
                >
                  Odoslať ďalšiu správu
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div>
                  <label
                    htmlFor="meno"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Meno
                  </label>
                  <input
                    id="meno"
                    type="text"
                    name="meno"
                    value={form.meno}
                    onChange={handleChange}
                    placeholder="Vaše celé meno"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="vas@email.sk"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="predmet"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Predmet
                  </label>
                  <input
                    id="predmet"
                    type="text"
                    name="predmet"
                    value={form.predmet}
                    onChange={handleChange}
                    placeholder="O čom chcete písať?"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="sprava"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Správa
                  </label>
                  <textarea
                    id="sprava"
                    name="sprava"
                    value={form.sprava}
                    onChange={handleChange}
                    placeholder="Opíšte váš projekt alebo dotaz..."
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-500/25 mt-2"
                >
                  Odoslať správu
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Kontaktné informácie
              </h3>
              <ul className="flex flex-col gap-5">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0" role="img" aria-hidden="true">
                      {item.icon}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-all duration-300 leading-relaxed"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-gray-300 leading-relaxed">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
              <p className="text-blue-300 text-sm leading-relaxed">
                Pre rýchle rezervácie a otázky neváhajte zavolať alebo napísať. Odpoviem vám do 24 hodín.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
