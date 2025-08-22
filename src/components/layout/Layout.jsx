import React from 'react'
import Header from './Header'
import Footer from './Footer'
import useScrollToTop from '../../hooks/useScrollToTop'

const Layout = ({ children }) => {
  // This hook will automatically scroll to top on route changes
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout 