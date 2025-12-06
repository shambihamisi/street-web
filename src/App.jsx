import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-stone-200 font-montserrat text-neutral-800 overflow-hidden'>
      <Navbar />
      <Hero />
      <AboutUs />
      <Pricing />
      <Testimonials />
      <Footer />

    </div>
  )
}

export default App