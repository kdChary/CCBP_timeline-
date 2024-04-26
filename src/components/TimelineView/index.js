// Importing dependencies.
import {Chrono} from 'react-chrono'

import './index.css'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeline = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} course={item} />
    }
    return <ProjectTimelineCard key={item.id} project={item} />
  }

  return (
    <div className="chrono-container">
      <div className="timeline-header">
        <h3 className="title-tag">
          MY JOURNEY OF <span className="title">CCBP 4.0</span>
        </h3>
      </div>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{
          primary: '#0967d2',
          secondary: '#ffffff',
          cardBgColor: '#ffffff',
          titleColor: '#0967d2',
        }}
      >
        {timelineItemsList.map(item => renderTimeline(item))}
      </Chrono>
    </div>
  )
}

export default TimelineView
