import React from 'react'
import logo from '../img/logo.png'
import logo1 from '../img/logo1.png'
function HomeHeader() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("sticky").style.top = "0";
            document.getElementById("sticky").style.background = "#0F234E";
            // document.getElementById("desktop_logo").style.display = "none";
           

        } else {
            document.getElementById("sticky").style.top = "-80px";
            document.getElementById("sticky").style.background = "transparent";
            document.getElementById("desktop_logo").style.display = "block";
           
        }
        prevScrollpos = currentScrollPos;


        if (window.pageYOffset == 0) {
            document.getElementById("sticky").style.background = "transparent";
            document.getElementById("desktop_logo").style.display = "block";
            // document.getElementById("mobile_logo").style.display = "block";
        

        }
    }
    return (
        <div>
            <div id="navbar">
                <div id='sticky'>
                    <div className='container-fluid' >
                        <div className='row'>

                            <div className='col-lg-12'>
                                <div className='row' style={{ alignItems: 'center' }}>
                                    <div className='col-lg-2 col-2 col-md-6'>
                                        <div className='logo-section'>
                                            <a href='#'>
                                                <img src={logo} alt="Logo" title='Logo' id="desktop_logo" className='desk'></img>
                                                <img src={logo1} alt="Logo" title='Logo' className='mobile'></img>
                                                {/* <img src={logo1} alt="Logo" title='Logo'  id="mobile_logo" className='single-logo'></img> */}
                                            </a>
                                        </div>
                                    </div>
                                    <div className='col-lg-10 col-10 col-md-6'>
                                        <div className='right-sec'>
                                            <ul>
                                                <li>
                                                    <button type='button' className='info-link'>Info</button>

                                                </li>
                                                {/* <li>
                                                    <a href='#'>Log in</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='ico'><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                                                </li> */}
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
    )
}

export default HomeHeader