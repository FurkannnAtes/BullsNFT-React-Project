import React, { useEffect } from 'react'

import "./NftCollection.css"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Aos from "aos";
import "aos/dist/aos.css";

const options = {

    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        },
        900: {
            items: 3
        }


    }
};
const NftCollection = () => {
    useEffect(() => {
        Aos.init({ duration: 1500, offset: 200 })
    }, [])
    return (
        <section id="collection" className='nft-collection-wrapper py-5'>
            <div className='ps-lg-5 ms-3 mb-5'>
                <div className='d-flex '>
                    <div data-aos="fade-up" data-aos-once="false"  >02</div>
                    <div data-aos="fade-left" data-aos-once="false" className='title-bar'></div>
                    <div data-aos="fade-down" data-aos-once="false">NFT COLLECTION</div>
                </div>
                <h1>OUR LODGE'S NFT COLLECTION</h1>
                <p className='w -lg-50'>Each Bull features a combination of unique traits, handcrafted in signature style by our in-house digital artists.</p>
            </div>
            <OwlCarousel


                className="owl-theme  owl-1  owl-carousel"
                loop
                autoplay={true}
                autoplayTimeout={6000}
                margin={10}
                nav
                navText={['PREV', 'NEXT']}

                dots={false}

                {...options}
            >
                <div className="item"><img className='owl-1-img' src="/images/bulls/88.jpeg" alt='' /></div>
                <div className="item"><img className='owl-1-img' src="/images/bulls/11.jpeg" alt='' /></div>
                <div className="item"><img className='owl-1-img' src="/images/bulls/100.jpeg" alt='' /></div>
                <div className="item"><img className='owl-1-img' src="/images/bulls/125.jpeg" alt='' /></div>



            </OwlCarousel>
        </section>
    )
}

export default NftCollection
