'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TextAnimate } from './ui/text-animate'

interface Testimonial {
  id: number
  text: string
  author: string
  source: string
  image?: string // Optional image URL
}

// Move testimonials outside component to prevent recreation
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    text: "Guests who like to walk on a trail among the vineyard will appreciate the beauty of getting to do that. Just love the whole rustic vibe of this property overall. Thanks for a great stay!",
    author: "LELANI D.",
    source: "TRIPADVISOR",
    image: "/couple-3.jpg" // Optional - uncomment and add image path if needed
  },
  {
    id: 2,
    text: "A perfect blend of luxury and nature. The serene atmosphere and beautiful surroundings made our wedding absolutely magical. Highly recommend this venue!",
    author: "SARAH M.",
    source: "GOOGLE REVIEWS",
    image: "/couple-1.jpg" // Optional
  },
  {
    id: 3,
    text: "The attention to detail and the stunning landscape exceeded all our expectations. Our guests couldn't stop talking about how beautiful everything was.",
    author: "JOHN K.",
    source: "FACEBOOK",
    image: "/couple-2.jpg" // Optional
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % testimonialsData.length
        return nextIndex
      })
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    )
  }

  const currentTestimonial = testimonialsData[currentIndex]

  return (
    <section className='relative h-full w-full overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <img
          src="/centre.png" // You can change this to any background image
          alt="Madhuban Village"
          className='h-full w-full object-cover'
        />
      </div>

      {/* Content Container */}
      <div className='relative z-10 h-full w-full flex items-center justify-center px-4 lg:px-16 py-20'>
        <div className='max-w-6xl w-full'>
          {/* Testimonials Card */}
          <div className='bg-[#1b3d2c] rounded-lg shadow-2xl overflow-hidden'>
            <div className='flex flex-col lg:flex-row min-h-[500px]'>
              {/* Left Half - Optional Image or Text */}
              <div className='lg:w-1/2 relative overflow-hidden'>
                {currentTestimonial.image ? (
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    className='h-full w-full object-cover transition-opacity duration-700'
                  />
                ) : (
                  <div className='h-full w-full bg-gradient-to-br from-[#1b3d2c] to-[#2d5a47] flex items-center justify-center p-8'>
                    <img src="centre1.png" width={200} alt="" />
                  </div>
                )}
              </div>

              {/* Right Half - Testimonial Content */}
              <div className='lg:w-1/2 flex flex-col justify-between p-8 lg:p-12 text-background'>
                {/* Header */}
                <div className='mb-8'>
                  <h2 className='text-sm uppercase tracking-widest text-background/80 font-light mb-6'>
                  <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
                    Testimonials
                    </TextAnimate>
                  </h2>
                </div>

                {/* Testimonial Content */}
                <div className='flex-1 flex flex-col justify-center relative min-h-[300px]'>
                  <div className='relative overflow-hidden' style={{ minHeight: '300px' }}>
                    {testimonialsData.map((testimonial, index) => (
                      <div
                        key={`testimonial-${testimonial.id}-${index}`}
                        className={`absolute inset-0 w-full transition-all duration-700 ease-in-out ${
                          index === currentIndex
                            ? 'opacity-100 translate-x-0 pointer-events-auto z-10'
                            : index < currentIndex
                            ? 'opacity-0 -translate-x-full pointer-events-none z-0'
                            : 'opacity-0 translate-x-full pointer-events-none z-0'
                        }`}
                      >
                        <div className='h-full flex flex-col justify-center'>
                          <p className='text-xl lg:text-2xl font-[playfair-display] leading-relaxed text-background mb-8'>
                            {testimonial.text}
                          </p>
                          <div className='text-right'>
                            <p className='text-sm uppercase tracking-wider text-background/80 font-light'>
                              - {testimonial.source} | {testimonial.author}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className='flex items-center justify-center gap-3 mt-8'>
                  {testimonialsData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentIndex
                          ? 'w-2 h-2 bg-[#fff] shadow-lg shadow-[#D4AF37]/50'
                          : 'w-2 h-2 bg-background/40 hover:bg-background/60'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className='flex items-center justify-between mt-6'>
                  <button
                    onClick={goToPrevious}
                    className='p-2 text-background/60 hover:text-background transition-colors duration-300 hover:bg-background/10 rounded-full'
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className='w-6 h-6' />
                  </button>
                  <button
                    onClick={goToNext}
                    className='p-2 text-background/60 hover:text-background transition-colors duration-300 hover:bg-background/10 rounded-full'
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className='w-6 h-6' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
