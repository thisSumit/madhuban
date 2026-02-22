'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryItem {
  id: number
  type: 'image' | 'video'
  src: string
  thumbnail?: string
  title?: string
  description?: string
  category: string
}

// Gallery data - easily customizable (mixed sequence for dynamic layout)
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'image',
    src: '/indraprasta1.png',
    title: 'Indraprastha Palace',
    description: 'Grand banquet hall for royal celebrations',
    category: 'Venues'
  },
  {
    id: 8,
    type: 'image',
    src: '/garden.png',
    title: 'Garden Lawns',
    description: 'Lush green spaces for outdoor ceremonies',
    category: 'Outdoor'
  },
  {
    id: 2,
    type: 'video',
    src: 'exp-1.mp4',
    thumbnail: '/exp-1.png',
    title: 'Celebration Highlights',
    description: 'Experience the joy and grandeur of our events',
    category: 'Celebrations'
  },
  {
    id: 15,
    type: 'image',
    src: '/mangalam.jpg',
    title: 'Mangalam Lawn',
    description: 'Perfect for sangeet and ceremonies',
    category: 'Outdoor'
  },
  {
    id: 4,
    type: 'image',
    src: '/in4.png',
    title: 'Luxury Rooms',
    description: 'Premium accommodations with modern amenities',
    category: 'Accommodation'
  },
  {
    id: 11,
    type: 'video',
    src: 'exp-3.mp4',
    thumbnail: '/exp-3.png',
    title: 'Premium Experience',
    description: 'Experience the finest amenities and services',
    category: 'Celebrations'
  },
  {
    id: 7,
    type: 'image',
    src: '/reception1.png',
    title: 'Reception Area',
    description: 'Elegant reception space with traditional charm',
    category: 'Venues'
  },
  {
    id: 18,
    type: 'image',
    src: '/couple-1.jpg',
    title: 'Wedding Moments',
    description: 'Creating memories that last forever',
    category: 'Celebrations'
  },
  {
    id: 3,
    type: 'video',
    src: 'exp-2.mp4',
    thumbnail: '/exp-2.png',
    title: 'Luxury Experience',
    description: 'Immerse yourself in our premium offerings',
    category: 'Celebrations'
  },
  {
    id: 9,
    type: 'image',
    src: '/pool.png',
    title: 'Ashok Vatika',
    description: 'Stunning poolside venue',
    category: 'Outdoor'
  },
  {
    id: 14,
    type: 'image',
    src: '/amphitheatre.jpg',
    title: 'Amphitheatre',
    description: 'Open-air event space',
    category: 'Venues'
  },
  {
    id: 5,
    type: 'video',
    src: 'exp-4.mp4',
    thumbnail: '/exp-4.png',
    title: 'Madhuban Moments',
    description: 'Capturing unforgettable memories at Madhuban Village',
    category: 'Celebrations'
  },
  {
    id: 12,
    type: 'image',
    src: '/d-2.png',
    title: 'Culinary Excellence',
    description: 'Exquisite vegetarian cuisine',
    category: 'Dining'
  },
  {
    id: 19,
    type: 'image',
    src: '/couple-2.jpg',
    title: 'Love Stories',
    description: 'Capturing your special day',
    category: 'Celebrations'
  },
  {
    id: 10,
    type: 'image',
    src: '/hut2.png',
    title: 'Cottage Stay',
    description: 'Cozy cottages for intimate gatherings',
    category: 'Accommodation'
  },
  {
    id: 6,
    type: 'video',
    src: 'exp-5.mp4',
    thumbnail: '/exp-5.png',
    title: 'Unforgettable Experience',
    description: 'Creating unforgettable moments for our guests',
    category: 'Celebrations'
  },
  {
    id: 16,
    type: 'image',
    src: '/gulmohar.jpg',
    title: 'Gulmohar Lawn',
    description: 'Warm and elegant outdoor space',
    category: 'Outdoor'
  },
  {
    id: 13,
    type: 'image',
    src: '/ex2.png',
    title: 'Resort Exterior',
    description: 'Majestic architecture meets nature',
    category: 'Exterior'
  },
  {
    id: 20,
    type: 'video',
    src: 'https://res.cloudinary.com/dsqqoh9m8/video/upload/v1770801396/hero_b0kbug.mp4',
    thumbnail: '/indraprastha3.png',
    title: 'Madhuban Experience',
    description: 'A journey through luxury and tradition',
    category: 'Celebrations'
  },
  {
    id: 17,
    type: 'image',
    src: '/ex.png',
    title: 'Village Views',
    description: 'Serene and peaceful surroundings',
    category: 'Exterior'
  },
]

const OurWorld = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [filter, setFilter] = useState('All')

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category)))]

  // Filter items
  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  // Open lightbox
  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedItem(item)
    setCurrentIndex(index)
    document.body.style.overflow = 'hidden'
  }

  // Close lightbox
  const closeLightbox = () => {
    setSelectedItem(null)
    document.body.style.overflow = 'unset'
  }

  // Navigate lightbox
  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
      : (currentIndex + 1) % filteredItems.length
    setCurrentIndex(newIndex)
    setSelectedItem(filteredItems[newIndex])
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') navigateLightbox('prev')
      if (e.key === 'ArrowRight') navigateLightbox('next')
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedItem, currentIndex])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Parallax Hero Section */}
      <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="absolute inset-0 bg-foreground" />
          <img
            src="/indraprastha3.png"
            alt="Madhuban Village"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-b from-foreground/70 via-foreground/50 to-foreground" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div 
            className="max-w-4xl"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
              opacity: Math.max(0, 1 - scrollY / 400)
            }}
          >
            <div className="mb-6">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-background/60 mb-4 font-light">
                Discover
              </p>
              <div className="w-16 h-px bg-background/40 mx-auto" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-playfair-display text-background mb-6 leading-tight">
              Our World
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-background/80 max-w-2xl mx-auto leading-relaxed font-light">
              Experience the grandeur and elegance of Madhuban Village—where every corner tells a story 
              of luxury, tradition, and unforgettable celebrations.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-background/70">
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <div className="w-px h-12 bg-background/30 animate-pulse" />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-16">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="break-inside-avoid group cursor-pointer relative overflow-hidden bg-foreground/5 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => openLightbox(item, index)}
              >
                {/* Image/Video Preview */}
                <div className="relative aspect-4/3 lg:aspect-auto lg:h-auto overflow-hidden">
                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={item.title || 'Gallery image'}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={item.thumbnail}
                        alt={item.title || 'Video thumbnail'}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-background/95 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                          <Play className="w-6 h-6 lg:w-8 lg:h-8 text-foreground ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-4 lg:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="w-12 h-px bg-background/60 mb-3" />
                  {item.title && (
                    <h3 className="text-background text-lg lg:text-xl font-playfair-display mb-1 leading-tight">
                      {item.title}
                    </h3>
                  )}
                  {item.description && (
                    <p className="text-background/90 text-xs lg:text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3 px-3 py-1.5 bg-foreground/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-background text-xs uppercase tracking-wider font-light">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar - Sticky Bottom */}
      <section className="sticky bottom-0 z-30 bg-background/98 backdrop-blur-md border-t border-foreground/10 py-6 lg:py-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-16">
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 lg:px-7 py-2.5 text-xs lg:text-sm uppercase tracking-wider transition-all duration-300 ${
                  filter === category
                    ? 'bg-foreground text-background border border-foreground'
                    : 'bg-transparent text-foreground/70 border border-foreground/20 hover:border-foreground/50 hover:bg-foreground/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/98 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 lg:top-8 right-4 lg:right-8 p-3 border border-background/30 hover:border-background hover:bg-background/10 transition-all duration-300 group z-10"
            onClick={closeLightbox}
          >
            <X className="w-5 h-5 lg:w-6 lg:h-6 text-background group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Navigation Buttons */}
          {filteredItems.length > 1 && (
            <>
              <button
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-3 border border-background/30 hover:border-background hover:bg-background/10 transition-all duration-300 group z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateLightbox('prev')
                }}
              >
                <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-background" />
              </button>
              <button
                className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-3 border border-background/30 hover:border-background hover:bg-background/10 transition-all duration-300 group z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateLightbox('next')
                }}
              >
                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-background" />
              </button>
            </>
          )}

          {/* Content */}
          <div 
            className="max-w-7xl w-full h-full max-h-[85vh] relative flex items-center justify-center animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.title || 'Gallery image'}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                className="max-w-full max-h-full object-contain"
              />
            )}

            {/* Caption */}
            {(selectedItem.title || selectedItem.description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/95 via-black/80 to-transparent p-6 lg:p-10">
                <div className="max-w-3xl mx-auto text-center">
                  <div className="w-16 h-px bg-background/40 mx-auto mb-4" />
                  {selectedItem.title && (
                    <h3 className="text-background text-2xl lg:text-4xl font-playfair-display mb-3">
                      {selectedItem.title}
                    </h3>
                  )}
                  {selectedItem.description && (
                    <p className="text-background/80 text-sm lg:text-base font-light leading-relaxed">
                      {selectedItem.description}
                    </p>
                  )}
                  <p className="text-background/50 text-xs lg:text-sm mt-4 uppercase tracking-wider">
                    {currentIndex + 1} / {filteredItems.length}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default OurWorld
