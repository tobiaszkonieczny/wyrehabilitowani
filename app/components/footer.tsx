import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"
import { Link } from "react-router"

export function Footer() {
  return (
    <footer id="footer" className="bg-stone-800 text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main footer content - responsive flex layout */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:max-w-md">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">WYrehabilitowani</h3>
            <p className="text-stone-400 mb-4 text-sm sm:text-base leading-relaxed flex flex-col">
              <span>WY leczeni z bólu. </span>
              <span>
                MY stawiamy Was na nogi.
              </span>
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/people/WYrehabilitowani-Milena-Zarzeczna/61581875332927/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://instagram.com/wyrehabilitowani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

         
          {/* Contact Info */}
          <div className="lg:max-w-md">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Kontakt</h4>
            <div className="space-y-2 sm:space-y-3 text-stone-400 text-sm sm:text-base">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  ul. Tysiąclecia 25<br />
                  44-351 Turza Śląska
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                <a href="tel:+48 577 190 560" className="hover:text-white transition-colors">
                  +48 577 190 560
                </a>
              </div>
              <div className="flex items-start">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0 mt-0.5" />
                <a href="wyrehabilitowani@gmail.com" className="hover:text-white transition-colors break-all">
                  wyrehabilitowani@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - responsive layout */}
        <div className="border-t border-stone-700 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-xs sm:text-sm text-center sm:text-left">
            © 2025 WYrehabilitowani. Wszystkie prawa zastrzeżone.
          </p>
      
        </div>
      </div>
    </footer>
  )
}