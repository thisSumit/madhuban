'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Phone, Mail, MapPin, Calendar, Users, Home, Building2 } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const scriptURL = "https://script.google.com/macros/s/AKfycbyqQWJnxWtFG1L8r8G6B7mVyHUs0qHlsIrFIc12Zasw-uQns88gDxz-ISmk1e_w8mvk8Q/exec"; // Integrated Google Apps Script URL
    
    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      source: "General Form", // Important: This identifies the form type
      formType: "general",
      timestamp: new Date().toISOString()
    };
    
    setIsSubmitting(true)
    
    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      alert("Thank you! Our advisor will contact you shortly.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: '',
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className='min-h-screen bg-background'>
        <div className='h-30 w-full bg-foreground'/>
      <Header />
      
      <section className='pt-32 pb-20 px-4 lg:px-16'>
        <div className='max-w-5xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl lg:text-6xl font-[playfair-display] text-foreground mb-6'>
              Get In Touch
            </h1>
            <p className='text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed'>
              We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            {/* Contact Information Sidebar */}
            <div className='lg:col-span-1'>
              <div className='sticky top-32 space-y-8'>
                <div>
                  <h3 className='text-xl font-[playfair-display] text-foreground mb-6'>
                    Contact Information
                  </h3>
                  <div className='space-y-6'>
                    <div className='flex items-start gap-4'>
                      <div className='p-3 rounded-full bg-foreground/5'>
                        <Phone className='w-5 h-5 text-foreground' />
                      </div>
                      <div>
                        <p className='text-sm text-foreground/60 mb-2'>Phone</p>
                        <div className='space-y-1'>
                          <a
                            href='tel:+917020704418'
                            className='block text-foreground font-medium hover:text-foreground/70 transition-all duration-300'
                          >
                            +91 7020704418
                          </a>
                          <a
                            href='tel:+917020704420'
                            className='block text-foreground font-medium hover:text-foreground/70 transition-all duration-300'
                          >
                            +91 7020704420
                          </a>
                          <a
                            href='tel:+917020704421'
                            className='block text-foreground font-medium hover:text-foreground/70 transition-all duration-300'
                          >
                            +91 7020704421
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className='flex items-start gap-4'>
                      <div className='p-3 rounded-full bg-foreground/5 transition-colors duration-300'>
                        <Mail className='w-5 h-5 text-foreground' />
                      </div>
                      <div>
                        <p className='text-sm text-foreground/60 mb-1'>Email</p>
                        <a href='mailto:info@madhubanvillage.in' className='block text-foreground font-medium hover:text-foreground/80 transition-colors'>
                          info@madhubanvillage.in
                        </a>
                        <a href='mailto:madhubanvillage@gmail.com' className='block text-foreground font-medium hover:text-foreground/80 transition-colors'>
                          madhubanvillage@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className='flex items-start gap-4'>
                      <div className='p-3 rounded-full bg-foreground/5'>
                        <MapPin className='w-5 h-5 text-foreground' />
                      </div>
                      <div>
                        <p className='text-sm text-foreground/60 mb-1'>Location</p>
                        <p className='text-foreground font-medium'>
                          Madhuban Village,<br />
                          Katol Road, Nagpur,<br />
                          Maharashtra, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='lg:col-span-2'>
              <form onSubmit={handleSubmit} className='space-y-8'>
                {/* Personal Information */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <div>
                    <label htmlFor='name' className='block text-sm font-medium text-foreground mb-3 uppercase tracking-wider'>
                      Full Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-0 py-4 bg-transparent border-x-0 border-t-0 border-b-2 border-foreground/20 text-foreground text-lg font-light focus:border-foreground focus:outline-none transition-colors duration-300'
                      placeholder='Enter your full name'
                    />
                  </div>

                  <div>
                    <label htmlFor='email' className='block text-sm font-medium text-foreground mb-3 uppercase tracking-wider'>
                      Email Address *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-0 py-4 bg-transparent border-x-0 border-t-0 border-b-2 border-foreground/20 text-foreground text-lg font-light focus:border-foreground focus:outline-none transition-colors duration-300'
                      placeholder='your.email@example.com'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='phone' className='block text-sm font-medium text-foreground mb-3 uppercase tracking-wider'>
                    Phone Number *
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className='w-full px-0 py-4 bg-transparent border-x-0 border-t-0 border-b-2 border-foreground/20 text-foreground text-lg font-light focus:border-foreground focus:outline-none transition-colors duration-300'
                    placeholder='+91 9876543210'
                  />
                </div>
                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-foreground mb-3 uppercase tracking-wider'>
                    Additional Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className='w-full px-0 py-4 bg-transparent border-x-0 border-t-0 border-b-2 border-foreground/20 text-foreground text-lg font-light focus:border-foreground focus:outline-none transition-colors duration-300 resize-none'
                    placeholder='Tell us more about your requirements...'
                  />
                </div>

                {/* Submit Button */}
                <div className='pt-8'>
                  <Button
                    type='submit'
                    variant='default'
                    size='lg'
                    className='w-full'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
