

import "aos/dist/aos.css";
import "./About.css"


const About = () => {

    return (
        <section id="about" className='about-wrapper  py-5'>
            <div className='d-flex mb-3 ps-3 ms-lg-5 ps-lg-4 '>
                <div data-aos="fade-up" data-aos-once="false"  >04 </div>
                <div data-aos="fade-left" data-aos-once="false" className='title-bar-black'></div>
                <div data-aos="fade-down" data-aos-once="false" >About</div>
            </div>

            <h1 className='fw-bold ps-3 ps-lg-4 ms-lg-5'>THE STORY</h1>
            <h5 className='ps-3 ps-lg-5 ms-lg-4'>Bull's are RAGING!</h5>

            <div className="about-content py-lg-5">
                <div className="about-text ms-lg-auto col-lg-6 me-4 px-3 px-lg-5 my-5">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                </div>
                <div className="about-text col-lg-6 px-3 px-lg-5 ms-lg-4 my-5">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                </div>
            </div>
        </section>
    )
}

export default About
