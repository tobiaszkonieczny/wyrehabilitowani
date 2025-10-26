import { FileText, Search, Activity, Target } from "lucide-react"

export function FirstVisitSection() {
  const visitSteps = [
    {
      icon: FileText,
      title: "Dokładny wywiad",
      description: "Poznamy Twoją historię zdrowia i obecne dolegliwości."
    },
    {
      icon: Search,
      title: "Analiza dokumentacji medycznej",
      description: "Przeanalizujemy posiadaną dokumentację (MRI, RTG, USG)."
    },
    {
      icon: Activity,
      title: "Badanie manualne i testy funkcjonalne",
      description: "Zabierz ze sobą wygodny strój (koszulka i krótkie spodenki)."
    },
    {
      icon: Target,
      title: "Odpowiednio dobrana terapia",
      description: "Określenie planu dalszego działania oraz wskazówki do autoterapii."
    }
  ]

  return (
    <section id="first-visit" className="bg-[var(--bg-primary)] py-12 sm:py-16 lg:py-24 border-b border-stone-300 faded-background-image-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
            Pierwsza wizyta
          </h2>
          <p className="text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto">
            Poznaj przebieg pierwszej wizyty w naszym gabinecie
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {visitSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div 
                key={index}
                className="bg-white p-6 lg:p-8 rounded-lg border border-stone-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#482e0c] rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-stone-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}