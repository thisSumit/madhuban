'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Quote, Calendar, Home, Building2, ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { TextAnimate } from '@/components/ui/text-animate'
import { useRouter } from 'next/navigation'


const AboutPage = () => {
  const router = useRouter()
  return (
    <div className='min-h-screen bg-background'>
      <Header />

      {/* Hero Section - Full Screen Image with Aspiration Headline */}
      <section className='relative h-screen w-full overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            src="/madhuban-main.png" // You can change this to your preferred hero image
            alt="Madhuban Village"
            className='h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-black/40' />
        </div>
        
        <div className='relative z-10 h-full w-full flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center h-full'>
          <p className='text-white font-playfair-display md:text-2xl text-xl leading-tighter tracking-tight font-bold'>Madhuban Village</p>
          <div className='h-px w-20 my-2 bg-background/40' />
          <h1 className='text-white font-playfair-display text-4xl lg:text-8xl text-center leading-tighter tracking-tight px-4'>
            <span className='italic block mt-2'> <TextAnimate animation="slideLeft" by="character" duration={0.5} delay={0.2} once>Luxury Destination</TextAnimate>Estate</span>
          </h1>
          <p className='text-white font-playfair-display md:text-2xl text-lg py-2'>Weddings | Club | Plots</p>
        </div>
      </div>
      </section>

      <section className='h-full my-4 relative pb-24 lg:pb-32 px-4 lg:px-16 bg-background overflow-hidden'>
      {/* Decorative Leaf Elements - Left Side */}
      <div className='absolute left-0 top-0 w-35 h-full pointer-events-none md:w-80 lg:block'>
        <img src="c2.png" alt="" />
      </div>

      {/* Decorative Leaf Elements - Right Side */}
      <div className='absolute bottom-0 right-0 w-35 pointer-events-none md:w-80 lg:block'>
        <img src="c2.png" className=' rotate-180' alt="" />
      </div>

      {/* Main Content */}
      <div className='relative w-full gap-4 mx-auto text-center'>
        <div className='flex justify-center mx-4'>
          <img src="madhuban-logo.png" className='w-64 py-4' alt="" />
        </div>

        {/* Description */}
        <div className='space-y-6 text-foreground/90 mb-8'>
          <p className='text-base lg:text-lg leading-relaxed max-w-3xl mx-auto'>
          Located on Katol Road, Madhuban Village Farms & Resort is Central India’s emerging luxury wedding destination, premium farmhouse project, and exclusive club community. Spread across 100+ acres, Madhuban offers a seamless blend of royal architecture, natural landscapes, and world-class hospitality.
          </p>
          <p className='text-base lg:text-lg leading-relaxed max-w-3xl mx-auto'>
          Home to the majestic Indraprastha Palace, grand celebration lawns, premium rooms and cottages, and curated event management services, we specialize in destination weddings in Nagpur, multi-day celebrations, corporate events, and social gatherings.
          </p>
          <p className='text-base lg:text-lg leading-relaxed max-w-3xl mx-auto'>
          Beyond events, Madhuban features NA farmhouse Villa Plots ranging from 4,000 to 20,000 sq. ft., offering peaceful nature living with strong investment potential. Club Anand, Nagpur’s largest upcoming members-only club, adds a new dimension of luxury recreation and community lifestyle.
          </p>
          <p className='text-base lg:text-lg leading-relaxed max-w-3xl mx-auto'>
          Whether you are planning a wedding, investing in farmhouse land, or seeking premium club membership, Madhuban Village is a complete lifestyle destination designed for celebration, comfort, and legacy.
          </p>
        </div>
      </div>
    </section>

      {/* Our Intention Section */}
      <section className='py-20 lg:py-32 bg-foreground text-background'>
        <div className='flex flex-col items-center justify-center max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl lg:text-5xl font-[playfair-display] mb-8'>
            <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
              Our Intention
              </TextAnimate>
            </h2>
            <div className='space-y-6 text-lg lg:text-xl leading-relaxed text-background/90'>
              <p>
                At Madhuban Village, our intention is to create a sanctuary where luxury meets 
                authenticity, where every detail is thoughtfully curated to provide an exceptional 
                experience. We believe in preserving the natural beauty of our surroundings while 
                offering world-class amenities that cater to your every need.
              </p>
              <p>
                Our vision extends beyond being just a venue-we aim to be a destination where 
                families come together, where celebrations become legendary, and where memories 
                are crafted with care and precision. We are committed to excellence in every 
                aspect, from our meticulously maintained grounds to our personalized service.
              </p>
              <p>
                Through our three pillars-Weddings, Plots, and Club memberships-we strive to 
                build a community that values quality, elegance, and the finer things in life. 
                Our intention is to be your trusted partner in creating moments that matter.
              </p>
            </div>
          </div>
          <div className='h-px w-64 my-10 bg-background/40' />
          <div className='h-64 w-full'>
            <div className='relative flex items-centre justify-center h-full'>
              <img
                className='h-full'
                src="/centre2.png"
                alt="Madhuban Village"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services - Wedding, Plots, Club */}
      <section className='py-20 lg:py-32 bg-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-[playfair-display] text-foreground mb-4'>
            <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
              Our Offerings
              </TextAnimate>
            </h2>
            <p className='text-lg text-foreground/70 max-w-2xl mx-auto'>
              Discover the three pillars of excellence at Madhuban Village
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12'>
            {/* Wedding */}
            <div className='group relative overflow-hidden rounded-lg bg-foreground text-background hover:shadow-2xl transition-all duration-500'>
              <div className='p-8 lg:p-10'>
                <div className='mb-6'>
                  <div className='w-16 h-16 rounded-full bg-background/10 flex items-center justify-center mb-6 group-hover:bg-background/20 transition-colors duration-300'>
                    <Calendar className='w-8 h-8 text-background' />
                  </div>
                  <h3 className='text-2xl lg:text-3xl font-[playfair-display] mb-4'>
                    Wedding Resort
                  </h3>
                  <p className='text-background/90 leading-relaxed mb-6'>
                    Experience the grandeur of royal wedding celebrations in our magnificent venues. 
                    From intimate ceremonies to grand receptions, we create unforgettable moments 
                    with impeccable service and elegant settings.
                  </p>
                  <Button
                    variant='secondary'
                    size='default'
                    className='group/btn'
                    onClick={() => window.location.href = '/'}
                  >
                    <span className='flex items-center'>
                      Learn More
                      <ArrowRight className='w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300' />
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Plots */}
            <div className='group relative overflow-hidden rounded-lg bg-foreground text-background hover:shadow-2xl transition-all duration-500'>
              <div className='p-8 lg:p-10'>
                <div className='mb-6'>
                  <div className='w-16 h-16 rounded-full bg-background/10 flex items-center justify-center mb-6 group-hover:bg-background/20 transition-colors duration-300'>
                    <Home className='w-8 h-8 text-background' />
                  </div>
                  <h3 className='text-2xl lg:text-3xl font-[playfair-display] mb-4'>
                    Villa Plots
                  </h3>
                  <p className='text-background/90 leading-relaxed mb-6'>
                    Invest in premium residential Villa Plots in the most serene and well-connected 
                    locations. Our carefully planned Villa Plots offer the perfect blend of nature 
                    and modern amenities for your dream home.
                  </p>
                  <Button
                    variant='secondary'
                    size='default'
                    className='group/btn'
                    onClick={() => router.push('/plots')}
                  >
                    <span className='flex items-center'>
                      Learn More
                      <ArrowRight className='w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300' />
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Club */}
            <div className='group relative overflow-hidden rounded-lg bg-foreground text-background hover:shadow-2xl transition-all duration-500'>
              <div className='p-8 lg:p-10'>
                <div className='mb-6'>
                  <div className='w-16 h-16 rounded-full bg-background/10 flex items-center justify-center mb-6 group-hover:bg-background/20 transition-colors duration-300'>
                    <Building2 className='w-8 h-8 text-background' />
                  </div>
                  <h3 className='text-2xl lg:text-3xl font-[playfair-display] mb-4'>
                    ⁠Exclusive Lifestyle Club
                  </h3>
                  <p className='text-background/90 leading-relaxed mb-6'>
                    Join an exclusive community with world-class facilities and amenities. 
                    Our club memberships provide access to premium services, recreational 
                    activities, and a lifestyle of luxury and comfort.
                  </p>
                  <Button
                    variant='secondary'
                    size='default'
                    className='group/btn'
                    onClick={() => window.location.href = '/club-anand'}
                  >
                    <span className='flex items-center'>
                      Learn More
                      <ArrowRight className='w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300' />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directors Section with Quotation */}
      {/* <section className='py-20 lg:py-32 bg-foreground text-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
            <div className='order-2 lg:order-1'>
              <div className='relative max-w-lg mx-auto'>
                <div className='h-full rounded-lg overflow-hidden shadow-2xl'>
                  <img
                    src="/director.jpg"
                    alt="Directors of Madhuban Village"
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-background/10 rounded-full blur-2xl' />
              </div>
            </div>

            <div className='order-1 lg:order-2'>
              <div className='relative'>
                <Quote className='w-20 h-20 text-background/20 absolute -top-6 -left-6' />
                <div className='relative z-10'>
                  <h3 className='text-3xl lg:text-4xl font-[playfair-display] mb-8'>
                  <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
                    Our Directors
                    </TextAnimate>
                  </h3>
                  <blockquote className='text-2xl lg:text-3xl font-[playfair-display] text-background leading-relaxed mb-8 italic'>
                    "Our aspiration is to create a legacy of excellence, where every guest 
                    experiences the perfect blend of luxury, nature, and heartfelt hospitality. 
                    At Madhuban Village, we don't just host events-we craft experiences that 
                    become treasured memories for generations to come."
                  </blockquote>
                  <div className='flex items-center gap-4 pt-4 border-t border-background/20'>
                    <div className='h-px w-8 bg-background/40' />
                    <p className='text-lg text-background/80 font-light'>
                      Directors, Madhuban Village
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className='min-h-screen bg-foreground text-background flex items-center'>
        <div className='w-full max-w-5xl mx-auto px-4 lg:px-16 py-16 lg:py-24'>
          <div className='relative text-center'>
            <Quote className='w-16 h-16 lg:w-20 lg:h-20 text-background/20 mx-auto mb-6 lg:mb-8' />
            <div className='relative z-10'>
              <h3 className='text-3xl lg:text-5xl font-[playfair-display] mb-8'>
                <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
                  Our Directors
                </TextAnimate>
              </h3>
              <blockquote className='text-xl lg:text-3xl font-[playfair-display] text-background leading-relaxed mb-8 italic max-w-4xl mx-auto'>
                "Our aspiration is to create a legacy of excellence, where every guest
                experiences the perfect blend of luxury, nature, and heartfelt hospitality.
                At Madhuban Village, we don't just host events-we craft experiences that
                become treasured memories for generations to come."
              </blockquote>
              <div className='flex items-center justify-center gap-4 pt-4 border-t border-background/20 max-w-md mx-auto'>
                <div className='h-px w-8 bg-background/40' />
                <p className='text-lg text-background/80 font-light'>
                  Directors, Madhuban Village
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our World Section - Full Width Image */}
      <section className='relative h-[400px] lg:h-[600px] w-full overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            src="/madhuban-main.png" // You can change this to your preferred image
            alt="Our World"
            className='h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-black/30' />
        </div>
        
        <div className='relative z-10 h-full flex items-center justify-center'>
          <div className='text-center'>
            <h2 className='text-4xl lg:text-7xl font-[playfair-display] text-background mb-4'>
            <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
              Our World
              </TextAnimate>
            </h2>
            <div className='h-px w-24 bg-background/60 mx-auto' />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
