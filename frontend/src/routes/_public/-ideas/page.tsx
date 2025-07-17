import Action from './components/action'
import ErrorWrapper from './components/error-wrapper'
import Content from './components/list-card'
import Pagination from './components/pagination'
import Provider from './provider'
import Banner from '@/components/banner'

const IdeasPage = () => (
  <>
    <Banner image="/assets/images/ideas.jpg" title="Ideas" description="Where all our great things design" hasDivider />
    <section className="w-full bg-white">
      <Provider>
        <div className="container space-y-6 pt-5 pb-10 sm:pt-10 sm:pb-20">
          <ErrorWrapper>
            <Action />
            <Content />
            <Pagination />
          </ErrorWrapper>
        </div>
      </Provider>
    </section>
  </>
)

export default IdeasPage
