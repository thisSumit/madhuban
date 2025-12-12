'use client'

import React from 'react'
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'

const Footer = () => {
  const diversificationSections = [
    // {
    //   id: 1,
    //   title: 'Plots',
    //   description: 'Explore premium residential plots in serene surroundings',
    //   href: '/plots',
    //   image: '/upper.png', // Add your plots image path
    // },
    // {
    //   id: 2,
    //   title: 'Clubs',
    //   description: 'Exclusive club memberships with world-class amenities',
    //   href: '/club',
    //   image: '/gentry.png', // Add your clubs image path
    // },
    // {
    //   id: 3,
    //   title: 'Wedding',
    //   description: 'Luxurious wedding venues for your special celebrations',
    //   href: '/',
    //   image: '/entry.png', // Add your wedding image path
    // },
    {
      id: 1,
      title: 'Plots',
      description: 'Explore premium residential plots in serene surroundings',
      href: '/plots',
      image: '/dr2.png', // Add your plots image path
    },
    {
      id: 2,
      title: 'Clubs',
      description: 'Exclusive club memberships with world-class amenities',
      href: '/club',
      image: '/ex.png', // Add your clubs image path
    },
    {
      id: 3,
      title: 'Wedding',
      description: 'Luxurious wedding venues for your special celebrations',
      href: '/',
      image: '/indraprasta1.png', // Add your wedding image path
    },
  ]

  const navigationLinks = {
    about: [
      { label: 'About Us', href: '/about' },
      { label: 'Plots', href: '/plots' },
      { label: 'Club', href: '/club' },
      { label: 'Gallery', href: 'https://www.instagram.com/madhuban.village/' },
    ],
    services: [
      { label: 'Wedding Packages', href: 'tel:7020704420' },
      { label: 'Event Planning', href: 'tel:7020704420' },
      { label: 'Accommodation', href: 'tel:7020704420' },
      { label: 'Catering', href: 'tel:7020704420' },
    ],
  }

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/madhuban.village/', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className='relative w-full bg-foreground text-background'>
      {/* Contact Section - Prominent Phone Numbers */}
      <div className='bg-foreground border-b border-background/10 py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='text-center mb-12'>
            <h3 className='text-sm uppercase tracking-widest text-background/80 mb-8 font-light'>
              Contact Us to Request a Tour!
            </h3>
            
            {/* Large Phone Numbers */}
            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 mb-8'>
              <a
                href='tel:+917020704420'
                className='text-4xl lg:text-5xl font-[playfair-display] text-background hover:text-background/80 transition-colors duration-300'
              >
                +91 7020704420
              </a>
              <span className='text-background/40 hidden lg:block'>|</span>
              <a
                href='tel:+917020704421'
                className='text-4xl lg:text-5xl font-[playfair-display] text-background hover:text-background/80 transition-colors duration-300'
              >
                +91 7020704421
              </a>
            </div>

            {/* Email Button */}
            <a
              href='mailto:info@madhubanvillage.com'
              className='inline-flex items-center gap-3 px-8 py-4 border-2 border-background/30 rounded-full hover:border-background hover:bg-background/10 transition-all duration-300 group'
            >
              <Mail className='w-5 h-5' />
              <span className='text-lg'>info@madhubanvillage.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Diversification Sections */}
      <div className='grid grid-cols-1 md:grid-cols-3 border-b border-background/10'>
        {diversificationSections.map((section, index) => (
          <a
            key={section.id}
            href={section.href}
            className='group relative overflow-hidden bg-foreground hover:bg-foreground/80 transition-all duration-500'
          >
            {/* Background Image */}
            {section.image && (
              <div className='absolute inset-0 opacity-100 group-hover:opacity-50 transition-opacity duration-500'>
                <img
                  src={section.image}
                  alt={section.title}
                  className='w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700'
                />
                {/* Additional overlay for better text readability */}
                <div className='absolute inset-0 bg-foreground/40' />
              </div>
            )}
            
            {/* Content */}
            <div className='relative z-10 p-12 lg:p-16 flex flex-col items-center text-center border-r border-background/10 last:border-r-0'>
              <div className='mb-6'>
                <div className='w-16 h-16 rounded-full border-2 border-background/30 flex items-center justify-center group-hover:border-background group-hover:bg-background/10 transition-all duration-300'>
                  <ArrowRight className='w-6 h-6 text-background/60 group-hover:text-background group-hover:translate-x-1 transition-all duration-300' />
                </div>
              </div>
              <h4 className='text-2xl lg:text-3xl font-[playfair-display] mb-4 group-hover:translate-y-[-4px] transition-transform duration-300'>
                {section.title}
              </h4>
              <p className='text-background/70 text-sm lg:text-base leading-relaxed group-hover:text-background/90 transition-colors duration-300'>
                {section.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 lg:px-16 py-16 lg:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16'>
          {/* Logo and Description */}
          <div className='lg:col-span-1'>
            <div className='mb-6'>
              <a href="/">
              <img
                src="/madhuban-wlogo.png"
                alt="Madhuban Village"
                className='h-12 object-contain mb-6'
              />
              </a>
            </div>
            <p className='text-background/70 text-sm leading-relaxed mb-6'>
              Your premier destination for luxurious weddings, exclusive events, and premium residential plots in Nagpur.
            </p>
            
            {/* Social Media */}
            <div className='flex items-center gap-4'>
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:border-background hover:bg-background/10 transition-all duration-300'
                    aria-label={social.label}
                  >
                    <Icon className='w-5 h-5 text-background/70 hover:text-background transition-colors duration-300' />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h5 className='text-sm uppercase tracking-widest text-background/80 mb-6 font-light'>
              Get In Touch
            </h5>
            <div className='space-y-4'>
              <a
                href='tel:+917020704420'
                className='flex items-center gap-3 text-background/90 hover:text-background transition-colors duration-300 group'
              >
                <Phone className='w-4 h-4 text-background/60 group-hover:text-background transition-colors duration-300' />
                <span>+91 7020704420</span>
              </a>
              <a
                href='tel:+917020704421'
                className='flex items-center gap-3 text-background/90 hover:text-background transition-colors duration-300 group'
              >
                <Phone className='w-4 h-4 text-background/60 group-hover:text-background transition-colors duration-300' />
                <span>+91 7020704421</span>
              </a>
              <a
                href='mailto:info@madhubanvillage.com'
                className='flex items-center gap-3 text-background/90 hover:text-background transition-colors duration-300 group underline'
              >
                <Mail className='w-4 h-4 text-background/60 group-hover:text-background transition-colors duration-300' />
                <span>info@madhubanvillage.com</span>
              </a>
              <div className='flex items-start gap-3 text-background/90 pt-2'>
                <MapPin className='w-4 h-4 text-background/60 mt-1 shrink-0' />
                <span className='text-sm leading-relaxed'>
                  Madhuban Village, Katol Road, Nagpur, Maharashtra
                </span>
              </div>
            </div>
          </div>

          {/* About Navigation */}
          <div>
            <h5 className='text-sm uppercase tracking-widest text-background/80 mb-6 font-light'>
              Site Link
            </h5>
            <ul className='space-y-3'>
              {navigationLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='text-background/70 hover:text-background transition-colors duration-300 text-sm'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Navigation */}
          <div>
            <h5 className='text-sm uppercase tracking-widest text-background/80 mb-6 font-light'>
              Services
            </h5>
            <ul className='space-y-3'>
              {navigationLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='text-background/70 hover:text-background transition-colors duration-300 text-sm'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-background/10 py-6'>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <p className='text-background/60 text-sm'>
              © {new Date().getFullYear()} Madhuban Village. All rights reserved.
            </p>
            <div className='flex items-center gap-6 text-sm'>
              <a href='#privacy' className='text-background/60 hover:text-background transition-colors duration-300'>
                Privacy Policy
              </a>
              <a href='#terms' className='text-background/60 hover:text-background transition-colors duration-300'>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
