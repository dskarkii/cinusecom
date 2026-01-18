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
                      <div className="slider-one_title"><i><Image src="/assets/images/main-slider/hand.png" alt="" width={30} height={30} unoptimized /></i> AI makes content fast & easy</div>
                      <h1 className="slider-one_heading">Engineering the <span>Future</span> of Infrastructure</h1>
                      <div className="slider-one_text">Advanced design solutions for solar energy, telecommunications, and data centers. Built on precision, powered by innovation, designed for decades.</div>
                      <div className="slider-one_button d-flex align-items-center flex-wrap">
                        <a href="about.html" className="template-btn btn-style-one">
                          <span className="btn-wrap">
                            <span className="text-one">Get started </span>
                            <span className="text-two">Get started </span>
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
                        <h5 className="slider-one_author-name">Sara Ven</h5>
                        <div className="slider-one_author-text">Social media manger</div>
                      </div>

                      <div className="slider-one_percentage">
                        <i className="fa-solid fa-arrow-up fa-fw"></i>
                        <div className="slider-one_percent">100<sub>%</sub></div>
                        <div className="slider-one_percentage-text">efficiency</div>
                      </div>
                      <div className="slider-one_graph">
                        <div className="slider-one_graph-title">Annual goal <span>$98,541 <sup><i className="fa-solid fa-caret-up fa-fw"></i>110%</sup></span></div>
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
                      <div className="slider-one_title"><i><Image src="/assets/images/main-slider/hand.png" alt="" width={30} height={30} unoptimized /></i> AI makes content fast & easy</div>
                      <h1 className="slider-one_heading">Crafting digital brilliance <span>AI-Driven</span> copywriting</h1>
                      <div className="slider-one_text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</div>
                      <div className="slider-one_button d-flex align-items-center flex-wrap">
                        <a href="about.html" className="template-btn btn-style-one">
                          <span className="btn-wrap">
                            <span className="text-one">Get started free</span>
                            <span className="text-two">Get started free</span>
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
                        <h5 className="slider-one_author-name">Sara Ven</h5>
                        <div className="slider-one_author-text">Social media manger</div>
                      </div>

                      <div className="slider-one_percentage">
                        <i className="fa-solid fa-arrow-up fa-fw"></i>
                        <div className="slider-one_percent">90<sub>%</sub></div>
                        <div className="slider-one_percentage-text">efficiency</div>
                      </div>
                      <div className="slider-one_graph">
                        <div className="slider-one_graph-title">Annual goal <span>$98,541 <sup><i className="fa-solid fa-caret-up fa-fw"></i>110%</sup></span></div>
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
                      <div className="slider-one_title"><i><Image src="/assets/images/main-slider/hand.png" alt="" width={30} height={30} unoptimized /></i> AI makes content fast & easy</div>
                      <h1 className="slider-one_heading">Crafting digital brilliance <span>AI-Driven</span> copywriting</h1>
                      <div className="slider-one_text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</div>
                      <div className="slider-one_button d-flex align-items-center flex-wrap">
                        <a href="about.html" className="template-btn btn-style-one">
                          <span className="btn-wrap">
                            <span className="text-one">Get started free</span>
                            <span className="text-two">Get started free</span>
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
                        <h5 className="slider-one_author-name">Sara Ven</h5>
                        <div className="slider-one_author-text">Social media manger</div>
                      </div>

                      <div className="slider-one_percentage">
                        <i className="fa-solid fa-arrow-up fa-fw"></i>
                        <div className="slider-one_percent">90<sub>%</sub></div>
                        <div className="slider-one_percentage-text">efficiency</div>
                      </div>
                      <div className="slider-one_graph">
                        <div className="slider-one_graph-title">Annual goal <span>$98,541 <sup><i className="fa-solid fa-caret-up fa-fw"></i>110%</sup></span></div>
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
            <div className="sec-title_title">Our Service</div>
            <h2 className="sec-title_heading">Engineering Excellence <br /> <span>Meets Automation</span></h2>
          </div>
          <div className="row clearfix">

            <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_one-icon">
                  <i className="icon-speaker1"></i>
                </div>
                <h5 className="service-block_one-heading"><a href="service-detail.html">SOLAR DESIGN</a></h5>
                <div className="service-block_one-text">SolarGraf, Helioscope &amp; PVSyst integration for bankable, precision-engineered solar systems</div>
                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                  <div className="service-block_one-number">01</div>
                  <a className="service-block_one-join" href="service-detail.html">Explore+ <i className="fa-solid fa-plus fa-fw"></i></a>
                </div>
              </div>
            </div>

            <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_one-inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_one-icon">
                  <i className="icon-marketing"></i>
                </div>
                <h5 className="service-block_one-heading"><a href="service-detail.html">SOLAR BUSINESS</a></h5>
                <div className="service-block_one-text">Strategic consultation for growth, optimization  <span></span>market dominance</div>
                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                  <div className="service-block_one-number">02</div>
                  <a className="service-block_one-join" href="service-detail.html">Explore+ <i className="fa-solid fa-plus fa-fw"></i></a>
                </div>
              </div>
            </div>

            <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_one-inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_one-icon">
                  <i className="icon-users"></i>
                </div>
                <h5 className="service-block_one-heading"><a href="service-detail.html">ROI ANALYSIS</a></h5>
                <div className="service-block_one-text">Bankable financial modeling: NPV, IRR, payback &amp; cash flow projections</div>
                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                  <div className="service-block_one-number">03</div>
                  <a className="service-block_one-join" href="service-detail.html">Explore+ <i className="fa-solid fa-plus fa-fw"></i></a>
                </div>
              </div>
            </div>

            <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_one-icon">
                  <i className="icon-copyright"></i>
                </div>
                <h5 className="service-block_one-heading"><a href="service-detail.html">TELECOM</a></h5>
                <div className="service-block_one-text">RanPlan &amp; ibWave for 5G/6G network design &amp; optimization</div>
                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                  <div className="service-block_one-number">04</div>
                  <a className="service-block_one-join" href="service-detail.html">Explore+ <i className="fa-solid fa-plus fa-fw"></i></a>
                </div>
              </div>
            </div>

            <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_one-inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_one-icon">
                  <i className="icon-tag"></i>
                </div>
                <h5 className="service-block_one-heading"><a href="service-detail.html">SCAN TO BIM</a></h5>
                <div className="service-block_one-text">Point cloud &amp; imagery conversion to precise BIM models</div>
                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                  <div className="service-block_one-number">05</div>
                  <a className="service-block_one-join" href="service-detail.html">Explore+ <i className="fa-solid fa-plus fa-fw"></i></a>
                </div>
              </div>
            </div>

            <div className="service-block_two col-lg-4 col-md-6 col-sm-12">
              <div className="service-block_two-inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_two-sideicon" style={{ backgroundImage: "url('/assets/images/icons/service-1.png')" }}></div>
                <div className="service-block_two-icon">
                  <Image src="/assets/images/icons/service.png" alt="" width={80} height={80} unoptimized />
                </div>
                <h5 className="service-block_two-heading"><a href="service-detail.html">ADVANCE AUTOMATION</a></h5>
                <div className="service-block_two-text">CAD automation, BESS design &amp; end-to-end workflow orchestration</div>
                <div className="service-block_two-button">
                  <a href="service.html" className="template-btn btn-style-one">
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
                  <h2 className="sec-title_heading">Crafting of your digital <span>narrative discover</span> our journey</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. <span>Pellentesque sit amet</span> sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis tellus. Nullam quis mattis ligula consectetur.</p>
                <div className="about-one_options d-flex align-items-center flex-wrap">
                  <a href="about.html" className="template-btn btn-style-one">
                    <span className="btn-wrap">
                      <span className="text-one">Know more</span>
                      <span className="text-two">Know more</span>
                    </span>
                  </a>
                  <div className="about-one_rating-box d-flex align-items-center flex-wrap">
                    4.7
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
              <div className="sec-title_title">why chose us</div>
              <h2 className="sec-title_heading">Reason to chose our <br /> <span>platform</span></h2>
            </div>
            <div className="row clearfix">

              <div className="counter-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="counter-block_one-icon fa-brands fa-instagram fa-fw"></div>
                  <div className="counter-block_one-count"><span className="odometer" data-count="8000"></span><i>+</i></div>
                  <div className="counter-block_one-text">More than 8,000 customers have experimented with Kafkai</div>
                </div>
              </div>


              <div className="counter-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                  <div className="counter-block_one-icon fa-brands fa-instagram fa-fw"></div>
                  <div className="counter-block_one-count"><span className="odometer" data-count="500000"></span><i>+</i></div>
                  <div className="counter-block_one-text">More than 8,000 customers have experimented with Kafkai</div>
                </div>
              </div>


              <div className="counter-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="counter-block_one-icon fa-brands fa-instagram fa-fw"></div>
                  <div className="counter-block_one-count"><span className="odometer" data-count="200000"></span><i>+</i></div>
                  <div className="counter-block_one-text">More than 8,000 customers have experimented with Kafkai</div>
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
                  <div className="sec-title_title">AI ANSWERS</div>
                  <h2 className="sec-title_heading">Gain <span>full control</span> of your information docs and many more</h2>
                </div>
                <ul className="answer-one_list">
                  <li><i className="fa-solid fa-check fa-fw"></i>Create a personalized knowledge base on your own Cinuse library</li>
                  <li><i className="fa-solid fa-check fa-fw"></i>Use your trusted sources to find the answers you need</li>
                  <li><i className="fa-solid fa-check fa-fw"></i>Stay in the know with AI Q&A and semantic search</li>
                </ul>
                <div className="answer-one_button">
                  <a href="about.html" className="template-btn btn-style-one">
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
              <h2 className="sec-title_heading">What our respectable <br /> <span>clients says</span></h2>
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
                      <div className="testimonial-block_one-text">very nice to work with, I will definitely recommand him and I am looking forward to work with him again.</div>
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
                      <div className="testimonial-block_one-text">everything i needed</div>
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
              <div className="sec-title_title">How its work</div>
              <h2 className="sec-title_heading">Cinuse <span>typically operate</span> in <br /> a three steps</h2>
            </div>
            <div className="steps-one_button">
              <a href="about.html" className="template-btn btn-style-two">
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
                    <h5 className="step-block_one-title">Algorithm processing</h5>
                    <div className="step-block_one-text">Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna..</div>
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
                    <h5 className="step-block_one-title">Input & data gathering</h5>
                    <div className="step-block_one-text">Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna..</div>
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
                    <h5 className="step-block_one-title">Content generation & refinement</h5>
                    <div className="step-block_one-text">Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna..</div>
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
              <div className="sec-title_title">Our Peicing</div>
              <h2 className="sec-title_heading">Join for <span>free</span> Today</h2>
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


                      <div className="price-block_one active col-lg-4 col-md-6 col-sm-12">
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

                      <div className="price-block_one active col-lg-4 col-md-6 col-sm-12">
                        <div className="price-block_one-inner">
                          <div className="price-one_stars" style={{ backgroundImage: "url('/assets/images/icons/price-stars.png')" }}></div>
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
                          <div className="price-block_one-subtitle">Professional AutoCAD services for telecommunication infrastructure, tower design, and site planning.
                          </div>
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


                      <div className="price-block_one active col-lg-4 col-md-6 col-sm-12">
                        <div className="price-block_one-inner">
                          <div className="price-one_stars" style={{ backgroundImage: "url('/assets/images/icons/price-stars.png')" }}></div>
                          <div className="price-block_one-title">BIM Services</div>
                          <div className="price-block_one-subtitle">Building Information Modeling for telecom facilities, enabling 3D visualization and clash detection</div>
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

                      <div className="price-block_one active col-lg-4 col-md-6 col-sm-12">
                        <div className="price-block_one-inner">
                          <div className="price-one_stars" style={{ backgroundImage: "url('/assets/images/icons/price-stars.png')" }}></div>
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


                      <div className="price-block_one active col-lg-4 col-md-6 col-sm-12">
                        <div className="price-block_one-inner">
                          <div className="price-one_stars" style={{ backgroundImage: "url('/assets/images/icons/price-stars.png')" }}></div>
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

                      <div className="price-block_one active col-lg-4 col-md-6 col-sm-12">
                        <div className="price-block_one-inner">
                          <div className="price-one_stars" style={{ backgroundImage: "url('/assets/images/icons/price-stars.png')" }}></div>
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
                  <div className="sec-title_title">faq</div>
                  <h2 className="sec-title_heading">Frequently asked <span>questions</span></h2>
                  <div className="sec-title_text">Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis tellus. Nullam quis mattis ligula consectetur.</div>
                </div>
                <div className="faq-one_button">
                  <a href="contact.html" className="template-btn btn-style-one">
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
                    <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa-solid fa-plus fa-fw"></span></div>How does your AI copywriting tool work?</div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">Our AI copywriting tool uses sophisticated algorithms to understand context, tone, and language nuances. Users input specific details or prompts, and the AI generates high-quality content based on that input, refining.</div>
                      </div>
                    </div>
                  </li>


                  <li className="accordion block">
                    <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa-solid fa-plus fa-fw"></span></div>What is AI copywriting?</div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">Our AI copywriting tool uses sophisticated algorithms to understand context, tone, and language nuances. Users input specific details or prompts, and the AI generates high-quality content based on that input, refining.</div>
                      </div>
                    </div>
                  </li>


                  <li className="accordion block">
                    <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa-solid fa-plus fa-fw"></span></div>Can I trust the content generated by AI?</div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">Our AI copywriting tool uses sophisticated algorithms to understand context, tone, and language nuances. Users input specific details or prompts, and the AI generates high-quality content based on that input, refining.</div>
                      </div>
                    </div>
                  </li>


                  <li className="accordion block">
                    <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa-solid fa-plus fa-fw"></span></div>What types of content can your AI generate?</div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">Our AI copywriting tool uses sophisticated algorithms to understand context, tone, and language nuances. Users input specific details or prompts, and the AI generates high-quality content based on that input, refining.</div>
                      </div>
                    </div>
                  </li>


                  <li className="accordion block">
                    <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa-solid fa-plus fa-fw"></span></div>What languages does your AI support?</div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">Our AI copywriting tool uses sophisticated algorithms to understand context, tone, and language nuances. Users input specific details or prompts, and the AI generates high-quality content based on that input, refining.</div>
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
            <div className="sec-title_title">Integrations</div>
            <h2 className="sec-title_heading">Incorporate our tool into <br /> <span>your everyday tasks</span></h2>
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
            <div className="sec-title_title">our blog</div>
            <h2 className="sec-title_heading">Read our latest <span>blogs</span></h2>
          </div>
          <div className="three-item_carousel swiper-container">
            <div className="swiper-wrapper">


              <div className="swiper-slide">

                <div className="news-block_one">
                  <div className="news-block_one-inner">
                    <div className="news-block_one-image">
                      <a href="news-detail.html"><Image src="/assets/images/resource/news-1.jpg" alt="" width={400} height={300} unoptimized /></a>
                    </div>
                    <div className="news-block_one-content">
                      <h5 className="news-block_one-title"><a href="news-detail.html">Transforming industries and shaping the future</a></h5>
                      <div className="news-block_one-text">Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis tellus. Nullam quis mattis ligula consectetur.</div>
                      <div className="news-block_one-button">
                        <a href="blog.html" className="template-btn btn-style-two">
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
                      <a href="news-detail.html"><Image src="/assets/images/resource/news-2.jpg" alt="" width={400} height={300} unoptimized /></a>
                    </div>
                    <div className="news-block_one-content">
                      <h5 className="news-block_one-title"><a href="news-detail.html">Exploring the cutting-edge of artificial intelligence</a></h5>
                      <div className="news-block_one-text">Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis tellus. Nullam quis mattis ligula consectetur.</div>
                      <div className="news-block_one-button">
                        <a href="blog.html" className="template-btn btn-style-two">
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
                      <a href="news-detail.html"><Image src="/assets/images/resource/news-3.jpg" alt="" width={400} height={300} unoptimized /></a>
                    </div>
                    <div className="news-block_one-content">
                      <h5 className="news-block_one-title"><a href="news-detail.html">Understanding the basics of artificial intelligence</a></h5>
                      <div className="news-block_one-text">Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis tellus. Nullam quis mattis ligula consectetur.</div>
                      <div className="news-block_one-button">
                        <a href="blog.html" className="template-btn btn-style-two">
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
