'use client'

import React, { useEffect, useRef, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import InvestmentAutoScroller from '@/components/InvestmentAutoScroller'
import {
  Check,
  MapPin,
  TrendingUp,
  Home,
  Shield,
  Droplet,
  TreePine,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react'
import { TextAnimate } from '@/components/ui/text-animate'

const plotsImages = [
  '/lands.jpg',
  '/dr2.png',
  '/lands-1.jpg',
  '/dr4.png',
]

function PlotsCarousel() {
  const [current, setCurrent] = useState(0)
  const startX = useRef<number | null>(null)
  const isDragging = useRef(false)
  const lastIndex = plotsImages.length - 1

  const next = () => setCurrent(c => (c === lastIndex ? 0 : c + 1))
  const prev = () => setCurrent(c => (c === 0 ? lastIndex : c - 1))

  const onStart = (x: number) => {
    startX.current = x
    isDragging.current = true
  }

  const onEnd = (x: number) => {
    if (!isDragging.current || startX.current === null) return
    const diff = x - startX.current
    if (diff > 60) prev()
    else if (diff < -60) next()
    isDragging.current = false
    startX.current = null
  }

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="relative overflow-hidden h-[85vh] md:h-[90vh] cursor-grab active:cursor-grabbing w-full"
        onMouseDown={e => onStart(e.clientX)}
        onMouseUp={e => onEnd(e.clientX)}
        onMouseLeave={e => isDragging.current && onEnd(e.clientX)}
        onTouchStart={e => onStart(e.touches[0].clientX)}
        onTouchEnd={e => onEnd(e.changedTouches[0].clientX)}
      >
        {/* Slides */}
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {plotsImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Madhuban Village ${idx + 1}`}
              className="w-full h-full object-cover shrink-0 select-none"
              draggable={false}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full backdrop-blur transition"
          aria-label="Previous"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full backdrop-blur transition"
          aria-label="Next"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {plotsImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-3 w-3 rounded-full transition ${current === idx ? 'bg-foreground' : 'bg-white/40'
              }`}
          />
        ))}
      </div>
    </section>
  )
}

const farmhouseFocusPoints = [
  {
    icon: TrendingUp,
    title: 'Earn from Sagwan, Teak & Sandalwood plantation',
    description: 'Create long-term value through premium plantation on your own land parcel.',
  },
  {
    icon: Droplet,
    title: 'Grow your own vegetables and small farmland',
    description: 'Enjoy farm-to-table living by cultivating fresh produce for your family.',
  },
  {
    icon: TreePine,
    title: 'Create a jungle and give back to nature',
    description: 'Develop a lush ecosystem that supports biodiversity and natural balance.',
  },
  {
    icon: Shield,
    title: 'Grow government-approved trees for carbon credit',
    description: 'Build an eco-responsible asset aligned with future-ready sustainability opportunities.',
  },
  {
    icon: Home,
    title: 'Rental income from your farmhouse',
    description: 'Generate steady returns by offering your farmhouse as a weekend rental stay.',
  },
  {
    icon: Home,
    title: 'Build a farmhouse for your own weekend leisure',
    description: 'Create a private retreat where your family can unwind, celebrate, and reconnect.',
  },
]

const amenitiesList = [
  {
    image: '/landscape-lawn.png',
    title: 'Beautifully Landscaped Lawns',
    description: 'Thoughtfully designed green areas that enhance everyday living.',
  },
  {
    image: '/childrens-play.jpg',
    title: 'Children’s Play Area & Family Zone',
    description: 'Safe, dedicated spaces for recreation and family time.',
  },
  {
    image: '/club-anandam.jpg',
    title: 'Exclusive Clubhouse Access',
    description: 'A lifestyle clubhouse for leisure, socialising, and relaxation.',
  },
  {
    image: '/ready-infra.jpeg',
    title: 'Ready Infrastructure',
    description: 'Well-planned power supply, water connection, and internal roads.',
  },
  {
    image: '/high-demand.jpg',
    title: 'Gated Community with 24×7 Security',
    description: 'Controlled access and round-the-clock security for complete peace of mind.',
  },
  {
    image: '/mandir.png',
    title: 'Mandir Within the Community',
    description: 'A serene spiritual space for daily prayers and special occasions.',
  },
  {
    image: '/ample-green.png',
    title: 'Ample Green Open Spaces',
    description: 'Open, breathable surroundings that promote wellness and calm living.',
  },
  {
    image: '/farmhouse.png',
    title: 'Rental Income Opportunity',
    description: 'Option to generate returns by renting your farmhouse or villa.',
  },
  {
    image: '/unique-house.png',
    title: 'Custom Construction Options',
    description: 'Freedom to design and build as per your lifestyle and vision.',
  },
]

function AmenitiesAutoScroller() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const isDraggingRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragStartScrollLeftRef = useRef(0)
  const scrollSpeed = 0.6

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let frameId = 0

    const tick = () => {
      if (!isPaused) {
        container.scrollLeft += scrollSpeed
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0
        }
      }
      frameId = window.requestAnimationFrame(tick)
    }

    frameId = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(frameId)
  }, [isPaused])

  const scrollByCard = (direction: 'left' | 'right') => {
    const container = containerRef.current
    if (!container) return
    const amount = direction === 'left' ? -380 : 380
    container.scrollBy({ left: amount, behavior: 'smooth' })
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current
    if (!container) return

    isDraggingRef.current = true
    setIsDragging(true)
    setIsPaused(true)
    dragStartXRef.current = event.clientX
    dragStartScrollLeftRef.current = container.scrollLeft
    container.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current
    if (!container || !isDraggingRef.current) return

    const delta = event.clientX - dragStartXRef.current
    container.scrollLeft = dragStartScrollLeftRef.current - delta * 1.1
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current
    if (!container) return

    isDraggingRef.current = false
    setIsDragging(false)
    setIsPaused(false)
    if (container.hasPointerCapture(event.pointerId)) {
      container.releasePointerCapture(event.pointerId)
    }
  }

  const loopedAmenities = [...amenitiesList, ...amenitiesList]

  return (
    <div className='relative'>
      <div
        ref={containerRef}
        className={`overflow-x-auto scrollbar-hide mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] touch-pan-y select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className='flex gap-5 w-max py-2'>
          {loopedAmenities.map(({ image, title, description }, index) => (
            <article
              key={`${title}-${index}`}
              className='w-[300px] sm:w-[360px] rounded-2xl overflow-hidden border border-foreground/10 bg-background hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
            >
              <div className='relative h-52 sm:h-60 overflow-hidden'>
                <img
                  src={image}
                  alt={title}
                  draggable={false}
                  className='h-full w-full object-cover'
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/100 via-black/0 via-black/0 to-transparent' />
                <p className='absolute left-4 bottom-4 right-4 text-white text-lg font-semibold leading-snug drop-shadow'>
                  {title}
                </p>
              </div>
              <div className='p-5'>
                <p className='text-foreground/70 leading-relaxed text-sm'>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button
        type='button'
        aria-label='Scroll amenities left'
        onClick={() => scrollByCard('left')}
        className='hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-foreground text-background shadow-md hover:bg-foreground/90 transition'
      >
        <ChevronLeft className='h-5 w-5' />
      </button>
      <button
        type='button'
        aria-label='Scroll amenities right'
        onClick={() => scrollByCard('right')}
        className='hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-foreground text-background shadow-md hover:bg-foreground/90 transition'
      >
        <ChevronRight className='h-5 w-5' />
      </button>
    </div>
  )
}

const PlotPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    plotSize: '',
    budget: '',
    visitDate: '',
    timeline: '',
    interests: [] as string[],
    notes: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const scriptURL = "https://script.google.com/macros/s/AKfycbxcNT7NKTGXRh_fedq1-0USZTWV22D5aAHKK9TGmSDsVTJoxyRV1Uz4ubqQeHwJ6uSs/exec" // Integrated Google Apps Script URL

    const payload = {
      name: formData.name.trim(),
      mobile: formData.mobile.trim(),
      email: formData.email.trim(),
      city: formData.city.trim(),
      plotSize: formData.plotSize,
      budget: formData.budget,
      visitDate: formData.visitDate,
      timeline: formData.timeline,
      interests: formData.interests, // array
      notes: formData.notes.trim(),
      source: "Plot Form", // Important: This identifies the form type
      formType: "plots",
      timestamp: new Date().toISOString()
    }

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })

      alert('Thank you! Our property advisor will contact you within 30 minutes.')

      setFormData({
        name: '',
        mobile: '',
        email: '',
        city: '',
        plotSize: '',
        budget: '',
        visitDate: '',
        timeline: '',
        interests: [],
        notes: '',
      })

    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong! Please try again or call us directly.')
    }
  }

  return (
    <div className='min-h-screen bg-background overflow-hidden'>
      <Header />

      {/* 1. HERO SECTION */}
      <section className='relative h-[88vh] min-h-[640px] w-full overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            src='/farm5.jpeg'
            alt='Madhuban Village Farmhouse'
            className='h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-black/30' />
        </div>

        <div className='relative z-10 h-full max-w-7xl mx-auto px-4 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-10'>
          {/* <div className='pt-20 lg:pt-24'>
            <p className='text-background/80 text-xl italic'>Your Private Villa Plots at</p>
            <h1 className='text-4xl lg:text-7xl font-playfair-display text-nowrap text-background mb-2 leading-tight'>
              Madhuban Village
            </h1>
            <p className='text-2xl lg:text-3xl font-playfair-display text-background/95 mb-6'>Near Katol, Nagpur</p>
            <p className='text-lg lg:text-xl text-background/85 mb-8 max-w-xl leading-relaxed'>
              Build a private farmhouse in a planned green community and create a long-term lifestyle and investment asset.
            </p>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Button
                variant='primary'
                size='lg'
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book A Tour
              </Button>
                <a className='inline-flex items-center text-background/95 gap-2' href='tel:917020704418'>
                <Phone className='w-5 h-5' />
                +91 70207 04418
              </a>
            </div>
          </div> */}

          <div className='relative z-10 h-full w-full flex flex-col items-center justify-center'>
  <div className='flex flex-col items-center justify-center h-full'>
    
    <p className='text-white font-playfair-display md:text-4xl text-xl leading-tighter tracking-tight font-bold'>
      Madhuban Aaranya
    </p>

    <div className='h-px w-20 my-2 bg-background/40' />

    <h1 className='text-white font-playfair-display text-4xl lg:text-6xl text-center leading-tighter tracking-tight px-4'>
      <span className='italic block mt-2'>
        <TextAnimate animation="slideLeft" by="character" duration={0.5} delay={0.2} once>
          Farmhouse Lifestyle
        </TextAnimate>Villa Plots
      </span>
    </h1>

    <p className='text-white font-playfair-display text-lg py-2'>
      Investment | Weekend Homes | Managed Living
    </p>

    <Button
      variant='primary'
      size='lg'
      className='mt-8'
      onClick={() =>
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
      }
    >
      Book A Tour
    </Button>

  </div>
</div>

          <div className='hidden lg:block justify-self-end mt-20'>
            <div className='w-[360px] rounded-[48px] bg-background/90 backdrop-blur border border-background/30 p-8 shadow-xl'>
              <h3 className='text-2xl font-playfair-display text-foreground mb-6'>Project Highlights</h3>
              <div className='space-y-4 text-foreground/80'>
                <p><span className='font-semibold text-foreground'>Location:</span> Near Katol, Nagpur</p>
                <p><span className='font-semibold text-foreground'>Plot Size:</span> 4,000 sq. ft. onwards</p>
                <p><span className='font-semibold text-foreground'>Pricing:</span> ₹700/sq. ft. onwards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION STORY SECTION */}
      <section className='py-16 lg:py-24 bg-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          <div>
            <h2 className='text-4xl lg:text-5xl font-playfair-display text-foreground mb-8'>
              <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
                Welcome to
              </TextAnimate>
              <TextAnimate animation="blurInUp" className='italic' by="character" duration={0.5} delay={0.1} once>
                Madhuban Village
              </TextAnimate>
              <TextAnimate animation="blurInUp" className='italic' by="character" duration={0.5} delay={0.1} once>
                Villa Plots
              </TextAnimate>
            </h2>
          </div>
          <div className='text-foreground/70 text-lg leading-relaxed space-y-4'>
            <p>
              Madhuban Village offers Villa plots with farmhouse lifestyle designed for those who value space, privacy, and long-term growth. Whether it’s a peaceful getaway, a place to host meaningful celebrations, or a smart investment.
            </p>
            <p>
              With Villa Plots starting from 4,000 sq. ft. and pricing from ₹700 per sq. ft.
            </p>
          </div>
        </div>
      </section>

      <div className='w-full bg-background py-5'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent' />
        </div>
      </div>

      {/* TOP HIGHLIGHTS SECTION */}
      <section className='relative overflow-hidden bg-linear-to-b from-background via-foreground/5 to-background py-14 lg:py-18 text-foreground'>
        <div className='relative max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='text-center max-w-3xl mx-auto mb-10'>
            <p className='text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-semibold'>Top Investment Highlights</p>
            <h2 className='mt-3 text-3xl lg:text-5xl font-playfair-display leading-tight'>
              Turn Your Plot Into a
              <span className='italic text-[#D4AF37]'> Lifestyle + Income Asset</span>
            </h2>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5'>
            {farmhouseFocusPoints.map(({ icon: Icon, title, description }, idx) => (
              <article
                key={idx}
                className='rounded-2xl border border-foreground/10 bg-background/85 backdrop-blur-sm p-5 lg:p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:bg-background transition-all duration-300'
              >
                <div className='flex items-start gap-4'>
                  <div className='mt-0.5 rounded-xl p-2.5 border border-[#D4AF37]'>
                    <Icon className='h-5 w-5 text-[#D4AF37]' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold leading-snug text-foreground'>{title}</h3>
                    <p className='mt-2 text-sm leading-relaxed text-foreground/70'>{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* PANORAMIC IMAGE BREAK */}
      <section className='relative w-full h-[55vh] lg:h-[70vh] overflow-hidden'>
        <img
          src='https://static2.tripoto.com/media/filter/tst/img/249000/SpotDocument/1505706943_1505706930892.jpg.webp'
          alt='Madhuban Village Farmhouse Vista'
          className='w-full h-full object-cover transition-transform duration-700 hover:scale-105'
        />
        <div className='absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-black/10' />
        <div className='absolute inset-0 flex flex-col items-center justify-end pb-14 text-center px-4'>
          <div className='w-16 h-px bg-[#D4AF37] mb-5' />
          <span className='text-[#D4AF37] text-xs tracking-[0.35em] uppercase font-medium mb-3'>
            Villa Plots with Farmhouse Lifestyle
          </span>
          <p className='text-white/80 text-lg lg:text-2xl font-playfair-display italic max-w-xl'>
            A peaceful space where nature surrounds you and your dream farmhouse takes shape.
          </p>
          <div className='w-16 h-px bg-[#D4AF37] mt-5' />
        </div>
      </section>

      <section className='py-12 bg-foreground text-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <h3 className='text-center text-xl lg:text-2xl font-playfair-display mb-8'>
            Why Most People Are Choosing Madhuban Village Farmhouse
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='text-center'>
              <TrendingUp className='w-8 h-8 mx-auto mb-3 text-[#D4AF37]' />
              <h4 className='font-semibold text-lg mb-2'>Appreciating Land Asset</h4>
              <p className='text-sm lg:text-base'>Secure ownership of land with strong appreciation potential over time.</p>
            </div>
            <div className='text-center'>
              <MapPin className='w-8 h-8 mx-auto mb-3 text-[#D4AF37]' />
              <h4 className='font-semibold text-lg mb-2'>Strategic Location Advantage</h4>
              <p className='text-sm lg:text-base'>Serene surroundings with seamless connectivity to the city.</p>
            </div>
            <div className='text-center'>
              <Shield className='w-8 h-8 mx-auto mb-3 text-[#D4AF37]' />
              <h4 className='font-semibold text-lg mb-2'>High Future Value</h4>
              <p className='text-sm lg:text-base'>Part of a fast-developing destination with long-term growth prospects.</p>
            </div>
            <div className='text-center'>
              <Home className='w-8 h-8 mx-auto mb-3 text-[#D4AF37]' />
              <h4 className='font-semibold text-lg mb-2'>Elevated Lifestyle Living</h4>
              <p className='text-sm lg:text-base'>A refined farmhouse lifestyle blending nature, privacy, and luxury.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOCATION & SIZE FEATURE */}
      <section>
        <div className='relative w-full h-[60vh] lg:h-[72vh] overflow-hidden'>
          <img
            src='/dr2.png'
            alt='Set against the backdrop of nature'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-foreground/30' />
          <div className='absolute inset-0 max-w-7xl mx-auto px-4 lg:px-16 flex items-center justify-between'>
            <div className='max-w-lg text-background'>
              <h3 className='text-4xl lg:text-6xl font-playfair-display leading-tight'>
                Premium Villa Plots for A Farmhouse Lifestyle
              </h3>
              <p className='mt-6 text-2xl font-playfair-display'>Blending luxury living, club amenities, and serene natural surroundings.</p>
            </div>
            <div className='hidden lg:block w-[330px] bg-background/90 rounded-[50px] p-8 shadow-xl'>
              <h4 className='text-3xl font-playfair-display text-foreground mb-5'>Location</h4>
              <p className='text-foreground/80 mb-6'>Near Katol, Nagpur</p>
              <h4 className='text-3xl font-playfair-display text-foreground mb-4'>Plot Sizes</h4>
              <p className='text-foreground/80 mb-6'>4,000 sq. ft. to 20,000 sq. ft.</p>
              <h4 className='text-3xl font-playfair-display text-foreground mb-4'>Prices</h4>
              <p className='text-foreground/80 mb-7'>₹700 per sq. ft. onwards</p>
              <button
                className='w-full rounded-full bg-foreground text-background py-3 font-semibold hover:bg-foreground/90 transition'
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book A Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INVESTMENT & USE CASE */}
      <section className='py-15 lg:py-20 bg-foreground text-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='max-w-4xl mx-auto text-center mb-12'>
            <h2 className='text-4xl lg:text-5xl font-playfair-display mb-5'>
              <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
                Why Farmhouse
              </TextAnimate>
              <TextAnimate animation="blurInUp" by="character" className='italic' duration={0.5} delay={0.1} once>
                Is a Smart Investment
              </TextAnimate>
            </h2>
            <p className='text-background/70 text-base lg:text-lg leading-relaxed'>
              Earn passive income, enjoy nature, and benefit from long-term land appreciation. A perfect blend of lifestyle, sustainability, and high-return investment.
            </p>
          </div>

          <InvestmentAutoScroller />

          <div className='mt-10 flex flex-wrap justify-center gap-3'>
            {['Private Farmhouse Plots', 'Perfect Family Vacation Home', 'High-Profit Sandalwood Plantation', 'Profitable Teak Wood Plantation', 'Earn Rental Income from Your Getaway', 'Secure Long-Term Land Investment', 'Grow Your Own Fresh Vegetables & Fruits', 'Create Your Own Private Jungle'].map((use, index) => (
              <div key={index} className='rounded-full border border-background/20 bg-background/10 px-4 py-2'>
                <p className='text-sm lg:text-base text-background/90'>{use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="max-w-full mx-auto px-0">
          <PlotsCarousel />
        </div>
      </section>

      {/* IMAGE GALLERY GRID */}
      <section className='py-16 lg:py-24 bg-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='text-center mb-10'>
            <span className='text-foreground text-xs tracking-[0.3em] uppercase font-medium'>Visual Tour</span>
            <h3 className='text-3xl lg:text-4xl font-playfair-display text-foreground mt-3'>
              A Glimpse of <span className='italic'>Your Future Home</span>
            </h3>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4'>
            <div className='col-span-2 lg:col-span-1 lg:row-span-2 relative overflow-hidden rounded-2xl h-64 lg:h-[524px] group cursor-pointer'>
              <img
                src='/farm5.jpeg'
                alt='Farmhouse view'
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500' />
            </div>
            <div className='relative overflow-hidden rounded-2xl h-48 lg:h-[254px] group cursor-pointer'>
              <img
                src='/gulmohar-1.png'
                alt='Landscape view'
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
              />
              <div className='absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500' />
            </div>
            <div className='relative overflow-hidden rounded-2xl h-48 lg:h-[254px] group cursor-pointer'>
              <img
                src='/farm3.jpeg'
                alt='Amenities'
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
              />
              <div className='absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500' />
            </div>
            <div className='col-span-2 relative overflow-hidden rounded-2xl h-48 lg:h-[254px] group cursor-pointer'>
              <img
                src='/ample-green.png'
                alt='Community'
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
              />
              <div className='absolute inset-0 bg-linear-to-r from-black/50 to-transparent' />
              <div className='absolute bottom-5 left-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-500'>
                <p className='text-white font-playfair-display italic text-xl drop-shadow'>Experience the life you deserve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

<div className='w-full bg-background py-5'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent' />
        </div>
      </div>

      {/* 4. AMENITIES SECTION */}
      <section className='py-20 lg:py-24 bg-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='max-w-2xl mx-auto text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-playfair-display'>
              <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
                Lifestyle Benefits
              </TextAnimate>
              <TextAnimate animation="blurInUp" by="character" className='italic' duration={0.5} delay={0.1} once>
                That Come with
              </TextAnimate>
              <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once className=' italic'>Your Land</TextAnimate>
            </h2>
            <p className='mt-4 text-base lg:text-lg text-foreground/70 leading-relaxed'>
              Every plot at Madhuban Village comes backed by a curated set of lifestyle amenities designed to elevate everyday living.
            </p>
          </div>

          <AmenitiesAutoScroller />
        </div>
      </section>

      <div className='w-full bg-background py-5'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent' />
        </div>
      </div>

      {/* 5. LOCATION ADVANTAGE */}
      <section className='py-20 lg:py-32 bg-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl lg:text-5xl font-playfair-display text-foreground mb-8'>
                <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
                  Perfect Balance of
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="character" className='italic' duration={0.5} delay={0.1} once>
                  Connectivity & Peace
                </TextAnimate>
              </h2>
              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <MapPin className='w-6 h-6 text-foreground' />
                  <p className='text-lg text-foreground/70'>50 minutes from Nagpur Zero Mile</p>
                </div>
                <div className='flex items-center gap-4'>
                  <MapPin className='w-6 h-6 text-foreground' />
                  <p className='text-lg text-foreground/70'>15 minutes from Katol</p>
                </div>
                <div className='flex items-center gap-4'>
                  <MapPin className='w-6 h-6 text-foreground' />
                  <p className='text-lg text-foreground/70'>1 hour from Nagpur Airport</p>
                </div>
                <div className='flex items-center gap-4'>
                  <Check className='w-6 h-6 text-foreground' />
                  <p className='text-lg text-foreground/70'>Excellent road connectivity</p>
                </div>
                <div className='flex items-center gap-4'>
                  <Check className='w-6 h-6 text-foreground' />
                  <p className='text-lg text-foreground/70'>Away from city chaos, inside natural serenity</p>
                </div>
              </div>
              <p className='mt-8 text-2xl font-playfair-display text-foreground italic'>
                Live close to the city. Yet far from stress.
              </p>
            </div>
            <div className='relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl'>
              <img
                src="/dr2.png" // Add location/map image
                alt="Location"
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </section>


      {/* LIFESTYLE QUOTE IMAGE BREAK */}
      <section className='relative w-full h-[70vh] lg:h-[88vh] overflow-hidden'>
        <img
          src='https://www.shutterstock.com/shutterstock/videos/1035863255/thumb/1.jpg?ip=x480'
          alt='Madhuban Village Lifestyle'
          className='w-full h-full object-cover transition-transform duration-700 hover:scale-105'
        />
        <div className='absolute inset-0 bg-black/55' />
        <div className='absolute inset-0 flex items-center justify-center text-center px-4'>
          <div className='max-w-3xl'>
            <div className='w-12 h-px bg-[#D4AF37] mx-auto mb-8' />
            <p className='text-[#D4AF37] text-xs tracking-[0.35em] uppercase font-medium mb-6'>Your Future Lifestyle</p>
            <h2 className='text-4xl lg:text-6xl font-playfair-display text-white italic leading-tight mb-6'>
              More than land.<br />It&apos;s your legacy.
            </h2>
            <p className='text-white/70 text-lg lg:text-xl leading-relaxed max-w-xl mx-auto'>
              Wake up to open skies, fresh air, and the quiet luxury of space that is entirely yours.
            </p>
            <div className='w-12 h-px bg-[#D4AF37] mx-auto mt-8' />
          </div>
        </div>
      </section>

      {/* 7. SIZE & PRICE TRANSPARENCY */}
      <section className='py-20 lg:py-32 bg-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-4xl lg:text-5xl items-start text-left md:text-center font-playfair-display text-foreground mb-16'>
              <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
                Size &
              </TextAnimate>
              <TextAnimate animation="blurInUp" by="character" className='italic' duration={0.5} delay={0.1} once>
                Price Transparency
              </TextAnimate>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              <div className='bg-foreground/5 p-8 rounded-lg'>
                <h3 className='text-2xl font-playfair-display text-foreground mb-6'>Plot Sizes</h3>
                <ul className='space-y-4'>
                  <li className='flex items-center gap-3'>
                    <Check className='w-5 h-5 text-foreground' />
                    <p className='text-lg text-foreground/70'>Farmhouse Villa Plots starting from 4,000 sq. ft.</p>
                  </li>
                  <li className='flex items-center gap-3'>
                    <Check className='w-5 h-5 text-foreground' />
                    <p className='text-lg text-foreground/70'>Multiple size options available</p>
                  </li>
                </ul>
              </div>
              <div className='bg-foreground/5 p-8 rounded-lg'>
                <h3 className='text-2xl font-playfair-display text-foreground mb-6'>Pricing</h3>
                <ul className='space-y-4'>
                  <li className='flex items-center gap-3'>
                    <Check className='w-5 h-5 text-foreground' />
                    <p className='text-lg text-foreground/70'>Starting from ₹700 per sq. ft.</p>
                  </li>
                  <li className='flex items-center gap-3'>
                    <Check className='w-5 h-5 text-foreground' />
                    <p className='text-lg text-foreground/70'>Early buyers get prime location advantage</p>
                  </li>
                  <li className='flex items-center gap-3'>
                    <Check className='w-5 h-5 text-foreground' />
                    <p className='text-lg text-foreground/70'>Limited inventory with high appreciation potential</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. URGENCY & SCARCITY */}
      {/* <section className='py-20 lg:py-32 bg-foreground text-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl lg:text-5xl font-playfair-display mb-8'>
              Only Limited Plots Available
            </h2>
            <p className='text-xl lg:text-2xl text-background/90 mb-12 leading-relaxed'>
              This is not a mass project. Madhuban Village Farmhouse is a limited-edition luxury land offering inside 
              Madhuban Village. Once sold out, the opportunity is gone forever.
            </p>
            <div className='bg-background/10 p-8 rounded-lg mb-8'>
              <h3 className='text-2xl font-playfair-display mb-6'>Early buyers enjoy:</h3>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='flex items-center gap-3 justify-center'>
                  <Check className='w-6 h-6 text-foreground' />
                  <p className='text-lg'>Prime clubhouse-facing plots</p>
                </div>
                <div className='flex items-center gap-3 justify-center'>
                  <Check className='w-6 h-6 text-foreground' />
                  <p className='text-lg'>Pre-launch price advantage</p>
                </div>
                <div className='flex items-center gap-3 justify-center'>
                  <Check className='w-6 h-6 text-foreground' />
                  <p className='text-lg'>Best corner plot options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* 9. EMOTIONAL CLOSE */}
      {/* <section className='py-20 lg:py-32 bg-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl lg:text-6xl font-playfair-display text-foreground mb-8 leading-tight'>
              Your Family Deserves This Escape
            </h2>
            <p className='text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed'>
              While others invest in crowded towers, you invest in open skies, private celebrations, 
              green mornings, and peaceful weekends.
            </p>
            <p className='text-3xl lg:text-4xl font-playfair-display text-foreground italic'>
              Madhuban Village Farmhouse isn't just land.<br />
              It's your future lifestyle.
            </p>
          </div>
        </div>
      </section> */}

      <div className='w-full bg-background py-5'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent' />
        </div>
      </div>

      {/* 12. GOOGLE MAP LOCATION */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-playfair-display text-foreground">
                <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
                  Visit Us At
                </TextAnimate>
                <TextAnimate animation="blurInUp" className='italic' by="character" duration={0.5} delay={0.1} once>
                  Madhuban Village
                </TextAnimate>
                <TextAnimate animation="blurInUp" className='italic' by="character" duration={0.5} delay={0.1} once>
                  Luxury Destination Estate
                </TextAnimate>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Weddings | Club | Plots
              </p>
              <div className="flex items-start gap-3 text-foreground/70">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-1" />
                <p>
                  Madhuban Village,
                  Hatla, Panjra,
                  Katol Road,
                  Katol, Nagpur, Maharashtra,  India- 441302
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-foreground/10">
              <div className="absolute right-4 bottom-4 z-10 flex items-center gap-2 bg-background/90 backdrop-blur px-3 py-2 rounded-full shadow">
                <img src="/madhuban-logo.png" alt="Madhuban Village" className="w-8 h-8 object-contain" />
                <span className="text-sm font-semibold text-foreground">Madhuban Village Farmhouse</span>
              </div>
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1843.7910705490574!2d78.64734126630019!3d21.25138632020649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd45878357e8927%3A0xa6b5bbd3a81926a9!2sMadhuban%20Village%20-%20FARMSHOUSE%20%7C%20CLUB%20%7C%20RESORT%20%7C%20BANQUETS!5e0!3m2!1sen!2sin!4v1765449947326!5m2!1sen!2sin"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google map showing Madhuban Village location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className='py-20 lg:py-32 bg-foreground text-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl lg:text-5xl font-playfair-display leading-tight mb-8'>
              <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
                Book Your Private
              </TextAnimate>
              <TextAnimate animation="blurInUp" by="character" className='italic block' duration={0.5} delay={0.1} once>
                Site Visit Now
              </TextAnimate>
            </h2>

            <div className='max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12'>
              {[
                'See the land',
                'Experience the amenities',
                'Understand your investment',
                'Lock your preferred plot',
              ].map((item, index) => (
                <div
                  key={index}
                  className='flex items-center gap-3 justify-start rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-left'
                >
                  <Check className='w-6 h-6 text-[#D4AF37]' />
                  <p className='text-lg text-background/90'>{item}</p>
                </div>
              ))}
            </div>

            <Button
              variant='secondary'
              size='lg'
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* 11. CONTACT FORM - PLOTS */}
      <section id='contact-form' className='py-16 sm:py-20 bg-background'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
            <div className='space-y-5'>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-playfair-display text-foreground leading-tight'>
                Book a Private Plot Tour
              </h2>
              <p className='text-base sm:text-lg text-foreground/70 leading-relaxed'>
                Share your details and preferences. Our property advisor will tailor a site visit,
                showcase available inventory, and share the best pricing options for you.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 border border-foreground/10 rounded-lg bg-foreground/5">
                  <p className="text-sm text-foreground/60">Contact Us</p>
                  <p className="text-lg text-foreground font-semibold">+91 70207 04418</p>
                  {/* <p className="text-lg text-foreground font-semibold">+91 70207 04420</p>
                      <p className="text-lg text-foreground font-semibold">+91 70207 04421</p> */}
                </div>
                <div className="p-4 border border-foreground/10 rounded-lg bg-foreground/5">
                  <p className="text-sm text-foreground/60">Email</p>
                  <p className="text-lg text-foreground font-semibold">info@madhubanvillage.in</p>
                  <p className="text-lg text-foreground font-semibold">madhubanvillage@gmail.com</p>
                </div>
              </div>
            </div>

            <div className='bg-foreground/5 border border-foreground/10 rounded-2xl shadow-xl p-5 sm:p-6 lg:p-8 backdrop-blur'>
              <form className='space-y-5' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm text-foreground/70 mb-2'>Full Name *</label>
                    <input
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
                      placeholder='Your name'
                    />
                  </div>
                  <div>
                    <label className='block text-sm text-foreground/70 mb-2'>Mobile *</label>
                    <input
                      name='mobile'
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className='w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
                      placeholder='+91 98765 43210'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm text-foreground/70 mb-2'>Email</label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className='w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
                      placeholder='you@example.com'
                    />
                  </div>
                  <div>
                    <label className='block text-sm text-foreground/70 mb-2'>City</label>
                    <input
                      name='city'
                      value={formData.city}
                      onChange={handleChange}
                      className='w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
                      placeholder='Enter your city'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm text-foreground/70 mb-2'>Preferred Plot Size</label>
                    <select
                      name='plotSize'
                      value={formData.plotSize}
                      onChange={handleChange}
                      className='w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
                    >
                      <option value=''>Select size</option>
                      <option value='4000-8000'>4,000 to 8,000 sq. ft.</option>
                      <option value='8000-12000'>8,000 to 12,000 sq. ft.</option>
                      <option value='12000-15000'>12,000 to 15,000 sq. ft.</option>
                      <option value='15000-20000'>15,000 to 20,000 sq. ft.</option>
                    </select>
                  </div>
                  <div>
                    <label className='block text-sm text-foreground/70 mb-2'>Buying Timeline</label>
                    <select
                      name='timeline'
                      value={formData.timeline}
                      onChange={handleChange}
                      className='w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
                    >
                      <option value=''>Select timeline</option>
                      <option value='30d'>Within 30 days</option>
                      <option value='60-90d'>60-90 days</option>
                      <option value='6m'>3-6 months</option>
                      <option value='exploring'>Just exploring</option>
                    </select>
                  </div>
                </div>

                <button
                  type='submit'
                  className='w-full rounded-lg bg-foreground text-background py-3 text-lg font-semibold tracking-wide shadow-lg hover:bg-foreground/90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] focus:ring-offset-background'
                >
                  Schedule My Site Visit
                </button>
                <p className='text-xs text-foreground/60 text-center'>
                  Our advisor will call within 30 minutes to confirm your visit.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PlotPage

