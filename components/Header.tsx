'use client'

import { Menu, X } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { Button } from './ui/Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/plots', label: 'Plots' },
    { href: '/club', label: 'Club' },
    { href: '/our-world', label: 'Our World' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-lg py-1' 
            : 'bg-transparent text-background py-1'
        }`}
      >
        <div className='px-8 lg:px-16 flex items-center justify-between max-w-7xl mx-auto'>
          {/* Logo - Top Left */}
          <div className='flex items-center z-50'>
            <a href='/' className='transition-transform duration-300'>
              <img 
                src={isScrolled ? "/madhuban-logo.png" : "/madhuban-wlogo.png"}
                alt="Madhuban Village" 
                className='h-28 lg:h-34 object-fill transition-all duration-300'
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className='hidden lg:flex items-center gap-8'>
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium tracking-wider uppercase relative group transition-all duration-300 ${
                  isScrolled ? 'text-foreground' : 'text-background'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className='relative z-10'>{link.label}</span>
                <span className={`absolute bottom-0 left-0 w-0 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-foreground' : 'bg-background'
                }`}></span>
              </a>
            ))}
            <Button onClick={() => window.location.href = "tel:+917020704420"} variant="secondary" size="default">Call Now</Button>
          </nav>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 hover:opacity-60 transition-all duration-300 z-50 relative ${
              isScrolled ? 'text-foreground' : 'text-background'
            }`}
            aria-label="Toggle menu"
          >
            <div className='relative w-6 h-6'>
              <Menu 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`}
              />
              <X 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-foreground/95 backdrop-blur-lg transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Menu Content */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-out ${
            isMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-10 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Navigation Links */}
          <nav className='flex flex-col items-center gap-8 mb-16'>
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className='nav-link-mobile text-background text-2xl font-light tracking-wider uppercase relative group transition-all duration-300'
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: isMenuOpen ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                }}
              >
                <span className='relative z-10'>{link.label}</span>
                <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 bg-background transition-all duration-500 group-hover:w-full'></span>
              </a>
            ))}
            <div 
              className='mt-4'
              style={{
                animationDelay: `${navLinks.length * 0.1}s`,
                animation: isMenuOpen ? 'fadeInUp 0.6s ease-out forwards' : 'none',
              }}
            >
              <Button variant="secondary" size="lg" onClick={() => window.location.href = "tel:+917020704420"}>
                Call Now
              </Button>
            </div>
          </nav>

          {/* Logo at Bottom Center */}
          <div
            className='absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-out'
            style={{
              animationDelay: `${(navLinks.length + 1) * 0.1}s`,
              animation: isMenuOpen ? 'fadeInUp 0.8s ease-out forwards' : 'none',
            }}
          >
            <img
              src="/madhuban-wlogo.png"
              alt="Madhuban Village"
              className='h-16 object-contain opacity-90'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header