import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { scrollToSection } from "~/lib/scroll-utils"

export function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Dlaczego warto wybrać nasz gabinet?",
      answer: "W naszym gabinecie poświęcamy dużo czasu na dokładny wywiad i badanie funkcjonalne, aby dokładnie zrozumieć źródło problemu. Każda terapia rozpoczyna się szczegółową rozmową o Twoich dolegliwościach, stylu życia i dotychczasowym leczeniu. Dzięki temu dobieramy indywidualny plan terapii, który jest skuteczny, bezpieczny i dopasowany do Twoich potrzeb."
    },
    {
      question: "Gdzie znajduje się nasz gabinet?",
      answer: "Gabinet znajduje się w ośrodku zdrowia NZOZ LUPUS na pierwszym piętrze, przy ul. Tysiąclecia 25 w Turzy Śląskiej. Ośrodek nie posiada windy."
    },
    {
      question: "Czy fizjoterapia boli?",
      answer: "Fizjoterapia nie powinna boleć, ale czasem możesz odczuć lekki dyskomfort, szczególnie gdy pracujemy z napiętymi mięśniami lub po urazach. Naszym celem nie jest wywołanie bólu, lecz poprawa funkcji i komfortu w bezpieczny sposób."
    },
    {
      question: "Czy potrzebuję skierowania od lekarza?",
      answer: "Nie, w gabinecie przyjmujemy bez skierowania od lekarza."
    },
    {
      question: "Jak przygotować się do wizyty?",
      answer: "Najlepiej zabierz ze sobą wygodny strój - koszulkę, krótkie spodenki jeśli przychodzisz z problemem w obrębie kończyn dolnych. Koniecznie zabierz ze sobą pozytywne nastawienie!"
    },
    {
      question: "Czy można płacić gotówką/kartą?",
      answer: "Tak, w naszym gabinecie zapłacisz tak jak Ci wygodnie - gotówką lub kartą."
    },
    {
      question: "Czy rehabilitacja jest na NFZ?",
      answer: "Nie, rehabilitacja nie jest świadczona w ramach usług NFZ."
    },
     {
      question: "Czy zajmujemy się fizjoterapią dzieci?",
      answer: "Nie, gabinet specjalizuje się w fizjoterapii osób dorosłych."
    },

  ]

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <section id="faq" className="bg-[#f6efe7] py-12 sm:py-16 lg:py-24 border-b border-stone-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-[#482e0c] mr-3" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900">
              FAQ
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto">
            Najczęściej zadawane pytania o naszą fizjoterapię
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg border-2 shadow-sm overflow-hidden transition-all duration-400 ease-in-out hover:shadow-lg ${
                openItem === index 
                  ? 'border-[#482e0c] shadow-md' 
                  : 'border-stone-200'
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className={`w-full px-6 py-4 lg:px-8 lg:py-6 text-left flex items-center justify-between transition-all duration-400  ${
                  openItem === index 
                    ? 'bg-[var(--accent-1)] text-white' 
                    : 'hover:bg-stone-50 text-stone-900'
                }`}
                aria-expanded={openItem === index}
              >
                <h3 className="text-lg sm:text-xl font-semibold pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <div className={`transform transition-transform duration-300 ${openItem === index ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDown className={`w-5 h-5 ${openItem === index ? 'text-white' : 'text-stone-500'}`} />
                  </div>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 lg:px-8 lg:pb-6 pt-0">
                  <div className="border-t border-stone-100 pt-4">
                    <p className="text-stone-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-white p-6 lg:p-8 rounded-lg border border-stone-200 shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold text-stone-900 mb-2">
              Nie znalazłeś odpowiedzi na swoje pytanie?
            </h3>
            <p className="text-stone-600 mb-6">
              Przejdź do sekcji kontakt, gdzie znajdziesz wszystkie sposoby na skontaktowanie się z nami.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="cursor-pointer inline-flex items-center justify-center px-8 py-3 bg-[#482e0c] text-white rounded-lg hover:bg-[var(--accent-1)] hover:text-black transition-colors font-medium text-lg"
            >
              Przejdź do kontaktu
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}