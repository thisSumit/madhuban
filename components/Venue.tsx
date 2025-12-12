'use client'

import React, { useState } from 'react'
import { ChevronRight, X } from 'lucide-react'
import { Button } from './ui/Button'
import { TextAnimate } from './ui/text-animate'

interface Venue {
  id: number
  number: string
  name: string
  description: string
  image?: string
}

const venuesData: Venue[] = [
  {
    id: 1,
    number: '01',
    name: 'Indraprastha Banquet Hall',
    description: 'A grand, royal indoor banquet crafted for majestic wedding ceremonies, elegant sangeet nights, and luxurious receptions.',
    image: 'indraprasth.png' // Uncomment and add image path
  },
  {
    id: 2,
    number: '02',
    name: 'Mangalam Lawn',
    description: 'One of Nagpur\'s largest and most magnificent wedding lawns, designed for opulent, large-scale royal celebrations under the open sky.',
    image: '/d-2.png' // Uncomment and add image path
  },
  {
    id: 3,
    number: '03',
    name: 'Ashok Vatika',
    description: 'A serene, lush green garden venue with a beautiful poolside setting—ideal for cocktail nights, private parties, and intimate celebrations.',
    image: '/pool.png' // Uncomment and add image path
  },
  {
    id: 4,
    number: '04',
    name: 'Poolside & Sunset Point',
    description: 'An enchanting sunset-facing poolside arena, perfect for haldi, mehendi, sundown weddings, and breathtaking wedding photography.',
    image: '/ex2.png' // Uncomment and add image path
  },
  {
    id: 5,
    number: '05',
    name: 'Luxury Guest Rooms',
    description: 'Premium deluxe rooms offering refined comfort and elegance, thoughtfully designed to accommodate 200–400 wedding guests with resort-style luxury.',
    image: 'in.png' // Uncomment and add image path
  },
]

const Venue = () => {
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const handleVenueClick = (venue: Venue) => {
    setSelectedVenue(venue)
    setIsDetailOpen(true)
  }

  const closeDetail = () => {
    setIsDetailOpen(false)
    setTimeout(() => {
      setSelectedVenue(null)
    }, 300)
  }

  return (
    <section className='relative w-full min-h-screen bg-background py-20 lg:py-32'>
      <div className='max-w-7xl mx-auto px-4 lg:px-16'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
          {/* Left Section - Image */}
          <div className='lg:w-1/2 relative'>
            <div className='sticky top-24 h-[600px] lg:h-[700px] rounded-lg overflow-hidden shadow-2xl'>
              {selectedVenue?.image ? (
                <img
                  src={selectedVenue.image}
                  alt={selectedVenue.name}
                  className='w-full h-full object-cover transition-opacity duration-500'
                />
              ) : (
                <div className='w-full h-full bg-gradient-to-br from-[#1b3d2c] to-[#2d5a47] flex items-center justify-center'>
                  <div className='w-full h-full object-cover '>
                  <img src="/indraprastha3.png" className='w-full h-full object-cover' alt="" />
                  </div>
                </div>
              )}
              {/* Overlay gradient for better text readability if needed */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none' />
            </div>
          </div>

          {/* Right Section - Venue List */}
          <div className='lg:w-1/2 flex flex-col justify-center'>
            <div className='mb-12'>
              <h2 className='text-4xl lg:text-5xl font-playfair-display text-foreground mb-4'>
              <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
                Our Venues
                </TextAnimate>
              </h2>
              <p className='text-lg text-foreground/70 leading-relaxed'>
                Madhuban Village offers picturesque views, beautifully landscaped grounds and is one of Nagpur's most visually stunning properties for your special celebrations.
              </p>
            </div>

            {/* Venue List */}
            <div className='space-y-0'>
              {venuesData.map((venue, index) => (
                <div
                  key={venue.id}
                  className='venue-item group border-b border-foreground/10 last:border-b-0'
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <button
                    onClick={() => handleVenueClick(venue)}
                    className='w-full py-6 flex items-center justify-between hover:bg-foreground/5 transition-all duration-300 group-hover:pl-4 px-2 rounded-lg'
                  >
                    <div className='flex items-center gap-6 flex-1 text-left'>
                      <span className='text-foreground/40 text-sm font-light tracking-widest min-w-[40px]'>
                        {venue.number}
                      </span>
                      <span className='text-xl lg:text-2xl font-playfair-display text-foreground group-hover:text-foreground/80 transition-colors duration-300'>
                        {venue.name}
                      </span>
                    </div>
                    <ChevronRight 
                      className='w-5 h-5 text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300' 
                    />
                  </button>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 mt-12'>
              <Button onClick={() => window.location.href = "/contact"} variant="default" size="lg" className='flex-1'>
                Request a Tour
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal/Overlay */}
      {isDetailOpen && selectedVenue && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
            isDetailOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeDetail}
        >
          {/* Backdrop */}
          <div className='absolute inset-0 bg-black/60 backdrop-blur-sm' />

          {/* Detail Card */}
          <div
            className={`relative bg-background rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 ${
              isDetailOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeDetail}
              className='absolute top-4 right-4 p-2 text-foreground/60 hover:text-foreground transition-colors duration-300 z-10'
              aria-label="Close"
            >
              <X className='w-6 h-6' />
            </button>

            <div className='flex flex-col lg:flex-row'>
              {/* Image Section */}
              <div className='lg:w-1/2 h-64 lg:h-auto min-h-[300px] bg-gradient-to-br from-[#1b3d2c] to-[#2d5a47]'>
                {selectedVenue.image ? (
                  <img
                    src={selectedVenue.image}
                    alt={selectedVenue.name}
                    className='w-full h-full object-cover'
                  />
                ) : (
                  <div className='w-full h-full flex items-center justify-center text-background/40'>
                    <p className='text-center px-8'>
                      <img src="/hut2.png" alt="" />
                    </p>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className='lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center'>
                <div className='mb-4'>
                  <span className='text-foreground/40 text-sm font-light tracking-widest'>
                    {selectedVenue.number}
                  </span>
                </div>
                <h3 className='text-3xl lg:text-4xl font-playfair-display text-foreground mb-6'>
                  {selectedVenue.name}
                </h3>
                <p className='text-lg text-foreground/70 leading-relaxed mb-8'>
                  {selectedVenue.description}
                </p>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Button onClick={() => window.location.href = "https://wa.me/+917020704420"} variant="secondary" size="lg" className='flex-1'>
                    Learn More
                  </Button>
                  <Button onClick={() => window.location.href = "/contact"} variant="primary" size="lg" className='flex-1'>
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Venue
