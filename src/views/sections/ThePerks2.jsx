import React from 'react'
const speedImprovement = new URL('../../assets/img/icons/speed-improvement.png', import.meta.url).href
const accesories = new URL('../../assets/img/icons/accesories.png', import.meta.url).href
const exhaust = new URL('../../assets/img/icons/exhaust.png', import.meta.url).href

export default function ThePerks() {
    return (
        <section id="the-perks" className="what-we-do">
            <div className="container">
                <div className="section-title">
                    <h2>OUR SPECIALITY</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="icon-box">
                            <img src={speedImprovement} className="testimonial-img" alt="" />
                            <h4><a href="">Speed Improvement</a></h4>
                            <p>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                        <div className="icon-box">
                            <img src={accesories} className="testimonial-img" alt="" />
                            <h4><a href="">Accesories</a></h4>
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                        <div className="icon-box">
                            <img src={exhaust} className="testimonial-img" alt="" />
                            <h4><a href="">Exhaust</a></h4>
                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
