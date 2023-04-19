import React from 'react'
import OwlCarousel from 'react-owl-carousel';

import expo1 from '../img/expo-1.webm'
import expo2 from '../img/expo-2.webm'
import expo3 from '../img/expo-3.webm'
import expo4 from '../img/expo-4.webm'
import expo5 from '../img/expo-5.webm'
import expo6 from '../img/expo-6.webm'
// import Fade from 'react-reveal/Fade';

function SocialEslider() {
    //Owl Carousel Settings Responsive
    const options1 = {
        loop: true,
        dots: true,
        items: 1,
        // stagePadding: 150,
        // stageElement: 'div',
        margin: 25,
        responsiveClass: true,
        autoplay: true,
        center: true,
        smartSpeed: 1030,
        responsiveClass: true,
        // navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navigation: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 10,
                nav: true,
            },
            600: {
                items: 2,
                stagePadding: 50,
                nav: true,
            },
            1000: {
                items: 3,
                stagePadding: 100,
                nav: true,
                loop: true,
            },

        },
    };
    return (
        <div>
            {/* <div className='c-section' style={{ background: 'linear-gradient(180deg, rgba(243, 243, 243, 0.41) 2.49%, #F3F3F3 65.39%)' }}> */}
            <section className='social-E-slider d-block'>
                {/* <Fade bottom> */}
                <div className='row justify-content-center'>
                    <div className='col-lg-9 col-md-12 col-xl-9 col-xxl-7 col-sm-12'>
                        <div className='slider-title'>
                            <h1 class="cursor-scale">Explore The Latest In <span>Social-e</span></h1>
                            <p class="cursor-scale small">Lorem ipsum dolor sit amet consectetur. Sed mauris dui habitasse libero leo in. Varius id cursus sapien nulla scelerisque sit mi hac. Venenatis nullam sit venenatis mattis eget. Egestas vel sed fusce viverra.</p>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-sm-12'>
                        <OwlCarousel className='owl-carousel owl-theme' loop items={1} nav autoplay={true} {...options1}>

                            <div class="item">
                                <a href='#'>
                                    <div className='social-box12'>
                                        {/* <img src={expo1} alt="" className='image' /> */}
                                        <video playsinline muted loop="true" autoplay="true" className='image'>
                                            <source src={expo1} type="video/webm" />
                                        </video>
                                        <div className="overlay">
                                            <div class="text cursor-scale small">How to Build Your Metaverse World for Free</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="item">
                                <a href='#'>
                                    <div className='social-box12'>
                                    <video playsinline muted loop="true" autoplay="true" className='image'>
                                            <source src={expo2} type="video/webm" />
                                        </video>
                                        <div className="overlay">
                                            <div class="text cursor-scale small">How to Build Your Metaverse World for Free</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="item">
                                <a href='#'>
                                    <div className='social-box12'>
                                    <video playsinline muted loop="true" autoplay="true" className='image'>
                                            <source src={expo3} type="video/webm" />
                                        </video>
                                        <div className="overlay">
                                            <div class="text cursor-scale small">How to Build Your Metaverse World for Free</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="item">
                                <a href='#'>
                                    <div className='social-box12'>
                                    <video playsinline muted loop="true" autoplay="true" className='image'>
                                            <source src={expo4} type="video/webm" />
                                        </video>
                                        <div className="overlay">
                                            <div class="text cursor-scale small">How to Build Your Metaverse World for Free</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="item">
                                <a href='#'>
                                    <div className='social-box12'>
                                    <video playsinline muted loop="true" autoplay="true" className='image'>
                                            <source src={expo5} type="video/webm" />
                                        </video>
                                        <div className="overlay">
                                            <div class="text cursor-scale small">How to Build Your Metaverse World for Free</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="item">
                                <a href='#'>
                                    <div className='social-box12'>
                                    <video playsinline muted loop="true" autoplay="true" className='image'>
                                            <source src={expo6} type="video/webm" />
                                        </video>
                                        <div className="overlay">
                                            <div class="text cursor-scale small">How to Build Your Metaverse World for Free</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div class="col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-sm-12">
                        <div class="social-slider-btn text-center">
                            <button type="button" class="social-s-btn">Learn more</button>
                        </div>
                    </div>
                </div>
                {/* </Fade> */}
            </section>
            {/* </div> */}
        </div>
    )
}

export default SocialEslider