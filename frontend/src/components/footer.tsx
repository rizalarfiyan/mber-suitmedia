import { APP_NAME } from '@/constants'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-primary-600 shadow-smooth text-secondary-600 w-full grow-0 border-t-2 bg-white">
      <div className="container py-3 text-center">
        <span>
          Copyright &#169; {year} - {APP_NAME}
        </span>
        <span> - created by </span>
        <a
          className="decoration-primary-600/80 underline decoration-2 underline-offset-2"
          href="https://github.com/rizalarfiyan"
          target="_blank"
          rel="noopener noreferrer">
          Muhamad Rizal Arfiyan
        </a>
      </div>
    </footer>
  )
}

export default Footer
