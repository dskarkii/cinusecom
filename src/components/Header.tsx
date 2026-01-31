import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (

        <header className="main-header header-style-one">

            <div className="header-lower">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="d-flex justify-content-between align-items-center flex-wrap">

                            <div className="logo-box">
                                <div className="logo"><a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0px' }}><Image src="/assets/images/cinuse-logo.png" alt="Cinuse" title="Cinuse" width={40} height={40} unoptimized /><Image src="/assets/images/logo.svg" alt="Cinuse" title="Cinuse" width={95} height={35} unoptimized /></a></div>
                            </div>

                            <div className="nav-outer d-flex flex-wrap">

                                <nav className="main-menu navbar-expand-md">
                                    <div className="navbar-header">
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>

                                    <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                        <ul className="navigation clearfix">
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/about">About</a></li>
                                            <li><a href="/services">Services</a></li>
                                            <li><a href="/contact">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>

                            <div className="outer-box d-flex align-items-center flex-wrap">

                                <div className="main-header_buttons">
                                    <a href="/contact" className="template-btn btn-style-one">
                                        <span className="btn-wrap">
                                            <span className="text-one">Get Quote</span>
                                            <span className="text-two">Get Quote</span>
                                        </span>
                                    </a>
                                </div>

                                <div className="mobile-nav-toggler">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-menu">
                <div className="menu-backdrop"></div>
                <div className="close-btn"><span className="icon fa-solid fa-xmark fa-fw"></span></div>

                <nav className="menu-box">
                    <div className="nav-logo"><a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0px' }}><Image src="/assets/images/cinuse-logo.png" alt="Cinuse" title="Cinuse" width={40} height={40} unoptimized /><Image src="/assets/images/logo.svg" alt="Cinuse" title="Cinuse" width={95} height={35} unoptimized /></a></div>
                    <div className="menu-outer">Here Menu Will Come Automatically Via Javascript / Same Menu as in Header</div>
                </nav>
            </div>

        </header>
    )
}

export default Header
