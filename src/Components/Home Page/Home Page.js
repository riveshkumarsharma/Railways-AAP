// src/Components/Pages/HomePage.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from '../Banner/Banner';
import NoticeBoard from '../Home Page/NoticeBoard';
import DirectorInfo from '../Home Page/DirectorInfo';
import { FaArrowRightLong, FaArrowLeft } from "react-icons/fa6"; // Import both icons
import BulletinTicker from './BulletinTicker';
import QuickLinks from './QuickLinks';
import FeaturedProjects from './FeaturedProjects'; // Import new component
import Testimonials from './Testimonials'; // Import new component


const HomePage = () => {
const settings = {
  dots: true,
  arrows: true,
  infinite: true,  // Fix typo: was "Infinity"
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  nextArrow: <NextArrow />,   // ✅ Pass custom arrow
  prevArrow: <PrevArrow />,   // ✅ Pass custom arrow
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
  // Custom next arrow component
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <FaArrowRightLong
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  // Custom previous arrow component
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <FaArrowLeft
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }



  // Dummy upcoming events data for frontend demonstration
  const upcomingEvents = [
    { title: "Webinar on React", date: "2024-03-10", time: "3:00 PM", description: "An introduction to React fundamentals." },
    { title: "Frontend Challenge", date: "2024-03-18", time: "11:00 AM", description: "A coding challenge for frontend developers." },
    { title: "UI/UX Workshop", date: "2024-03-25", time: "2:00 PM", description: "Learn the basics of UI/UX design." },
  ];

  return (
    <div className="home-page">
      <Banner />
      <BulletinTicker/>
      <NoticeBoard />
      <FeaturedProjects />
      <QuickLinks/>
      <DirectorInfo />
      <div>
        <h2 className="image-slider-title">Our Gallery</h2>
        <Slider {...settings} className="image-slider">
          <div><img src="https://stccharbagh.in/assets/dist/images/Picture1.png" alt="Image 1" /></div>
          <div><img src="https://stccharbagh.in/assets/dist/images/WhatsApp%20Image%202025-01-21%20at%204.24.24%20PM.jpeg" alt="Image 2" /></div>
          <div><img src="https://stccharbagh.in/assets/dist/images/WhatsApp%20Image%202025-01-21%20at%204.24.23%20PM%20(1).jpeg" alt="Image 3" /></div>
          <div><img src="https://stccharbagh.in/assets/dist/images/WhatsApp%20Image%202025-01-21%20at%204.24.23%20PM%20(1).jpeg" alt="Image 4" /></div>
          <div><img src="https://stccharbagh.in/assets/dist/images/Picture1.png" alt="Image 5" /></div>
        </Slider>
      </div>

      <Testimonials />

      {/* Upcoming Events Section */}
      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="event-list">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="event-item">
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default HomePage;
