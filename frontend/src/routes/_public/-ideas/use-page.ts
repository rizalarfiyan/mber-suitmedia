import { PageContext } from './provider'
import { useContext } from 'react'
import type { PageContextProps } from './provider'

const usePage = (): PageContextProps => {
  const context = useContext(PageContext)
  if (!context) {
    throw new Error('usePage must be used within a Provider')
  }
  return context
}

export default usePage
