import { Link } from "react-router"
import { Phone, Calendar, Menu } from "lucide-react"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/utils"
import { scrollToSection, navigationItems } from "~/lib/scroll-utils"

export function Navbar() {
  return (
    <nav className="bg-[#f6efe7] backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo - responsive sizing */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-lg sm:text-xl font-bold text-stone-800 truncate">
              WYrehabilitowani
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-stone-700 hover:text-stone-900 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:block lg:hidden">
            <div className="flex items-baseline space-x-4">
              {navigationItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-stone-700 hover:text-stone-900 px-2 py-2 text-xs font-medium transition-colors cursor-pointer"
                >
                  {item.name === 'Strona główna' ? 'Home' : 
                   item.name === 'W czym pomagamy' ? 'Usługi' : 
                   item.name}
                </button>
              ))}
              <Link
                to="/booking"
                className="text-stone-700 hover:text-stone-900 px-2 py-2 text-xs font-medium transition-colors"
              >
                Umów
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-stone-700 h-10 w-10">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}