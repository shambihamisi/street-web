import React from 'react'

const Testimonials = () => {

const testimonials = [
  {
    name: "Samuel M.",
    role: "Grafik",
    image: "/man.jpg",
    content: "Street helped me build a clear identity. My clients understood my brand right away.",
  },

  {
    name: "Anne S.",
    role: "Shanny Catering",
    image: "/woman.jpg",
    content: "Your workflow stayed simple. My designs were ready on time and matched my vision.",
  },

  {
    name: "Linda J.",
    role: "Linda Jenna Cosmetics",
    image: "/lady.jpg",
    content: "My social templates improved engagement. Your design boosted my business significantly.",
  },
];

  return (
    <section id='testimonials' className='bg-stone-50 py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16'>

          {/* LEFT SIDE HEADER */}
          <div className='lg:w-1/2 w-full text-center lg:text-left'>
            <h2 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb04 sm:mb-6'>
              What People Say About Us
            </h2>
            <p className='mt-4 text-stone-600 text-xl sm:text-lg max-w-2xl mx-auto'>Real-world experiences from people we've worked with and transformed their businesses</p>
          </div>

          {/* RIGHT SIDE TESTIMONIALS */}

          <div className='lg:w-1/2 w-full'>
            <div className='space-y-6 sm:space-y-8'>
              {testimonials.map((testimonial, key) => (
                <div key={key} className='bg-stone-200/50 p-4 sm:p-6 backdrop-blur-sm border border-rose-200 rounded-xl sm:rounded-2xl'>
                  <div className='flex items-start space-x-3 sm:space-x-4'>
                    <div className='shrink-0'>
                      <div className='text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-b from-rose-600 to-rose-700 bg-clip-text text-transparent'>
                        "
                      </div>
                    </div>

                    <div className='grow'>
                      <p className='text-base sm:text-lg leading-relaxed mb-3 sm:mb-4'>{testimonial.content}</p>
                      <div className='flex items-center space-x-2 sm:space-x-3'>
                        <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className='w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover'/>

                        <div>
                          <h4 className='font-semibold text-sm sm:text-base'>{testimonial.name}</h4>
                          <p className='text-xs sm:text-sm text-stone-350'>{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*LOGOS */}

        <div className='mt-12 flex items-center justify-center gap-6 flex-nowrap overflow-x-auto'>
          <img
            src='/logos/Grafik.png'
            alt='Grafik logo'
            className='h-16 sm:h-18 md:h-35 xl:h-50 object-contain'
          />
          <img
            src='/logos/kiddie.png'
            alt='Kiddie logo'
            className='h-16 sm:h-18 md:h-35 xl:h-50 object-contain'
          />
          <img
            src='/logos/Linda.png'
            alt='Linda Jenna logo'
            className='h-16 sm:h-18 md:h-35 xl:h-50 object-contain'
          />
          <img
            src='/logos/tumaboda.png'
            alt='Tuma Boda logo'
            className='h-16 sm:h-18 md:h-35 xl:h-50 object-contain'
          />
          <img
            src='/logos/kedipa.png'
            alt='Kedipa logo'
            className='h-16 sm:h-18 md:h-35 xl:h-50 object-contain'
          />
        </div>

      </div>
    </section>
  )
}

export default Testimonials