import React from 'react';
import { Link } from 'react-router-dom';
import { branches } from '../Pages/CourseModule'; // We'll export this data
import '../../App.css';

// Helper to get a few projects to feature
const getFeaturedProjects = () => {
    const featured = [];
    // Get one project from each main branch if they exist
    if (branches[0]?.subBranches[0]?.projects[0]) featured.push(branches[0].subBranches[0].projects[0]);
    if (branches[1]?.subBranches[0]?.projects[0]) featured.push(branches[1].subBranches[0].projects[0]);
    if (branches[2]?.subBranches[0]?.projects[0]) featured.push(branches[2].subBranches[0].projects[0]);
    return featured.slice(0, 3); // Ensure we only show up to 3
};

const FeaturedProjects = () => {
    const projects = getFeaturedProjects();

    return (
        <section className="featured-projects-section">
            <div className="container">
                <h2 className="section-title">Featured Training Projects</h2>
                <p className="section-subtitle">A glimpse into the hands-on projects students can work on.</p>
                <div className="project-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <img src={project.imageUrl} alt={project.title} className="project-card-image" />
                            <div className="project-card-content">
                                <h4 className="project-card-title">{project.title}</h4>
                                <p className="project-card-description">{project.description.substring(0, 100)}...</p>
                                <div className="project-card-actions">
                                    <Link to="/course-modules" className="btn btn-primary">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;