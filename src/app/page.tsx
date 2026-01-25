import Image from 'next/image';

export default function Home() {
  return (

    <>
      <section className="slider-one">
        <div className="main-slider swiper-container">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="slider-one_icon" style={{ backgroundImage: "url('/assets/images/main-slider/icon-1.png')" }}></div>
              <div className="slider-one_icon-two" style={{ backgroundImage: "url('/assets/images/main-slider/icon-1.png')" }}></div>
              <div className="slider-one_pattern" style={{ backgroundImage: "url('/assets/images/main-slider/pattern-1.png')" }}></div>
              <div className="slider-one_pattern-two" style={{ backgroundImage: "url('/assets/images/main-slider/pattern-2.png')" }}></div>
              <div className="slider-one_pattern-four" style={{ backgroundImage: "url('/assets/images/main-slider/pattern-4.png')" }}></div>
              <div className="auto-container">
                <div className="row clearfix">

                  <div className="slider-one_content col-lg-7 col-md-12 col-sm-12">
                    <div className="slider-one_content-inner">
                      <div className="slider-one_title"><i><Image src="/assets/images/main-slider/hand.png" alt="" width={30} height={30} unoptimized /></i> Expert Engineering Solutions</div>
                      <h1 className="slider-one_heading">Engineering the <span>Future</span> of Infrastructure</h1>
                      <div className="slider-one_text">Advanced design solutions for solar energy, telecommunications, and data centers. Built on precision, powered by innovation, designed for decades.</div>
                      <div className="slider-one_button d-flex align-items-center flex-wrap">
                        <a href="/contact" className="template-btn btn-style-one">
                          <span className="btn-wrap">
                            <span className="text-one">Get started</span>
                            <span className="text-two">Get started</span>
                          </span>
                        </a>
                        <div className="slider-one_video">
                          <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video play-box"><span className="fa fa-play"></span></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slider-one_image-column col-lg-5 col-md-12 col-sm-12">
                    <div className="slider-one_pattern-three" style={{ backgroundImage: "url('/assets/images/main-slider/pattern-3.png')" }}></div>
                    <div className="slider-one_image-outer">

                      <div className="slider-one_author">
                        <i><Image src="/assets/images/main-slider/icon-2.png" alt="" width={60} height={60} unoptimized /></i>
                        <h5 className="slider-one_author-name">Cinuse Team</h5>
                        <div className="slider-one_author-text">Engineering Experts</div>
                      </div>

                      <div className="slider-one_percentage">
                        <i className="fa-solid fa-arrow-up fa-fw"></i>
                        <div className="slider-one_percent">100<sub>%</sub></div>
                        <div className="slider-one_percentage-text">client satisfaction</div>
                      </div>
                      <div className="slider-one_graph">
                        <div className="slider-one_graph-title">Projects Completed <span>500+ <sup><i className="fa-solid fa-caret-up fa-fw"></i>Growing</sup></span></div>
                        <Image src="/assets/images/main-slider/graph.png" alt="" width={200} height={80} unoptimized />
                      </div>
                      <div className="slider-one_image">
                        <Image src="/assets/images/main-slider/image-1.png" alt="" width={500} height={600} unoptimized />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="swiper-slide">
              <div className="slider-one_icon" style={{ backgroundImage: "url('/assets/images/main-slider/icon-1.png')" }}></div>
              <div className="slider-one_icon-two" style={{ backgroundImage: "url('/assets/images/main-slider/icon-1.png')" }}></div>
              <div className="slider-one_pattern" style={{ backgroundImage: "url('/assets/images/main-slider/pattern-1.png')" }}></div>
              <div className="slider-one_pattern-two" style={{ backgroundImage: "url('/assets/images/main-slider/pattern-2.png')" }}></div>
              <div className="slider-one_pattern-four" style={{ backgroundImage: "url('/assets/images/main-slider/pattern-4.png')" }}></div>
              <div className="auto-container">
                <div className="row clearfix">

                  <div className="slider-one_content col-lg-7 col-md-12 col-sm-12">
                    <div className="slider-one_content-inner">
                      <div className="slider-one_title"><i><Image src="/assets/images/main-slider/hand.png" alt="" width={30} height={30} unoptimized /></i> Solar Design Excellence</div>
                      <h1 className="slider-one_heading">Your One-Stop Shop for <span>Solar</span> Engineering</h1>
                      <div className="slider-one_text">Expert solar consulting, permit design, CAD/BIM drafting, and fast, AI-powered solutions. From feasibility to installation, we deliver excellence.</div>
                      <div className="slider-one_button d-flex align-items-center flex-wrap">
                        <a href="/services" className="template-btn btn-style-one">
                          <span className="btn-wrap">
                            <span className="text-one">Explore Services</span>
                            <span className="text-two">Explore Services</span>
                          </span>
                        </a>
                        <div className="slider-one_video">
                          <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video play-box"><span className="fa fa-play"></span></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slider-one_image-column col-lg-5 col-md-12 col-sm-12">
                    <div className="slider-one_pattern-three" style={{ backgroundImage: "url('/assets/images/main-slider/pattern-3.png')" }}></div>
                    <div className="slider-one_image-outer">

                      <div className="slider-one_author">
                        <i><Image src="/assets/images/main-slider/icon-2.png" alt="" width={60} height={60} unoptimized /></i>
                        <h5 className="slider-one_author-name">Cinuse Team</h5>
                        <div className="slider-one_author-text">Engineering Experts</div>
                      </div>

                      <div className="slider-one_percentage">
                        <i className="fa-solid fa-arrow-up fa-fw"></i>
                        <div className="slider-one_percent">4.9<sub>/5</sub></div>
                        <div className="slider-one_percentage-text">customer rating</div>
                      </div>
                      <div className="slider-one_graph">
                        <div className="slider-one_graph-title">Projects Completed <span>500+ <sup><i className="fa-solid fa-caret-up fa-fw"></i>Growing</sup></span></div>
                        <Image src="/assets/images/main-slider/graph.png" alt="" width={200} height={80} unoptimized />
                      </div>
                      <div className="slider-one_image">
                        <Image src="/assets/images/main-slider/image-1.png" alt="" width={500} height={600} unoptimized />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="swiper-slide">
              <div className="slider-one_icon" style={{ backgroundImage: "url('/assets/images/main-slider/icon-1.png')" }}></div>
              <div className="slider-one_icon-two" style={{ backgroundImage: "url('/assets/images/main-slider/icon-1.png')" }}></div>
              <div className="slider-one_pattern" style={{ backgroundImage: "url('/assets/images/main-slider/pattern-1.png')" }}></div>
              <div className="slider-one_pattern-two" style={{ backgroundImage: "url('/assets/images/main-slider/pattern-2.png')" }}></div>
              <div className="slider-one_pattern-four" style={{ backgroundImage: "url('/assets/images/main-slider/pattern-4.png')" }}></div>
              <div className="auto-container">
                <div className="row clearfix">
                  <div className="slider-one_content col-lg-7 col-md-12 col-sm-12">
                    <div className="slider-one_content-inner">
                      <div className="slider-one_title"><i><Image src="/assets/images/main-slider/hand.png" alt="" width={30} height={30} unoptimized /></i> Telecom & Data Centers</div>
                      <h1 className="slider-one_heading">Building Tomorrow&apos;s <span>Network</span> Infrastructure</h1>
                      <div className="slider-one_text">Comprehensive engineering for 5G/6G networks, data centers, and telecommunications infrastructure. RanPlan & ibWave expertise for optimal performance.</div>
                      <div className="slider-one_button d-flex align-items-center flex-wrap">
                        <a href="/contact" className="template-btn btn-style-one">
                          <span className="btn-wrap">
                            <span className="text-one">Get a Quote</span>
                            <span className="text-two">Get a Quote</span>
                          </span>
                        </a>
                        <div className="slider-one_video">
                          <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video play-box"><span className="fa fa-play"></span></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slider-one_image-column col-lg-5 col-md-12 col-sm-12">
                    <div className="slider-one_pattern-three" style={{ backgroundImage: "url('/assets/images/main-slider/pattern-3.png')" }}></div>
                    <div className="slider-one_image-outer">

                      <div className="slider-one_author">
                        <i><Image src="/assets/images/main-slider/icon-2.png" alt="" width={60} height={60} unoptimized /></i>
                        <h5 className="slider-one_author-name">Cinuse Team</h5>
                        <div className="slider-one_author-text">Engineering Experts</div>
                      </div>

                      <div className="slider-one_percentage">
                        <i className="fa-solid fa-arrow-up fa-fw"></i>
                        <div className="slider-one_percent">24/7<sub></sub></div>
                        <div className="slider-one_percentage-text">support available</div>
                      </div>
                      <div className="slider-one_graph">
                        <div className="slider-one_graph-title">Projects Completed <span>500+ <sup><i className="fa-solid fa-caret-up fa-fw"></i>Growing</sup></span></div>
                        <Image src="/assets/images/main-slider/graph.png" alt="" width={200} height={80} unoptimized />
                      </div>
                      <div className="slider-one_image">
                        <Image src="/assets/images/main-slider/image-1.png" alt="" width={500} height={600} unoptimized />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="services-one">
        <div className="auto-container">

          <div className="sec-title centered">
            <div className="sec-title_title">Our Services</div>
            <h2 className="sec-title_heading">Engineering Excellence <br /> <span>Meets Automation</span></h2>
          </div>
          <div className="row clearfix">

            <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_one-icon">
                  <i className="icon-speaker1"></i>
                </div>
                <h5 className="service-block_one-heading"><a href="/services">SOLAR DESIGN</a></h5>
                <div className="service-block_one-text">SolarGraf, Helioscope &amp; PVSyst integration for bankable, precision-engineered solar systems</div>
                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                  <div className="service-block_one-number">01</div>
                  <a className="service-block_one-join" href="/services">Explore+ <i className="fa-solid fa-plus fa-fw"></i></a>
                </div>
              </div>
            </div>

            <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_one-inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_one-icon">
                  <i className="icon-marketing"></i>
                </div>
                <h5 className="service-block_one-heading"><a href="/services">SOLAR BUSINESS</a></h5>
                <div className="service-block_one-text">Strategic consultation for growth, optimization &amp; market dominance</div>
                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                  <div className="service-block_one-number">02</div>
                  <a className="service-block_one-join" href="/services">Explore+ <i className="fa-solid fa-plus fa-fw"></i></a>
                </div>
              </div>
            </div>

            <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_one-inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_one-icon">
                  <i className="icon-users"></i>
                </div>
                <h5 className="service-block_one-heading"><a href="/services">ROI ANALYSIS</a></h5>
                <div className="service-block_one-text">Bankable financial modeling: NPV, IRR, payback &amp; cash flow projections</div>
                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                  <div className="service-block_one-number">03</div>
                  <a className="service-block_one-join" href="/services">Explore+ <i className="fa-solid fa-plus fa-fw"></i></a>
                </div>
              </div>
            </div>

            <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_one-icon">
                  <i className="icon-copyright"></i>
                </div>
                <h5 className="service-block_one-heading"><a href="/services">TELECOM</a></h5>
                <div className="service-block_one-text">RanPlan &amp; ibWave for 5G/6G network design &amp; optimization</div>
                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                  <div className="service-block_one-number">04</div>
                  <a className="service-block_one-join" href="/services">Explore+ <i className="fa-solid fa-plus fa-fw"></i></a>
                </div>
              </div>
            </div>

            <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_one-inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_one-icon">
                  <i className="icon-tag"></i>
                </div>
                <h5 className="service-block_one-heading"><a href="/services">SCAN TO BIM</a></h5>
                <div className="service-block_one-text">Point cloud &amp; imagery conversion to precise BIM models</div>
                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                  <div className="service-block_one-number">05</div>
                  <a className="service-block_one-join" href="/services">Explore+ <i className="fa-solid fa-plus fa-fw"></i></a>
                </div>
              </div>
            </div>

            <div className="service-block_two col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_two-inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_two-sideicon" style={{ backgroundImage: "url('/assets/images/icons/service-1.png')" }}></div>
                <div className="service-block_two-icon">
                  <Image src="/assets/images/icons/service.png" alt="" width={80} height={80} unoptimized />
                </div>
                <h5 className="service-block_two-heading"><a href="/services">ADVANCED AUTOMATION</a></h5>
                <div className="service-block_two-text">CAD automation, BESS design &amp; end-to-end workflow orchestration</div>
                <div className="service-block_two-button">
                  <a href="/services" className="template-btn btn-style-one">
                    <span className="btn-wrap">
                      <span className="text-one">learn more</span>
                      <span className="text-two">learn more</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="about-one">
        <div className="about-one_pattern" style={{ backgroundImage: "url('/assets/images/background/about-pattern.png')" }}></div>
        <div className="about-one_icon" style={{ backgroundImage: "url('/assets/images/icons/about-1.png')" }}></div>
        <div className="about-one_icon-two" style={{ backgroundImage: "url('/assets/images/icons/about-2.png')" }}></div>
        <div className="auto-container">
          <div className="row clearfix">


            <div className="about-one_tab-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="about-one_tab-outer">
                <div className="about-one_tab-shadow" style={{ backgroundImage: "url('/assets/images/background/tab-shadow.png')" }}></div>
                <div className="about-one_tab-image">
                  <Image src="/assets/images/resource/tabs.png" alt="" width={600} height={500} unoptimized />
                </div>
              </div>
            </div>

            <div className="about-one_content-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="about-one_content-outer">

                <div className="sec-title">
                  <div className="sec-title_title">About us</div>
                  <h2 className="sec-title_heading">Everything Your Business <span>Needs to Succeed</span></h2>
                </div>
                <p>We&apos;re your one-stop shop for expert solar consulting, permit design, CAD/BIM drafting, and fast, AI-powered solutions. <span>Our handpicked dream team</span> delivers in-house excellence with a global perspective, ensuring top-tier design, development, and engineering.</p>
                <p>We aim for your success: outshine competitors, excel in project delivery, and lead new markets. Your growth is our top priority.</p>
                <div className="about-one_options d-flex align-items-center flex-wrap">
                  <a href="/about" className="template-btn btn-style-one">
                    <span className="btn-wrap">
                      <span className="text-one">Know more</span>
                      <span className="text-two">Know more</span>
                    </span>
                  </a>
                  <div className="about-one_rating-box d-flex align-items-center flex-wrap">
                    4.9
                    <div className="about-one_rating">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <i>Customer rating</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="choose-one">
        <div className="auto-container">
          <div className="inner-container">

            <div className="sec-title light centered">
              <div className="sec-title_title">why choose us</div>
              <h2 className="sec-title_heading">Reasons to Choose Our <br /> <span>Platform</span></h2>
            </div>
            <div className="row clearfix">

              <div className="counter-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="counter-block_one-icon fa-solid fa-solar-panel fa-fw"></div>
                  <div className="counter-block_one-count"><span className="odometer" data-count="500"></span><i>+</i></div>
                  <div className="counter-block_one-text">Solar projects successfully designed and delivered across North America and beyond</div>
                </div>
              </div>


              <div className="counter-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                  <div className="counter-block_one-icon fa-solid fa-users fa-fw"></div>
                  <div className="counter-block_one-count"><span className="odometer" data-count="200"></span><i>+</i></div>
                  <div className="counter-block_one-text">Satisfied clients worldwide trusting Cinuse for their engineering needs</div>
                </div>
              </div>


              <div className="counter-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="counter-block_one-icon fa-solid fa-clock fa-fw"></div>
                  <div className="counter-block_one-count"><span className="odometer" data-count="24"></span><i>/7</i></div>
                  <div className="counter-block_one-text">Round-the-clock support and fast turnaround times for all your projects</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="answer-one">
        <div className="auto-container">
          <div className="row clearfix">

            <div className="answer-one_title-column col-lg-5 col-md-12 col-sm-12">
              <div className="answer-one_title-outer">
                <div className="sec-title title-anim">
                  <div className="sec-title_title">OUR EXPERTISE</div>
                  <h2 className="sec-title_heading">Comprehensive <span>Solar Project</span> Management</h2>
                </div>
                <ul className="answer-one_list">
                  <li><i className="fa-solid fa-check fa-fw"></i>End-to-end management from feasibility studies to post-installation support</li>
                  <li><i className="fa-solid fa-check fa-fw"></i>Cutting-edge tools: HelioScope, AutoCAD, PVSyst, Aurora, and ARKA 360</li>
                  <li><i className="fa-solid fa-check fa-fw"></i>Residential, commercial, and utility-scale solar solutions</li>
                </ul>
                <div className="answer-one_button">
                  <a href="/about" className="template-btn btn-style-one">
                    <span className="btn-wrap">
                      <span className="text-one">Know more</span>
                      <span className="text-two">Know more</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="answer-one_content-column col-lg-7 col-md-12 col-sm-12">
              <div className="answer-one_content-outer">
                <div className="answer-one_pattern" style={{ backgroundImage: "url('/assets/images/background/faq-shadow.png')" }}></div>
                <div className="answer-one_image">
                  <Image src="/assets/images/resource/faq.png" alt="" width={700} height={600} unoptimized />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="testimonial-one">
        <div className="auto-container">
          <div className="inner-container" style={{ backgroundImage: "url('/assets/images/background/testimonial-one_bg.png')" }}>

            <div className="sec-title centered">
              <div className="sec-title_title">Testimonials</div>
              <h2 className="sec-title_heading">What Our Respected <br /> <span>Clients Say</span></h2>
            </div>
            <div className="three-item_carousel swiper-container">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-inner">
                      <div className="testimonial-block_one-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <div className="testimonial-block_one-text">I really enjoyed the creative and design process. I am very pleased with the created PDF plans. All the work was professional and I enjoyed the interactions that we had. Thank you, I am very satisfied.</div>
                      <div className="testimonial-block_one-author_box">
                        <div className="testimonial-block_one-author-image">
                          <Image src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/577137/original/pops_matrix.jpg" alt="Jpgarcia" width={80} height={80} unoptimized />
                        </div>
                        Jpgarcia <span>United States</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-inner">
                      <div className="testimonial-block_one-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <div className="testimonial-block_one-text">Great job and fast delivery</div>
                      <div className="testimonial-block_one-author_box">
                        <div className="testimonial-block_one-author-image">
                          <Image src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/25a3cf5523c0ae9384d74a9e471f1c65-1705973925652/5be034f3-d4c0-4824-8888-11b83c53d1a7.jpg" alt="kiyakey" width={80} height={80} unoptimized />
                        </div>
                        kiyakey <span>United States</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-inner">
                      <div className="testimonial-block_one-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <div className="testimonial-block_one-text">Very nice to work with, I will definitely recommend him and I am looking forward to work with him again.</div>
                      <div className="testimonial-block_one-author_box">
                        <div className="testimonial-block_one-author-image">
                          <Image src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1c27582ba5a5a26d8fddf579a9e0853e-1607600971552/da5b9c83-b848-4ec2-8749-a28af6eafefd.JPG" alt="Martin" width={80} height={80} unoptimized />
                        </div>
                        Martin <span>Senegal</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-inner">
                      <div className="testimonial-block_one-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <div className="testimonial-block_one-text">Everything I needed</div>
                      <div className="testimonial-block_one-author_box">
                        <div className="testimonial-block_one-author-image testimonial-block_one-author-initials">
                          L
                        </div>
                        Leemusholt <span>United States</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-inner">
                      <div className="testimonial-block_one-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <div className="testimonial-block_one-text">Darshan&apos;s work was truly exceptional—he exceeded all expectations in building engineering. His quick responsiveness, proactive communication, and timely delivery made the entire process smooth and efficient. HIGHLY recommend!</div>
                      <div className="testimonial-block_one-author_box">
                        <div className="testimonial-block_one-author-image testimonial-block_one-author-initials">
                          D
                        </div>
                        Danieldurieu <span>Australia</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-inner">
                      <div className="testimonial-block_one-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star" style={{ opacity: 0.7 }}></span>
                      </div>
                      <div className="testimonial-block_one-text">Got the work done as requested.</div>
                      <div className="testimonial-block_one-author_box">
                        <div className="testimonial-block_one-author-image testimonial-block_one-author-initials">
                          D
                        </div>
                        Dhvanitpat <span>Senegal</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-inner">
                      <div className="testimonial-block_one-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <div className="testimonial-block_one-text">We hired Er. Darshan to create an electrical single line circuit diagram for a technically complex project. His work was outstanding — not only did he deliver highly accurate and well-structured drawings, but he also demonstrated excellent understanding of electrical systems and standards.</div>
                      <div className="testimonial-block_one-author_box">
                        <div className="testimonial-block_one-author-image testimonial-block_one-author-initials">
                          S
                        </div>
                        Sebi <span>Switzerland</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-inner">
                      <div className="testimonial-block_one-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <div className="testimonial-block_one-text">Darshan truly impressed with his remarkable expertise in Building Engineering, demonstrating SUPERB attention to detail and professionalism that exceeded all expectations. His polite and cooperative nature undoubtedly made for a streamlined collaboration.</div>
                      <div className="testimonial-block_one-author_box">
                        <div className="testimonial-block_one-author-image testimonial-block_one-author-initials">
                          G
                        </div>
                        Garretmcguire <span>Canada</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-inner">
                      <div className="testimonial-block_one-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <div className="testimonial-block_one-text">Exceptional Solar Design – Highly Recommended. Delivered a highly professional and well-thought-out solar designs. His deep understanding of system layout, compliance, and performance optimization truly exceeded our expectations.</div>
                      <div className="testimonial-block_one-author_box">
                        <div className="testimonial-block_one-author-image testimonial-block_one-author-initials">
                          W
                        </div>
                        Wcheema <span>Pakistan</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-inner">
                      <div className="testimonial-block_one-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <div className="testimonial-block_one-text">Darshan truly IMPRESSED with his exceptional Solar Design skills, showcasing professionalism and ATTENTION TO DETAIL in every aspect. The designs delivered not only exceeded expectations but were completed within a short time.</div>
                      <div className="testimonial-block_one-author_box">
                        <div className="testimonial-block_one-author-image testimonial-block_one-author-initials">
                          S
                        </div>
                        Sajdesilva <span>Sri Lanka</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="three-item_carousel-pagination"></div>

            </div>

          </div>
        </div>
      </section>

      <section className="steps-one">
        <div className="steps-one_bg" style={{ backgroundImage: "url('/assets/images/background/step-1_bg.png')" }}></div>
        <div className="steps-one_icon" style={{ backgroundImage: "url('/assets/images/icons/step.png')" }}></div>
        <div className="auto-container">
          <div className="inner-container">
            <div className="circle-layer"></div>
            <div className="dots-layer">
              <span className="dot-one"></span>
              <span className="dot-two"></span>
            </div>


            <div className="sec-title">
              <div className="sec-title_title">How It Works</div>
              <h2 className="sec-title_heading">Cinuse <span>Typically Operates</span> in <br /> Three Simple Steps</h2>
            </div>
            <div className="steps-one_button">
              <a href="/about" className="template-btn btn-style-two">
                <span className="btn-wrap">
                  <span className="text-one">Know more</span>
                  <span className="text-two">Know more</span>
                </span>
              </a>
            </div>
            <div className="row clearfix">

              <div className="column col-lg-6 col-md-12 col-sm-12">

                <div className="step-block_one">
                  <div className="step-block_one-inner">
                    <div className="step-block_one-steps">step 01</div>
                    <h5 className="step-block_one-title">Project Consultation</h5>
                    <div className="step-block_one-text">Share your project requirements with us. We analyze your needs, site conditions, and objectives to create a tailored engineering solution.</div>
                    <div className="step-block_one-content">
                      <div className="image">
                        <Image src="/assets/images/resource/step-1.png" alt="" width={400} height={300} unoptimized />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column col-lg-6 col-md-12 col-sm-12">


                <div className="step-block_one">
                  <div className="step-block_one-inner">
                    <div className="step-block_one-steps">step 02</div>
                    <h5 className="step-block_one-title">Design & Engineering</h5>
                    <div className="step-block_one-text">Our expert team creates detailed designs using industry-leading tools like HelioScope, PVSyst, AutoCAD, and Revit. Every detail is precision-engineered.</div>
                    <div className="step-block_one-content">
                      <div className="image">
                        <Image src="/assets/images/resource/step-2.png" alt="" width={400} height={300} unoptimized />
                      </div>
                    </div>
                  </div>
                </div>


                <div className="step-block_one">
                  <div className="step-block_one-inner">
                    <div className="step-block_one-steps">step 03</div>
                    <h5 className="step-block_one-title">Delivery & Support</h5>
                    <div className="step-block_one-text">Receive permit-ready drawings, detailed reports, and ongoing support. We ensure your project meets all regulatory requirements and industry standards.</div>
                    <div className="step-block_one-content">
                      <div className="image">
                        <Image src="/assets/images/resource/step-3.png" alt="" width={400} height={300} unoptimized />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="price-one">
        <div className="price-one_bg" style={{ backgroundImage: "url('/assets/images/background/price-bg.png')" }}></div>
        <div className="auto-container">
          <div className="inner-container">

            <div className="sec-title title-anim centered">
              <div className="sec-title_title">Our Solutions</div>
              <h2 className="sec-title_heading">Explore Our <span>Services</span></h2>
            </div>
            <div className="pricing-tabs tabs-box">


              <div className="buttons-outer">
                <ul className="tab-buttons clearfix">
                  <li data-tab="#prod-energy" className="tab-btn active-btn">Energy</li>
                  <li data-tab="#prod-telcom" className="tab-btn">Telecommunication</li>
                  <li data-tab="#prod-data-center" className="tab-btn">Data Center</li>
                </ul>
              </div>

              <div className="tabs-content">


                <div className="tab active-tab" id="prod-energy">
                  <div className="content">
                    <div className="row clearfix">


                      <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
                        <div className="price-block_one-inner">
                          <div className="price-block_one-title">Solar PV Design</div>
                          <div className="price-block_one-subtitle">Complete photovoltaic system engineering for rooftop, ground-mount, and carport installations. Grid-tied and off-grid solutions optimized for maximum energy yield.
                          </div>
                          <div className="price-block_one-content">

                            <ul className="price-block_one-list">
                              <li><i className="fa-solid fa-check fa-fw"></i>Module layout & string design</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Single-line diagrams (SLD)</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>PVSyst simulation & yield analysis</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Shade analysis & optimization</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Utility interconnection design</li>
                            </ul>
                          </div>
                        </div>
                      </div>


                      <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
                        <div className="price-block_one-inner">
                          <div className="price-block_one-title">Battery Energy Storage</div>
                          <div className="price-block_one-subtitle">Advanced BESS and hybrid system design for energy independence, peak shaving, and grid stabilization.</div>
                          <div className="price-block_one-content">

                            <ul className="price-block_one-list">
                              <li><i className="fa-solid fa-check fa-fw"></i>Battery sizing & selection</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Hybrid solar + storage systems</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>SCADA integration design</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Energy management systems</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Homer Pro modeling</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
                        <div className="price-block_one-inner">
                          <div className="price-block_one-title">Electrical Systems</div>
                          <div className="price-block_one-subtitle">Comprehensive electrical engineering from load analysis to substation design and permitting documentation.</div>
                          <div className="price-block_one-content">

                            <ul className="price-block_one-list">
                              <li><i className="fa-solid fa-check fa-fw"></i>Load calculation & analysis</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>33kV substation design</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Protection & metering</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Grounding & lightning protection</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Permit-ready drawings</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab" id="prod-telcom">
                  <div className="content">
                    <div className="row clearfix">

                      <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
                        <div className="price-block_one-inner">
                          <div className="price-block_one-title">CAD Drafting</div>
                          <div className="price-block_one-subtitle">Professional AutoCAD services for telecommunication infrastructure, tower design, and site planning.</div>
                          <div className="price-block_one-content">

                            <ul className="price-block_one-list">
                              <li><i className="fa-solid fa-check fa-fw"></i>Tower design & layout</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Site plan development</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Equipment placement drawings</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>As-built documentation</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>DWG deliverables</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
                        <div className="price-block_one-inner">
                          <div className="price-block_one-title">BIM Services</div>
                          <div className="price-block_one-subtitle">Building Information Modeling for telecom facilities, enabling 3D visualization and clash detection.</div>
                          <div className="price-block_one-content">

                            <ul className="price-block_one-list">
                              <li><i className="fa-solid fa-check fa-fw"></i>3D BIM modeling</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Clash detection analysis</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>4D construction sequencing</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Facility management integration</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Revit & Navisworks</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
                        <div className="price-block_one-inner">
                          <div className="price-block_one-title">Network Design</div>
                          <div className="price-block_one-subtitle">Complete network infrastructure design from fiber optics to equipment rooms and distribution systems.</div>
                          <div className="price-block_one-content">

                            <ul className="price-block_one-list">
                              <li><i className="fa-solid fa-check fa-fw"></i>Fiber optic network design</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Equipment room layouts</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Cable pathway design</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Network topology planning</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Permit documentation</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab" id="prod-data-center">
                  <div className="content">
                    <div className="row clearfix">

                      <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
                        <div className="price-block_one-inner">
                          <div className="price-block_one-title">Power Infrastructure</div>
                          <div className="price-block_one-subtitle">Complete power distribution design for data centers including UPS systems, generators, and redundancy planning.</div>
                          <div className="price-block_one-content">

                            <ul className="price-block_one-list">
                              <li><i className="fa-solid fa-check fa-fw"></i>Power distribution design</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>UPS & generator systems</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Redundancy planning (N+1, 2N)</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Load balancing optimization</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Energy efficiency analysis</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
                        <div className="price-block_one-inner">
                          <div className="price-block_one-title">Cooling Systems</div>
                          <div className="price-block_one-subtitle">Advanced cooling solutions for optimal thermal management and energy efficiency in data center environments.</div>
                          <div className="price-block_one-content">

                            <ul className="price-block_one-list">
                              <li><i className="fa-solid fa-check fa-fw"></i>HVAC system design</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Hot/cold aisle containment</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Liquid cooling solutions</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>PUE optimization</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>CFD thermal analysis</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
                        <div className="price-block_one-inner">
                          <div className="price-block_one-title">Infrastructure Design</div>
                          <div className="price-block_one-subtitle">Complete data center infrastructure including raised floors, cable management, and fire suppression systems.</div>
                          <div className="price-block_one-content">

                            <ul className="price-block_one-list">
                              <li><i className="fa-solid fa-check fa-fw"></i>Raised floor systems</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Cable tray & pathway design</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Fire suppression systems</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>Security & access control</li>
                              <li><i className="fa-solid fa-check fa-fw"></i>BMS integration</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="faq-one">
        <div className="faq-one_bg" style={{ backgroundImage: "url('/assets/images/background/faq-bg.png')" }}></div>
        <div className="faq-one_icon" style={{ backgroundImage: "url('/assets/images/icons/step.png')" }}></div>
        <div className="auto-container">
          <div className="row clearfix">

            <div className="faq-one_title-column col-lg-5 col-md-12 col-sm-12">
              <div className="faq-one_title-outer">

                <div className="sec-title title-anim">
                  <div className="sec-title_title">FAQ</div>
                  <h2 className="sec-title_heading">Frequently Asked <span>Questions</span></h2>
                  <div className="sec-title_text">Have questions about our engineering services? Find answers to common queries below or contact us for personalized support.</div>
                </div>
                <div className="faq-one_button">
                  <a href="/contact" className="template-btn btn-style-one">
                    <span className="btn-wrap">
                      <span className="text-one">Contact now</span>
                      <span className="text-two">Contact now</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>



            <div className="faq-one_accordian-column col-lg-7 col-md-12 col-sm-12">
              <div className="faq-one_accordian-outer">


                <ul className="accordion-box_two">


                  <li className="accordion block">
                    <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa-solid fa-plus fa-fw"></span></div>What solar design services do you offer?</div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">We provide comprehensive solar design services including PV system design, permit-ready drawings, single-line diagrams, shade analysis, and performance simulations using industry-leading tools like HelioScope, PVSyst, Aurora, and SolarGraf.</div>
                      </div>
                    </div>
                  </li>


                  <li className="accordion block">
                    <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa-solid fa-plus fa-fw"></span></div>What is the typical turnaround time for projects?</div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">Turnaround time varies by project complexity. Residential solar designs typically take 2-3 business days, while commercial and utility-scale projects may require 1-2 weeks. We also offer expedited services for urgent requirements.</div>
                      </div>
                    </div>
                  </li>


                  <li className="accordion block">
                    <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa-solid fa-plus fa-fw"></span></div>Do you provide permit-ready drawings?</div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">Yes, all our solar and electrical designs are permit-ready. We ensure compliance with local AHJ requirements, NEC codes, and utility standards. Our drawings include all necessary details for smooth permit approval.</div>
                      </div>
                    </div>
                  </li>


                  <li className="accordion block">
                    <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa-solid fa-plus fa-fw"></span></div>What tools and software do you use?</div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">We use industry-standard tools including AutoCAD, Revit, HelioScope, PVSyst, Aurora Solar, SolarGraf, ARKA 360, Homer Pro for BESS, RanPlan and ibWave for telecom, and various BIM platforms for comprehensive engineering solutions.</div>
                      </div>
                    </div>
                  </li>


                  <li className="accordion block">
                    <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa-solid fa-plus fa-fw"></span></div>Do you work with clients internationally?</div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">Yes, we serve clients globally with expertise in North American, European, and international standards. Our team is experienced with various regulatory requirements and can adapt designs to meet local codes and specifications.</div>
                      </div>
                    </div>
                  </li>

                </ul>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="social-one">
        <div className="social-one_bg-shadow" style={{ backgroundImage: "url('/assets/images/background/social-bg.png')" }}></div>
        <div className="auto-container">

          <div className="sec-title centered">
            <div className="sec-title_title">Tools & Technologies</div>
            <h2 className="sec-title_heading">Industry-Leading Software <br /> <span>We Work With</span></h2>
          </div>
          <div className="social-one_logo">
            <span><Image src="/assets/images/icons/social-logo.png" alt="" width={100} height={100} unoptimized /></span>
          </div>
          <div className="inner-container">
            <div className="social-one_bg" style={{ backgroundImage: "url('/assets/images/background/social-one_pattern.png')" }}></div>
            <div className="social-one_bg-two" style={{ backgroundImage: "url('/assets/images/background/social-one_pattern-two.png')" }}></div>

            <div className="social-box_one">
              <div className="animation_mode">

                <div className="social_icon-box">
                  <a href="#">
                    <Image src="/assets/images/icons/social-1.png" alt="" width={100} height={50} unoptimized />
                  </a>
                </div>

                <div className="social_icon-box">
                  <a href="#">
                    <Image src="/assets/images/icons/social-2.png" alt="" width={100} height={50} unoptimized />
                  </a>
                </div>

                <div className="social_icon-box">
                  <a href="#">
                    <Image src="/assets/images/icons/social-3.png" alt="" width={100} height={50} unoptimized />
                  </a>
                </div>

                <div className="social_icon-box">
                  <a href="#">
                    <Image src="/assets/images/icons/social-4.png" alt="" width={100} height={50} unoptimized />
                  </a>
                </div>

                <div className="social_icon-box">
                  <a href="#">
                    <Image src="/assets/images/icons/social-5.png" alt="" width={100} height={50} unoptimized />
                  </a>
                </div>

                <div className="social_icon-box">
                  <a href="#">
                    <Image src="/assets/images/icons/social-6.png" alt="" width={100} height={50} unoptimized />
                  </a>
                </div>

                <div className="social_icon-box">
                  <a href="#">
                    <Image src="/assets/images/icons/social-7.png" alt="" width={100} height={50} unoptimized />
                  </a>
                </div>
              </div>
            </div>

            <div className="social-box">
              <div className="animation_mode_two">

                <div className="social_icon-box">
                  <a href="#">
                    <Image src="/assets/images/icons/social-8.png" alt="" width={100} height={50} unoptimized />
                  </a>
                </div>

                <div className="social_icon-box">
                  <a href="#">
                    <Image src="/assets/images/icons/social-9.png" alt="" width={100} height={50} unoptimized />
                  </a>
                </div>

                <div className="social_icon-box">
                  <a href="#">
                    <Image src="/assets/images/icons/social-10.png" alt="" width={100} height={50} unoptimized />
                  </a>
                </div>

                <div className="social_icon-box">
                  <a href="#">
                    <Image src="/assets/images/icons/social-11.png" alt="" width={100} height={50} unoptimized />
                  </a>
                </div>

                <div className="social_icon-box">
                  <a href="#">
                    <Image src="/assets/images/icons/social-12.png" alt="" width={100} height={50} unoptimized />
                  </a>
                </div>

                <div className="social_icon-box">
                  <a href="#">
                    <Image src="/assets/images/icons/social-13.png" alt="" width={100} height={50} unoptimized />
                  </a>
                </div>

                <div className="social_icon-box">
                  <a href="#">
                    <Image src="/assets/images/icons/social-14.png" alt="" width={100} height={50} unoptimized />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="news-one">
        <div className="news-one_shadow" style={{ backgroundImage: "url('/assets/images/background/news-shadow-1.png')" }}></div>
        <div className="news-one_shadow-two" style={{ backgroundImage: "url('/assets/images/background/news-shadow-2.png')" }}></div>
        <div className="auto-container">

          <div className="sec-title title-anim centered">
            <div className="sec-title_title">Our Expertise</div>
            <h2 className="sec-title_heading">Engineering <span>Insights</span></h2>
          </div>
          <div className="three-item_carousel swiper-container">
            <div className="swiper-wrapper">


              <div className="swiper-slide">

                <div className="news-block_one">
                  <div className="news-block_one-inner">
                    <div className="news-block_one-image">
                      <a href="/services"><Image src="/assets/images/resource/news-1.jpg" alt="" width={400} height={300} unoptimized /></a>
                    </div>
                    <div className="news-block_one-content">
                      <h5 className="news-block_one-title"><a href="/services">Solar PV System Design Best Practices</a></h5>
                      <div className="news-block_one-text">Maximize energy yield with optimized module layouts, proper string sizing, and shade analysis. Our designs ensure peak performance for decades.</div>
                      <div className="news-block_one-button">
                        <a href="/services" className="template-btn btn-style-two">
                          <span className="btn-wrap">
                            <span className="text-one">Read more</span>
                            <span className="text-two">Read more</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="swiper-slide">

                <div className="news-block_one">
                  <div className="news-block_one-inner">
                    <div className="news-block_one-image">
                      <a href="/services"><Image src="/assets/images/resource/news-2.jpg" alt="" width={400} height={300} unoptimized /></a>
                    </div>
                    <div className="news-block_one-content">
                      <h5 className="news-block_one-title"><a href="/services">Battery Storage Integration for Modern Grids</a></h5>
                      <div className="news-block_one-text">BESS solutions for peak shaving, load shifting, and grid stabilization. Homer Pro modeling ensures optimal battery sizing and ROI.</div>
                      <div className="news-block_one-button">
                        <a href="/services" className="template-btn btn-style-two">
                          <span className="btn-wrap">
                            <span className="text-one">Read more</span>
                            <span className="text-two">Read more</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="swiper-slide">

                <div className="news-block_one">
                  <div className="news-block_one-inner">
                    <div className="news-block_one-image">
                      <a href="/services"><Image src="/assets/images/resource/news-3.jpg" alt="" width={400} height={300} unoptimized /></a>
                    </div>
                    <div className="news-block_one-content">
                      <h5 className="news-block_one-title"><a href="/services">5G Network Infrastructure Design</a></h5>
                      <div className="news-block_one-text">Next-generation telecom engineering with RanPlan and ibWave for optimal coverage, capacity, and performance in urban and rural deployments.</div>
                      <div className="news-block_one-button">
                        <a href="/services" className="template-btn btn-style-two">
                          <span className="btn-wrap">
                            <span className="text-one">Read more</span>
                            <span className="text-two">Read more</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="three-item_carousel-pagination"></div>
          </div>
        </div>
      </section>

      <section className="cta-one">
        <div className="auto-container">
          <div className="inner-container">
            <div className="cta-icon_one" style={{ backgroundImage: "url('/assets/images/icons/cta-icon-1.png')" }}></div>
            <div className="cta-icon_two" style={{ backgroundImage: "url('/assets/images/icons/cta-icon-2.png')" }}></div>
            <div className="cta-one_card">
              <Image src="/assets/images/icons/cta-card.png" alt="" width={150} height={150} unoptimized />
            </div>
            <div className="row clearfix">

              <div className="cta-one_title-column col-lg-6 col-md-12 col-sm-12">
                <div className="cta-one_title-outer">
                  <h2 className="cta-one_title">Ready to Start Your <span>Next Project?</span></h2>
                  <div className="cta-one_button">
                    <a href="/contact" className="template-btn btn-style-three">
                      <span className="btn-wrap">
                        <span className="text-one">Get a Free Quote</span>
                        <span className="text-two">Get a Free Quote</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="cta-one_image-column col-lg-6 col-md-12 col-sm-12">
                <div className="cta-one_image-outer">
                  <div className="cta-one_cards">
                    <Image src="/assets/images/icons/cta-cards.png" alt="" width={200} height={150} unoptimized />
                  </div>
                  <div className="image">
                    <Image src="/assets/images/resource/cta.png" alt="" width={600} height={500} unoptimized />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
