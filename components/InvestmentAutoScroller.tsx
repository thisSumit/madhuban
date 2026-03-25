'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Home,
  LandPlot,
  LucideIcon,
  PlaneLandingIcon,
  Shield,
  TrendingUp,
  User,
} from 'lucide-react'

interface InvestmentCard {
  id: number
  title: string
  description: string
  image: string
  icon: LucideIcon
}

const investmentCards: InvestmentCard[] = [
  {
    id: 1,
    title: 'Strong Land Appreciation Potential',
    description: 'Land assets in this location are poised for steady long-term value growth.',
    image: '/land-value.jpg',
    icon: TrendingUp,
  },
  {
    id: 2,
    title: 'High Demand for Farmhouse & Weekend Properties',
    description: 'Increasing preference for private getaways continues to drive demand.',
    image: '/high-demand.jpg',
    icon: Home,
  },
  {
    id: 3,
    title: 'Nagpur - A Rapidly Growing City',
    description: 'Strategic development and infrastructure expansion make Nagpur a strong investment hub.',
    image: '/nagpur.webp',
    icon: Building2,
  },
  {
    id: 4,
    title: 'Limited Land Availability',
    description: 'Planned farmhouse communities are limited, enhancing long-term value through scarcity.',
    image: '/limited-land.jpg',
    icon: LandPlot,
  },
  {
    id: 5,
    title: 'Lifestyle-Driven Demand',
    description: 'Growing focus on wellness, open spaces, and private living supports sustained interest.',
    image: '/people-farm.jpeg',
    icon: User,
  },
  {
    id: 6,
    title: 'Multiple Exit Options',
    description: 'Flexibility to self-use, lease, or resell based on personal and market goals.',
    image: '/investment-options.png',
    icon: ExternalLink,
  },
  {
    id: 7,
    title: 'Low-Maintenance Investment',
    description: 'Land requires minimal upkeep compared to constructed properties.',
    image: '/low-invest.avif',
    icon: Shield,
  },
  {
    id: 8,
    title: 'Ideal for NRI & HNI Investors',
    description: 'A secure, tangible asset offering both stability and long-term appreciation.',
    image: '/hni-nri.jpeg',
    icon: PlaneLandingIcon,
  },
]

const InvestmentAutoScroller = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  const tripleData = [...investmentCards, ...investmentCards, ...investmentCards]

  useEffect(() => {
    if (!carouselRef.current) return

    const cardWidth = window.innerWidth < 640 ? window.innerWidth * 0.86 : window.innerWidth < 1024 ? 430 : 500
    const gap = 24
    carouselRef.current.scrollLeft = (cardWidth + gap) * investmentCards.length
  }, [])

  useEffect(() => {
    if (isHovered || isDragging) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      return
    }

    const autoScroll = () => {
      if (!carouselRef.current) return

      const cardWidth = window.innerWidth < 640 ? window.innerWidth * 0.86 : window.innerWidth < 1024 ? 430 : 500
      const gap = 24
      const cardWithGap = cardWidth + gap
      const currentScroll = carouselRef.current.scrollLeft
      const maxScroll = cardWithGap * investmentCards.length * 2

      carouselRef.current.scrollLeft += 0.9

      if (currentScroll >= maxScroll) {
        carouselRef.current.scrollLeft = cardWithGap * investmentCards.length
      }

      animationRef.current = requestAnimationFrame(autoScroll)
    }

    animationRef.current = requestAnimationFrame(autoScroll)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isHovered, isDragging])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel || isDragging) return

    const handleLoop = () => {
      const cardWidth = window.innerWidth < 640 ? window.innerWidth * 0.86 : window.innerWidth < 1024 ? 430 : 500
      const gap = 24
      const cardWithGap = cardWidth + gap
      const singleSetWidth = cardWithGap * investmentCards.length
      const current = carousel.scrollLeft

      if (current <= 0 || current >= singleSetWidth * 2) {
        carousel.scrollLeft = singleSetWidth
      }
    }

    carousel.addEventListener('scroll', handleLoop)
    return () => carousel.removeEventListener('scroll', handleLoop)
  }, [isDragging])

  const handleMouseDown = (event: React.MouseEvent) => {
    if (!carouselRef.current) return

    setIsDragging(true)
    setStartX(event.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
    carouselRef.current.style.cursor = 'grabbing'
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return

    event.preventDefault()
    const x = event.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const stopDragging = () => {
    setIsDragging(false)
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab'
    }
  }

  const handleTouchStart = (event: React.TouchEvent) => {
    if (!carouselRef.current) return

    setIsDragging(true)
    setStartX(event.touches[0].pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleTouchMove = (event: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return

    const x = event.touches[0].pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const scrollByDirection = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return

    const amount = carouselRef.current.clientWidth * 0.8
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <div className='relative'>
      <div className='hidden sm:flex items-center justify-end gap-3 mb-6'>
        <button
          type='button'
          onClick={() => scrollByDirection('left')}
          className='h-11 w-11 rounded-full border border-background/30 bg-background/10 hover:bg-background/20 transition flex items-center justify-center'
          aria-label='Scroll investment cards left'
        >
          <ChevronLeft className='w-5 h-5 text-background' />
        </button>
        <button
          type='button'
          onClick={() => scrollByDirection('right')}
          className='h-11 w-11 rounded-full border border-background/30 bg-background/10 hover:bg-background/20 transition flex items-center justify-center'
          aria-label='Scroll investment cards right'
        >
          <ChevronRight className='w-5 h-5 text-background' />
        </button>
      </div>

      <div
        ref={carouselRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          stopDragging()
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={stopDragging}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={stopDragging}
        className='flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing'
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {tripleData.map((item, index) => {
          const Icon = item.icon

          return (
            <article
              key={`${item.id}-${index}`}
              className='relative shrink-0 w-[86vw] sm:w-[430px] lg:w-[500px] h-[400px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl group'
            >
              <img
                src={item.image}
                alt={item.title}
                className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                draggable={false}
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-black/20' />

              <div className='absolute top-5 left-5 flex items-center gap-2 rounded-full border border-[#D4AF37]/60 bg-black/40 px-3 py-1.5 backdrop-blur'>
                <Icon className='h-4 w-4 text-[#D4AF37]' />
                <p className='text-xs tracking-[0.18em] uppercase text-white/90'>Investment USP</p>
              </div>

              <div className='absolute inset-x-0 bottom-0 p-6 sm:p-8'>
                <h3 className='text-2xl sm:text-3xl font-playfair-display text-white leading-tight mb-3'>
                  {item.title}
                </h3>
                <p className='text-white/85 text-sm sm:text-base leading-relaxed'>
                  {item.description}
                </p>
              </div>
            </article>
          )
        })}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default InvestmentAutoScroller
