import { Phone, Calendar, Clock } from "lucide-react"
import { Button } from "~/components/ui/button"
import TextType from "./ui/text-type"

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#6a5f51] flex flex-row items-center min-h-[60vh] lg:max-h-[80vh] border-b border-stone-300 mobile-faded-hero"
    >
      <div className="w-full">
        <div className="flex flex-col lg:flex-row  min-h-[60vh] lg:max-h-[80vh]">
          {/* Left side - Content with white background on desktop */}
          <div className="w-full lg:w-9/12 lg:bg-[#f6efe7] p-6 lg:p-8 flex flex-col justify-center">
            {/* Logo and Title container */}
            <div className="flex flex-col items-center lg:items-start mb-3 sm:mb-4 ">
              {/* Logo - visible on all screens */}
              <img 
                src="logo-right.svg" 
                alt="WYrehabilitowani Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 lg:hidden object-contain mb-4"
              />
              {/* Title - responsive text sizing */}
              <div className="text-center lg:text-left">
                <TextType 
                  text={["WYrehabilitowani"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="_"
                />
              </div>
            </div>
            {/* Slogan - responsive text sizing */}
            <p className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-4xl text-white  md:text-[#482e0c] mb-8 sm:mb-4 lg:mb-6 text-center lg:text-left">
              Milena Zarzeczna
            </p>
            <p className="lg:text-[#482e0c] text-white text-center lg:text-left">
              WY leczeni z bólu.
            </p>
            <p className="sm:mb-4 mb-4 lg:mb-6 lg:text-[#482e0c] text-white text-center lg:text-left">
              MY stawiamy Was na nogi.
            </p>
            {/* CTA Buttons - responsive layout */}
            <div className="flex flex-col gap-3 sm:gap-4 items-stretch">
              <Button 
                size="lg" 
                className="bg-[#482e0c] hover:bg-[var(--accent-1)] text-white hover:text-black px-6 sm:px-8 py-3 text-sm sm:text-base w-full"
              >
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Umów się
              </Button>
              
              {/* Mobile phone button */}
              <a href="tel:+48577190560" className="block sm:hidden">
                <Button size="lg" className="w-full bg-[#482e0c] hover:bg-[var(--accent-1)] text-white hover:text-black">
                  <Phone className="mr-2 h-4 w-4" />
                  Zadzwoń
                </Button>
              </a>

              {/* Desktop phone display */}
              <div className="hidden sm:flex items-center justify-center bg-[#482e0c] text-white hover:bg-[var(--accent-1)] hover:text-black px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-base font-medium transition-colors cursor-pointer w-full">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                +48 577 190 560
              </div>
              
              <Button 
                variant="ghost" 
                size="lg"
                className="bg-[#482e0c] hover:bg-[var(--accent-1)] text-white hover:text-black px-6 sm:px-8 py-3 text-sm sm:text-base w-full"
              >
                <Clock className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Sprawdź dostępne terminy</span>
                <span className="sm:hidden">Dostępne terminy</span>
              </Button>
            </div>
          </div>

          {/* Right side - Logo for desktop only */}
          <div className="hidden lg:flex lg:w-1/2 lg:justify-center lg:items-center desktop-faded-block">
            <img 
              src="logo-right.svg" 
              alt="WYrehabilitowani Logo"
              className="w-32 h-32 md:w-120 md:h-120 lg:w-120 lg:h-120 xl:w-120 xl:h-120 object-contain"
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}