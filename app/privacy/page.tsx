'use client'

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"

export default function PrivacyPolicy() {
    return (
        <div className='min-h-screen bg-background'>
            <div className='h-30 w-full bg-foreground' />
            <Header />
            <div className="max-w-5xl mx-auto px-6 py-16">

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                    Privacy Policy
                </h1>

                <p className="text-center text-gray-500 mb-12">
                    Madhuban Village | Last Updated: 11 Feb 2026
                </p>

                {/* Introduction */}
                <section className="mb-10">
                    <p className="leading-relaxed">
                        At <strong>Madhuban Village</strong>, we value your trust and are
                        committed to protecting your privacy. This Privacy Policy explains
                        how we collect, use, and safeguard your information when you visit
                        our website or use our services including Wedding Resort, Wedding
                        Venue, Swimming Pool, Madhuban Village Plots & Farm House, and
                        Club ANAND.
                    </p>
                </section>

                {/* Information We Collect */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        1. Information We Collect
                    </h2>

                    <h3 className="font-semibold mb-2">Personal Information</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Full Name</li>
                        <li>Phone Number</li>
                        <li>Email Address</li>
                        <li>Residential Address</li>
                        <li>Event details (wedding date, guest count, preferences)</li>
                        <li>Property inquiry details</li>
                    </ul>

                    <h3 className="font-semibold mb-2">Non-Personal Information</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>IP address</li>
                        <li>Browser & device information</li>
                        <li>Pages visited & time spent</li>
                        <li>Cookies & usage analytics</li>
                    </ul>
                </section>

                {/* How We Use Information */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        2. How We Use Your Information
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>To process wedding and event bookings</li>
                        <li>To respond to plot and farmhouse inquiries</li>
                        <li>To manage Club ANAND memberships</li>
                        <li>To provide customer support</li>
                        <li>To send booking confirmations and updates</li>
                        <li>To improve website experience</li>
                        <li>To share promotional offers (with consent)</li>
                    </ul>
                </section>

                {/* Payment Security */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        3. Payment Security
                    </h2>
                    <p className="leading-relaxed">
                        All payments are processed through secure third-party payment
                        gateways. Madhuban Village does not store complete credit/debit
                        card details on its servers.
                    </p>
                </section>

                {/* Data Sharing */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        4. Data Sharing & Disclosure
                    </h2>
                    <p className="leading-relaxed mb-4">
                        We do not sell or rent your personal information. Information may
                        be shared only:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>With trusted vendors for event execution</li>
                        <li>When required by law or legal authorities</li>
                        <li>To protect safety and legal rights</li>
                    </ul>
                </section>

                {/* Cookies */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        5. Cookies & Tracking Technologies
                    </h2>
                    <p className="leading-relaxed">
                        Our website may use cookies to enhance user experience, analyze
                        traffic, and improve marketing efforts. You may disable cookies
                        through your browser settings if preferred.
                    </p>
                </section>

                {/* Data Protection */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        6. Data Protection & Security
                    </h2>
                    <p className="leading-relaxed">
                        We implement reasonable security measures to protect personal
                        information from unauthorized access, misuse, or loss. However,
                        no online transmission is completely secure.
                    </p>
                </section>

                {/* Club ANAND Specific */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        7. Club ANAND & Facility Privacy
                    </h2>
                    <p className="leading-relaxed">
                        CCTV monitoring may be active in common areas for safety and
                        security. Membership data is securely maintained and used strictly
                        for operational purposes.
                    </p>
                </section>

                {/* User Rights */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        8. Your Rights
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Request access to your personal data</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your data (subject to legal obligations)</li>
                        <li>Withdraw marketing consent at any time</li>
                    </ul>
                </section>

                {/* Updates */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">
                        9. Updates to This Policy
                    </h2>
                    <p className="leading-relaxed">
                        Madhuban Village reserves the right to update this Privacy Policy.
                        Changes will be reflected with a revised “Last Updated” date.
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
