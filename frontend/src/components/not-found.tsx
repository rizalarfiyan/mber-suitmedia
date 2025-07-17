import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

const NotFound = () => (
  <main className="relative overflow-hidden">
    <div className="from-primary-100 absolute inset-0 bg-gradient-to-br via-white to-orange-100 opacity-50" />
    <div className="bg-primary-200/30 absolute -top-20 -left-20 size-96 rounded-full blur-2xl" />
    <div className="absolute -right-20 -bottom-20 size-96 rounded-full bg-orange-200/30 blur-2xl" />
    <div className="relative z-10 mx-auto flex h-screen max-w-screen-xl items-center justify-start px-4 md:px-8">
      <div className="mx-auto max-w-lg space-y-6 text-center">
        <div className="max-w-sm space-y-3">
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">Page Not Found</h2>
          <p className="text-secondary-600">
            Sorry, the page you are looking for could not be found or has been removed.
          </p>
        </div>
        <Link
          to="/"
          className="bg-primary-600 hover:bg-primary-700 shadow-smooth inline-flex items-center rounded-md px-4 py-2 text-white transition-colors duration-300">
          <ArrowLeft className="mr-1.5 size-5" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  </main>
)

export default NotFound
