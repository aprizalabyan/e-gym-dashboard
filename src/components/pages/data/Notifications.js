import React from 'react'
import { dataNotif } from './DataAPI'


const Notifications = () => {
  return (
    dataNotif.map((dn) => (
      <div className="list-group-item d-flex justify-content-between align-items-start py-2 gap-2" key={dn.title}>
        <div className="me-auto col-9">
          <div className="fw-bold">{dn.title}</div>
          <span className="notifText">{dn.body}</span>
        </div>
        {/* <span className="badge btnPrimary rounded-pill">New</span> */}
        <small className="text-secondary">{dn.time}</small>
      </div>
    ))
  )
}

export default Notifications