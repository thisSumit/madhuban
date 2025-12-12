'use client'

import React, { useRef, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { 
  Check, 
  MapPin, 
  Clock, 
  TrendingUp, 
  Home, 
  Calendar, 
  Users, 
  Shield,
  Droplet,
  TreePine,
  Building2,
  Phone,
  MessageCircle,
  ArrowRight,
  PhoneCall
} from 'lucide-react'
import { TextAnimate } from '@/components/ui/text-animate'

const plotsImages = [
  '/dr.png',
  '/dr1.png',
  '/dr2.png',
  '/dr3.png',
  '/dr4.png',
]

function PlotsCarousel() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const lastIndex = plotsImages.length - 1

  const nextSlide = () => setCurrent(current === lastIndex ? 0 : current + 1)
  const prevSlide = () => setCurrent(current === 0 ? lastIndex : current - 1)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const diff = e.changedTouches[0].clientX - touchStartX.current
      if (diff > 40) prevSlide()
      else if (diff < -40) nextSlide()
    }
    touchStartX.current = null
  }

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="w-full overflow-hidden rounded-2xl shadow-xl bg-background border border-foreground/10"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={plotsImages[current]}
          alt={`MV Plot ${current + 1}`}
          className="w-full h-[620px] object-cover transition duration-500"
          draggable={false}
          style={{ userSelect: 'none' }}
        />
      </div>
      <div className="flex justify-between w-full mt-4 px-3">
        <button
          className="bg-foreground text-background rounded-full p-2 bg-opacity-90 hover:bg-opacity-100 shadow transition disabled:opacity-50"
          onClick={prevSlide}
          aria-label="Previous"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          className="bg-foreground text-background rounded-full p-2 bg-opacity-90 hover:bg-opacity-100 shadow transition disabled:opacity-50"
          onClick={nextSlide}
          aria-label="Next"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="flex gap-2 justify-center mt-3">
        {plotsImages.map((_, idx) => (
          <button
            key={idx}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${current === idx ? 'bg-[#D4AF37]' : 'bg-foreground/30'}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}

const plotInterests = [
  { label: 'Farmhouse Living', value: 'farmhouse' },
  { label: 'Weekend Retreat', value: 'weekend' },
  { label: 'Land Investment', value: 'investment' },
  { label: 'Agricultural Income', value: 'agriculture' },
]

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

  const toggleInterest = (value: string) => {
    setFormData(prev => {
      const exists = prev.interests.includes(value)
      return {
        ...prev,
        interests: exists ? prev.interests.filter(item => item !== value) : [...prev.interests, value],
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const scriptURL = "https://script.google.com/macros/s/AKfycbxR6DH8evia0snPI1KuYvo_0IRSW2RbOhmz2_uWYBjE5MAd5qBgDqp6O-Q7Ft47TZJw_w/exec" // Integrated Google Apps Script URL
    
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
    <div className='min-h-screen bg-background'>
      <Header />

      {/* 1. HERO SECTION */}
      <section className='relative h-screen w-full overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            src="/dr1.png" // You can change this image
            alt="MV Plots"
            className='h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-black/50' />
        </div>
        
        <div className='relative z-10 h-full flex items-center justify-center px-4 lg:px-16'>
          <div className='text-center max-w-5xl'>
            <h1 className='text-4xl lg:text-7xl font-[playfair-display] text-nowrap text-background mb-6 leading-tight'>
              Own More Than a Plot.<br />
              <TextAnimate animation="slideLeft" by="character" duration={0.5} delay={0.2} once>
              Own a Private Resort Lifestyle.
              </TextAnimate>
            </h1>
            <div className='mb-10'>
              <p className='text-2xl lg:text-4xl font-[playfair-display] text-background mb-2'>
                Plots starting at just <span className='text-[#D4AF37]'>₹700 per sq. ft.</span>
              </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-4'>
              <Button
                variant='primary'
                size='lg'
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Site Visit Now
              </Button>
              <a className='flex items-center justify-center text-background gap-1' href='tel:917020704420'>
                <Phone className='w-5 h-5 mr-2' />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST & ASPIRATION STRIP */}
      <section className='py-12 bg-foreground text-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <h3 className='text-center text-xl lg:text-2xl font-[playfair-display] mb-8'>
            Why Smart Buyers Are Choosing MV Plots
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='text-center'>
              <TrendingUp className='w-8 h-8 mx-auto mb-3 text-[#D4AF37]' />
              <p className='text-sm lg:text-base'>Appreciating land, not depreciating apartments</p>
            </div>
            <div className='text-center'>
              <Home className='w-8 h-8 mx-auto mb-3 text-[#D4AF37]' />
              <p className='text-sm lg:text-base'>Resort lifestyle + real estate investment</p>
            </div>
            <div className='text-center'>
              <Shield className='w-8 h-8 mx-auto mb-3 text-[#D4AF37]' />
              <p className='text-sm lg:text-base'>Limited inventory, high future value</p>
            </div>
            <div className='text-center'>
              <MapPin className='w-8 h-8 mx-auto mb-3 text-[#D4AF37]' />
              <p className='text-sm lg:text-base'>Located at the iconic Madhuban Village destination</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION SECTION */}
      <section className='py-20 lg:py-32 bg-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl lg:text-5xl font-[playfair-display] text-foreground mb-8'>
            <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
              Welcome to MV Plots – Your Private Farmhouse Address
              </TextAnimate>
            </h2>
            <div className='space-y-6 text-lg text-foreground/70 leading-relaxed'>
              <p>
                MV Plots brings you premium farmhouse land parcels inside Madhuban Village, crafted for 
                those who want more than just square feet. Whether you envision a weekend retreat, a 
                celebration home, or a high-growth land investment — MV Plots delivers luxury, privacy, 
                and long-term value in one destination.
              </p>
              <p>
                With plots starting from 5,000 sq. ft. and pricing from ₹700 per sq. ft., MV Plots is 
                where lifestyle meets smart wealth creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3A. PLOTS IMAGE CAROUSEL */}
      <section className="pb-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-center text-2xl lg:text-3xl font-[playfair-display] text-foreground mb-8">
            Explore Our Plots
          </h3>
          <PlotsCarousel />
        </div>
      </section>

      {/* Carousel component - can be defined above or in same file */}
      {/* You can replace the image src with real plot images */}
      {/* Minimal dependencies, pure React/Next image carousel */}

      {/* 4. AMENITIES SECTION */}
      <section className='py-20 lg:py-32 bg-foreground text-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <h2 className='text-4xl lg:text-5xl font-[playfair-display] text-center mb-16'>
          <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
            Luxury That Comes With Your Land
            </TextAnimate>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              { icon: Droplet, text: 'Private Swimming Pool Access' },
              { icon: Building2, text: 'Your Personal Banquet & Celebration Hall' },
              { icon: TreePine, text: 'Resort-Style Landscaped Lawns' },
              { icon: Building2, text: "Nagpur's Biggest Clubhouse" },
              { icon: Users, text: "Children's Play Area & Family Zones" },
              { icon: TreePine, text: 'Jogging Tracks & Green Open Spaces' },
              { icon: Shield, text: 'Gated Community with 24×7 Security' },
              { icon: Check, text: 'Power, Water & Internal Roads' },
              { icon: Calendar, text: 'Perfect for Weekend Living & Celebrations' },
            ].map((amenity, index) => {
              const Icon = amenity.icon
              return (
                <div key={index} className='flex items-start gap-4 p-6 bg-background/5 rounded-lg hover:bg-background/10 transition-colors duration-300'>
                  <Icon className='w-6 h-6 text-[#D4AF37] shrink-0 mt-1' />
                  <p className='text-background/90 text-lg'>{amenity.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. LOCATION ADVANTAGE */}
      <section className='py-20 lg:py-32 bg-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl lg:text-5xl font-[playfair-display] text-foreground mb-8'>
              <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
                Perfect Balance of Connectivity & Peace
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
              <p className='mt-8 text-2xl font-[playfair-display] text-foreground italic'>
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

      {/* 6. INVESTMENT & USE CASE */}
      <section className='py-20 lg:py-32 bg-foreground text-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <h2 className='text-4xl lg:text-5xl font-[playfair-display] text-center mb-16'>
          <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
            Why MV Plots Is a Smart Investment
            </TextAnimate>
          </h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div>
              <div className='space-y-6 mb-8'>
                <div className='flex items-start gap-4'>
                  <TrendingUp className='w-6 h-6 text-[#D4AF37] shrink-0 mt-1' />
                  <p className='text-lg text-background/90'>Land that appreciates in value</p>
                </div>
                <div className='flex items-start gap-4'>
                  <Home className='w-6 h-6 text-[#D4AF37] shrink-0 mt-1' />
                  <p className='text-lg text-background/90'>Zero maintenance apartment alternative</p>
                </div>
                <div className='flex items-start gap-4'>
                  <TrendingUp className='w-6 h-6 text-[#D4AF37] shrink-0 mt-1' />
                  <p className='text-lg text-background/90'>High demand for farmhouse & weekend properties</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className='text-2xl font-[playfair-display] mb-6'>Ideal for:</h3>
              <div className='space-y-4'>
                {[
                  'Private farmhouse',
                  'Family vacation home',
                  'Event & party hosting',
                  'Rental weekend getaway',
                  'Long-term land investment',
                ].map((use, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    <Check className='w-5 h-5 text-[#D4AF37]' />
                    <p className='text-lg text-background/90'>{use}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SIZE & PRICE TRANSPARENCY */}
      <section className='py-20 lg:py-32 bg-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-4xl lg:text-5xl font-[playfair-display] text-foreground text-center mb-16'>
            <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
              Size & Price Transparency
              </TextAnimate>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              <div className='bg-foreground/5 p-8 rounded-lg'>
                <h3 className='text-2xl font-[playfair-display] text-foreground mb-6'>Plot Sizes</h3>
                <ul className='space-y-4'>
                  <li className='flex items-center gap-3'>
                    <Check className='w-5 h-5 text-foreground' />
                    <p className='text-lg text-foreground/70'>Farmhouse plots starting from 5,000 sq. ft.</p>
                  </li>
                  <li className='flex items-center gap-3'>
                    <Check className='w-5 h-5 text-foreground' />
                    <p className='text-lg text-foreground/70'>Multiple size options available</p>
                  </li>
                </ul>
              </div>
              <div className='bg-foreground/5 p-8 rounded-lg'>
                <h3 className='text-2xl font-[playfair-display] text-foreground mb-6'>Pricing</h3>
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
            <h2 className='text-4xl lg:text-5xl font-[playfair-display] mb-8'>
              Only Limited Plots Available
            </h2>
            <p className='text-xl lg:text-2xl text-background/90 mb-12 leading-relaxed'>
              This is not a mass project. MV Plots is a limited-edition luxury land offering inside 
              Madhuban Village. Once sold out, the opportunity is gone forever.
            </p>
            <div className='bg-background/10 p-8 rounded-lg mb-8'>
              <h3 className='text-2xl font-[playfair-display] mb-6'>Early buyers enjoy:</h3>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='flex items-center gap-3 justify-center'>
                  <Check className='w-6 h-6 text-[#D4AF37]' />
                  <p className='text-lg'>Prime clubhouse-facing plots</p>
                </div>
                <div className='flex items-center gap-3 justify-center'>
                  <Check className='w-6 h-6 text-[#D4AF37]' />
                  <p className='text-lg'>Pre-launch price advantage</p>
                </div>
                <div className='flex items-center gap-3 justify-center'>
                  <Check className='w-6 h-6 text-[#D4AF37]' />
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
            <h2 className='text-4xl lg:text-6xl font-[playfair-display] text-foreground mb-8 leading-tight'>
              Your Family Deserves This Escape
            </h2>
            <p className='text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed'>
              While others invest in crowded towers, you invest in open skies, private celebrations, 
              green mornings, and peaceful weekends.
            </p>
            <p className='text-3xl lg:text-4xl font-[playfair-display] text-foreground italic'>
              MV Plots isn't just land.<br />
              It's your future lifestyle.
            </p>
          </div>
        </div>
      </section> */}

      {/* 10. FINAL CTA SECTION */}
      <section className='py-20 lg:py-32 bg-foreground text-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl lg:text-5xl font-[playfair-display] mb-8'>
            <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
              Book Your Private Site Visit Now
              </TextAnimate>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
              {[
                'See the land',
                'Experience the amenities',
                'Understand your investment',
                'Lock your preferred plot',
              ].map((item, index) => (
                <div key={index} className='flex items-center gap-3 justify-center'>
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
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-[playfair-display] text-foreground leading-tight'>
                Book a Private Plot Tour
              </h2>
              <p className='text-base sm:text-lg text-foreground/70 leading-relaxed'>
                Share your details and preferences. Our property advisor will tailor a site visit,
                showcase available inventory, and share the best pricing options for you.
              </p>
              <div className="grid grid-cols-1 gap-4">
              <div className="p-4 border border-foreground/10 rounded-lg bg-foreground/5">
                <p className="text-sm text-foreground/60">Contact Us</p>
                <p className="text-lg text-foreground font-semibold">+91 70207 04420</p>
                <p className="text-lg text-foreground font-semibold">+91 70207 04421</p>
              </div>
              <div className="p-4 border border-foreground/10 rounded-lg bg-foreground/5">
                <p className="text-sm text-foreground/60">Email</p>
                <p className="text-lg text-foreground font-semibold">info@madhubanvillage.com</p>
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
                      <option value='5000'>5,000 sq. ft.</option>
                      <option value='7500'>7,500 sq. ft.</option>
                      <option value='10000'>10,000 sq. ft.</option>
                      <option value='15000'>15,000 sq. ft.</option>
                      <option value='20000+'>20,000+ sq. ft.</option>
                    </select>
                  </div>
                  <div>
                    <label className='block text-sm text-foreground/70 mb-2'>Budget (₹)</label>
                    <select
                      name='budget'
                      value={formData.budget}
                      onChange={handleChange}
                      className='w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
                    >
                      <option value=''>Select range</option>
                      <option value='10-20L'>₹10L - ₹20L</option>
                      <option value='20-40L'>₹20L - ₹40L</option>
                      <option value='40-75L'>₹40L - ₹75L</option>
                      <option value='75L+'>₹75L+</option>
                    </select>
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm text-foreground/70 mb-2'>Preferred Visit Date</label>
                    <input
                      type='date'
                      name='visitDate'
                      value={formData.visitDate}
                      onChange={handleChange}
                      className='w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
                    />
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

                <div className='space-y-3'>
                  <label className='block text-sm text-foreground/70'>I’m interested in (select multiple)</label>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {plotInterests.map(option => {
                      const checked = formData.interests.includes(option.value)
                      return (
                        <button
                          key={option.value}
                          type='button'
                          onClick={() => toggleInterest(option.value)}
                          className={`flex items-start gap-3 rounded-lg border px-4 py-3 text-left transition ${
                            checked
                              ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-foreground'
                              : 'border-foreground/10 bg-background/70 text-foreground/80 hover:border-foreground/30'
                          }`}
                        >
                          <span
                            className={`mt-1 inline-block h-5 w-5 rounded-full border ${
                              checked ? 'border-[#D4AF37] bg-[#D4AF37]' : 'border-foreground/30'
                            }`}
                          />
                          <div>
                            <p className='font-semibold'>{option.label}</p>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <label className='block text-sm text-foreground/70 mb-2'>Notes or requirements</label>
                  <textarea
                    name='notes'
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className='w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
                    placeholder='E.g., facing preference, clubhouse proximity, custom farmhouse plan.'
                  />
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

      {/* 12. GOOGLE MAP LOCATION */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-[playfair-display] text-foreground">
              <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
                Visit Us At MV Plots
                </TextAnimate>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Madhuban Village - Farmhouse | Club | Resort | Banquets
              </p>
              <div className="flex items-start gap-3 text-foreground/70">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-1" />
                <p>
                  Ward no.09, Tehsil Katol, Katol Road, Gondkhari, Saoner, Maharashtra 441203
                </p>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <PhoneCall className="w-5 h-5 text-[#D4AF37]" />
                <a href="tel:917020704420" className="underline decoration-[#D4AF37] underline-offset-4">
                  +91 70207 04420
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-foreground/10">
              <div className="absolute right-4 bottom-4 z-10 flex items-center gap-2 bg-background/90 backdrop-blur px-3 py-2 rounded-full shadow">
                <img src="/madhuban-logo.png" alt="Madhuban Village" className="w-8 h-8 object-contain" />
                <span className="text-sm font-semibold text-foreground">MV Plots</span>
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

      <Footer />
    </div>
  )
}

export default PlotPage

