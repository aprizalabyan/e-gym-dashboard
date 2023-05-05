import React from 'react'
import Carousel from 'react-multi-carousel'
import { Icon } from '@iconify/react';
import person from '../../assets/person.png'
import VisitingMembers from './data/VisitingMembers';
import ExistingMembers from './data/ExistingMembers';
import Notifications from './data/Notifications';
import UpcomingSchedule from './data/UpcomingSchedule';

const Dashboard = () => {
  const responsive = {
    large: {
      breakpoint: { max: 3000, min: 921 },
      items: 4
    },
    medium: {
      breakpoint: { max: 920, min: 577 },
      items: 4
    },
    small: {
      breakpoint: { max: 576, min: 0 },
      items: 3
    }
  };

  return (
    <div className="content">
      <span className="title">Dashboard</span>
      <div className="row mt-3">
        <div className="col-12 col-lg-7 ">
          <div id="overview" className="card mb-4">
            <div className="d-flex flex-column gap-4 py-1 px-1 py-md-3 px-md-4">
              <div className="col-12 d-flex justify-content-between">
                <span className="subtitle">Overview</span>
                <select className="btnSecondary dropdown" aria-label="Default select example">
                  <option className="dropdown-menu">Select Range</option>
                  <option value="1">Last 7 Days</option>
                  <option value="2">Last 30 Days</option>
                  <option value="3">All Time</option>
                </select>
              </div>
              <div className="col-12 d-flex flex-column flex-sm-row">
                <div className="overview col m-2">
                  <div className="count">
                    <span>23</span>
                    <div className="arrow">
                      <Icon icon="material-symbols:arrow-drop-up-rounded"/>
                      <Icon icon="material-symbols:arrow-drop-down-rounded" style={{color: "var(--darkColor2)"}}/>
                    </div>
                  </div>
                  <h5>New Members</h5>                  
                </div>
                <div className="overview col m-2">
                  <div className="count">
                    <span>416</span>
                    <div className="arrow">
                      <Icon icon="material-symbols:arrow-drop-up-rounded"/>
                      <Icon icon="material-symbols:arrow-drop-down-rounded" style={{color: "var(--darkColor2)"}}/>
                    </div>
                  </div>
                  <h5>Visiting</h5> 
                </div>
              </div>
              <div className="col-12">
                <span className="subtitle">Recent Members</span>
              </div>
              <div className="col-12">
                <Carousel responsive={responsive}
                  infinite={false}
                  removeArrowOnDeviceType={["large", "medium", "small"]}
                  swipeable={false}
                  draggable={false}
                  centerMode={false}
                  >
                  <div className="text-center recent-members">
                    <img src={person} alt="person" />
                    <p>Belerick</p>
                  </div>
                  <div className="text-center recent-members">
                    <img src={person} alt="person" />
                    <p>Alice G</p>
                  </div>
                  <div className="text-center recent-members">
                    <img src={person} alt="person" />
                    <p>M Julian</p>
                  </div>
                  <div className="text-center recent-members">
                    <img src={person} alt="person" />
                    <p>Valentina</p>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
          <div id="visitingMember" className="card mb-4">
            <div className="d-flex flex-column gap-4 py-1 px-1 py-md-3 px-md-4">
              <div className="col-12 d-flex flex-column">
                <span className="subtitle">Visiting Members</span>
                <small className="fst-italic text-secondary">Last 7 Days</small>
              </div>
              <div className="col-12">
                <VisitingMembers />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5">
          <div id="notification" className="card mb-4">
            <div className="card-body py-1 px-1 py-md-3 px-md-4">
              <div className="col-12 text-center pb-3">
                <span className="subtitle">Notifications</span>
              </div>
              <div className="notify ms-2">
                <Notifications />
              </div>
            </div>
          </div>
          <div id="upcomingSchedule" className="card mb-4">
            <div className="card-body py-1 px-1 py-md-3 px-md-4">
              <div className="col-12 text-center">
                <span className="subtitle">Upcoming Schedule</span>
              </div>
              <div className="d-flex">
                <UpcomingSchedule />
              </div>
            </div>
          </div>
          <div id="existingMember" className="card mb-4">
            <div className="card-body py-1 px-1 py-md-3 px-md-4">
              <div className="col-12 text-center mb-3">
                <span className="subtitle">Existing Member on Gym</span>
                <br/>
                <small className="fst-italic text-secondary">11 April 2023 - 10.32 am</small>
              </div>
              <ExistingMembers />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard