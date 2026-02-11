'use client'

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"

export default function TermsAndConditions() {
    return (
        <div className='min-h-screen bg-background'>
            <div className='h-30 w-full bg-foreground' />
            <Header />
            <div className="max-w-5xl mx-auto px-6 py-16">

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                    Terms & Conditions
                </h1>

                <p className="text-center text-gray-500 mb-12">
                    Madhuban Village | Last Updated: 11 Feb 2026
                </p>

                {/* Introduction */}
                <section className="mb-10">
                    <p className="leading-relaxed">
                        Welcome to <strong>Madhuban Village</strong>. These Terms & Conditions
                        govern your use of our website, facilities, and services including
                        Wedding Resort, Wedding Venue, Swimming Pool, Madhuban Village Plots
                        & Farm House, and Club ANAND. By accessing our services, you agree
                        to comply with the following terms.
                    </p>
                </section>

                {/* Wedding & Event Terms */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        1. Wedding Resort & Event Venue
                    </h2>

                    <h3 className="font-semibold mb-2">Booking & Payment</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Advance payment is required to confirm booking.</li>
                        <li>Full payment must be completed before or on the event date.</li>
                        <li>Failure to clear dues may result in cancellation.</li>
                    </ul>

                    <h3 className="font-semibold mb-2">Guest Responsibility</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Clients are responsible for guest behavior.</li>
                        <li>Any property damage will be chargeable.</li>
                        <li>Management reserves the right to stop events violating rules.</li>
                    </ul>
                </section>

                {/* Swimming Pool */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        2. Swimming Pool & Recreational Facilities
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Pool usage is at your own risk.</li>
                        <li>Proper swimwear is mandatory.</li>
                        <li>Children must be supervised at all times.</li>
                        <li>Management may deny access for safety concerns.</li>
                    </ul>
                </section>

                {/* Plots & Farm House */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        3. Madhuban Village Plots & Farm House
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>All plot layouts are subject to availability.</li>
                        <li>Booking requires advance payment.</li>
                        <li>Final documentation follows applicable property laws.</li>
                        <li>Site visits must follow safety guidelines.</li>
                    </ul>
                </section>

                {/* Club ANAND */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        4. Club ANAND Membership
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Membership is subject to management approval.</li>
                        <li>Membership fees are non-transferable.</li>
                        <li>Misconduct may lead to suspension without refund.</li>
                        <li>Members must follow all facility rules.</li>
                    </ul>
                </section>

                {/* Liability */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        5. Liability Disclaimer
                    </h2>
                    <p className="leading-relaxed">
                        Madhuban Village is not responsible for loss, theft, or damage to
                        personal belongings. We are not liable for delays or service
                        interruptions caused by force majeure events including natural
                        disasters, government restrictions, or power failures.
                    </p>
                </section>

                {/* Website Usage */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        6. Website Usage
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Users must not misuse website content.</li>
                        <li>Unauthorized system access is strictly prohibited.</li>
                        <li>All content is the intellectual property of Madhuban Village.</li>
                    </ul>
                </section>

                {/* Governing Law */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        7. Governing Law
                    </h2>
                    <p className="leading-relaxed">
                        These Terms & Conditions are governed by the laws of India. Any
                        disputes shall fall under the jurisdiction of local courts.
                    </p>
                </section>

                {/* Contact */}
                <section className="mt-16 border-t pt-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        Contact Us
                    </h2>
                    <p>
                        <strong>Madhuban Village</strong><br />
                        Katol Road, Nagpur,
                        Maharashtra, India<br />
                        Phone: +91 7020704418 | +91 7020704420 | +91 7020704421<br />
                        Email: info@madhubanvillage.in | madhubanvillage@gmail.com
                    </p>
                </section>

            </div>
            <Footer />
        </div>
    )
}
