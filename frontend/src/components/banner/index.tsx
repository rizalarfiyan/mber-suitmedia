import Divider from './divider'
import { cn } from '@/utils/class-name'
import SimpleParallax from 'simple-parallax-js'

interface BannerProps {
  image: string
  hasDivider?: boolean
  className?: string
  title: string
  description: string
}

const Banner = ({ image, hasDivider, className, title, description }: BannerProps) => (
  <div
    className={cn(
      'relative mx-auto -mt-[4.5rem] flex h-[32rem] w-full items-center justify-center overflow-hidden',
      className,
    )}>
    <SimpleParallax delay={1} scale={1.7}>
      <img src={image} alt={`Banner of ${title}`} />
    </SimpleParallax>
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/70 p-4">
      <h1 className="text-center text-3xl font-bold text-white md:text-4xl">{title}</h1>
      <p className="text-center text-lg text-white md:text-xl">{description}</p>
    </div>
    {hasDivider && <Divider className="z-10 text-white" />}
  </div>
)

export default Banner
