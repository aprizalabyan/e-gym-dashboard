import React from 'react'
import { Icon } from '@iconify/react'

const Logout = () => {
  return (
    <>
      <div className="modal fade" id="logout-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <p>Are you sure,<br/>
              you want to logout?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btnThird" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btnPrimary" data-bs-target="#success-modal" data-bs-toggle="modal">Logout</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="success-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <p>Successfully logout</p>
              <Icon icon="material-symbols:check-circle-outline-rounded" className="icon"/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btnThird" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logout

