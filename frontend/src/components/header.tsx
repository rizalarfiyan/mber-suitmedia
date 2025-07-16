import Logo from './logo'
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
          'bg-primary-600 shadow-smooth transition-[transform, colors] fixed top-0 right-0 left-0 z-50 translate-y-0 text-white duration-300 ease-in-out',
          !isHeaderVisible && '-translate-y-full',
          shouldChangeBg && 'bg-primary-600/80 backdrop-blur-sm',
        )}>
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center space-x-8 md:flex">
            <ul className="list-none space-x-2">
              {menus.map(({ title, to }) => (
                <li key={to} className="inline-block">
                  <Link
                    to={to}
                    activeProps={{
                      className: 'before:!origin-left before:!scale-x-100 !bg-primary-700/30',
                    }}
                    className="hover:bg-primary-700/30 relative block rounded-md px-4 py-2 text-white no-underline transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-500 before:ease-in-out before:content-[''] hover:before:origin-left hover:before:scale-x-100">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={toggleMobileMenu}
            className="hover:bg-primary-700/30 cursor-pointer rounded-md p-2 text-white transition-colors duration-300 focus:outline-none md:hidden"
            aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>
      <div
        className={cn(
          'fixed inset-0 z-40 transform bg-white transition-transform duration-300 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
        )}>
        <ul className="flex h-full list-none flex-col items-center justify-center space-y-6">
          {menus.map(({ title, to }) => (
            <li key={to} className="inline-block">
              <Link
                key={to}
                to={to}
                onClick={closeMobileMenu}
                activeProps={{
                  className: 'before:!origin-left before:!scale-x-100 !bg-primary-200/30',
                }}
                className="text-secondary-700 hover:bg-primary-200/30 hover:text-secondary-900 before:bg-primary-600 relative block rounded-md px-5 py-2 text-2xl font-semibold no-underline transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:ease-in-out before:content-[''] hover:before:origin-left hover:before:scale-x-100">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Header
