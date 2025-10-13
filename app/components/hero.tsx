import { Phone, Calendar, Clock } from "lucide-react"
import { Button } from "~/components/ui/button"

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-stone-50 to-stone-100 lg:py-24 sm:py-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24 w-full">
        <div className="flex flex-row-reverse items-center gap-8 lg:gap-12">
          {/* Logo - responsive sizing */}
          <div className="flex-shrink-0">
            <img 
              src="logo-right.svg" 
              alt="WYrehabilitowani Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-120 md:h-120 lg:w-120 lg:h-120 xl:w-120 xl:h-120 object-contain mx-auto lg:mx-0"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1 order-2 lg:order-1">
            {/* Title - responsive text sizing */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-stone-900 mb-3 sm:mb-4 leading-tight">
              WYrehabilitowani
            </h1>

            {/* Slogan - responsive text sizing */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-stone-700 mb-8 sm:mb-10 lg:mb-12">
              Milena Zarzeczna
            </p>

            {/* CTA Buttons - responsive layout */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center">
              <Button 
                size="lg" 
                className="bg-stone-700 hover:bg-stone-800 text-white px-6 sm:px-8 py-3 text-sm sm:text-base w-full sm:w-auto"
              >
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Umów się
              </Button>
              
              {/* Mobile phone button */}
              <a href="tel:+48123123123" className="block sm:hidden">
                <Button variant="outline" size="lg" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Zadzwoń
                </Button>
              </a>

              {/* Desktop phone display */}
              <div className="hidden sm:flex items-center border border-stone-300 text-stone-700 hover:bg-stone-100 px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-base font-medium transition-colors">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                +48 123 456 789
              </div>
              
              <Button 
                variant="ghost" 
                size="lg"
                className="text-stone-700 hover:bg-stone-200 px-6 sm:px-8 py-3 text-sm sm:text-base w-full sm:w-auto"
              >
                <Clock className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Sprawdź dostępne terminy</span>
                <span className="sm:hidden">Dostępne terminy</span>
              </Button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}