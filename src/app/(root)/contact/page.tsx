"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: "Message sent successfully! We'll get back to you soon." });
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                setSubmitStatus({ type: 'error', message: "Failed to send message. Please try again." });
            }
        } catch {
            setSubmitStatus({ type: 'error', message: "Something went wrong. Please try again later." });
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        <li><a href="/">Home</a></li>
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
                                <a href="tel:+917349296574">+91 7349296574</a>
                            </div>
                        </div>

                        <div className="info-block_one active col-lg-4 col-md-6 col-sm-12">
                            <div className="info-block_one-inner">
                                <div className="info-block_one-icon">
                                    <i className="icon-envelope"></i>
                                </div>
                                <h4>Email us</h4>
                                <a href="mailto:contact@cinuse.com">contact@cinuse.com</a>
                            </div>
                        </div>

                        <div className="info-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="info-block_one-inner">
                                <div className="info-block_one-icon">
                                    <i className="icon-map"></i>
                                </div>
                                <h4>Our location</h4>
                                <div className="text">Bengaluru - Karnataka <br /> 560017, India</div>
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
                                <div className="sec-title_title">Contact us</div>
                                <h2 className="sec-title_heading">Get in Touch with <span>Us</span></h2>
                                <div className="sec-title_text">We&apos;re here to answer any questions and assist you. <br /> Reach out to us and we&apos;ll help you in any way we can.</div>
                            </div>

                            <div className="contact-info_hours" style={{ marginBottom: '20px' }}>
                                <strong>Business Hours:</strong><br />
                                Mon-Fri: 00:00-24:00 (IST)<br />
                                Weekends: 9:00-17:00 (IST)
                            </div>

                            <div className="contact-social_box">
                                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
                                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
                                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>

                        <div className="column col-lg-6 col-md-12 col-sm-12">
                            <div className="default-form contact-form">
                                {submitStatus && (
                                    <div style={{
                                        padding: '15px',
                                        marginBottom: '20px',
                                        borderRadius: '5px',
                                        backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                                        color: submitStatus.type === 'success' ? '#155724' : '#721c24',
                                        border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                                    }}>
                                        {submitStatus.message}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit} id="contact-form">
                                    <div className="row clearfix">

                                        <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                placeholder="First Name"
                                                required
                                            />
                                        </div>

                                        <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                placeholder="Last Name"
                                                required
                                            />
                                        </div>

                                        <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email"
                                                required
                                            />
                                        </div>

                                        <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Subject"
                                                required
                                            />
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Enter your message*"
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <button
                                                type="submit"
                                                className="template-btn btn-style-one"
                                                disabled={isSubmitting}
                                            >
                                                <span className="btn-wrap">
                                                    <span className="text-one">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                                    <span className="text-two">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
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
                        <iframe
                            width="820"
                            height="560"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=Bengaluru+Karnataka+560017&t=&z=12&ie=UTF8&iwloc=&output=embed"
                        ></iframe>
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
                                    <h2 className="cta-one_title">Let&apos;s unlock possibilities <span>together!</span></h2>
                                    <div className="cta-one_button">
                                        <a href="/about" className="template-btn btn-style-three">
                                            <span className="btn-wrap">
                                                <span className="text-one">Learn more about us</span>
                                                <span className="text-two">Learn more about us</span>
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
