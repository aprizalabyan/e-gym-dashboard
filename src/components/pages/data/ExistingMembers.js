import React from 'react'
import { dataExisting } from './DataAPI'

const ExistingMembers = () => {
    return (
      dataExisting.map((ex) => (
        <div className="col-12 d-flex align-items-center" key={ex.id}>
          <div className="col-9 d-flex align-items-center">
            <div className="col-3 me-2 p-2"><img className="w-100" src={ex.profile} alt="person" /></div>
            <div className="col-auto recent-members">
              <span>{ex.name}</span><br/>
              <small className="col-3 text-secondary">{ex.address}</small>
            </div>
          </div>
          <small className="col-3 text-secondary text-end">Started at {ex.started}</small>
        </div>
      ))
    )
}

export default ExistingMembers