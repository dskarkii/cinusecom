/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const Service = () => {
  return (
    <>

      <section className="page-title">
        <div className="page-title-icon" style={{ backgroundImage: "url('assets/images/icons/page-title_icon-1.png')" }}></div>
        <div className="page-title-icon-two" style={{ backgroundImage: "url('assets/images/icons/page-title_icon-2.png')" }}></div>
        <div className="page-title-shadow" style={{ backgroundImage: "url('assets/images/background/page-title-1.png')" }}></div>
        <div className="page-title-shadow_two" style={{ backgroundImage: "url('assets/images/background/page-title-2.png')" }}></div>
        <div className="auto-container">
          <h2>Our Services</h2>
          <ul className="bread-crumb clearfix">
            <li><Link href="/">Home</Link></li>
            <li>Services</li>
          </ul>
        </div>
      </section>

      {/* Tools Section */}
      <section style={{ padding: '80px 0 40px', backgroundColor: '#1c1c1c', marginTop: '40px' }}>
        <div className="auto-container">
          <div className="sec-title centered" style={{ marginBottom: '40px' }}>
            <div className="sec-title_title">Free Tools</div>
            <h2 className="sec-title_heading">Solar <span>Tools</span></h2>
            <div className="sec-title_text">Use our free tools to analyze your solar investment and get started with permit applications.</div>
          </div>
          <div className="row clearfix" style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>

            {/* ROI Calculator Tool Box */}
            <div className="col-lg-5 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
              <Link href="/calculator" style={{ textDecoration: 'none' }}>
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent',
                  cursor: 'pointer',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="tool-box"
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '150px',
                    height: '150px',
                    background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                    borderRadius: '0 0 0 100%',
                    opacity: 0.1
                  }}></div>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow: '0 8px 20px rgba(249, 115, 22, 0.3)'
                  }}>
                    <i className="fa-solid fa-calculator" style={{ fontSize: '36px', color: 'white' }}></i>
                  </div>
                  <h4 style={{ fontSize: '24px', fontWeight: '700', color: '#1f2937', marginBottom: '12px' }}>
                    Solar ROI Calculator
                  </h4>
                  <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.6', marginBottom: '20px' }}>
                    Calculate your solar investment returns with our comprehensive ROI tool. Get NPV, IRR, payback period, and LCOE analysis instantly.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f97316', fontWeight: '600' }}>
                    <span>Try Calculator</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </Link>
            </div>

            {/* Permit Design Tool Box */}
            <div className="col-lg-5 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
              <Link href="/permit-design" style={{ textDecoration: 'none' }}>
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent',
                  cursor: 'pointer',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="tool-box"
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '150px',
                    height: '150px',
                    background: 'linear-gradient(135deg, #6b21a8 0%, #9333ea 100%)',
                    borderRadius: '0 0 0 100%',
                    opacity: 0.1
                  }}></div>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #6b21a8 0%, #9333ea 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow: '0 8px 20px rgba(107, 33, 168, 0.3)'
                  }}>
                    <i className="fa-solid fa-file-contract" style={{ fontSize: '36px', color: 'white' }}></i>
                  </div>
                  <h4 style={{ fontSize: '24px', fontWeight: '700', color: '#1f2937', marginBottom: '12px' }}>
                    Solar Permit Design
                  </h4>
                  <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.6', marginBottom: '20px' }}>
                    Start your solar permit application in a few easy steps. Submit your project details and our team will create permit-ready designs.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b21a8', fontWeight: '600' }}>
                    <span>Start Application</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>

      <section className="services-one style-two">
        <div className="auto-container">
          <div className="sec-title centered">
            <div className="sec-title_title">What We Offer</div>
            <h2 className="sec-title_heading">Our Service <span>Pillars</span></h2>
            <div className="sec-title_text">We offer a wide range of services to help you achieve your goals. Here&apos;s an overview of our engineering solutions and service pillars.</div>
          </div>
          <div className="row clearfix">

            <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_one-icon">
                  <i className="fa-solid fa-drafting-compass fa-fw"></i>
                </div>
                <h5 className="service-block_one-heading"><Link href="/contact">AutoCAD Drafting</Link></h5>
                <div className="service-block_one-text">Our experts create precise 2D and 3D designs for architectural plans, engineering projects, and technical drawings using industry-leading <span>AutoCAD software</span> ensuring accuracy and efficiency.</div>
                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                  <div className="service-block_one-number">01</div>
                  <Link className="service-block_one-join" href="/contact">Get Quote <i className="fa-solid fa-plus fa-fw"></i></Link>
                </div>
              </div>
            </div>


            <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_one-inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_one-icon">
                  <i className="fa-solid fa-solar-panel fa-fw"></i>
                </div>
                <h5 className="service-block_one-heading"><Link href="/contact">Solar Design & Permit</Link></h5>
                <div className="service-block_one-text">Transform your solar projects with comprehensive design and engineering services. We utilize <span>HelioScope, PVSyst, Aurora</span> and ARKA 360 for precise, permit-ready solar designs.</div>
                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                  <div className="service-block_one-number">02</div>
                  <Link className="service-block_one-join" href="/contact">Get Quote <i className="fa-solid fa-plus fa-fw"></i></Link>
                </div>
              </div>
            </div>


            <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_one-inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_one-icon">
                  <i className="fa-solid fa-cogs fa-fw"></i>
                </div>
                <h5 className="service-block_one-heading"><Link href="/contact">Intelligence Design Engineering</Link></h5>
                <div className="service-block_one-text">We provide cutting-edge design engineering services using <span>advanced AI and machine learning</span>. Our team optimizes your engineering processes with innovative solutions.</div>
                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                  <div className="service-block_one-number">03</div>
                  <Link className="service-block_one-join" href="/contact">Get Quote <i className="fa-solid fa-plus fa-fw"></i></Link>
                </div>
              </div>
            </div>


            <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_one-icon">
                  <i className="fa-solid fa-robot fa-fw"></i>
                </div>
                <h5 className="service-block_one-heading"><Link href="/contact">Automation Solutions</Link></h5>
                <div className="service-block_one-text">Streamline your business operations with our custom automation services. We automate <span>workflows, testing, and data processes</span>, improving productivity and reducing costs.</div>
                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                  <div className="service-block_one-number">04</div>
                  <Link className="service-block_one-join" href="/contact">Get Quote <i className="fa-solid fa-plus fa-fw"></i></Link>
                </div>
              </div>
            </div>


            <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_one-inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_one-icon">
                  <i className="fa-solid fa-broadcast-tower fa-fw"></i>
                </div>
                <h5 className="service-block_one-heading"><Link href="/contact">Telecommunication</Link></h5>
                <div className="service-block_one-text">Expertly design and implement communication networks with our telecom engineering services. We ensure <span>reliable connectivity</span> for rooftops, towers, antennas, and mounts.</div>
                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                  <div className="service-block_one-number">05</div>
                  <Link className="service-block_one-join" href="/contact">Get Quote <i className="fa-solid fa-plus fa-fw"></i></Link>
                </div>
              </div>
            </div>

            <div className="service-block_two col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_two-inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_two-sideicon" style={{ backgroundImage: "url('assets/images/icons/service-1.png')" }}></div>
                <div className="service-block_two-icon">
                  <img src="assets/images/icons/service.png" alt="" />
                </div>
                <h5 className="service-block_two-heading"><Link href="/contact">Custom Solutions</Link></h5>
                <div className="service-block_two-text">Need something specific? We tailor solutions to your unique requirements.</div>
                <div className="service-block_two-button">
                  <Link href="/contact" className="template-btn btn-style-one">
                    <span className="btn-wrap">
                      <span className="text-one">Contact Us</span>
                      <span className="text-two">Contact Us</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="video-one">
        <div className="video-one_image">
          <img src="assets/images/background/video-bg.jpg" alt="Cinuse Engineering Services" />
          <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video video-one_play"><span className="fa-solid fa-play fa-fw"><i className="ripple"></i></span></a>
        </div>
      </section>

      <section className="choose-three">
        <div className="auto-container">
          <div className="inner-container">
            <div className="row clearfix">

              <div className="counter-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="counter-block_one-icon fa-solid fa-users fa-fw"></div>
                  <div className="counter-block_one-count"><span className="odometer" data-count="500"></span><i>+</i></div>
                  <div className="counter-block_one-text">Happy clients worldwide who trust Cinuse for their engineering needs</div>
                </div>
              </div>

              <div className="counter-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                  <div className="counter-block_one-icon fa-solid fa-project-diagram fa-fw"></div>
                  <div className="counter-block_one-count"><span className="odometer" data-count="1000"></span><i>+</i></div>
                  <div className="counter-block_one-text">Projects completed successfully across multiple industries and regions</div>
                </div>
              </div>

              <div className="counter-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="counter-block_one-icon fa-solid fa-star fa-fw"></div>
                  <div className="counter-block_one-count"><span className="odometer" data-count="5"></span><i>.0</i></div>
                  <div className="counter-block_one-text">Average client rating on Fiverr demonstrating our commitment to quality</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="faq-one style-three">
        <div className="auto-container">
          <div className="row clearfix">


            <div className="faq-one_title-column col-lg-5 col-md-12 col-sm-12">
              <div className="faq-one_title-outer">

                <div className="sec-title">
                  <div className="sec-title_title">FAQ</div>
                  <h2 className="sec-title_heading">Frequently Asked <span>Questions</span></h2>
                  <div className="sec-title_text">Have questions about our services? Here are answers to the most common inquiries we receive.</div>
                </div>
                <div className="faq-one_button">
                  <Link href="/contact" className="template-btn btn-style-one">
                    <span className="btn-wrap">
                      <span className="text-one">Contact Now</span>
                      <span className="text-two">Contact Now</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="faq-one_accordian-column col-lg-7 col-md-12 col-sm-12">
              <div className="faq-one_accordian-outer">

                <ul className="accordion-box_two">

                  <li className="accordion block">
                    <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa-solid fa-plus fa-fw"></span></div>What solar design software do you use?</div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">We use industry-leading tools including HelioScope, PVSyst, Aurora, Solargraf, and ARKA 360 for precise solar designs, performance simulations, and permit-ready documentation.</div>
                      </div>
                    </div>
                  </li>

                  <li className="accordion block">
                    <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa-solid fa-plus fa-fw"></span></div>Do you provide permit-ready drawings?</div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">Yes, all our solar and engineering designs are created to meet local permitting requirements. We ensure compliance with AHJ standards and provide complete permit packages.</div>
                      </div>
                    </div>
                  </li>

                  <li className="accordion block">
                    <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa-solid fa-plus fa-fw"></span></div>What regions do you serve?</div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">We serve clients globally with a strong focus on North America. Our team understands diverse market requirements and international engineering standards.</div>
                      </div>
                    </div>
                  </li>

                  <li className="accordion block">
                    <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa-solid fa-plus fa-fw"></span></div>What CAD services do you offer?</div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">We provide comprehensive AutoCAD services including 2D drafting, 3D modeling, architectural plans, engineering drawings, and technical documentation for various industries.</div>
                      </div>
                    </div>
                  </li>

                  <li className="accordion block">
                    <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa-solid fa-plus fa-fw"></span></div>How can I get started with a project?</div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">Simply contact us through our contact form or email. We&apos;ll discuss your requirements, provide a quote, and get started on your project right away. We pride ourselves on quick turnaround times.</div>
                      </div>
                    </div>
                  </li>

                </ul>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="cta-one style-two">
        <div className="cta-one_shadow" style={{ backgroundImage: "url('assets/images/background/cta-shadow.png')" }}></div>
        <div className="auto-container">
          <div className="inner-container">
            <div className="cta-icon_one" style={{ backgroundImage: "url('assets/images/icons/cta-icon-1.png')" }}></div>
            <div className="cta-icon_two" style={{ backgroundImage: "url('assets/images/icons/cta-icon-2.png')" }}></div>
            <div className="cta-one_card">
              <img src="assets/images/icons/cta-card.png" alt="" />
            </div>
            <div className="row clearfix">

              <div className="cta-one_title-column col-lg-6 col-md-12 col-sm-12">
                <div className="cta-one_title-outer">
                  <h2 className="cta-one_title">Ready to Start Your <span>Project?</span></h2>
                  <div className="cta-one_button">
                    <Link href="/contact" className="template-btn btn-style-three">
                      <span className="btn-wrap">
                        <span className="text-one">Get Free Quote</span>
                        <span className="text-two">Get Free Quote</span>
                      </span>
                    </Link>
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

export default Service
