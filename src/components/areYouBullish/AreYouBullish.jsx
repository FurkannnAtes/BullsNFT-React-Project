

import "aos/dist/aos.css";

import "./AreYouBullish.css"


const AreYouBullish = () => {

    





    return (
        <section id="welcome" className='are-you-bullish-wrapper py-2  py-lg-5  '>
            <div className="are-you-bullish-content  ms-lg-5 p-lg-3 ">
                <div className='d-flex mb-3 ms-3 ms-lg-0  '>
                    <div data-aos="fade-up" data-aos-once="false">03 </div>
                    <div data-aos="fade-right" data-aos-once="false" className='title-bar'></div>
                    <div data-aos="fade-down" data-aos-once="false">Welcome</div>
                </div>
                <div className="row">
                    <h1 className='fw-bold welcome-title ms-3 ms-lg-0'>ARE YOU BULLISH?</h1>
                    <div className="are-you-bullish-content-text d-none d-lg-block col-lg-5 pt-3">

                        <p>
                            Welcome to the Bull's Lodge NFT project, featuring a collection of 10,000 unique,<strong> 3D </strong> Hand Drawn NFT artworks and delivering privileges in Metaverse and In Real Life utilities to its ever-growing community.
                        </p>
                        <p>Bull’s Lodge NFT Collection is fan art and our inspiration is to put our Community's benefits in front of everything! We prioritize our member’s benefits and privileges while holding your NFT brings sustainable passive income to your feet. NFT in our community will have a value as identity in our society (even more in DAO!).</p>
                        <p>Each Bull is unique, based over hundred of well-designed elements that characterize a BULLISH crypto enthusiast.</p>
                        <p>Entering Bull's Lodge NFT means joining a family full of people who believe in the future of Cryptocurrencies and the Blockchain technology.</p>
                        <p>We’re only just getting started yet will never stop focusing on delivering unparalleled benefits and utilities to the beloved members of our lodge.</p>
                    </div>
                    <div className="are-you-bullish-content-images d-flex mt-4 mt-lg-0 justify-content-center col-12 col-lg-7">
                        <img className="w-25 " src="/images/leftwel.jpeg" alt="" />
                        <img className="w-25 mx-3 are-you-bullish-content-image-middle " src="/images/middlewel.jpeg" alt="" />
                        <img className="w-25" src="/images/rightwel.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AreYouBullish
