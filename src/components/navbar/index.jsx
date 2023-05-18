import React from 'react'
import c from './navbar.module.scss'
import { NavList } from '../../utils'
import { FaBars } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import Sidebar from '../sidebar'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const [ active, setActive ] = React.useState(false)
  const location = useLocation()
  
  return (
    <div className={c.nav_container} >
      <div className={c.contacts}>
        <div className={c.left}>
          <div className={c.phone}>
            <div className={c.icon}>
              <BsFillTelephoneFill /> 
            </div>
            <div className={c.contact}>
              <h3>
                <Link to={'tel:+78632830933'}>
                  +7(863) 283-09-33
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className={c.right}>
          <Link to={'tel:+78632830933'}>
            <button>
              Связаться с нами
            </button>
          </Link>
        </div>
      </div>
      <div className={c.navbar}>
        <ul className={c.logo}>
          <li>
            <Link to={'/'}>
              <img src='/img/logo.webp' alt=''/>
            </Link>
          </li>
        </ul>
        <ul className={c.bars}>
          <li onClick={() => setActive(true)}>
            <FaBars />
          </li>
        </ul>
        <ul className={c.list}>
          {
            NavList.map(item => (
              <li 
                key={item.id}
                className={location.pathname === item.route ? c.active : null}
              >
                <Link to={item.route}>
                  {item.title}
                </Link>
              </li>
            ))
          }
          
        </ul>

      </div>
      <Sidebar active={active} setActive={setActive} />
    </div>
  )
}

export default NavBar