import React from 'react';
import '../../App.css';

export const branches = [ // Export the branches data
    {
        id: 'cs',
        name: 'Computer Science & Engineering',
        description: 'Explore projects in software development, AI, data science, and cybersecurity.',
        subBranches: [
            {
                name: 'Web & App Development',
                projects: [
                    {
                        id: 1,
                        title: 'Full-Stack E-commerce Platform',
                        description: 'Build a complete e-commerce platform using the MERN stack, with features like user authentication, product catalog, and payment integration.',
                        technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
                        imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
                    }
                ]
            },
            {
                name: 'AI & Machine Learning',
                projects: [
                    {
                        id: 2,
                        title: 'Sentiment Analysis Model',
                        description: 'Develop and train a deep learning model to analyze and classify sentiment from text data using Python and TensorFlow.',
                        technologies: ['Python', 'TensorFlow', 'NLTK', 'Scikit-learn'],
                        imageUrl: 'https://plus.unsplash.com/premium_photo-1682144944581-7ed4b3e8ea93?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                ]
            }
        ]
    },
    {
        id: 'mech',
        name: 'Mechanical Engineering',
        description: 'Engage in projects involving innovative design, thermodynamics, and robotics.',
        subBranches: [
            {
                name: 'Robotics & Automation',
                projects: [
                    {
                        id: 3,
                        title: '3D-Printed Robotic Arm',
                        description: 'Design, model, and prototype a functional 4-axis robotic arm using CAD software and 3D printing for pick-and-place tasks.',
                        technologies: ['SolidWorks', 'AutoCAD', '3D Printing', 'Arduino'],
                        imageUrl: 'https://images.unsplash.com/photo-1567773355484-0d4cf0ca11e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
                    }
                ]
            }
        ]
    },
    {
        id: 'ee',
        name: 'Electrical & Electronics Engineering',
        description: 'Work on cutting-edge projects in circuit design, IoT, and embedded systems.',
        subBranches: [
            {
                name: 'Internet of Things (IoT)',
                projects: [
                    {
                        id: 4,
                        title: 'IoT-Based Home Automation',
                        description: 'Create a smart home system to control lights and appliances remotely via a web dashboard using Raspberry Pi and sensors.',
                        technologies: ['Raspberry Pi', 'Python', 'MQTT', 'Sensors'],
                        imageUrl: 'https://images.unsplash.com/photo-1596658591534-591d75e2f2f7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                ]
            }
        ]
    }
];

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-card-image" />
            <div className="project-card-content">
                <h4 className="project-card-title">{project.title}</h4>
                <p className="project-card-description">{project.description}</p>
                <div className="project-card-tech">
                    <strong>Key Technologies:</strong>
                    <ul>
                        {project.technologies.map(tech => <li key={tech}>{tech}</li>)}
                    </ul>
                </div>
                <div className="project-card-actions">
                    <button className="btn btn-primary">View Project</button>
                    <button className="btn btn-secondary">Register Interest</button>
                </div>
            </div>
        </div>
    );
};

const CourseModule = () => {
    return (
        <section className="course-module-section">
            <div className="container">
                <h2 className="section-title">Summer Training Projects</h2>
                <p className="section-subtitle">Explore hands-on projects offered by STC across various engineering disciplines.</p>
                
                {branches.map(branch => (
                    <div key={branch.id} className="branch-section">
                        <h3 className="branch-title">{branch.name}</h3>
                        <p className="branch-description">{branch.description}</p>
                        {branch.subBranches.map(subBranch => (
                            <div key={subBranch.name} className="sub-branch-section">
                                {subBranch.name && <h4 className="sub-branch-title">{subBranch.name}</h4>}
                                <div className="project-grid">
                                    {subBranch.projects.map(project => (
                                        <ProjectCard key={project.id} project={project} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CourseModule;