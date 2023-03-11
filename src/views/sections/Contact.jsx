import React from 'react'

export default function Contact() {
    return (
        <section id="contact" className="contact section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                </div>

                <div className="row mt-5 justify-content-center">

                    <div className="col-lg-10">

                        <div className="info-wrap">
                            <div className="row">
                                <div className="col-lg-4 info">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>Jl. Lembong No 8 <br />Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat</p>
                                </div>

                                <div className="col-lg-4 info mt-4 mt-lg-0">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>info@example.com<br />contact@example.com</p>
                                </div>

                                <div className="col-lg-4 info mt-4 mt-lg-0">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 51<br />+1 5589 22475 14</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}
