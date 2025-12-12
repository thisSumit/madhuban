'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TextAnimate } from './ui/text-animate'

interface GalleryItem {
  id: number
  title: string
  description: string
  image?: string
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: 'Multiple Venues Within the Resort',
    description: 'Conduct mehendi, haldi, cocktail, sangeet, pheras, and reception at different royal spots.',
    image: '/reception1.png'
  },
  {
    id: 2,
    title: 'Fairy-Tale Wedding Themes',
    description: 'Our décor team specializes in royal, pastel, floral, Bollywood, and fairy-tale themes.',
    image: '/indraprasta1.png' // Add image path
  },
  {
    id: 3,
    title: 'Resort-Style Ambience',
    description: 'Natural pathways, landscaped gardens, luxury rooms, and signature sunset views make your wedding magical.',
    image: '/ex2.png'
  },
  {
    id: 4,
    title: 'Best Dinning Experience',
    description: 'Our in-house caterers prepare exquisite meals using traditional recipes and locally sourced ingredients.',
    image: '/d-2.png' // Add image path
  },
  {
    id: 5,
    title: '2–3 Day Wedding Packages',
    description: 'Perfect for families who want to celebrate every function without travel hassles.',
    image: '/ex.png' // Add image path
  },
  {
    id: 6,
    title: 'Hut cottages for family and friends',
    description: 'Our hut cottages are perfect for family and friends to stay during the wedding.',
    image: 'hut2.png' // Add image path
  },
  {
    id: 7,
    title: 'Luxurious Rooms',
    description: 'Premium deluxe rooms offering refined comfort and elegance, thoughtfully designed to accommodate 200–400 wedding guests with resort-style luxury.',
    image: 'in4.png' // Add image path
  },
  {
    id: 8,
    title: 'Private, Exclusive Environment',
    description: 'Host your wedding in a completely private space surrounded by greenery and serenity.',
    image: '/pool.png' // Add image path
  },
  {
    id: 9,
    title: 'Multiple Venues Within the Resort',
    description: 'Conduct mehendi, haldi, cocktail, sangeet, pheras, and reception at different royal spots.',
    image: '/reception1.png'
  },
  {
    id: 10,
    title: 'Fairy-Tale Wedding Themes',
    description: 'Our décor team specializes in royal, pastel, floral, Bollywood, and fairy-tale themes.',
    image: '/indraprasta1.png' // Add image path
  },
  {
    id: 11,
    title: 'Resort-Style Ambience',
    description: 'Natural pathways, landscaped gardens, luxury rooms, and signature sunset views make your wedding magical.',
    image: '/ex2.png'
  },
  {
    id: 12,
    title: 'Best Dinning Experience',
    description: 'Our in-house caterers prepare exquisite meals using traditional recipes and locally sourced ingredients.',
    image: '/d-2.png' // Add image path
  },
  {
    id: 13,
    title: '2–3 Day Wedding Packages',
    description: 'Perfect for families who want to celebrate every function without travel hassles.',
    image: '/ex.png' // Add image path
  },
  {
    id: 14,
    title: 'Hut cottages for family and friends',
    description: 'Our hut cottages are perfect for family and friends to stay during the wedding.',
    image: 'hut2.png' // Add image path
  },
  {
    id: 15,
    title: 'Luxurious Rooms',
    description: 'Premium deluxe rooms offering refined comfort and elegance, thoughtfully designed to accommodate 200–400 wedding guests with resort-style luxury.',
    image: 'in4.png' // Add image path
  },
  {
    id: 16,
    title: 'Private, Exclusive Environment',
    description: 'Host your wedding in a completely private space surrounded by greenery and serenity.',
    image: '/pool.png' // Add image path
  },
]

const Gallary = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Auto-scroll functionality
  useEffect(() => {
    if (isHovered || isDragging) return

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        const currentScroll = carouselRef.current.scrollLeft
        
        if (currentScroll >= maxScroll - 10) {
          // Reset to start when reaching the end
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          // Auto-scroll to the right
          carouselRef.current.scrollBy({ left: 2, behavior: 'smooth' })
        }
      }
    }, 50) // Smooth auto-scroll

    return () => clearInterval(interval)
  }, [isHovered, isDragging])

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
    carouselRef.current.style.cursor = 'grabbing'
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab'
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab'
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  // Manual navigation
  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return
    const scrollAmount = carouselRef.current.clientWidth * 50
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className='relative w-full py-20 lg:py-32 bg-background overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 lg:px-16'>
        <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12'>
          <div className='mb-6 lg:mb-0 lg:flex-1'>
            <h2 className='text-4xl lg:text-5xl font-[playfair-display] text-foreground mb-4'>
            <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
              Explore Our World
              </TextAnimate>
            </h2>
            <p className='text-lg text-foreground/70 leading-relaxed max-w-2xl'>
              Guests enjoy full convenience with rooms, lawns, banquet hall, and event spaces inside one property.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className='flex items-center gap-4'>
            <button
              onClick={() => scroll('left')}
              className='p-3 rounded-full border border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all duration-300'
              aria-label="Scroll left"
            >
              <ChevronLeft className='w-6 h-6 text-foreground' />
            </button>
            <button
              onClick={() => scroll('right')}
              className='p-3 rounded-full border border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all duration-300'
              aria-label="Scroll right"
            >
              <ChevronRight className='w-6 h-6 text-foreground' />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            handleMouseLeave()
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className='flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing'
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Gallery Cards */}
          {galleryData.map((item, index) => (
            <div
              key={item.id}
              className='flex-shrink-0 w-[90vw] sm:w-[500px] lg:w-[600px] h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl group relative'
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Image or Placeholder */}
              <div className='absolute inset-0'>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                ) : (
                  <div className='w-full h-full bg-gradient-to-br from-[#1b3d2c] to-[#2d5a47] flex items-center justify-center'>
                    <div className='text-background/40 text-center p-8'>
                      <p className='text-lg italic font-light'>
                        Add gallery image here
                      </p>
                    </div>
                  </div>
                )}
                {/* Overlay Gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
              </div>

              {/* Content Overlay */}
              <div className='absolute inset-0 flex flex-col justify-end p-8 lg:p-12 text-background'>
                <h3 className='text-2xl lg:text-3xl font-[playfair-display] mb-3 group-hover:translate-y-[-4px] transition-transform duration-300'>
                  {item.title}
                </h3>
                <p className='text-base lg:text-lg text-background/90 leading-relaxed group-hover:translate-y-[-4px] transition-transform duration-300 delay-75'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Duplicate items for seamless loop */}
          {galleryData.map((item, index) => (
            <div
              key={`duplicate-${item.id}`}
              className='flex-shrink-0 w-[90vw] sm:w-[500px] lg:w-[600px] h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl group relative'
            >
              <div className='absolute inset-0'>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                ) : (
                  <div className='w-full h-full bg-gradient-to-br from-[#1b3d2c] to-[#2d5a47] flex items-center justify-center'>
                    <div className='text-background/40 text-center p-8'>
                      <p className='text-lg italic font-light'>
                        Add gallery image here
                      </p>
                    </div>
                  </div>
                )}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
              </div>
              <div className='absolute inset-0 flex flex-col justify-end p-8 lg:p-12 text-background'>
                <h3 className='text-2xl lg:text-3xl font-[playfair-display] mb-3 group-hover:translate-y-[-4px] transition-transform duration-300'>
                  {item.title}
                </h3>
                <p className='text-base lg:text-lg text-background/90 leading-relaxed group-hover:translate-y-[-4px] transition-transform duration-300 delay-75'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Gallary
