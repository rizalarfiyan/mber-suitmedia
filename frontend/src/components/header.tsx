import useBodyScrollLock from '@/hooks/use-body-scroll-lock'
import useHeaderVisibility from '@/hooks/use-header-visibility'
import useIsMobile from '@/hooks/use-is-mobile'
import { cn } from '@/utils/class-name'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { FileRouteTypes } from '@/routeTree.gen'

interface MenuItem {
  title: string
  to: FileRouteTypes['fullPaths']
}

const menus: MenuItem[] = [
  { title: 'Work', to: '/work' },
  { title: 'About', to: '/about' },
  { title: 'Services', to: '/services' },
  { title: 'Ideas', to: '/ideas' },
  { title: 'Careers', to: '/careers' },
  { title: 'Contact', to: '/contact' },
]

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isHeaderVisible, shouldChangeBg } = useHeaderVisibility()
  const isMobile = useIsMobile()

  useBodyScrollLock(isMobileMenuOpen)

  useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false)
    }
  }, [isMobile])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          'bg-primary-600 fixed top-0 right-0 left-0 z-50 translate-y-0 text-white transition-transform duration-300 ease-in-out',
          !isHeaderVisible && '-translate-y-full',
          shouldChangeBg && 'bg-primary-600/80 shadow-md backdrop-blur-sm',
        )}>
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center space-x-2">
            Logo
          </Link>
          <nav className="hidden items-center space-x-8 md:flex">
            {menus.map(({ title, to }) => (
              <Link key={to} to={to} className="hover:text-primary-100 text-white transition-colors duration-200">
                {title}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-slate-800 focus:outline-none" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </header>
      <div
        className={cn(
          'fixed inset-0 z-40 transform bg-white transition-transform duration-300 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
        )}>
        <div className="flex h-full flex-col items-center justify-center space-y-8">
          {menus.map(({ title, to }) => (
            <Link
              key={to}
              to={to}
              onClick={closeMobileMenu}
              className="text-3xl font-semibold text-slate-700 hover:text-slate-900">
              {title}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header
