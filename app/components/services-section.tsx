export function ServicesSection() {
  const services = [
    "Terapia manualna",
    "Masaż leczniczy", 
    "Kinesiotaping",
    "Fizjoterapia neurologiczna",
    "Rehabilitacja ortopedyczna",
    "Dry needling"
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-4 sm:mb-6 px-4">
            Czym się zajmujemy?
          </h2>

          {/* Service chips - responsive layout */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-stone-100 text-stone-800 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium border border-stone-200 hover:bg-stone-200 transition-colors cursor-pointer whitespace-nowrap"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}