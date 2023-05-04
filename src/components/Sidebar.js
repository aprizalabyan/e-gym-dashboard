import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'
import logo from '../assets/logo.png'
import logoIcon from '../assets/logo-icon.png'
import Logout from './pages/Logout'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo" id="logo-full">
        <img src={logo} alt="img" />
      </div>
      <div className="logo" id="logo-icon">
        <img src={logoIcon} alt="img" />
      </div>
      <div className="menu">
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>
              <Icon icon="radix-icons:dashboard" className="icon"/>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/member" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>
              <Icon icon="octicon:people-24" className="icon"/>
              <span>Members</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/schedule" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>
              <Icon icon="material-symbols:calendar-month-outline-rounded" className="icon"/>
              <span>Schedule</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/trainer" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>
              <Icon icon="map:gym" className="icon"/>
              <span>Trainers</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/payment" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>
              <Icon icon="ic:outline-payment" className="icon"/>
              <span>Payments</span>
            </NavLink>
          </li>
          <div className="line"/>
          <li className="nav-item">
            <NavLink to="/setting" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>
              <Icon icon="material-symbols:settings-outline" className="icon"/>
              <span>Settings</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/help" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>
              <Icon icon="ion:help-buoy-sharp" className="icon"/>
              <span>Help</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/logout" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")} data-bs-toggle="modal" data-bs-target="#logout-modal">
              <Icon icon="bx:log-out-circle" className="icon"/>
              <span>Log Out</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <Logout />
    </div>
  )
}

export default Sidebar