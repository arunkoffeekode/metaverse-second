import React from 'react'
function Avtar() {
    return (
        <div>
            {/* <div className='c-section'> */}
            <section className='avtar'>
                {/* <Fade bottom> */}
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-7 col-md-10 col-sm-12 col-xl-7 col-xxl-7'>
                            <div className='avtar-title mb-3'>
                                <h1 className='cursor-scale'> Explore the virtual world and start your journey with your <span>Avatar</span> </h1>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center' style={{ alignItems: 'center' }}>
                        <div className='col-lg-5 col-md-12 col-sm-12 col-xl-5 col-xxl-5'>

                            <div className='avtar-left'>
                                <h2 className='cursor-scale'>Create <br />
                                    your own<br />
                                    <span className='anim-typewriter line-1'>avatar</span></h2>
                                <p className='cursor-scale small'>Take your profile pic to the next level. Now you can choose your favorite Avatar to explore The Social-e Metaverse.</p>
                                <div class="social-slider-btn mt-2"><button type="button" class="social-s-btn">Learn more</button></div>

                            </div>

                        </div>
                        <div className='col-lg-5 col-md-12 col-sm-12 col-xl-5 col-xxl-5'>

                            <div className='avtar-img'>
                                <img src='./images/avtar-img.png' className='topBottom'></img>
                            </div>

                        </div>
                    </div>

                </div>
                {/* </Fade> */}
            </section>
            {/* </div> */}
        </div>
    )
}

export default Avtar