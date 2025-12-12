'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Phone, Mail, MapPin, Calendar, Users, Home, Building2 } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type BusinessType = 'wedding' | 'plots' | 'club' | ''

interface FormData {
  businessType: BusinessType
  name: string
  email: string
  phone: string
  eventDate?: string
  guestCount?: string
  plotSize?: string
  budget?: string
  membershipType?: string
  message: string
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    businessType: '',
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    plotSize: '',
    budget: '',
    membershipType: '',
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
    
    const scriptURL = "https://script.google.com/macros/s/AKfycbxR6DH8evia0snPI1KuYvo_0IRSW2RbOhmz2_uWYBjE5MAd5qBgDqp6O-Q7Ft47TZJw_w/exec"; // Integrated Google Apps Script URL
    
    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      businessType: formData.businessType,
      eventDate: formData.eventDate,
      guestCount: formData.guestCount,
      plotSize: formData.plotSize,
      budget: formData.budget,
      membershipType: formData.membershipType,
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
        businessType: '',
        name: "",
        email: "",
        phone: "",
        eventDate: '',
        guestCount: '',
        plotSize: '',
        budget: '',
        membershipType: '',
        message: '',
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const getBusinessIcon = () => {
    switch (formData.businessType) {
      case 'wedding':
        return <Calendar className='w-5 h-5' />
      case 'plots':
        return <Home className='w-5 h-5' />
      case 'club':
        return <Building2 className='w-5 h-5' />
      default:
        return null
    }
  }

  return (
    <div className='min-h-screen bg-background'>
        <div className='h-24 w-full bg-foreground'/>
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
                    <a
                      href='tel:+917020704420'
                      className='flex items-start gap-4 group'
                    >
                      <div className='p-3 rounded-full bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-300'>
                        <Phone className='w-5 h-5 text-foreground' />
                      </div>
                      <div>
                        <p className='text-sm text-foreground/60 mb-1'>Phone</p>
                        <p className='text-foreground font-medium group-hover:text-foreground/80 transition-colors'>
                          +91 7020704420
                        </p>
                        <p className='text-foreground font-medium group-hover:text-foreground/80 transition-colors'>
                          +91 7020704421
                        </p>
                      </div>
                    </a>

                    <a
                      href='mailto:info@madhubanvillage.com'
                      className='flex items-start gap-4 group'
                    >
                      <div className='p-3 rounded-full bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-300'>
                        <Mail className='w-5 h-5 text-foreground' />
                      </div>
                      <div>
                        <p className='text-sm text-foreground/60 mb-1'>Email</p>
                        <p className='text-foreground font-medium group-hover:text-foreground/80 transition-colors'>
                          info@madhubanvillage.com
                        </p>
                      </div>
                    </a>

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


                {/* Business Type Dropdown */}
                {/* <div>
                  <label htmlFor='businessType' className='block text-sm font-medium text-foreground mb-3 uppercase tracking-wider'>
                    Select Service *
                  </label>
                  <div className='relative'>
                    <select
                      id='businessType'
                      name='businessType'
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className='w-full px-0 py-4 pr-12 bg-transparent border-x-0 border-t-0 border-b-2 border-foreground/20 text-foreground text-lg font-light focus:border-foreground focus:outline-none transition-colors duration-300 appearance-none cursor-pointer'
                    >
                      <option value='' disabled>Choose your service</option>
                      <option value='wedding'>Wedding</option>
                      <option value='plots'>Plots</option>
                      <option value='club'>Club</option>
                    </select>
                    <div className='absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/60'>
                      {getBusinessIcon()}
                    </div>
                  </div>
                </div> */}



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





                {/* Dynamic Questions Based on Business Type */}
{/*                 
                <div>
                {formData.businessType === 'wedding' && (
                  <div className='space-y-8 pt-4 border-t border-foreground/10'>
                    <h3 className='text-xl font-[playfair-display] text-foreground mb-6 flex items-center gap-3'>
                      <Calendar className='w-6 h-6' />
                      Wedding Details
                    </h3>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                      <div>
                        <label htmlFor='eventDate' className='block text-sm font-medium text-foreground mb-3 uppercase tracking-wider'>
                          Preferred Event Date
                        </label>
                        <input
                          type='date'
                          id='eventDate'
                          name='eventDate'
                          value={formData.eventDate}
                          onChange={handleChange}
                          className='w-full px-0 py-4 bg-transparent border-x-0 border-t-0 border-b-2 border-foreground/20 text-foreground text-lg font-light focus:border-foreground focus:outline-none transition-colors duration-300'
                        />
                      </div>

                      <div>
                        <label htmlFor='guestCount' className='block text-sm font-medium text-foreground mb-3 uppercase tracking-wider'>
                          Expected Guest Count
                        </label>
                        <input
                          type='text'
                          id='guestCount'
                          name='guestCount'
                          value={formData.guestCount}
                          onChange={handleChange}
                          className='w-full px-0 py-4 bg-transparent border-x-0 border-t-0 border-b-2 border-foreground/20 text-foreground text-lg font-light focus:border-foreground focus:outline-none transition-colors duration-300'
                          placeholder='e.g., 200-300 guests'
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor='budget' className='block text-sm font-medium text-foreground mb-3 uppercase tracking-wider'>
                        Budget Range
                      </label>
                      <input
                        type='text'
                        id='budget'
                        name='budget'
                        value={formData.budget}
                        onChange={handleChange}
                        className='w-full px-0 py-4 bg-transparent border-x-0 border-t-0 border-b-2 border-foreground/20 text-foreground text-lg font-light focus:border-foreground focus:outline-none transition-colors duration-300'
                        placeholder='e.g., ₹5-10 Lakhs'
                      />
                    </div>
                  </div>
                )}

                {formData.businessType === 'plots' && (
                  <div className='space-y-8 pt-4 border-t border-foreground/10'>
                    <h3 className='text-xl font-[playfair-display] text-foreground mb-6 flex items-center gap-3'>
                      <Home className='w-6 h-6' />
                      Plot Requirements
                    </h3>
                    
                    <div>
                      <label htmlFor='plotSize' className='block text-sm font-medium text-foreground mb-3 uppercase tracking-wider'>
                        Preferred Plot Size
                      </label>
                      <input
                        type='text'
                        id='plotSize'
                        name='plotSize'
                        value={formData.plotSize}
                        onChange={handleChange}
                        className='w-full px-0 py-4 bg-transparent border-x-0 border-t-0 border-b-2 border-foreground/20 text-foreground text-lg font-light focus:border-foreground focus:outline-none transition-colors duration-300'
                        placeholder='e.g., 1000 sq.ft, 2000 sq.ft'
                      />
                    </div>

                    <div>
                      <label htmlFor='budget' className='block text-sm font-medium text-foreground mb-3 uppercase tracking-wider'>
                        Budget Range
                      </label>
                      <input
                        type='text'
                        id='budget'
                        name='budget'
                        value={formData.budget}
                        onChange={handleChange}
                        className='w-full px-0 py-4 bg-transparent border-x-0 border-t-0 border-b-2 border-foreground/20 text-foreground text-lg font-light focus:border-foreground focus:outline-none transition-colors duration-300'
                        placeholder='e.g., ₹20-50 Lakhs'
                      />
                    </div>
                  </div>
                )}

                {formData.businessType === 'club' && (
                  <div className='space-y-8 pt-4 border-t border-foreground/10'>
                    <h3 className='text-xl font-[playfair-display] text-foreground mb-6 flex items-center gap-3'>
                      <Building2 className='w-6 h-6' />
                      Club Membership Inquiry
                    </h3>
                    
                    <div>
                      <label htmlFor='guestCount' className='block text-sm font-medium text-foreground mb-3 uppercase tracking-wider'>
                        Number of Members
                      </label>
                      <input
                        type='text'
                        id='guestCount'
                        name='guestCount'
                        value={formData.guestCount}
                        onChange={handleChange}
                        className='w-full px-0 py-4 bg-transparent border-x-0 border-t-0 border-b-2 border-foreground/20 text-foreground text-lg font-light focus:border-foreground focus:outline-none transition-colors duration-300'
                        placeholder='e.g., Individual, Family (4 members)'
                      />
                    </div>

                    <div>
                      <label htmlFor='budget' className='block text-sm font-medium text-foreground mb-3 uppercase tracking-wider'>
                        Membership Type Interest
                      </label>
                      <select
                      id='membershipType'
                      name='membershipType'
                      value={formData.membershipType}
                      onChange={handleChange}
                      required
                      className='w-full px-0 py-4 pr-12 bg-transparent border-x-0 border-t-0 border-b-2 border-foreground/20 text-foreground text-lg font-light focus:border-foreground focus:outline-none transition-colors duration-300 appearance-none cursor-pointer'
                    >
                      <option value='Lifetime'>Lifetime</option>
                      <option value='40 Years'>40 Years</option>
                      <option value='20 Years'>20 Years</option>
                      <option value='10 Years'>10 Years</option>
                      <option value='5 Years'>5 Years</option>
                    </select>
                    </div>
                  </div>
                )} 



</div> */}


                {/* Message */}
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
