import React from 'react'
import Contact from './sections/Contact'
import Header from './sections/Header'
import Hero from './sections/Hero'
import OurValues from './sections/OurValues'
import ThePerks from './sections/ThePerks'
import WhatWeDo from './sections/WhatWeDo'

export default function index() {
    return (
        <div>
            <Header />
            <Hero />
            <main id="main">
                <WhatWeDo />
                <OurValues />
                <ThePerks />
                <Contact />
            </main>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
    )
}
