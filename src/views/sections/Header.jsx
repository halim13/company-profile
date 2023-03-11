import React from 'react'

export default function Header() {
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center">

                <div className="logo me-auto">
                    <a href="index.html"><img src="/src/assets/img/logo.png" alt="" className="img-fluid" /></a>
                </div>

                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#who-we-are">Who We Are</a></li>
                        <li><a className="nav-link scrollto" href="#our-values">Our Values</a></li>
                        <li><a className="nav-link scrollto " href="#the-perks">The Perks</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
    )
}
