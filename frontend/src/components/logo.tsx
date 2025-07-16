import LogoImage from '@/assets/images/logo.png'
import { APP_NAME } from '@/constants'
import { cn } from '@/utils/class-name'
import { Link, useLocation } from '@tanstack/react-router'
import { memo } from 'react'

type LogoProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'src'>

const BaseLogo = ({ className, ...dest }: LogoProps) => (
  <img
    src={LogoImage}
    alt={`Logo ${APP_NAME}`}
    className={cn('h-10 w-auto brightness-0 invert-100', className)}
    {...dest}
  />
)

const Logo = memo(({ ...dest }: LogoProps) => {
  const pathname = useLocation({
    select: location => location.pathname,
  })

  if (pathname === '/') {
    return <BaseLogo {...dest} />
  }

  return (
    <Link to="/" className="flex items-center">
      <BaseLogo {...dest} />
      <span className="sr-only">{APP_NAME}</span>
    </Link>
  )
})

export default Logo
