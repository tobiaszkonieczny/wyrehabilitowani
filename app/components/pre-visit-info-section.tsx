import { MessageSquare, CreditCard, Clock, Phone, Globe, PersonStanding } from "lucide-react"

export function PreVisitInfoSection() {
  const infoCards = [
    {
      icon: MessageSquare,
      title: "Przypomnienie o wizycie",
      description: "Po zarezerwowaniu terminu dostaniesz SMSa przypominającego o wizycie."
    },
    {
      icon: CreditCard,
      title: "Płatność",
      description: "Zapłacić możesz na miejscu gotówką lub kartą."
    },
    {
      icon: Globe,
      title: "Rezerwacja online",
      description: "Dokument do wypełnienia elektronicznie na Booksy. Rezerwacje 24/7."
    },
    {
      icon: Phone,
      title: "Rezerwacja telefoniczna",
      description: "Zostaniesz poproszony o podanie informacji związanych z Twoim problemem zdrowotnym."
    },
    {
      icon: PersonStanding,
      title: "Pacjenci",
      description: "Przyjmujemy wyłącznie osoby dorosłe."
    }
  ]

  return (
    <section id="pre-visit-info" className="bg-[#f6efe7] py-12 sm:py-16 lg:py-24 border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
            Informacje przed wizytą
          </h2>
          <p className="text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto">
            Wszystko co musisz wiedzieć przed swoją wizytą
          </p>
        </div>

        {/* Info Cards */}
<div className="flex flex-wrap justify-center gap-6 sm:gap-8">
  {infoCards.map((card, index) => {
    const IconComponent = card.icon
    return (
      <div 
        key={index}
        className="flex flex-col justify-between bg-white p-6 lg:p-8 rounded-lg border border-stone-200 hover:shadow-lg transition-shadow w-full sm:w-1/2 lg:w-1/3 max-w-sm"
      >
        <div className="flex flex-col items-center text-center space-y-4 flex-1">
          <div className="w-12 h-12 bg-[#482e0c] rounded-lg flex items-center justify-center">
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-stone-900">
            {card.title}
          </h3>
          <p className="text-stone-700 leading-relaxed">
            {card.description}
          </p>
        </div>
      </div>
    )
  })}
</div>


      </div>
    </section>
  )
}