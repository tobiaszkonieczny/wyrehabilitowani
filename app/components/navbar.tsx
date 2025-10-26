/**
 * Navbar (Material Tailwind inspired)
 * - Collapsible mobile nav below bar (height animation) instead of off-canvas.
 * - Reuses existing navigationItems for scroll sections + booking link.
 */
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router"
import { Menu, X } from "lucide-react"
import { Button } from "~/components/ui/button"
import { scrollToSection, navigationItems } from "~/lib/scroll-utils"

export function Navbar() {
  const [openNav, setOpenNav] = useState(false)
  // Mount content while open or animating closed
  const [showMobileContent, setShowMobileContent] = useState(false)
  const mobileContainerRef = useRef<HTMLDivElement | null>(null)
  const firstMobileFocusable = useRef<HTMLButtonElement | null>(null)
  const prevFocused = useRef<HTMLElement | null>(null)

  // Close mobile nav on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpenNav(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNavClick = (id: string) => {
    const doScroll = () => {
      const navEl = document.getElementById('site-navbar')
      // Measure again right before scrolling (mobile collapse may change height)
      const measured = navEl ? navEl.getBoundingClientRect().height : 64
      // Slight negative tweak so section top is not mid-screen
      const offset = measured + 4 // add small margin
      scrollToSection(id, offset)
    }
    if (openNav) {
      // Initiate closing and then scroll after collapse completes
      toggleNav()
      const container = mobileContainerRef.current
      if (container) {
        const onEnd = (e: TransitionEvent) => {
          if (e.propertyName === 'max-height') {
            container.removeEventListener('transitionend', onEnd)
            // Next frame to ensure layout settled
            requestAnimationFrame(doScroll)
          }
        }
        container.addEventListener('transitionend', onEnd)
      } else {
        setTimeout(() => requestAnimationFrame(doScroll), 310)
      }
    } else {
      doScroll()
    }
  }

  const navList = (
    <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
      {navigationItems.map((item, idx) => (
        <li key={item.id} className="list-none">
          <button
            ref={idx === 0 ? firstMobileFocusable : undefined}
            onClick={() => handleNavClick(item.id)}
            className="text-stone-700 hover:text-stone-900 px-2 py-2 text-sm font-medium transition-colors cursor-pointer w-full text-left lg:text-center"
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  )

  // Toggle handler ensures content mounts before animation begins
  const toggleNav = () => {
    setOpenNav(prev => {
      const next = !prev
      if (next) {
        // Opening: mount content immediately
        setShowMobileContent(true)
        prevFocused.current = document.activeElement as HTMLElement
        setTimeout(() => firstMobileFocusable.current?.focus(), 50)
      } else {
        // Closing: focus restored after animation end (handled below)
        const el = mobileContainerRef.current
        if (el) {
          const handleEnd = (e: TransitionEvent) => {
            if (e.propertyName === 'max-height') {
              setShowMobileContent(false)
              prevFocused.current?.focus()
              el.removeEventListener('transitionend', handleEnd)
            }
          }
          el.addEventListener('transitionend', handleEnd)
        }
      }
      return next
    })
  }

  // Animate to intrinsic height using max-height
  useEffect(() => {
    const el = mobileContainerRef.current
    if (!el) return
    if (openNav) {
      // Opening: measure full height then animate; after transition set to none
      el.style.maxHeight = '0px'
      // Force reflow
      void el.offsetHeight
      const fullHeight = el.scrollHeight
      el.style.maxHeight = fullHeight + 'px'
      const handleEnd = (e: TransitionEvent) => {
        if (e.propertyName === 'max-height') {
          if (openNav) el.style.maxHeight = 'none'
          el.removeEventListener('transitionend', handleEnd)
        }
      }
      el.addEventListener('transitionend', handleEnd)
    } else if (showMobileContent) {
      // Closing: fix current height then animate to 0
      const currentHeight = el.getBoundingClientRect().height
      el.style.maxHeight = currentHeight + 'px'
      void el.offsetHeight
      el.style.maxHeight = '0px'
    }
  }, [openNav, showMobileContent])

  return (
  <nav id="site-navbar" className="sticky top-0 z-50 w-full bg-[#f6efe7]/95 border-b">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2 lg:py-4">
        <div className="flex items-center justify-between text-stone-900">
          <Link to="/" className="mr-4 cursor-pointer py-1.5 font-bold text-lg lg:text-xl">
            WYrehabilitowani
          </Link>
          <div className="flex items-center gap-4">
            {/* Desktop nav */}
            <div className="hidden lg:block">{navList}</div>
            {/* Mobile toggle */}
            <Button
              aria-label="Toggle menu"
              aria-controls="mobile-nav"
              aria-expanded={openNav}
              variant="ghost"
              size="icon"
              className="lg:hidden h-9 w-9 text-stone-700"
              onClick={toggleNav}
            >
              {openNav ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {/* Mobile collapsible nav */}
        <div
          id="mobile-nav"
          ref={mobileContainerRef}
          className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${openNav ? 'mt-3 rounded-md border border-stone-200 bg-[#f6efe7]' : ''}`}
          aria-hidden={!openNav}
        >
          {showMobileContent && (
            <div className="py-3 px-2 space-y-4 pointer-events-auto">
              {navList}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}