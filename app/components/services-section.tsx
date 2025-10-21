export function ServicesSection() {
  const services = [
    "Fizjoterapia stomatologiczna",
    "Fizjoterapia ortopedyczna", 
    "Terapia blizny",
    "Masaż leczniczy",
    "Kinesiotaping",
  ]
  const icons = [
    "tooth.svg",
    "bone.svg",
    "scar.svg",
    "massage.svg",
    "taping.svg",
  ]

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-[var(--bg-primary)] border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
         <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-4 sm:mb-6 px-2">
            Czym się zajmujemy?
          </h2>
        </div>

          {/* Service chips - responsive layout */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-row gap-1 bg-white text-stone-800 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-sm sm:text-sm font-medium border border-stone-200 hover:bg-stone-200 transition-colors cursor-pointer whitespace-nowrap"
              >
                <img className="h-auto w-auto" src={icons[index]}></img>
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}