import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"
import { Link } from "react-router"

export function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main footer content - responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">wyrehabilitowani</h3>
            <p className="text-stone-400 mb-4 text-sm sm:text-base leading-relaxed">
              Profesjonalna fizjoterapia dla Twojego zdrowia i komfortu życia
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Szybkie linki</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link to="/" className="text-stone-400 hover:text-white transition-colors text-sm sm:text-base">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-stone-400 hover:text-white transition-colors text-sm sm:text-base">
                  Umów się
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-stone-400 hover:text-white transition-colors text-sm sm:text-base">
                  Cennik
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-stone-400 hover:text-white transition-colors text-sm sm:text-base">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Nasze usługi</h4>
            <ul className="space-y-1 sm:space-y-2 text-stone-400 text-sm sm:text-base">
              <li>Terapia manualna</li>
              <li>Masaż leczniczy</li>
              <li>Kinesiotaping</li>
              <li>Dry needling</li>
              <li>Rehabilitacja</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Kontakt</h4>
            <div className="space-y-2 sm:space-y-3 text-stone-400 text-sm sm:text-base">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  ul. Przykładowa 123<br />
                  00-001 Warszawa
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                <a href="tel:+48123456789" className="hover:text-white transition-colors">
                  +48 123 456 789
                </a>
              </div>
              <div className="flex items-start">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0 mt-0.5" />
                <a href="mailto:kontakt@wyrehabilitowani.pl" className="hover:text-white transition-colors break-all">
                  kontakt@wyrehabilitowani.pl
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - responsive layout */}
        <div className="border-t border-stone-700 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-xs sm:text-sm text-center sm:text-left">
            © 2025 wyrehabilitowani. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
            <Link to="/terms" className="text-stone-400 hover:text-white text-xs sm:text-sm transition-colors">
              Regulamin
            </Link>
            <Link to="/privacy" className="text-stone-400 hover:text-white text-xs sm:text-sm transition-colors">
              Polityka prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}