import React from 'react'

function Footer() {
    return (
        <div>
            {/* <div className='c-section1'> */}
            <section className='footer'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <h6 class="cursor-scale small">Our social media channels provides various updates on our journey, <br />Please follow us and stay up to date.</h6>
                        <div class="socialfoot">
                            <ul>
                                <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-youtube-play fb"></i></span></a></li>
                                <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-linkedin fb"></i></span></a></li>
                                <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-paper-plane fb"></i></span></a></li>
                                <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-skype fb"></i></span></a></li>
                                <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-instagram fb"></i></span></a></li>
                                <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-facebook-square fb"></i></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='copy-wright'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12 col-xxl-12'>
                            <p>© 2022 Social-e. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* </div> */}
        </div>
    )
}

export default Footer