import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
    const projectSummaryView = projects && projects.map((project) => {
        return <ProjectSummary project={project} key={project.id} />
    });

    return (
        <div className="project-list section">
            <h5>Project List</h5>
            {projectSummaryView}
        </div>
    )
}

export default ProjectList;