/* eslint-disable @next/next/no-img-element */
import React from 'react'

const About = () => {
    return (
        <>
            <section className="page-title">

                <div className="page-title-icon" style={{ backgroundImage: "url('./assets/images/icons/page-title_icon-1.png')" }}></div>
                <div className="page-title-icon-two" style={{ backgroundImage: "url('./assets/images/icons/page-title_icon-2.png')" }}></div>
                <div className="page-title-shadow" style={{ backgroundImage: "url('./assets/images/background/page-title-1.png')" }}></div>
                <div className="page-title-shadow_two" style={{ backgroundImage: "url('./assets/images/background/page-title-2.png')" }}></div>
                <div className="auto-container">
                    <h2>About us</h2>
                    <ul className="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>About us</li>
                    </ul>
                </div>
            </section>

            <section className="story-one">
                <div className="auto-container">
                    <div className="row clearfix">

                        <div className="story-one_image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="story-one_image-outer">
                                <div className="story-one_image">
                                    <img src="./assets/images/resource/story.png" alt="" />
                                </div>
                            </div>
                        </div>


                        <div className="story-one_content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="story-one_content-outer">

                                <div className="sec-title style-four">
                                    <div className="sec-title_title">Our story</div>
                                    <h2 className="sec-title_heading">Navigating the frontier of our <span>intelligence</span></h2>
                                </div>
                                <p>The narrative unfolds as we delve into the inception of our company, tracing the roots of our vision for a future intertwined with artificial intelligence. Through the lens of this captivating chronicle, readers will witness the trials and triumphs that have shaped. the story weaves together the intricate threads of innovation</p>
                                <p>Through anecdotes and case studies, readers will witness the tangible difference our innovations make in fields ranging from healthcare and finance to education and beyond.</p>
                                <div className="story-one_button">
                                    <a href="#" className="template-btn btn-style-one">
                                        <span className="btn-wrap">
                                            <span className="text-one">Know more</span>
                                            <span className="text-two">Know more</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="value-one">
                <div className="auto-container">

                    <div className="sec-title style-four centered">
                        <div className="sec-title_title">core value</div>
                        <h2 className="sec-title_heading">Unveiling our <span>core values</span> <br /> for lasting impact.</h2>
                    </div>
                    <div className="row clearfix">


                        <div className="value-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="value-block_one-inner">
                                <div className="value-block_one-icon">
                                    <i className="icon-users-4"></i>
                                </div>
                                <h5 className="value-block_one-title">People</h5>
                                <div className="value-block_one-text">The impact of our AI solutions on the broader world forms a central theme, highlighting real-world applications and the positive changes</div>
                            </div>
                        </div>


                        <div className="value-block_one active col-lg-4 col-md-6 col-sm-12">
                            <div className="value-block_one-inner">
                                <div className="value-block_one-icon">
                                    <i className="icon-bulb1"></i>
                                </div>
                                <h5 className="value-block_one-title">Innovation</h5>
                                <div className="value-block_one-text">The impact of our AI solutions on the broader world forms a central theme, highlighting real-world applications and the positive changes</div>
                            </div>
                        </div>


                        <div className="value-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="value-block_one-inner">
                                <div className="value-block_one-icon">
                                    <i className="fa-solid fa-bullseye fa-fw"></i>
                                </div>
                                <h5 className="value-block_one-title">Mission</h5>
                                <div className="value-block_one-text">The impact of our AI solutions on the broader world forms a central theme, highlighting real-world applications and the positive changes</div>
                            </div>
                        </div>

                    </div>


                    <div className="value-one_button text-center">
                        <a href="#" className="template-btn btn-style-two">
                            <span className="btn-wrap">
                                <span className="text-one">Join braine today</span>
                                <span className="text-two">Join braine today</span>
                            </span>
                        </a>
                    </div>

                </div>
            </section>

            <section className="team-one">
                <div className="auto-container">
                    <div className="row clearfix">

                        <div className="team-one_title-column col-lg-4 col-md-12 col-sm-12">
                            <div className="team-one_title-outer">

                                <div className="sec-title style-four">
                                    <div className="sec-title_title">Our team</div>
                                    <h2 className="sec-title_heading">Team behind the <span>innovation</span></h2>
                                    <div className="sec-title_text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa Aliquam hendrerit urna.Maecenas vitae mattis tellus.</div>
                                </div>

                                <div className="team-one_arrows">
                                    <div className="team_carousel-prev fa-solid fa-angle-left fa-fw"></div>
                                    <div className="team_carousel-next fa-solid fa-angle-right fa-fw"></div>
                                </div>
                            </div>
                        </div>


                        <div className="team-one_team-column col-lg-8 col-md-12 col-sm-12">
                            <div className="team-one_team-outer">
                                <div className="team-carousel swiper-container">
                                    <div className="swiper-wrapper">


                                        <div className="swiper-slide">

                                            <div className="team-block_one">
                                                <div className="team-block_one-inner">
                                                    <div className="team-block_one-image">
                                                        <a href="team-detail.html"><img src="./assets/images/resource/team-1.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="team-block_one-content">
                                                        <h4 className="team-block_one-title"><a href="team-detail.html">Elliot S. Acevedo</a></h4>
                                                        <div className="team-block_one-designation">Founder</div>

                                                        <div className="team-block_one-socials">
                                                            <a href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                                            <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                                                            <a href="https://linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">

                                            <div className="team-block_one">
                                                <div className="team-block_one-inner">
                                                    <div className="team-block_one-image">
                                                        <a href="team-detail.html"><img src="./assets/images/resource/team-2.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="team-block_one-content">
                                                        <h4 className="team-block_one-title"><a href="team-detail.html">Elliot S. Acevedo</a></h4>
                                                        <div className="team-block_one-designation">Founder</div>

                                                        <div className="team-block_one-socials">
                                                            <a href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                                            <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                                                            <a href="https://linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
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
                </div>
            </section>

            <section className="testimonial-three">
                <div className="auto-container">

                    <div className="sec-title style-four centered">
                        <div className="sec-title_title">Success Stories</div>
                        <h2 className="sec-title_heading">Our clients share their <br /> <span>experience</span></h2>
                    </div>

                    <div className="three-item_carousel ">
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
                                                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/577137/original/pops_matrix.jpg" alt="Jpgarcia" />
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
                                                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/25a3cf5523c0ae9384d74a9e471f1c65-1705973925652/5be034f3-d4c0-4824-8888-11b83c53d1a7.jpg" alt="kiyakey" />
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
                                                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1c27582ba5a5a26d8fddf579a9e0853e-1607600971552/da5b9c83-b848-4ec2-8749-a28af6eafefd.JPG" alt="Martin" />
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
            </section>

            <section className="clients-two">
                <div className="auto-container">

                    <div className="sec-title centered">
                        <div className="sec-title_title">Trusted Organizations</div>
                    </div>
                    <div className="clients_slider swiper-container">
                        <div className="swiper-wrapper">


                            <div className="swiper-slide">
                                <div className="client-image">
                                    <a href="#"><img src="./assets/images/clients/1.png" alt="" /></a>
                                </div>
                            </div>


                            <div className="swiper-slide">
                                <div className="client-image">
                                    <a href="#"><img src="./assets/images/clients/2.png" alt="" /></a>
                                </div>
                            </div>


                            <div className="swiper-slide">
                                <div className="client-image">
                                    <a href="#"><img src="./assets/images/clients/3.png" alt="" /></a>
                                </div>
                            </div>


                            <div className="swiper-slide">
                                <div className="client-image">
                                    <a href="#"><img src="./assets/images/clients/4.png" alt="" /></a>
                                </div>
                            </div>


                            <div className="swiper-slide">
                                <div className="client-image">
                                    <a href="#"><img src="./assets/images/clients/5.png" alt="" /></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-one style-two">
                <div className="cta-one_shadow" style={{ backgroundImage: "url('./assets/images/background/cta-shadow.png')" }}></div>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="cta-icon_one" style={{ backgroundImage: "url('./assets/images/icons/cta-icon-1.png')" }}></div>
                        <div className="cta-icon_two" style={{ backgroundImage: "url('./assets/images/icons/cta-icon-2.png')" }}></div>
                        <div className="cta-one_card">
                            <img src="./assets/images/icons/cta-card.png" alt="" />
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
                                        <img src="./assets/images/icons/cta-cards.png" alt="" />
                                    </div>
                                    <div className="image">
                                        <img src="./assets/images/resource/cta.png" alt="" />
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

export default About
