import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
     <footer className="main-footer">
        <div className="footer_pattern" style={{ backgroundImage: " url(assets/images/background/footer-pattern.png')" }}></div>
        <div className="auto-container">
          <div className="inner-container">
            <div className="widgets-section">
              <div className="row clearfix">


                <div className="big-column col-lg-5 col-md-12 col-sm-12">
                  <div className="footer-newsletter">
                    <h5 className="footer-title">Newsletter</h5>
                    <div className="footer-newsletter_text">Subscribe to our newsletter for the latest updates on solar design, engineering insights, and industry news.</div>
                    <div className="newsletter-box">
                      <form method="post" action="/contact">
                        <div className="form-group">
                          <span className="icon fa-regular fa-envelope fa-fw"></span>
                          <input type="email" name="search-field" placeholder="Enter your email" required />
                          <button type="submit" className="template-btn btn-style-one">
                            <span className="btn-wrap">
                              <span className="text-one">Subscribe</span>
                              <span className="text-two">Subscribe</span>
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


                <div className="big-column col-lg-7 col-md-12 col-sm-12">
                  <div className="footer-lists_outer">
                    <div className="row clearfix">

                      <div className="column col-lg-5 col-md-4 col-sm-6">
                        <h5 className="footer-title">Services</h5>
                        <ul className="footer-pages_list">
                          <li><a href="/services">Solar PV Design</a></li>
                          <li><a href="/services">Permit Design</a></li>
                          <li><a href="/services">ROI Analysis</a></li>
                          <li><a href="/services">Battery Storage (BESS)</a></li>
                          <li><a href="/services">Telecom Engineering</a></li>
                          <li><a href="/services">CAD/BIM Services</a></li>
                          <li><a href="/services">Data Center Design</a></li>
                        </ul>
                      </div>

                      <div className="column col-lg-3 col-md-4 col-sm-6">
                        <h5 className="footer-title">Resources</h5>
                        <ul className="footer-pages_list">
                          <li><a href="/about">About Us</a></li>
                          <li><a href="/services">Our Services</a></li>
                          <li><a href="/contact">Contact</a></li>
                          <li><a href="/contact">Get a Quote</a></li>
                          <li><a href="/#faq-one">FAQs</a></li>
                        </ul>
                      </div>

                      <div className="column col-lg-4 col-md-4 col-sm-6">
                        <h5 className="footer-title">Contact</h5>
                        <ul className="footer-pages_list">
                          <li><a href="tel:+917349296574">+91 7349296574</a></li>
                          <li><a href="mailto:contact@cinuse.com">contact@cinuse.com</a></li>
                          <li>Bengaluru, Karnataka</li>
                          <li>560017, India</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container d-flex justify-content-between align-items-center flex-wrap">
              <div className="footer-logo"><a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0px' }}><Image src="/assets/images/cinuse-logo.png" alt="Cinuse" title="Cinuse" width={40} height={40} unoptimized /><Image src="/assets/images/logo.svg" alt="Cinuse" title="Cinuse" width={95} height={35} unoptimized /></a></div>
              <div className="footer-copyright">&copy; {new Date().getFullYear()} <a href="/">Cinuse.</a> All rights reserved.</div>

              <div className="footer-social_box">
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
