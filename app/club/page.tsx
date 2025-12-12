'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { 
  Check, 
  Users, 
  Gift,
  Calendar,
  Utensils,
  TreePine,
  Droplet,
  Building2,
  Car,
  Music,
  Home,
  Sparkles,
  Star,
  Crown,
  ArrowRight,
  MessageCircle,
  Phone,
  Ticket,
  UsersRound
} from 'lucide-react'
import { TextAnimate } from '@/components/ui/text-animate'

const ClubPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const clubInterests = [
    { label: 'Annual membership', value: 'membership' },
    { label: 'Day pass', value: 'day-pass' },
    { label: 'Banquet / hall booking', value: 'banquet' },
    { label: 'Pool & recreation', value: 'pool' },
    { label: 'Corporate retreat', value: 'corporate' },
    { label: 'Private celebration', value: 'celebration' },
  ]

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    guests: '',
    membershipType: '',
    notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const scriptURL = "https://script.google.com/macros/s/AKfycbxR6DH8evia0snPI1KuYvo_0IRSW2RbOhmz2_uWYBjE5MAd5qBgDqp6O-Q7Ft47TZJw_w/exec"; // Integrated Google Apps Script URL
  
    const payload = {
      name: formData.name.trim(),
      mobile: formData.mobile.trim(),
      email: formData.email.trim(),
      guests: formData.guests,
      membershipType: formData.membershipType,
      notes: formData.notes.trim(),
      source: "Club Form", // Important: This identifies the form type
      formType: "club",
      timestamp: new Date().toISOString()
    };
  
    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      alert("Thank you! Our club advisor will contact you shortly.");
  
      // Reset form
      setFormData({
        name: "",
        mobile: "",
        email: "",
        guests: "",
        membershipType: "",
        notes: "",
      });
  
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong! Please try again.");
    }
  };

  const membershipBenefits = [
    { icon: Gift, text: 'FREE lawn usage for weddings/functions Once-in-Membership-term', highlight: true },
    { icon: Utensils, text: 'Avail 20% Off on all Bills', highlight: true },
    { icon: Users, text: 'Membership extends to Family members too', highlight: true },
    { icon: Ticket, text: 'Complimentary Event Entry Passes', highlight: true },
    { icon: Sparkles, text: 'Special Festival Offers', highlight: true },
    { icon: Home, text: 'Enjoy 7 FREE room stays every year', highlight: true },
    { icon: Utensils, text: 'Rs. 5000 worth of Food Vouchers', highlight: true },
    { icon: Calendar, text: 'Free Food Vouchers during your Birthday Month', highlight: true },
  ]

  const amenities = [
    { icon: Utensils, text: 'Food Court' },
    { icon: TreePine, text: 'Adventure Park' },
    { icon: Car, text: 'Parking' },
    { icon: Music, text: 'Amphitheater' },
    { icon: Home, text: 'Rooms & Cottages' },
    { icon: Building2, text: 'Banquet Hall' },
    { icon: Droplet, text: 'Swimming Pool' },
    { icon: Droplet, text: 'Rain Dance' },
    { icon: Droplet, text: 'Jacuzzi' },
    { icon: TreePine, text: 'Party/Marriage Lawns' },
  ]

  return (
    <div className='min-h-screen bg-background'>
      <Header />

      {/* Hero Section with Headline & CTA */}
      <section className='relative h-screen w-full overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            src="/gentry.png" // You can change this image
            alt="Anand Club"
            className='h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60' />
        </div>
        
        <div className='relative z-10 h-full flex items-center justify-center px-4 lg:px-16'>
          <div className={`text-center max-w-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className='my-6'>
              <span className='inline-block px-6 py-2 bg-[#D4AF37]/20 border border-[#D4AF37] rounded-full text-[#D4AF37] text-sm uppercase tracking-widest mb-8 animate-pulse'>
                Membership Open
              </span>
            </div>
            <h1 className='text-4xl lg:text-7xl font-[playfair-display] text-background mb-6 leading-tight'>
              <span className='block'><TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>Affordable Luxury,</TextAnimate></span>
              <span className='block italic'><TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>Unforgettable Moments!</TextAnimate></span>
            </h1>
            <p className='text-xl lg:text-2xl text-background/90 font-light mb-10 leading-relaxed max-w-3xl mx-auto'>
              Join us for a decade of affordable luxury and unforgettable experiences. Unlock exclusive 
              membership privileges and indulge in endless amenities, from lush Mangalam lawns to thrilling adventures.
            </p>
            <p className='text-2xl lg:text-3xl font-[playfair-display] text-[#D4AF37] mb-10 italic'>
              Your gateway to joy awaits!
            </p>
            <div className='flex flex-col items-center justify-center gap-4'>
              <Button
                variant='primary'
                size='lg'
                onClick={() => window.location.href="https://www.madhubanvillage.in/member/"}
                className='group'
              >
                <span className='flex items-center'>
                  Join Anand Club Now
                  <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
                </span>
              </Button>
              <a className='flex items-center text-background' href='https://www.madhubanvillage.in/member/home/membership_login'>
                <UsersRound className='w-5 h-5 mr-2' />
                Member Login
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements Animation */}
        <div className='absolute inset-0 z-5 pointer-events-none'>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className='absolute w-2 h-2 bg-[#D4AF37] rounded-full opacity-30 animate-pulse'
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s',
              }}
            />
          ))}
        </div>
      </section>

      {/* Membership Open Banner - Animated */}
      <section className='py-8 bg-foreground text-background overflow-hidden'>
        <div className='flex'>
          <div className='whitespace-nowrap animate-scroll flex items-center gap-12'>
            {[...Array(8)].map((_, i) => (
              <div key={i} className='flex items-center gap-4 shrink-0'>
                <Crown className='w-6 h-6 text-[#D4AF37]' />
                <span className='text-xl lg:text-2xl font-[playfair-display] uppercase tracking-wider'>
                  Membership Open
                </span>
                <Crown className='w-6 h-6 text-[#D4AF37]' />
              </div>
            ))}
          </div>
          <div className='whitespace-nowrap animate-scroll flex items-center gap-12'>
            {[...Array(8)].map((_, i) => (
              <div key={`duplicate-${i}`} className='flex items-center gap-4 shrink-0'>
                <Crown className='w-6 h-6 text-[#D4AF37]' />
                <span className='text-xl lg:text-2xl font-[playfair-display] uppercase tracking-wider'>
                  Membership Open
                </span>
                <Crown className='w-6 h-6 text-[#D4AF37]' />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className='py-20 lg:py-32 bg-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl lg:text-5xl font-[playfair-display] text-foreground mb-8'>
              <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
                Why Join Anand Club?
                </TextAnimate>
              </h2>
              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <Crown className='w-6 h-6 text-[#D4AF37] shrink-0 mt-1' />
                  <div>
                    <h3 className='text-xl font-[playfair-display] text-foreground mb-2'>
                      Affordable Luxury
                    </h3>
                    <p className='text-foreground/70 leading-relaxed'>
                      Experience premium amenities and services at an affordable membership fee. 
                      Get more value than you pay for.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <Users className='w-6 h-6 text-[#D4AF37] shrink-0 mt-1' />
                  <div>
                    <h3 className='text-xl font-[playfair-display] text-foreground mb-2'>
                      Family-Friendly
                    </h3>
                    <p className='text-foreground/70 leading-relaxed'>
                      Your membership extends to your entire family. Create lasting memories 
                      together in a safe, luxurious environment.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <Sparkles className='w-6 h-6 text-[#D4AF37] shrink-0 mt-1' />
                  <div>
                    <h3 className='text-xl font-[playfair-display] text-foreground mb-2'>
                      Exclusive Privileges
                    </h3>
                    <p className='text-foreground/70 leading-relaxed'>
                      Enjoy exclusive access to events, special offers, and premium facilities 
                      reserved only for members.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl'>
              <img
                src="/relax.jpg" // Add club image
                alt="Anand Club"
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-8'>
                <div>
                  <p className='text-2xl font-[playfair-display] text-background mb-2'>
                    Your Gateway to Joy
                  </p>
                  <p className='text-background/90'>
                    Thousands of Happy Members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className='py-20 lg:py-32 bg-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-6xl font-[playfair-display] text-foreground mb-4'>
            <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
              Exclusive Membership Benefits
              </TextAnimate>
            </h2>
            <p className='text-lg text-foreground/70 max-w-2xl mx-auto'>
              Unlock a world of luxury and privileges with Anand Club membership
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {membershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className={`group relative p-6 rounded-lg border-2 transition-all duration-500 hover:shadow-2xl ${
                    benefit.highlight
                      ? 'bg-foreground text-background border-[#D4AF37] hover:scale-105'
                      : 'bg-background border-foreground/20 text-foreground hover:border-foreground'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className={`mb-4 ${benefit.highlight ? 'text-[#D4AF37]' : 'text-foreground'}`}>
                    <Icon className='w-8 h-8 group-hover:scale-110 transition-transform duration-300' />
                  </div>
                  <p className={`text-sm lg:text-base leading-relaxed ${benefit.highlight ? 'text-background/90' : 'text-foreground/70'}`}>
                    {benefit.text}
                  </p>
                  {benefit.highlight && (
                    <div className='absolute top-2 right-2'>
                      <Star className='w-4 h-4 text-[#D4AF37] animate-pulse' />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className='mt-12 text-center'>
            <p className='text-xl font-[playfair-display] text-foreground italic'>
              And much more!
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className='py-20 lg:py-32 border-b bg-foreground text-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-6xl font-[playfair-display] mb-4'>
            <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
              World-Class Amenities
              </TextAnimate>
            </h2>
            <p className='text-lg text-background/80 max-w-2xl mx-auto'>
              Experience luxury at every corner of Anand Club
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon
              return (
                <div
                  key={index}
                  className='group relative p-6 bg-background/10 rounded-lg hover:bg-background/20 transition-all duration-500 hover:scale-110 cursor-pointer'
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  <div className='flex flex-col items-center text-center'>
                    <div className='mb-4 p-4 rounded-full bg-background/20 group-hover:bg-background/30 transition-colors duration-300'>
                      <Icon className='w-8 h-8 text-background group-hover:scale-110 transition-transform duration-300' />
                    </div>
                    <p className='text-sm lg:text-base text-background/90 font-medium'>
                      {amenity.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className='mt-12 text-center'>
            <p className='text-xl font-[playfair-display] text-background/80 italic'>
              And much more!
            </p>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className='py-20 lg:py-32 bg-foreground text-background'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl lg:text-6xl font-[playfair-display] mb-6'>
            <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.1} once>
              Ready to Begin Your Journey?
              </TextAnimate>
            </h2>
            <p className='text-xl lg:text-2xl text-background/90 mb-10 leading-relaxed'>
              Join Anand Club today and unlock a decade of affordable luxury, unforgettable 
              moments, and exclusive privileges.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Button
                variant='default'
                size='lg'
                onClick={() => document.getElementById('membership-form')?.scrollIntoView({ behavior: 'smooth' })}
                className='group'
              >
                <span className='flex items-center'>
                  Become a Member Now
                  <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
                </span>
              </Button>
              <Button
                variant='secondary'
                size='lg'
                onClick={() => window.open('tel:+917020704420')}
              >
                <Phone className='w-5 h-5 mr-2' />
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section id='membership-form' className='py-16 sm:py-20 bg-background'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
            <div className='space-y-5'>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-[playfair-display] text-foreground leading-tight'>
                Plan Your Anand Club Experience
              </h2>
              <p className='text-base sm:text-lg text-foreground/70 leading-relaxed'>
                Share your occasion—membership, day pass, celebrations, or corporate retreat.
                Our team will curate the right package across pools, banquets, lawns, and
                experiences.
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
                    <label className='block text-sm text-foreground/70 mb-2'>Number of Members</label>
                    <input
                      type='number'
                      name='guests'
                      value={formData.guests}
                      onChange={handleChange}
                      min={1}
                      className='w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
                      placeholder='Approx. count'
                    />
                  </div>
                </div>
                <div>
                <label className='block text-sm text-foreground/70 mb-2'>
                        Membership Type Interest
                      </label>
                      <select
                      id='membershipType'
                      name='membershipType'
                      value={formData.membershipType}
                      onChange={handleChange}
                      required
                      className='w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
                    >
                      <option value='Lifetime'>Lifetime</option>
                      <option value='40 Years'>40 Years</option>
                      <option value='20 Years'>20 Years</option>
                      <option value='10 Years'>10 Years</option>
                      <option value='5 Years'>5 Years</option>
                    </select>
                    </div>

                <div>
                  <label className='block text-sm text-foreground/70 mb-2'>Notes or special requests</label>
                  <textarea
                    name='notes'
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className='w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
                    placeholder='Eg. DJ + lights, themed decor, stay packages, AV setup.'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full rounded-lg bg-foreground text-background py-3 text-lg font-semibold tracking-wide shadow-lg hover:bg-foreground/90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] focus:ring-offset-background'
                >
                  Submit Club Enquiry
                </button>
                <p className='text-xs text-foreground/60 text-center'>
                  Our club team will call within 30 minutes to confirm details.
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

export default ClubPage
