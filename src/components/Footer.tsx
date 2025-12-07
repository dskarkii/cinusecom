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
                    <div className="footer-newsletter_text">Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis tellus. Nullam quis mattis.</div>
                    <div className="newsletter-box">
                      <form method="post" action="contact.html">
                        <div className="form-group">
                          <span className="icon fa-regular fa-envelope fa-fw"></span>
                          <input type="email" name="search-field" placeholder="Enter your mail" required />
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
                          <li><a href="#">AI-powered copywriting</a></li>
                          <li><a href="#">Blog post generation</a></li>
                          <li><a href="#">Social media content</a></li>
                          <li><a href="#">Product descriptions</a></li>
                          <li><a href="#">Email campaigns</a></li>
                          <li><a href="#">Copy writings</a></li>
                          <li><a href="#">SEO specialist</a></li>
                        </ul>
                      </div>

                      <div className="column col-lg-3 col-md-4 col-sm-6">
                        <h5 className="footer-title">resources</h5>
                        <ul className="footer-pages_list">
                          <li><a href="#">Blog</a></li>
                          <li><a href="#">FAQs</a></li>
                          <li><a href="#">Help center</a></li>
                          <li><a href="#">case studies</a></li>
                          <li><a href="#">whitepapers</a></li>
                          <li><a href="#">Services</a></li>
                        </ul>
                      </div>

                      <div className="column col-lg-4 col-md-4 col-sm-6">
                        <h5 className="footer-title">about us</h5>
                        <ul className="footer-pages_list">
                          <li><a href="#">Our story</a></li>
                          <li><a href="#">Team</a></li>
                          <li><a href="#">Careers</a></li>
                          <li><a href="#">Testimonials</a></li>
                          <li><a href="#">Error 404</a></li>
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
              <div className="footer-logo"><a href="index.html"><Image src="/assets/images/logo.svg" alt="" title="" width={150} height={50} unoptimized /></a></div>
              <div className="footer-copyright">&copy; 2024 <a href="index.html">Cinuse.</a> All rights reserved.</div>

              <div className="footer-social_box">
                <a href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                <a href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
