import React from 'react'
import c from './sidebar.module.scss'
import { NavList } from '../../utils'
import { IoClose } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

const Sidebar = ({active, setActive}) => {

  const Navigate = useNavigate()
  
  const scrolling = (item) => {
    const windowWidth = Number(window.innerWidth.toString())
    console.log(item);
    if(item.title === 'Главная'){
      Navigate('/')
    }else if(item.title === 'О нас'){
      Navigate(item.route)
    }else if(item.title === 'Сотрудники'){
      Navigate('/')
      if(windowWidth <= 320){
        window.scrollTo(0, 1088)
      }else if(windowWidth <= 375){
        window.scrollTo(0, 1089)
      }else if(windowWidth <= 425){
        window.scrollTo(0, 1289)
      }else if(windowWidth <= 768){
        window.scrollTo(0, 1295)
      }
    }else if(item.title === 'Тех. оборудование'){
      Navigate('/')
      if(windowWidth <= 320){
        window.scrollTo(0, 2776)
      }else if(windowWidth <= 375){
        window.scrollTo(0, 2641)
      }else if(windowWidth <= 425){
        window.scrollTo(0, 2996)
      }else if(windowWidth <= 768){
        window.scrollTo(0, 2681)
      }
    }else if(item.title === 'Наши объекты'){
      Navigate('/')
      if(windowWidth <= 320){
        window.scrollTo(0, 3897)
      }else if(windowWidth <= 375){
        window.scrollTo(0, 3613)
      }else if(windowWidth <= 425){
        window.scrollTo(0, 3869)
      }else if(windowWidth <= 768){
        window.scrollTo(0, 3347)
      }
    }
  }

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
                scrolling(item)
              }}
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
  )
}

export default Sidebar