import Ornament from './ornament'
import { Link } from '@tanstack/react-router'

interface DummyProps {
  title: string
}

const Dummy = ({ title }: DummyProps) => (
  <div className="relative flex h-full flex-1 flex-col overflow-hidden">
    <Ornament />
    <div className="relative mx-auto flex h-full flex-1 flex-col items-center justify-center gap-2 py-10">
      <h1 className="text-secondary-800 text-4xl font-semibold">{title}</h1>
      <p className="text-secondary-500 mx-auto max-w-xs text-center">
        <span>This is a placeholder page. Check out our </span>
        <Link to="/ideas" className="text-primary-600 decoration-primary-600 underline underline-offset-2">
          ideas
        </Link>
        <span> pages to explore more.</span>
      </p>
    </div>
  </div>
)

export default Dummy
