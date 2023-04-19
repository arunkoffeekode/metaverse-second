import React from 'react'

function Work() {
    return (
        <div>
            <section className='work'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-sm-12'>
                            <div className='slider-title'>
                                <h1 class="cursor-scale">How social-e <span>works</span></h1>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-sm-12'>
                            <section class="ps-timeline-sec">
                                <div class="container-fluid">
                                    <ul class="ps-timeline">
                                        <li>
                                            <div class="ps-top">
                                            <h6 className='cursor-scale small'>Creating a profile</h6>
                                               <p className='cursor-scale small'>Users would create an avatar and set up a profile with information about themselves, such as their interests, hobbies, and relationship preferences.</p>
                                            </div>
                                            
                                            <span class="ps-sp-top">
                                                <img src="images/profile.png"/>
                                            </span>
                                        </li>
                                        <li>
                                            <div class="ps-bot">
                                                 <h6 className='cursor-scale small'>Avatar interactions</h6> <p className='cursor-scale small'>Once two users have established a connection users can interact with each other through their avatars in the metaverse. This might involve virtual activities together.</p>
                                             
                                            </div>
                                           
                                            <span class="ps-sp-bot">
                                                <img src="images/avatar_interactions.png"/>                                            </span>
                                        </li>
                                        <li>
                                            <div class="ps-top">
                                            <h6 className='cursor-scale small'>Safety and awareness</h6>
                                               <p className='cursor-scale small'>Will provide users with resources and educational materials on how to stay safe online. Users may have the ability to block other users.</p>
                                            </div>
                                            
                                            <span class="ps-sp-top">
                                            <img src="images/safty.png"/>     
                                            </span>
                                        </li>
                                        <li>
                                            <div class="ps-bot">
                                            <h6 className='cursor-scale small'>Matching</h6>
                                               <p className='cursor-scale small'>The dating app in the metaverse would use algorithms to match users based on their profile information and interactions with other users.</p> 
                                            </div>
                                          
                                            <span class="ps-sp-bot">
                                            <img src="images/matching.png"/>  
                                            </span>
                                        </li>
                                        <li>
                                            <div class="ps-top">
                                               
                                            <h6 className='cursor-scale small'>Integration with blockchain</h6>
                                               <p className='cursor-scale small'>The dating app also integrates blockchain technology and wallets to facilitate payments and transactions between users.</p>
                                            </div>
                                            
                                            <span class="ps-sp-top">
                                            <img src="images/wallet.png"/>  
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Work