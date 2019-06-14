import React from 'react';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text-darken-2">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>
                <p>Posted by Ivan Yufen</p>
                <p className="grey-text">3rd June 2019, 5.08 AM</p>
            </div>
        </div>
    )
}

export default ProjectSummary;