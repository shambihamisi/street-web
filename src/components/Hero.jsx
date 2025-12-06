import React from 'react'
import { CodeXml } from 'lucide-react'

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      <div className='max-w-7xl mx-auto text-center relative w-full'>
        <div className='max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative'>
          <div>
            <div className='inline-flex items-center space-x-2 px-3 sm:px-4 py-2 text-white bg-rose-700 border-rose-500 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700'>
              <CodeXml className='w-4 h-4'/>
              <span className='text-xs sm:text-sm'> Introducing Street Web Design</span>
            </div>

            <h1 className=' text-5xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight'>
              <span className='block mb-1 sm:mb-2'>Design</span>
              <span className='text-rose-700 block mb-1 sm:mb-2'>Build</span>
              <span className='block mb-1 sm:mb-2'>Deploy</span>
            </h1>

            <p className='text-md sm:text-base lg:text-lg text-stone-700 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed'>
              Your brand deserves strong identity. <br/>Get design that builds trust. <br/>Get visuals that fit your audience.
            </p>

            <button className='p-3 sm:w-auto text-white bg-rose-700 hover:bg-rose-950 rounded-2xl font-semibold cursor-pointer animate-in slide-in-from-bottom duration-700 delay-300'>
              <a href="mailto:shambi.hamisi@gmail.com">Email Us</a>
            </button>
          </div>

          <div className='flex justify-center lg:justify-end'>
            <img
              src="/programming.svg"
              alt="illustration"
              className="
                max-w-sm
                md:max-w-lg
                lg:max-w-xl
                xl:max-w-4xl
                mx-auto lg:mx-0
                md:mb-50 lg:mb:50 xl:mb-50
                slide-in-from-bottom duration-700 delay-300
              "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero