export function ConditionsSection() {
  const conditions = [
    {
      category: "Bóle kręgosłupa i stawów",
      items: [
        "Ból dolnego odcinka kręgosłupa",
        "Dyskopatia", 
        "Rwa kulszowa",
        "Bóle karku i barków",
        "Zespół cieśni nadgarstka"
      ]
    },
    {
      category: "Bóle napięciowe",
      items: [
        "Napięciowe bóle głowy",
        "Migrenowe bóle głowy", 
        "Napięcie mięśni karku",
        "Zespół górnego skrzyżowania",
        "Fibromialgia"
      ]
    },
    {
      category: "Bruksizm",
      items: [
        "Zgrzytanie zębami",
        "Zaburzenia żucia",
        "Bóle szczęki",
        "Dysfunkcja stawu skroniowo-żuchwowego",
        "Terapia TMJ"
      ]
    },
    {
      category: "Urazy sportowe",
      items: [
        "Skręcenia stawów",
        "Naciągnięcia mięśni",
        "Urazy biegowe",
        "Kontuzje piłkarskie",
        "Rehabilitacja pourazowa"
      ]
    },
    {
      category: "Rehabilitacja pooperacyjna",
      items: [
        "Po operacjach ortopedycznych",
        "Po endoprotezoplastyce",
        "Po operacjach kręgosłupa",
        "Rehabilitacja neurologiczna",
        "Terapia po udarze"
      ]
    },
    {
      category: "Problemy posturalne",
      items: [
        "Kifoza",
        "Lordoza",
        "Skolioza",
        "Płaskostopie",
        "Halluksy"
      ]
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-4 sm:mb-6 px-2">
            W czym możemy pomóc?
          </h2>
        </div>

        {/* Responsive grid - single column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {conditions.map((condition, index) => (
            <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-stone-200">
              <h3 className="text-lg sm:text-xl font-semibold text-stone-900 mb-3 sm:mb-4">
                {condition.category}
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {condition.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-stone-700 flex items-start text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 bg-stone-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to action - mobile responsive */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-stone-200 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-stone-700 mb-4 sm:mb-6 leading-relaxed">
              Problemu nie ma na liście? Bez problemu! Skontaktuj się z nami i dowiedz się jak możemy Ci pomóc
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-stone-700 hover:bg-stone-800 text-white px-6 py-3 rounded-md font-medium transition-colors text-sm sm:text-base w-full sm:w-auto">
                Skontaktuj się z nami
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}