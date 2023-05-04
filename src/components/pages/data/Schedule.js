import React from 'react'
import { dataSchedule } from './DataAPI'

const Schedule = () => {
  return (
    <>
      {dataSchedule.map((ds, i) => (
      <>
      <div className="col-6" key={ds.title}>
        <div className="text-center mt-2 pb-2">
            <div className="schedule-title">{ds.title}</div>
            <span className="schedule-detail">
              {ds.date}<br/>
              {ds.time}<br/>
              with<br/>
              <span className="fw-bold">{ds.trainer}</span>
            </span>
        </div>
      </div>
      <div className={(i===0) ? "vl mt-3" : ""}/>
      </>
    ))}
    </>
  )
}

export default Schedule