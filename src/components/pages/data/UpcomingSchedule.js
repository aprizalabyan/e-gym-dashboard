import React from 'react'
import { dataSchedule } from './DataAPI'

const UpcomingSchedule = () => {
  return (
    dataSchedule.map((ds, index) => (
      <div className="col-6 d-flex" key={index}>
        <div className="col-12 text-center mt-2 pb-2">
          <div className="schedule-title">{ds.title}</div>
          <span className="schedule-detail">
            {ds.date}<br/>
            {ds.time}<br/>
            with<br/>
            <span className="fw-bold">{ds.trainer}</span>
          </span>
        </div>
        <div className={(index===0) ? "vl mt-3" : ""}/>
      </div>
    ))
  )
}

export default UpcomingSchedule