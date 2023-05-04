import React from 'react'
import { dataMembers } from './data/DataAPI'
import { Icon } from '@iconify/react'

const Member = () => {
  return (
    <div className="content">
      <span className="title">Members</span>
      <div className="col-12 d-flex justify-content-between py-2">
        <div className="col-6 d-flex align-items-end">List of members</div>
        <div className="col-6 text-end">
          <button type="button" className="btnPrimary" >
            <span className="d-none d-sm-block">Add Member</span>
            <Icon className="d-block d-sm-none" icon="material-symbols:add" />
          </button>
        </div>
      </div>
      <div className="table-responsive text-nowrap">
        <table className="table table-bordered align-middle">
          <thead>
            <tr className="text-center">
              <th className="col">No</th>
              <th className="col-4">Name</th>
              <th className="col-3">Address</th>
              <th className="col-3">Phone</th>
              <th className="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {dataMembers.map((mb, i) => (
              <tr key={mb.id}>
                <th className="text-center">{i+=1}</th>
                <td>{mb.name}</td>
                <td>{mb.address}</td>
                <td>{mb.phone}</td>
                <td className="text-center d-flex gap-2">
                  <button type="button" className="btnPrimary">Edit</button>
                  <button type="button" className="btnSecondary">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Member