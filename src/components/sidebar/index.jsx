import React from 'react'
import c from './sidebar.module.scss'
import { NavList } from '../../utils'
import { IoClose } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

const Sidebar = ({active, setActive}) => {
  const Navigate = useNavigate()
  
  return (
    <div className={active ? c.sidebar : c.sidebar_none}>
      <ul className={c.close}>
        <li onClick={() => setActive(false)}>
          <IoClose/>
        </li>
      </ul>
      <ul className={c.list}>
        {
          NavList.map(item => (
            <li 
              key={item.id}
              onClick={() => {
                setActive(false)
                Navigate(item.route)
              }}
            >
              <Link to={item.route}>
                {item.title}
              </Link>
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
  )
}

export default Sidebar