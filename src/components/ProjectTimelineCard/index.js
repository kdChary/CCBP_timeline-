// importing icons
import {AiFillCalendar} from 'react-icons/ai'

// importing Styling
import './index.css'

const ProjectTimelineCard = props => {
  const {project} = props
  const {imageUrl, projectTitle, duration, description, projectUrl} = project

  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-header">
        <h2 className="project-title">{projectTitle}</h2>
        <p className="project-duration">
          <AiFillCalendar />
          {duration}
        </p>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} target="_blank" rel="noreferrer">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
