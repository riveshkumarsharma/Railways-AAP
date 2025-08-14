import React from 'react';
import '../../App.css';

const testimonialsData = [
    {
        id: 1,
        name: 'Priya Singh',
        course: 'Full-Stack Development Project',
        quote: "The summer training at STC was an incredible experience. The mentors were knowledgeable, and the hands-on project gave me real-world skills that were invaluable for my career.",
        imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        id: 2,
        name: 'Rohan Kumar',
        course: 'AI & Machine Learning Model',
        quote: "I highly recommend the STC program. The curriculum is up-to-date with industry standards, and the practical approach to learning helped me secure a great internship.",
        imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        id: 3,
        name: 'Anjali Desai',
        course: 'IoT Home Automation Project',
        quote: "A fantastic learning environment with great facilities. The project I worked on was challenging but extremely rewarding. It was the perfect bridge between theory and practice.",
        imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title">What Our Students Say</h2>
                <p className="section-subtitle">Success stories from past trainees.</p>
                <div className="testimonials-grid">
                    {testimonialsData.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card">
                            <img src={testimonial.imageUrl} alt={testimonial.name} className="testimonial-image" />
                            <div className="testimonial-content">
                                <p className="testimonial-quote">"{testimonial.quote}"</p>
                                <h4 className="testimonial-name">{testimonial.name}</h4>
                                <p className="testimonial-course">{testimonial.course}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;