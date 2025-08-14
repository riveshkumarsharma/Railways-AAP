import React from 'react';

const About = () => {
  // Data for the faculty table
  const facultyData = [
    { sr: 1, name: 'Sh. Naveen Chandra Jaisawal', designation: 'Sr. Lecturer', experience: '15 years experience of working in workshop at Black Smithy, new constructions and progress shop', email: 'naveen.jaiswal@stccharbagh.in', phone: 'xxxxx16187' },
    { sr: 2, name: 'Sh. Alok Dixit', designation: 'Sr. Instructor(I/c)', experience: '20 years experience in field of mechanical system maintenance of locomotives.', email: 'alok.dixit@stccharbagh.in', phone: 'xxxxx34042' },
    { sr: 3, name: 'Sh. Manvendra Singh', designation: 'Chief Instructor', experience: '04 years experience in field of electrical system maintenance of locomotives.', email: 'manavendra.singh@stccharbagh.in', phone: 'xxxxx22561' },
    { sr: 4, name: 'Sh. Vikas Srivastava', designation: 'Chief Instructor', experience: '07 years experience in field of maintenance Workshop in coaches and bogies.', email: 'vikaslko07@gmail.com', phone: 'xxxxx34044' },
    { sr: 5, name: 'Sh. Vikas Sharma', designation: 'Instructor', experience: '15 years experience in field of electric loco maintenance.', email: 'vikas@stccharbagh.in', phone: 'xxxxx23404' },
    { sr: 6, name: 'Sh. Adarsh Soni', designation: 'Sr. lecturer', experience: '7 years of experience in the field of maintenance of Alco, HHP, and Electrical (WAG7) locomotives, covering both minor and major schedules. 1 year as an Assistant Professor in the Mechanical Engineering Department at Ajay Kumar Garg Engineering College', email: 'Adarsh110589@gmail.com', phone: 'xxxxx34098' },
    { sr: 7, name: 'Sh. Ratnesh Chandra Srivastava', designation: 'Sr. lecturer', experience: '7 years of experience in the field of maintenance of Alco, HHP, and Electrical (WAG7) locomotives, covering both minor and major schedules. 1 year as an Assistant Professor in the Mechanical Engineering Department at Parul University, Vadodara, Gujarat.', email: 'ratneshsrivastava7@gmail.com', phone: 'xxxxx87363' },
    { sr: 8, name: 'Sh. Anuj Yadav', designation: 'Lecturer', experience: '4 years’ experience in WISE PROTAL application and LHB Boogie maintenance activities', email: 'anujstc01@gmail.com', phone: 'xxxxx09016' },
    { sr: 9, name: 'Sh. Alok Kumar Srivastava', designation: 'Chief Instructor', experience: '7.5 years experience in C&W open line maintenance. Including sickline working and tool van maintenance.', email: 'aloks305@gmail.com', phone: 'xxxxx11750' },
    { sr: 10, name: 'Sh. Manish Kumar Yadav', designation: 'Sr. lecturer', experience: '8 years and 7 months experience in maintenance of electrical and mechanical systems of GM diesel locos and Alco engines and maintenance of WAG7 electric locos and various traction machinery of motive powers.experience in store and indent matters', email: 'manishkumar2016@gmail.com', phone: 'xxxxx10067' },
    { sr: 11, name: 'Sh. Anurag Singh', designation: 'Chief Instructor', experience: 'Three years experience in field of electrical system maintenance and troubleshooting of Diesel and Electric locomotives and sub-assemblies.', email: 'anurag.agra92@gmail.com', phone: 'XXXXX71504' },
    { sr: 12, name: 'Sh. Adnan Husain', designation: 'Sr Lecturer', experience: '10 year experience as CWI, C&W operations, and store management with hands-on expertise in the maintenance of LHB coaches and wagons. Skilled in ensuring efficient upkeep, inspection, and servicing of rolling stock as per railway standards', email: 'adnanhusainalig@gmail.com', phone: 'XXXXX46686' },
    { sr: 13, name: 'Sh. Arvind Kumar Maurya', designation: 'Chief Instructor', experience: '7+ years experience in workshop maintenance of ALCO Diesel Locomotives, DEMU, MEMU & Vande Bharat Trainsets', email: 'arvimaurya@live.com', phone: 'XXXXX30622' },
    { sr: 14, name: 'Sh. Anurag Kushwaha', designation: 'Chief Instructor', experience: '7+ years experience in C&W Open line maintenance of LHB and ICF coaches.', email: 'anuragkushwahastc01@gmail.com', phone: 'XXXXX91353' }
  ];

  return (
    <div className="about-page">
      <h1>About Supervisors Training Centre, Charbagh</h1>

      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          Formerly known as System Technical School, Northern Railway, was established adjacent to locomotive Workshop at Charbagh, Lucknow (Uttar Pradesh) on 14-01-1956, to fulfill the need of trained Supervisors (JE /SE) of Mechanical and Electrical department of Northern railway. At that time these Trainees were called as Apprentice Mechanics and apprentice Train Examiners.
        </p>
        <p>
          In the year 2010, STC, CB was shifted to its Newly constructed building which has an excellent infrastructural facilities and state of Art Labs and equipment for imparting qualitative training. All the classroom are equipped with latest training aids like multimedia projectors, magnetic white board. Facilities like Library, Hostel, Mess, Sports and Recreation club and Grounds for outdoor games are provided, Yoga and Meditation classes facilities are also available in the hostel to keep the trainees physically and mentally sound.
        </p>
        <p>
          The faculty of the STC (Gazetted and Non Gazetted) have a rich field experience and drawn from Workshops and Open lines.
        </p>
        <p>
          Teaching Methodology includes group discussion, lectures, demonstration on computerized working models, cut section models, field visit to workshops, sheds, depots, yards and stations are also being arranged for Trainees.
        </p>
      </section>

      <section id="objective">
        <h2>Objective & Aim</h2>
        <p>
          <strong>Objective of Training Centre:</strong> To fulfill the need of training requirement of Mechanical and Electrical Supervisors and to develop them as Front-line Manager so that they prove themselves more effective and efficient for organizational needs at their working place.
        </p>
        <p>
          <strong>Aim:</strong> To develop such Supervisors who could be able to provide effective leadership to their staff in order to obtain productivity, quality, cost effectiveness, punctuality and high safety in Railway operation. This will be achieved by:
        </p>
        <ul>
          <li>To upgrade the knowledge, skill and positive attitude as per the need of Railway organization.</li>
          <li>To upgrade and refresh the Supervisors with late development in C&W and Loco maintenance.</li>
          <li>To improve professional competency, curtsy a loyalty.</li>
          <li>To provide safety and cost conscious.</li>
          <li>To develop quality assurance, skills in day to the working.</li>
        </ul>
      </section>

      <section id="history">
        <h2>History</h2>
        <p>
          Supervisor training center Charbagh was established on 14th January 1956 to Cater the training needs of Technical supervisor of mechanical and electrical department of Northern Railway, earlier it was named as System Training School. STC Charbagh is located near to Northern Railway Lucknow station it is easily approachable by road. In the British period it was the old gun factory area adjacent to locomotive workshop Charbagh. Old BTC area was equipped with machines for providing training to the artisan staff in basic mechanical operations, with change in time STC has upgraded itself to meet the requirement it of future trends in Indian Railways. STC was shifted to new building in 2009 which has an excellent infrastructure facility.
        </p>
        <p>
          STC Charbagh is now having modern Laboratories for providing training to supervisors on different aspects of Indian Railway like Diesel lab, Carriage and Wagon lab, Air conditioning lab, Train lighting lab, Metallurgical lab and Electrical lab. STC is also having Center for excellence for wheel slide protection system of LHB coaches and for welding process. In continuation to the developmental process STC is planning to set up an Automation and 3D Modeling lab.
        </p>
        <p>
          STC also provides opportunity to trainees to impart in extracurricular activities for overall development of their personality and thus helping Indian Railways in providing skilled team of Supervisors.
        </p>
      </section>

      <section id="facilities">
        <h2>Facilities Available</h2>
        <p>The Centre Provides theoretical training on subjects and syllabus, approved by Railway Board, to all the Mechanical & Electrical Supervisors. Overall capacity of STC is 126 trainees at a time.</p>
        <ol>
          <li>05 Classrooms (Air Conditioned).</li>
          <li>Auditorium cum Seminar hall.</li>
          <li>Diesel Engine Lab.</li>
          <li>C&W Lab.</li>
          <li>Computer Lab.</li>
          <li>Electrical & Train Lighting Lab.</li>
          <li>Air Conditioning Lab.</li>
          <li>Welding Lab.</li>
          <li>WSP Lab.</li>
          <li>C&W Model Park.</li>
          <li>Library (e-Granthalaya).</li>
          <li>Heritage Gallery.</li>
          <li>Hostel with Messing Facilities.</li>
          <li>Gymnasium.</li>
          <li>Automation Lab.</li>
          <li>3D Modelling Lab.</li>
        </ol>
      </section>

      <section id="faculty">
        <h2>Our Faculty</h2>
        <div className="faculty-table-container">
          <table className="faculty-table">
            <thead>
              <tr>
                <th>Sr.</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Experience</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {facultyData.map((faculty) => (
                <tr key={faculty.sr}>
                  <td>{faculty.sr}</td>
                  <td>{faculty.name}</td>
                  <td>{faculty.designation}</td>
                  <td>{faculty.experience}</td>
                  <td><a href={`mailto:${faculty.email}`}>{faculty.email}</a></td>
                  <td>{faculty.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>For inquiries, please email us at: <a href="mailto:support@example.com">support@example.com</a></p>
      </section>
    </div>
  );
};

export default About;
