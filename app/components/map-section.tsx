import { MapPin } from "lucide-react"

export function MapSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-4 sm:mb-6">
            Znajdź nas
          </h2>
          <div className="flex items-center justify-center text-stone-700 mb-6 sm:mb-8 px-4">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
            <span className="text-sm sm:text-base text-center">ul. Przykładowa 123, 00-001 Warszawa</span>
          </div>
        </div>

        {/* Google Maps - responsive height */}
        <div className="bg-stone-200 rounded-lg overflow-hidden">
          <iframe
            title="Mapa Google"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.978028990071!2d19.94497981580091!3d50.064650979426774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b11f1b6d6c3%3A0x3a0e3b9cdd0d79f!2sKrak%C3%B3w!5e0!3m2!1spl!2spl!4v1712222222222!5m2!1spl!2spl"
            width="100%"
            height="300"
            className="sm:h-96 lg:h-[400px]"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />      
        </div>

        {/* Contact info below map - responsive grid */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-center">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-stone-200">
            <h3 className="font-semibold text-stone-900 mb-2 text-sm sm:text-base">Godziny otwarcia</h3>
            <div className="text-stone-700 text-xs sm:text-sm space-y-1">
              <p>Pon - Pt: 8:00 - 20:00</p>
              <p>Sobota: 9:00 - 15:00</p>
              <p>Niedziela: zamknięte</p>
            </div>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-stone-200">
            <h3 className="font-semibold text-stone-900 mb-2 text-sm sm:text-base">Kontakt</h3>
            <div className="text-stone-700 text-xs sm:text-sm space-y-1">
              <p>
                <a href="tel:+48123456789" className="hover:text-stone-900 transition-colors">
                  Tel: +48 123 456 789
                </a>
              </p>
              <p>
                <a href="mailto:kontakt@wyrehabilitowani.pl" className="hover:text-stone-900 transition-colors break-all">
                  kontakt@wyrehabilitowani.pl
                </a>
              </p>
            </div>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-stone-200 sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-stone-900 mb-2 text-sm sm:text-base">Parking</h3>
            <div className="text-stone-700 text-xs sm:text-sm space-y-1">
              <p>Bezpłatny parking</p>
              <p>dla pacjentów</p>
              <p>przed budynkiem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}