import React from 'react'
import { NavList } from '../../utils'
import { Link, useLocation } from 'react-router-dom'
import c from './nav_phone.module.scss'

const NavPhone = () => {
  const location = useLocation()

  return (
    <div className={c.navPhone_container}>
      <ul className={c.navPhone}>
        {
          NavList.map(item => (
            <li key={item.id}>
              <Link to={item.route} className={location.pathname === item.route ? c.active : ''}>
                {item.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default NavPhone