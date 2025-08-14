import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


const Banner = () => {
    const settings = {
        dots: true,
        arrows: true, 
        Infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,


    }
    return (
        <div className="banner">
            <Slider {...settings} >
                <div>
                    <img src="https://www.stccharbagh.in/assets/dist/images/WhatsApp%20Image%202025-01-21%20at%204.24.23%20PM%20(1).jpeg" alt="Banner1" />

                </div>
                <div>
                    <img src="https://www.stccharbagh.in/assets/dist/images/WhatsApp%20Image%202025-01-21%20at%204.24.24%20PM%20(1).jpeg" alt="Banner2" />
                </div>
                <div>
                    <img src="https://www.stccharbagh.in/assets/dist/images/dinig_hall.jpeg" alt="Banner3" />
                </div>
                <div>
                    <img src="https://www.stccharbagh.in/assets/dist/images/MixCollage-24-Jun-2025-12-23-PM-7756.jpg" alt="Banner4" />
                </div>
                <div>
                    <img src="https://www.stccharbagh.in/assets/dist/images/WhatsApp%20Image%202025-01-28%20at%204.45.20%20PM.jpeg" alt="Banner5" />
                </div>
                <div>
                    <img src="https://www.stccharbagh.in/frontend/images/img/automation.jpg" alt="Banner6" />


                </div>
                <div>
                    <img src="https://www.stccharbagh.in/frontend/images/img/lab4.jpeg" alt="Banner7" />


                </div>

                <div>
                    <img src="https://www.stccharbagh.in/frontend/images/img/lab3.jpeg" alt="Banner8" />


                </div>


            </Slider>


        </div>
    )

}
export default Banner;
