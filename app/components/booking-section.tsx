import { Calendar, Globe, Phone, Mail, Clock } from "lucide-react"
import { Button } from "~/components/ui/button"

export function BookingSection() {
  const bookingOptions = [
    {
      icon: Clock,
      title: "Sprawdź dostępne terminy",
      description: "Zobacz wolne terminy w naszym kalendarzu.",
      action: "Sprawdź terminy",
      href: "#",
      variant: "default" as const
    },
    {
      icon: Globe,
      title: "Rezerwacje online",
      description: "Zarezerwuj wizytę online przez platformę Booksy.",
      action: "Rezerwuj online",
      href: "https://booksy.com",
      variant: "default" as const
    },
    {
      icon: Phone,
      title: "Rezerwacja telefoniczna",
      description: "Zadzwoń i umów się na dogodny termin.",
      action: "Zadzwoń",
      href: "tel:+48577190560",
      variant: "default" as const
    },
    {
      icon: Mail,
      title: "Masz pytania?",
      description: "Napisz do nas na email, chętnie odpowiemy.",
      action: "Napisz email",
      href: "mailto:wyrehabilitowani@gmail.com",
      variant: "default" as const
    }
  ]

  return (
    <section id="booking" className="bg-[#f6efe7] py-12 sm:py-16 lg:py-24 border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
            Umów się
          </h2>
          <p className="text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto">
            Znajdź dogodny dla siebie termin i zarezerwuj wizytę
          </p>
        </div>

        {/* Booking Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {bookingOptions.map((option, index) => {
            const IconComponent = option.icon
            return (
              <div 
                key={index}
                className="bg-white p-6 lg:p-8 rounded-lg border border-stone-200 hover:shadow-lg transition-all group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-[#482e0c] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                    {option.title}
                  </h3>
                  
                  <p className="text-stone-700 leading-relaxed mb-6">
                    {option.description}
                  </p>
                  
                  <a 
                    href={option.href} 
                    className="w-full sm:w-auto"
                    target={option.href.startsWith('http') ? "_blank" : undefined}
                    rel={option.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  >
                    <Button 
                      size="lg"
                      className={`w-full px-8 py-3 ${
                        option.variant === 'default' 
                          ? 'bg-[#482e0c] hover:bg-[var(--accent-1)] text-white hover:text-black'
                          : option.variant === 'secondary'
                          ? 'bg-[var(--accent-1)] hover:bg-[#482e0c] text-black hover:text-white'
                          : 'border-[#482e0c] text-[#482e0c] hover:bg-[#482e0c] hover:text-white'
                      }`}
                    >
                      {option.action}
                    </Button>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact Info */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-white p-6 lg:p-8 rounded-lg border border-stone-200 max-w-3xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold text-stone-900 mb-6">
              Kontakt bezpośredni
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+48577190560" className="flex-1 max-w-xs">
                <Button 
                  size="lg" 
                  className="w-full bg-[#482e0c] hover:bg-[var(--accent-1)] text-white hover:text-black"
                >
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  +48 577 190 560
                </Button>
              </a>
              
              <a href="mailto:wyrehabilitowani@gmail.com" className="flex-1 max-w-xs">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full border-[#482e0c] text-[#482e0c] hover:bg-[#482e0c] hover:text-white"
                >
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Napisz email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}