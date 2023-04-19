import React from 'react'
function FrontVideo() {
    return (
        <div>
            {/* <div className='c-section'> */}
            <section className='front-video'>
                <video playsinline muted loop="true" autoplay="true">
                    <source src="./video/mountain.webm" type="video/webm" />
                </video>
                <div class="meta-video">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-xl-12 col-xxl-12'>
                                <div className='video-content'>
                                    {/* <div className='video-logo'>
                                        <img src='images/logo.png' />
                                    </div> */}

                                    <h6>Step into the Future with Social-e's Immersive</h6>

                                    <h1>metaverse </h1>

                                    {/* <div class="social-slider-btn text-center mt-3"><button type="button" class="social-s-btn">Learn more</button></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div className='shadow143'>

            </div>
            {/* </div> */}
        </div>
    )
}

export default FrontVideo