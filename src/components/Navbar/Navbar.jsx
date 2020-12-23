import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const nvg = {
    Profile: '/profile',
    Dialogs: '/dialogs',
    News: '/news',
    Music: '/music',
    Settings: '/settings'
  }

  return (
    <nav className={classes.nav}>
      <div>
        {Object.keys(nvg).map(elem => {
          return (
            <div key={elem}>
              {(elem == "Settings") ? (<br />) : ''}
              <NavLink to={nvg[elem]} activeClassName={classes.activeLink} >
                {elem}
              </NavLink>
            </div>
          )
        })}
      </div>
    </nav >
  )
}

export default Navbar

