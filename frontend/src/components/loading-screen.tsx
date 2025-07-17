import LogoImage from '@/assets/images/logo.png'
import { APP_NAME } from '@/constants'
import { cn } from '@/utils/class-name'

type LoadingScreenProps = React.HTMLAttributes<HTMLDivElement>

const LoadingScreen = ({ className, ...rest }: LoadingScreenProps) => (
  <div
    className={cn(
      'fixed inset-0 z-50 mx-auto flex h-full min-h-screen w-full items-center justify-center bg-white',
      className,
    )}
    {...rest}>
    <div className="flex flex-col items-center gap-3">
      <img src={LogoImage} alt={`Logo ${APP_NAME}`} className="h-14 w-auto" />
      <div className="bg-primary-200 relative mt-2 h-2 w-32 overflow-hidden rounded-full">
        <div className="animate-loading-move bg-primary-600 absolute top-0 left-0 h-full w-1/2" />
      </div>
    </div>
  </div>
)

export default LoadingScreen
