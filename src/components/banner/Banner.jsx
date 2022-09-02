import React from 'react'

import "./Banner.css"

import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';


const Banner = () => {
    return (
        <section id="banner" className="banner-container  ">

            <div className="row h-100 w-100 ps-3 ps-lg-0">
                <div className="banner-content col-md-6 text-white my-auto px-lg-5  mb-5 mb-lg-0  ">
                    <div className='d-flex'>
                        <Slide left>  <div className="banner-title">01 </div></Slide>
                        <Roll left><div className='title-bar-black'></div></Roll>
                        <Slide right> <div>BULL'S LODGE NFT</div></Slide>
                    </div>
                    <h1 className="banner-subTitle">THE BULLS ARE RAGING...</h1>
                    <p className="banner-text">
                        Bull's Lodge NFT; Home of your benefits in Metaverse & Reality. MINT
                        to be announced soon.
                    </p>
                    <button className="banner-content-button ">MINT TBA</button>
                </div>
                <div className="banner-logo col-md-6 my-auto text-center ">
                    <img className='img-fluid h-100' src="/images/3.jpg" alt="" />
                </div>
            </div>

        </section>
    )
}

export default Banner
