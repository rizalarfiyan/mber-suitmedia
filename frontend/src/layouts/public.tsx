import Footer from '@/components/footer'
import Header from '@/components/header'
import { Outlet } from '@tanstack/react-router'

const PublicLayout = () => (
  <div className="flex h-full min-h-screen w-full flex-col items-center">
    <Header />
    <Outlet />
    <Footer />
  </div>
)

export default PublicLayout
