import React from 'react'

import store1 from './../../assets/store-01.webp'
import store2 from './../../assets/store-02.webp'
import { Link } from 'react-router-dom'

function Stores() {
    return (
        <>
            <ol className="section-banner py-3 position-relative">
                <li className='position-relative'><Link to='/'>Home</Link></li>
                <li className='position-relative active'><a href="#" className='ps-5'>Stores</a></li>
            </ol>
            {/* Store */}
            <div class="container store-wrap my-5 py-5">
                <div className="row">
                    <div className="section-title mb-5 favorite-beauty-title text-center">
                        <h2 className="fw-semibold fs-1">Find a Store</h2>
                        <p>We’re talking about clean beauty gift sets, of course<br /> and we’ve got a bouquet of beauties for yourself or someone you love.</p>
                    </div>
                </div>
                <div class="row align-items-center g-5">

                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <img src={store1} alt="Store" class="img-fluid" />
                    </div>

                    <div className="col-lg-6">
                        <h2 class="mb-4">New York Store</h2>
                        <div className="row">
                            <div class="col-md-6 mb-4">
                                <h5 class="subtitle fw-semibold mb-4">Address</h5>
                                <p class="text-muted mb-0">3245 Abbot Kinney BLVD -</p>
                                <p class="text-muted">PH Venice, CA 124</p>
                                <a href="#" class="underline-link text-black">Get Direction</a>
                            </div>

                            <div class="col-md-6 mb-4">
                                <h5 class="subtitle fw-semibold mb-4">Hour of operation</h5>
                                <div class="d-flex gap-5 text-muted">
                                    <span>Mon – Fri:</span>
                                    <span>08:30 – 20:00</span>
                                </div>
                                <div class="d-flex gap-5 text-muted">
                                    <span>Sat & Sun:</span>
                                    <span>09:30 – 21:30</span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div class="col-md-6 mb-4">
                                <h5 class="subtitle fw-semibold mb-3">Contact</h5>
                                <p class="text-muted mb-0">Mobile: <strong class="text-dark">068 26589 996</strong></p>
                                <p class="text-muted mb-0">Hotline: <strong class="text-dark">1900 26886</strong></p>
                                <p class="text-muted">E-mail:hello@grace.com</p>
                            </div>

                            <div class="col-md-6 mb-4">
                                <h5 class="fw-semibold">Social media</h5>
                                <div class="store-social-icons d-flex gap-3 mt-4">
                                    <i class="bi bi-instagram"></i>
                                    <i class="bi bi-twitter-x"></i>
                                    <i class="bi bi-facebook"></i>
                                    <i class="bi bi-youtube"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container store-wrap my-5 py-5">
                <div class="row align-items-center g-5">
                    <div className="col-lg-6">
                        <h2 class="section-title mb-4">California Store</h2>

                        <div className="row">
                            <div class="col-md-6 mb-4">
                                <h5 class="subtitle fw-semibold mb-4">Address</h5>
                                <p class="text-muted mb-0">3245 Abbot Kinney BLVD -</p>
                                <p class="text-muted">PH Venice, CA 124</p>
                                <a href="#" class="underline-link text-black">Get Direction</a>
                            </div>

                            <div class="col-md-6 mb-4">
                                <h5 class="subtitle fw-semibold mb-4">Hour of operation</h5>
                                <div class="d-flex gap-5 text-muted-light">
                                    <span className="text-muted">Mon – Fri:</span>
                                    <span className="text-muted">08:30 – 20:00</span>
                                </div>
                                <div class="d-flex gap-5 text-muted-light">
                                    <span className="text-muted">Sat & Sun:</span>
                                    <span className="text-muted">09:30 – 21:30</span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div class="col-md-6 mb-4">
                                <h5 class="subtitle fw-semibold mb-3">Contact</h5>
                                <p class="text-muted mb-0">Mobile: <strong class="text-dark">068 26589 996</strong></p>
                                <p class="text-muted mb-0">Hotline: <strong class="text-dark">1900 26886</strong></p>
                                <p class="text-muted">E-mail:hello@grace.com</p>
                            </div>

                            <div class="col-md-6 mb-4">
                                <h5 class="fw-semibold">Social media</h5>
                                <div class="store-social-icons d-flex gap-3 mt-4">
                                    <i class="bi bi-instagram"></i>
                                    <i class="bi bi-twitter-x"></i>
                                    <i class="bi bi-facebook"></i>
                                    <i class="bi bi-youtube"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <img src={store2} alt="Store" class="img-fluid" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Stores