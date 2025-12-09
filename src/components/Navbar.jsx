import React from 'react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {

const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className='fixed top-0 w-full z-50 transition-all duration-300 bg-neutral-250/20 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-14 sm:h-16 md:h-20'>
                <div className='flex items-center space-x-2 group cursor-pointer'>
                    <div>
                        <img src="/STREET LOGO.png" alt="Street" className='w-8 h-8 sm:w-10 sm:h-10'/>
                    </div>

                    <span className='text-lg sm:text-xl md:text-2xl font-medium'>
                    Street
                    </span>
                </div>
            


                {/*NAV LINKS*/}
                <div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
                    <a href="#aboutus" className='hover:text-rose-700 text-sm lg:text-base'>About Us</a>
                    <a href="#pricing" className='hover:text-rose-700 text-sm lg:text-base'>Pricing</a>
                    <a href="#testimonials" className='hover:text-rose-700 text-sm lg:text-base'>Testimonials</a>
                </div>

                <button 
                className='md:hidden p-2 hover:text-rose-700 cursor-pointer'
                onClick={() => setMobileMenuIsOpen((prev) => !prev)}>

                    {mobileMenuIsOpen ? 
                        (<X className='w-5 h-5 sm:w-6 sm:h-6'/>) : 
                        (<Menu className='w-5 h-5 sm:w-6 sm:h-6'/>)
                    }

                </button>

            </div>
        </div>

        {mobileMenuIsOpen && (
            <div className='md:hidden flex justify-center items-center max-w-sm mx-auto bg-rose-700 rounded-2xl text-white backdrop-blur-lg border-t border-neutral-400 animate-in slide-in-from-top'>
                <div className='px-4 py-4 sm:py-6 space-y-3 sm:space-y-4'>
                    <a 
                    href="#aboutus" 
                    onClick={() => setMobileMenuIsOpen(false)} 
                    className='block hover:text-rose-200 text-sm lg:text-base'>About Us</a>

                    <a 
                    href="#pricing" 
                    onClick={() => setMobileMenuIsOpen(false)} 
                    className='block hover:text-rose-200 text-sm lg:text-base'>Pricing</a>

                    <a 
                    href="#testimonials" 
                    onClick={() => setMobileMenuIsOpen(false)} 
                    className='block hover:text-rose-200 text-sm lg:text-base'>Testimonials</a>
                </div>
            </div>
        )}
    </nav>
  );
}

export default Navbar