import React from 'react'
const coreValue = new URL('../../assets/img/core-value-bg.png', import.meta.url).href


export default function OurValues() {
    return (
        <section id="our-values" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={coreValue} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <h3>Our Core Values</h3>
                        <p>
                            Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.
                            In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.
                        </p>
                        <ul>
                            <li>
                                <i className="bx bx-check-double"></i> Dedication
                                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</p>
                            </li>
                            <li>
                                <i className="bx bx-check-double"></i> Intellectual Honesty
                                <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.</p>
                            </li>
                            <li>
                                <i className="bx bx-check-double"></i> Curiosity
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
