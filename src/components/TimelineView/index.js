// Importing dependencies.
import {Chrono} from 'react-chrono'

import './index.css'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  const courseList = timelineItemsList.filter(
    item => item.categoryId === 'COURSE',
  )
  const projectsList = timelineItemsList.filter(
    item => item.categoryId === 'PROJECT',
  )
  const titles = timelineItemsList.map(item => ({title: item.title}))

  console.log(courseList, projectsList)

  return (
    <div className="chrono-container">
      <Chrono mode="VERTICAL_ALTERNATING" items={titles}>
        {courseList.map(courses => (
          <CourseTimelineCard key={courses.id} course={courses} />
        ))}
        <p>Hello2</p>
      </Chrono>
    </div>
  )
}

export default TimelineView
