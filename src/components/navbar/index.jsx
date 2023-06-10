import React from 'react'
import c from './navbar.module.scss'
import { NavList } from '../../utils'
import { FaBars } from 'react-icons/fa'
import { BsEnvelope, BsFillTelephoneFill } from 'react-icons/bs'
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
                  +7 (863) 283-09-33
                </Link>
              </h3>
              
            </div>
          </div>
          <div className={c.email}>
            <div className={c.icon}>
              <BsEnvelope /> 
            </div>
            <div className={c.contact}>
              <h3>
                <Link to={'mailto:info@finprogress.ru'}>
                  info@finprogress.ru
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
        <div className={c.bars}>
          <li onClick={() => setActive(true)}>
            <FaBars />
          </li>
        </div>
        <ul className={c.list}>
          {
            NavList.map(item => (
              <li 
                key={item.id}
              >
                <Link 
                  to={item.route} 
                  className={location.pathname === item.route ? c.active : null}
                >
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