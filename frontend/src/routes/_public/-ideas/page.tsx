import Action from './components/action'
import Content from './components/list-card'
import Pagination from './components/pagination'
import Provider from './provider'
import Banner from '@/components/banner'

const IdeasPage = () => (
  <>
    <Banner
      image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fGVufDB8fHx8fA%3D%3D"
      title="Ideas"
      description="Where all our great things design"
      hasDivider
    />
    <section className="w-full bg-white">
      <Provider>
        <div className="container space-y-6 pt-10 pb-20">
          <Action />
          <Content />
          <Pagination />
        </div>
      </Provider>
    </section>
  </>
)

export default IdeasPage
