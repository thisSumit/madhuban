import React from 'react'
import { Button } from './ui/Button'
import { TextAnimate } from './ui/text-animate'

const Info = () => {
  return (
    <section className='h-full my-4 relative py-24 lg:py-32 px-4 lg:px-16 bg-background overflow-hidden'>
      {/* Decorative Leaf Elements - Left Side */}
      <div className='absolute left-0 top-0 w-50 h-full pointer-events-none md:w-80 lg:block'>
        <img src="c3.png" alt="" />
      </div>

      {/* Decorative Leaf Elements - Right Side */}
      <div className='absolute bottom-0 right-0 w-50 pointer-events-none md:w-80 lg:block'>
        <img src="c3.png" className=' rotate-180' alt="" />
      </div>

      {/* Main Content */}
      <div className='relative max-w-4xl gap-4 mx-auto text-center'>
        {/* Headline */}
        
        <h2 className='text-4xl lg:text-6xl font-playfair-display text-foreground leading-tight'>
        <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
          Madhuban Village
          </TextAnimate>
        </h2>

        {/* Ring Image */}
        <div className='flex justify-center m-4'>
          <img src="indra.png" className='w-64' alt="" />
        </div>

        {/* Description */}
        <div className='space-y-6 text-foreground/90 mb-8'>
          <p className='text-base lg:text-lg leading-relaxed max-w-3xl mx-auto'>
            Nestled in the serene countryside, Madhuban Village is a charming and delightful wedding and event venue, 
            offering clients an enchanting setting for their special occasion. With its unique blend of rustic charm 
            and sophisticated elegance, this hidden gem is a sanctuary of serenity, away from the bustling city life.
          </p>
          <p className='text-base lg:text-lg leading-relaxed max-w-3xl mx-auto'>
            Surrounded by breathtaking landscapes and immersed in nature, Madhuban Village embodies a sense of 
            tranquillity that sets it apart from traditional wedding and event venues. Whether exchanging vows in 
            the lush gardens, dancing the night away in elegant halls, or savouring a sumptuous feast under the 
            starlit sky, this idyllic haven promises an unforgettable experience for your fairy tale celebration.
          </p>
        </div>

        {/* Button */}
        <div className='flex justify-center'>
          <a href='/about' className='nav-link'>
            Discover Our Story
          </a>
        </div>
      </div>
    </section>
  )
}

export default Info
