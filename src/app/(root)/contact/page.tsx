/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Contact = () => {
    return (
        <>

            <section className="page-title">
                <div className="page-title-icon" style={{backgroundImage:"url('assets/images/icons/page-title_icon-1.png')"}}></div>
                <div className="page-title-icon-two" style={{backgroundImage:"url('assets/images/icons/page-title_icon-2.png')"}}></div>
                <div className="page-title-shadow" style={{backgroundImage:"url('assets/images/background/page-title-1.png')"}}></div>
                <div className="page-title-shadow_two" style={{backgroundImage:"url('assets/images/background/page-title-2.png')"}}></div>
                <div className="auto-container">
                    <h2>Contact Us</h2>
                    <ul className="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </section>

            <section className="contact-info">
                <div className="auto-container">
                    <div className="row clearfix">

                        <div className="info-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="info-block_one-inner">
                                <div className="info-block_one-icon">
                                    <i className="icon-phone"></i>
                                </div>
                                <h4>Call us on</h4>
                                <a href="tel:+415-864-8728">+415-864-8728</a> <br />
                                <a href="tel:+415-864-8729">+415-864-8729</a>
                            </div>
                        </div>

                        <div className="info-block_one active col-lg-4 col-md-6 col-sm-12">
                            <div className="info-block_one-inner">
                                <div className="info-block_one-icon">
                                    <i className="icon-envelope"></i>
                                </div>
                                <h4>Email us</h4>
                                <a href="/cdn-cgi/l/email-protection#ed"><span className="__cf_email__" data-cfemail="2e5d5b5e5e415c5a6e4c5c4f47404b004d4143">[email&#160;protected]</span></a> <br />
                                <a href="/cdn-cgi/l/email-protection#7c"><span className="__cf_email__" data-cfemail="690a06071d080a1d290b1b0800070c470a0604">[email&#160;protected]</span></a>
                            </div>
                        </div>

                        <div className="info-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="info-block_one-inner">
                                <div className="info-block_one-icon">
                                    <i className="icon-map"></i>
                                </div>
                                <h4>Our location</h4>
                                <div className="text">1426 Center StreetBend, OR <br /> 97702, California, USA</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="team-detail_form">
                <div className="auto-container">
                    <div className="row clearfix">

                        <div className="column col-lg-6 col-md-12 col-sm-12">
                            <div className="sec-title style-four">
                                <div className="sec-title_title">Contact me</div>
                                <h2 className="sec-title_heading">Connect with us for <span>assistance</span></h2>
                                <div className="sec-title_text">Lorem ipsum dolor sit amet consectetur adipiscing <br /> elit Ut et massa Aliquam in hendrerit urna.</div>
                            </div>

                            <div className="contact-social_box">
                                <a href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                                <a href="https://youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                                <a href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>

                        <div className="column col-lg-6 col-md-12 col-sm-12">
                            <div className="default-form contact-form">
                                <form method="post" action="sendemail.php" id="contact-form">
                                    <div className="row clearfix">

                                        <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                            <input type="text" name="name" value="" placeholder="Name" required />
                                        </div>

                                        <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                            <input type="email" name="email" value="" placeholder="Email" required />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                            <input type="text" name="phone" value="" placeholder="Phone" required />
                                        </div>

                                        <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                            <select name="country" className="custom-select-box">
                                                <option>Select service</option>
                                                <option>Service 01</option>
                                                <option>Service 02</option>
                                                <option>Service 03</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea className="" name="message" placeholder="Type comment here*"></textarea>
                                        </div>
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <button type="button" className="template-btn btn-style-one">
                                                <span className="btn-wrap">
                                                    <span className="text-one">Send now</span>
                                                    <span className="text-two">Send now</span>
                                                </span>
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map-one">
                <div className="auto-container">
                    <div className="map-one_map">
                        <iframe width="820" height="560" id="gmap_canvas" src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=18&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>
                </div>
            </section>
    
            <section className="cta-one style-two">
                <div className="cta-one_shadow" style={{backgroundImage:"url('assets/images/background/cta-shadow.png')"}}></div>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="cta-icon_one" style={{backgroundImage:"url('assets/images/icons/cta-icon-1.png')"}}></div>
                        <div className="cta-icon_two" style={{backgroundImage:"url('assets/images/icons/cta-icon-2.png')"}}></div>
                        <div className="cta-one_card">
                            <img src="assets/images/icons/cta-card.png" alt="" />
                        </div>
                        <div className="row clearfix">

                            <div className="cta-one_title-column col-lg-6 col-md-12 col-sm-12">
                                <div className="cta-one_title-outer">
                                    <h2 className="cta-one_title">Craft your next great <span>content now.</span></h2>
                                    <div className="cta-one_button">
                                        <a href="about.html" className="template-btn btn-style-three">
                                            <span className="btn-wrap">
                                                <span className="text-one">Get started free</span>
                                                <span className="text-two">Get started free</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="cta-one_image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="cta-one_image-outer">
                                    <div className="cta-one_cards">
                                        <img src="assets/images/icons/cta-cards.png" alt="" />
                                    </div>
                                    <div className="image">
                                        <img src="assets/images/resource/cta.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact
