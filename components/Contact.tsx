'use client'

import React, { useState } from 'react'

type EventOption = 'resort' | 'lawn' | 'pool' | 'indraprath'

const eventOptions: { label: string; value: EventOption; description: string }[] = [
  { label: 'Resort', value: 'resort', description: 'Luxury stay with premium suites' },
  { label: 'Lawn', value: 'lawn', description: 'Open-air celebrations under the stars' },
  { label: 'Pool', value: 'pool', description: 'Poolside parties with cabanas' },
  { label: 'Indraprath Hall', value: 'indraprath', description: 'Grand indoor banquet experience' },
]

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    duration: '',
    guests: '',
    interests: [] as EventOption[],
    notes: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const toggleInterest = (option: EventOption) => {
    setFormData(prev => {
      const exists = prev.interests.includes(option)
      return {
        ...prev,
        interests: exists ? prev.interests.filter(item => item !== option) : [...prev.interests, option],
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const scriptURL = "https://script.google.com/macros/s/AKfycbxR6DH8evia0snPI1KuYvo_0IRSW2RbOhmz2_uWYBjE5MAd5qBgDqp6O-Q7Ft47TZJw_w/exec"; // Integrated Google Apps Script URL
  
    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      budget: formData.budget,
      duration: formData.duration.trim(),
      guests: formData.guests,
      interests: formData.interests, // array
      notes: formData.notes.trim(),
      source: "Wedding Form", // Important: This identifies the form type
      formType: "wedding",
      timestamp: new Date().toISOString()
    };
  
    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
  
      alert("Thank you! Our wedding concierge will reach out shortly.");
  
      setFormData({
        name: "",
        phone: "",
        email: "",
        budget: "",
        duration: "",
        guests: "",
        interests: [],
        notes: "",
      });
  
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong! Please try again.");
    }
  };
  

  return (
    <section id='membership-form' className="py-16 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair-display text-foreground leading-tight">
              Plan a Luxury Wedding at Madhuban
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
              Tell us what you have in mind—our concierge will craft a bespoke experience across our
              resort suites, grand lawns, pool deck, or the Indraprath banquet hall.
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

          <div className="bg-foreground/5 border border-foreground/10 rounded-2xl shadow-xl p-5 sm:p-6 lg:p-8 backdrop-blur">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-foreground/70 mb-2">Full Name *</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground/70 mb-2">Phone *</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-foreground/70 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground/70 mb-2">Budget (₹) *</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  >
                    <option value="">Select range</option>
                    <option value="10-20L">₹10L - ₹20L</option>
                    <option value="20-40L">₹20L - ₹40L</option>
                    <option value="40-75L">₹40L - ₹75L</option>
                    <option value="75L+">₹75L+</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-foreground/70 mb-2">Duration</label>
                  <input
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="e.g., 2 days / 3 nights"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground/70 mb-2">Guests</label>
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min={1}
                    className="w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="Approx. guest count"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm text-foreground/70">I want to book (select multiple)</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {eventOptions.map(option => {
                    const checked = formData.interests.includes(option.value)
                    return (
                      <button
                        key={option.value}
                        type="button"
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
                          <p className="font-semibold">{option.label}</p>
                          <p className="text-sm text-foreground/60">{option.description}</p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm text-foreground/70 mb-2">Notes or special requests</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-lg border border-foreground/10 bg-background/70 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  placeholder="Tell us about rituals, decor style, cuisine, or logistics."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-foreground text-background py-3 text-lg font-semibold tracking-wide shadow-lg hover:bg-foreground/90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] focus:ring-offset-background"
              >
                Submit Wedding Enquiry
              </button>
              <p className="text-xs text-foreground/60 text-center">
                Our wedding concierge will call within 30 minutes to confirm your requirements.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact