import React from 'react'
const speedImprovement = new URL('../../assets/img/icons/speed-improvement.png', import.meta.url).href
const accesories = new URL('../../assets/img/icons/accesories.png', import.meta.url).href
const exhaust = new URL('../../assets/img/icons/exhaust.png', import.meta.url).href

export default function ThePerks() {
    return (
        <section id="the-perks" className="testimonials section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>OUR SPECIALITY</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
                </div>
                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src={speedImprovement} className="testimonial-img" alt="" />
                                <h3>Speed Improvement</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src={accesories} className="testimonial-img" alt="" />
                                <h3>Accesories</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src={exhaust} className="testimonial-img" alt="" />
                                <h3>Exhaust</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    )
}
