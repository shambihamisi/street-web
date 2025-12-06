import React from 'react'

const AboutUs = () => {

const cards = [
  {
    title: "Design",
    descritption: "We create visuals that match your brand style, ensure your color system stays consistent and layouts stay clean.",
    image: "/design.svg",
    imagePosition: "left",
  },

  {
    title: "Build",
    descritption: "Get fast and stable builds with seamless page loading ensuring your users move through each screen with ease.",
    image: "/build.svg",
    imagePosition: "right",
  },

  {
    title: "Deploy",
    descritption: "We deploy without friction & roll out updates smoothly making sure your audience sees fresh work on time.",
    image: "/deploy.svg",
    imagePosition: "left",
  },
];

  return (
    <section id='aboutus' className='bg-stone-50 py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
          <h2 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb04 sm:mb-6'>
            <span>Your Brand Optimisation</span>
            <br />
            <span className='bg-linear-to-b from-rose-600 to-rose-700 bg-clip-text text-transparent'>Partner</span>
          </h2>
        </div>

        {/*CARDS*/}
        <div className='space-y-16 sm:space-y-20 lg:space-y-32'>
          {cards.map((card, key) => (
            <div key={key} 
            className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${card.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}>

              {/*Image Section*/}
              <div className='flex-1 w-full'>
                <div className='realtive group'>
                  <div 
                    className='max-w-2xs
                      md:max-w-xs
                      lg:max-w-sm
                      xl:max-w-lg
                      mx-auto lg:mx-0'>
                    <img src={card.image} alt={card.title} />
                  </div>
                </div>
              </div>

              {/* TEXT SECTION */}
              <div className='flex-1 w-full'>
                <div className='max-w-lg mx-auto lg:mx-0 text-center lg:text-left'>
                  <h3 className='text-4xl sm:text-3xl lg:text-8xl font-bold mb-4 text-rose-700'>{card.title}</h3>
                  <p className='font-semibold text-stone-600 text-xl lg:text-2xl sm:text-lg leading-relaxed'>{card.descritption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs