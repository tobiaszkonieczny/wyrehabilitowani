import { Phone } from "lucide-react"
import { scrollToSection } from "~/lib/scroll-utils"

export function ConditionsSection() {
  const conditions = [
    {
      category: "Fizjoterapia ortopedyczna",
      icon: "bone.svg",
      items: [
        "Bóle kręgosłupa i stawów",
        "Przeciążenia mięśni i stawów", 
        "Dyskopatia",
        "Endoprotezoplastyka",
        "Choroba zwyrodnieniowa stawów",
        "Urazy w obrębie stawu kolanowego",
        "Urazy w obrębie stawu biodrowego", 
        "Urazy w obrębie obręczy barkowej"
      ]
    },
    {
      category: "Fizjoterapia stomatologiczna",
      icon: "tooth.svg",
      items: [
        "Migreny",
        "Napięciowe bóle głowy", 
        "Bruksizm",
        "Zgrzytanie zębami",
        "Bóle żuchwy",
        "Trzaskanie i blokowanie żuchwy",
        "Zawroty głowy"
      ]
    },
    {
      category: "Masaże lecznicze",
      icon: "massage.svg",
      items: [
        "Bóle pleców",
        "Stres i napięcie",
        "Poprawa krążenia",
        "Relaksacja mięśni"
      ]
    }
  ]


  return (
    <section id="conditions" className="py-12 sm:py-16 lg:py-24 bg-[var(--bg-primary)] border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-4 sm:mb-6 px-2">
            W czym możemy Ci pomóc?
          </h2>
        </div>

        {/* Responsive grid - single column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {conditions.map((condition, index) => {
            const isLastOdd = conditions.length % 2 === 1 && index === conditions.length - 1
            return (
            <div
              key={index}
              className={`bg-white rounded-lg p-4 sm:p-6 border shadow-sm border-stone-200 ${
                isLastOdd
                  ? 'sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1rem)]'
                  : ''
              }`}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-stone-900 mb-3 sm:mb-4 flex flex-row gap-2">
                  <img src={condition.icon}></img>
                {condition.category}
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {condition.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-stone-700 flex items-start text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 bg-[var(--accent-1)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )})}
        </div>

        {/* Call to action - mobile responsive */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-stone-200 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-stone-700 mb-4 sm:mb-6 leading-relaxed">
              Problemu nie ma na liście? Bez problemu! Skontaktuj się z nami i dowiedz się jak możemy Ci pomóc.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button onClick={() => scrollToSection("contact")} className="hidden sm:flex items-center justify-center bg-[#482e0c] text-white hover:bg-[var(--accent-1)] hover:text-black px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-base font-medium transition-colors cursor-pointer">
                Kontakt
              </button>             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}