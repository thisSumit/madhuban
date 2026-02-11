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
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src="/hero.mp4" type="video/mp4" />
</video>
        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-black/20' />
      </div>

      <div className='relative z-10 h-full w-full flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-white font-playfair-display text-4xl lg:text-8xl text-center leading-tighter tracking-tight px-4'>
            Your Dream <span className='italic block mt-2'> <TextAnimate animation="slideLeft" by="character" duration={0.5} delay={0.2} once> Wedding Destination </TextAnimate> </span> Awaits
          </h1>
        </div>
        
        <Button onClick={() => document.getElementById('membership-form')?.scrollIntoView({ behavior: 'smooth' })} className='absolute bottom-40' variant="primary" size="lg">Book Now</Button>

        {/* Scroll Indicator - Bottom Left */}
        <div className='absolute bottom-8 left-6 flex flex-col items-start gap-2 text-white'>
          <span className='text-xs tracking-wider uppercase'>Scroll to explore</span>
            <ChevronDown className='w-5 h-5 animate-bounce' strokeWidth={1.5} />
        </div>
          <a href="https://wa.me/+917020704420">
        <div className='fixed bottom-8 z-10 bg-foreground p-2 right-6 flex items-end gap-2 text-white'>
          <span className='text-xs tracking-wider uppercase'>Inquery Now</span>
            <MessageCircle className='w-5 h-5' strokeWidth={1.5} />
            
        </div>
        </a>
      </div>
    </div>
  )
}

export default Hero
