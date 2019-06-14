import React from 'react'

function ProjectDetail(props) {
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-dept-0">
                <div className="div card-content">
                    <div className="card-content">
                        <span className="card-title">Project title - {id}</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eaque cumque officiis, quos rem dolorum hic numquam asperiores earum exercitationem vitae corrupti tenetur, maiores saepe at nulla eos. Et, dolorum?</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by Ivan Yufen S</div>
                        <div>Posted in 4th June, 5.00 PM</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectDetail
