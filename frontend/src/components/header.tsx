import { Link } from '@tanstack/react-router'
import type { FileRouteTypes } from '@/routeTree.gen'

interface MenuItem {
  title: string
  to: FileRouteTypes['fullPaths']
}

const menus: MenuItem[] = [
  {
    title: 'Work',
    to: '/work',
  },
  {
    title: 'About',
    to: '/about',
  },
  {
    title: 'Services',
    to: '/services',
  },
  {
    title: 'Ideas',
    to: '/ideas',
  },
  {
    title: 'Careers',
    to: '/careers',
  },
  {
    title: 'Contact',
    to: '/contact',
  },
]

const Header = () => (
  <header className="flex w-full grow-0 items-center justify-between gap-4">
    <div>Logo</div>
    <nav>
      <ul className="flex gap-4">
        {menus.map(({ to, title }) => (
          <li key={to}>
            <Link to={to} className="text-gray-700 hover:text-gray-900">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

export default Header
