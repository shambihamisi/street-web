import { Check, Star } from 'lucide-react'
import React from 'react'

const Pricing = () => {

const plans = [
  {
    name: "Starter",
    price: "FROM KSH 35,000",
    description: "Perfect for startups",
    features: [
      "Logo design",
      "Social media kit",
      "One-page website",
    ],
    mostPopular: false,
  },
  
  {
    name: "Standard",
    price: "FROM KSH 85,000",
    description: "Perfect for MSMES",
    features: [
      "Logo design",
      "Social media kit",
      "Branding",
      "Multi-page website",
    ],
    mostPopular: true,
  },

  {
    name: "Pro",
    price: "FROM KSH 150,000",
    description: "Perfect for E-Commerce",
    features: [
      "Logo design",
      "Social media kit",
      "Branding",
      "Full Business Site",
    ],
    mostPopular: false,
  },
]

  return (
    <section id='pricing' className='py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
          <h2 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb04 sm:mb-6'>
            <span>Simple, <br />Transparent</span>
            <br />
            <span className='bg-linear-to-b from-rose-600 to-rose-700 bg-clip-text text-transparent'>Pricing Plans</span>
          </h2>
          <p className='mt-4 text-stone-600 text-xl sm:text-lg max-w-2xl mx-auto'>Plans that fit your budget with clear deliverables and transparent fees. Get your project moving from an idea to launch with no surprises.</p>
        </div>

        {/* PRICING CARDS */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6'>
          {plans.map((plan, key) => (
            <div key={key} className={`relative bg-stone-250/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${plan.mostPopular ? "border-rose-400 shadow-2xl shadow-rose-500/20 lg:scale-105"
              : "border-rose-900 hover:border-rose-600"
            }`}>
              
              <div className='absolute inset-0 bg-linear-to-br from-rose-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-lg'></div>

              {plan.mostPopular && (
                <div className='absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10'>
                  <div className='flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-linear-to-b from-rose-600 to-rose-700 rounded-full text-xs sm:text-sm font-semibold shadow-lg text-white'>
                    <Star className='w-3 h-3 sm:w-3 sm:h-3 fill-white'/>
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className='text-center mb-6 sm:mb-8'>
                <h3 className='text-xl sm:text-2xl font-bold mb-2'>{plan.name}</h3>
                <p className='text-xs sm:text-sm mb-3 sm:mb-4'>{plan.description}</p>
                <div className='flex items-baseline justify-center'>
                  <span className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-b from-rose-600 to-rose-700 bg-clip-text text-transparent'>{plan.price}</span>
                </div>
              </div>

              <ul className='space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row'>
                {plan.features.map ((feature, featureKey) => (
                  <li key={featureKey} className='flex items-start space-x-2 sm:space-x-3'>
                    <div className='shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-rose-700 flex items-center justify-center mt-0.5'>
                      <Check className='w-2.5 h-2.5 sm:w-3 sm:h-3 text-white'/>
                    </div>
                    <span className='text-sm sm:text-base'>{feature}</span>
                  </li>
                ))}
              </ul>


              <button className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 mt-auto hover:scale-102 cursor-pointer text-sm sm:text-base ${
                plan.mostPopular
                ? "bg-linear-to-b from-rose-600 to-rose-700 text-white"
                : "bg-rose-900/5 border border-rose-900/10 hover:bg-rose-900/10"
              }`}>
              <a href="mailto:shambi.hamisi@gmail.com">Get Started</a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing