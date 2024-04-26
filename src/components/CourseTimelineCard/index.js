// importing Icons
import {BsClockFill} from 'react-icons/bs'

// importing styling from css file
import './index.css'

const CourseTimelineCard = props => {
  const {course} = props
  const {courseTitle, description, duration, tagsList} = course

  const courseTags = () => (
    <ul className="course-tags-list">
      {tagsList.map(tag => (
        <li key={tag.id} className="course-tag">
          <p className="tag">{tag.name}</p>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="course-item">
      <div className="course-title-duration">
        <h2 className="course-title">{courseTitle}</h2>
        <p className="course-duration">
          <BsClockFill />
          {duration}
        </p>
      </div>

      <p className="course-description">{description}</p>
      {courseTags()}
    </div>
  )
}

export default CourseTimelineCard
