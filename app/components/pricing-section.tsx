import { CreditCard, CheckCircle } from "lucide-react"

export function PricingSection() {
  const services = [
    {
      name: "Fizjoterapia stomatologiczna",
      price: "170 zł",
      description: "Terapia problemów związanych z żuchwą, bruksizmem i bólami głowy."
    },
    {
      name: "Fizjoterapia ortopedyczna", 
      price: "170 zł",
      description: "Terapia bólów kręgosłupa, stawów i problemów mięśniowo-szkieletowych."
    },
    {
      name: "Masaż leczniczy", 
      price: "150 zł",
      description: "Zmniejszenie dolegliwości bólowych oraz napięcia w obrębie pleców, kończyn dolnych i górnych."
    },
  ]

  return (
    <section id="pricing" className="bg-[var(--bg-primary)] py-12 sm:py-16 lg:py-24 border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
            Cennik
          </h2>
          <p className="text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto">
            Przejrzyste ceny naszych usług fizjoterapeutycznych
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 ">
          {services.map((service, index) => {
            const isLastOdd = services.length % 2 === 1 && index === services.length - 1
            return (
              <div
                key={index}
                className={`bg-white p-6 lg:p-8 rounded-lg border border-stone-200 hover:shadow-lg transition-shadow relative overflow-hidden ${isLastOdd ? 'md:col-span-2 md:max-w-xl md:mx-auto' : ''}`}
              >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#482e0c] opacity-5 rounded-full -mr-8 -mt-8"></div>
              
              <div className="relative flex flex-col h-full justify-between">
                <div className="flex items-center mb-4">
                  <CreditCard className="w-6 h-6 text-[#482e0c] mr-3" />
                  <span className="text-sm font-medium text-[#482e0c] uppercase tracking-wide">
                    Usługa {index + 1}
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
                  {service.name}
                </h3>
                
                <p className="text-stone-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between h-full">
                  <div className="flex items-center">
                  
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#482e0c]">
                      {service.price}
                    </div>
                    <div className="text-sm text-stone-500">
                      za wizytę
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
        </div>

        {/* Payment Info */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-white p-6 lg:p-8 rounded-lg border border-stone-200 max-w-2xl mx-auto">
            <CreditCard className="w-8 h-8 text-[#482e0c] mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-stone-900 mb-2">
              Formy płatności
            </h3>
            <p className="text-stone-700">
              Przyjmujemy płatności gotówkowe oraz kartą płatniczą na miejscu.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}