'use client'

import React from 'react'
import { Menu, ChevronDown, MessageCircle } from 'lucide-react'
import { Button } from './ui/Button'
import { TextAnimate } from './ui/text-animate'

const Hero = () => {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      {/* Video Background */}
      <div className='absolute inset-0 z-0'>
        <video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="absolute inset-0 h-full w-full object-cover"
  poster="/indraprastha3.png"
>
  <source src="hero.mp4" type="video/mp4" />
</video>

        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-black/20' />
      </div>

      {/* <div className='relative z-10 h-full w-full flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-white font-playfair-display text-4xl lg:text-8xl text-center leading-tighter tracking-tight px-4'>
            Your Dream <span className='italic block mt-2'> <TextAnimate animation="slideLeft" by="character" duration={0.5} delay={0.2} once> Wedding Destination </TextAnimate> </span> Awaits
          </h1>
        </div>
        
        <Button onClick={() => document.getElementById('membership-form')?.scrollIntoView({ behavior: 'smooth' })} className='absolute md:bottom-8 bottom-34' variant="primary" size="lg">Book Now</Button>

        <div className='absolute bottom-8 left-6 flex flex-col items-start gap-2 text-white'>
          <span className='text-xs tracking-wider uppercase'>Scroll to explore</span>
            <ChevronDown className='w-5 h-5 animate-bounce' strokeWidth={1.5} />
        </div>
      </div> */}
      <div className='relative z-10 h-full w-full flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center h-full'>
          <p className='text-white font-playfair-display md:text-4xl text-xl leading-tighter tracking-tight font-bold'>Madhuban Vivaha</p>
          <div className='h-px w-20 my-2 bg-background/40' />
          <h1 className='text-white font-playfair-display text-4xl lg:text-8xl text-center leading-tighter tracking-tight px-4'>
            <span className='italic block mt-2'> <TextAnimate animation="slideLeft" by="character" duration={0.5} delay={0.2} once>Luxury Destination</TextAnimate>Wedding</span>
          </h1>
          <p className='text-white font-playfair-display text-lg py-2'>Curated Celebrations | Grand Experiences</p>
        </div>
        
        <Button onClick={() => document.getElementById('membership-form')?.scrollIntoView({ behavior: 'smooth' })} className='absolute md:bottom-8 bottom-34' variant="primary" size="lg">Book Now</Button>

        {/* Scroll Indicator - Bottom Left */}
        <div className='absolute bottom-8 left-6 flex flex-col items-start gap-2 text-white'>
          <span className='text-xs tracking-wider uppercase'>Scroll to explore</span>
            <ChevronDown className='w-5 h-5 animate-bounce' strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )
}

export default Hero
