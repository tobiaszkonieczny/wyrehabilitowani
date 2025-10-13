import { Link } from "react-router"
import { Phone, Calendar, Menu } from "lucide-react"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/utils"

export function Navbar() {
  return (
    <nav className="bg-stone-50/95 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo - responsive sizing */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-lg sm:text-xl font-bold text-stone-800 truncate">
              wyrehabilitowani
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
              <Link
                to="/"
                className="text-stone-700 hover:text-stone-900 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap"
              >
                Strona główna
              </Link>
              <Link
                to="/booking"
                className="text-stone-700 hover:text-stone-900 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap"
              >
                Umów się
              </Link>
              <Link
                to="/pricing"
                className="text-stone-700 hover:text-stone-900 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap"
              >
                Cennik
              </Link>
              <Link
                to="/terms"
                className="text-stone-700 hover:text-stone-900 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap"
              >
                Regulamin
              </Link>
              <Link
                to="/faq"
                className="text-stone-700 hover:text-stone-900 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:block lg:hidden">
            <div className="flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-stone-700 hover:text-stone-900 px-2 py-2 text-xs font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/booking"
                className="text-stone-700 hover:text-stone-900 px-2 py-2 text-xs font-medium transition-colors"
              >
                Umów
              </Link>
              <Link
                to="/pricing"
                className="text-stone-700 hover:text-stone-900 px-2 py-2 text-xs font-medium transition-colors"
              >
                Cennik
              </Link>
              <Link
                to="/faq"
                className="text-stone-700 hover:text-stone-900 px-2 py-2 text-xs font-medium transition-colors"
              >
                FAQ
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