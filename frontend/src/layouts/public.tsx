import Footer from '@/components/footer'
import Header from '@/components/header'
import { Outlet } from '@tanstack/react-router'

const PublicLayout = () => (
  <div className="flex min-h-screen w-full flex-col items-center">
    <Header />
    <main className="flex w-full flex-1 flex-col pt-20">
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default PublicLayout
