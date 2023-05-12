import React from 'react'
import c from './navbar.module.scss'
import { NavList } from '../../utils'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../sidebar'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const [ active, setActive ] = React.useState(false)
  const location = useLocation()
  
  const Navivgate = useNavigate()

  const scrolling = (item) => {
    console.log(item);
    if(item.title === 'Главная'){
      Navigate('/')
    }else if(item.title === 'О нас'){
      Navigate(item.route)
    }else if(item.title === 'Сотрудники'){
      window.scrollTo(0, 650)
      Navigate('/')

    }else if(item.title === 'Тех. оборудование'){
      window.scrollTo(0, 1549)
      Navigate('/')

    }else if(item.title === 'Наши объекты'){
      window.scrollTo(0, 2180)
      Navigate('/')
    }
  }

  const Navigate = useNavigate()

  return (
    <div className={c.nav_container} >
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
                onClick={() => scrolling(item)}
                className={location.pathname === item.route ? c.active : null}
              >
                {item.title}
              </li>
            ))
          }
          
        </ul>
        <Link to={'tel:+78632830933'}>
          <button>
            Связаться с нами
          </button>
        </Link>
      </div>
      <Sidebar active={active} setActive={setActive} />
    </div>
  )
}

export default NavBar