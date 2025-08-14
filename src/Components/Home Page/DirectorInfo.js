import React from 'react';

function DirectorInfo() {
  return (
    <div className="director-container">
      <h2 className="director-title">About the Director, STC</h2>
      <div className="director-content">
        <img
          src="https://stccharbagh.in/frontend/images/director_image.jpg"  // Place this image in your public folder
          alt="Director"
          className="director-photo"
        />
        <div className="director-text">
          <h3>A.N. Siddiqui</h3>
          <p>
           Supervisors Training Centre Charbagh (STC/CB), Northern Railway, Lucknow started its journey in 1956 as ‘Systems Training School’ with the objective of training the supervisors of Northern Railway in railway mechanical system. Since then, STC/CB has grown steadily and now offers specialised courses for IR in Mechanical systems, Electrical system, Workplace Management and Resource Management.

In a significant step recently, the post of Principle/STC has been elevated in July 2019 to that of Director in SA grade to empower STC in its quest for higher training capabilities. This assumes importance considering the rapid technological and cultural changes taking place in IR and the need to equip frontline Engineers and Managers with relevant knowledge tools.

STC/CB classrooms are fully air-conditioned and now provided with modern teaching aids like Interactive Boards, Visualizers, and Computers etc. The training labs are well equipped with working and cut-section models, self-learning stations, audio-visual content etc. The centre building is now Platinum Green Rated while boasting Wi-Fi connectivity and ‘STC Smart’ mobile App for trainees, demonstrating a judicious mix of technology and care for nature.

Besides the regular Induction and Refresher courses, STC also offers several tailor-made special courses. For instance, some new courses introduced in 2021-22 is Refrigeration, Air conditioning and Train lighting for Artisan & coach attendant.

All units of Northern Railway and also foreign Railways are encouraged to make use of the excellent training opportunity offered by STC/CB.</p>
          <p>
            His achievements include initiating nationwide digital training programs and being awarded the AICTE Excellence in Education Leadership Award.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DirectorInfo;
