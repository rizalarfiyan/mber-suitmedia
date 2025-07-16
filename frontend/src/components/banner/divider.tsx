import { cn } from '@/utils/class-name'

type DividerProps = React.HTMLAttributes<HTMLDivElement>

const Divider = ({ className, ...rest }: DividerProps) => (
  <div className={cn('absolute bottom-0 left-0 w-full rotate-180 overflow-hidden leading-0', className)} {...rest}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="relative block h-44 w-[calc(100%+1.3px)] [transform:rotateY(180deg)] fill-current">
      <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
    </svg>
  </div>
)

export default Divider
