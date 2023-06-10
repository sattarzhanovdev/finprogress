import React from 'react'
import c from './banner.module.scss'
import { useNavigate } from 'react-router-dom'
import { Components } from '..'

const Banner = () => {
  const Navigate = useNavigate()

  return (
    <div className={c.banner_container}>
      <div className={c.banner}>
        <div className={c.banner_content}>
          <h1>ФИНПРОГРЕСС</h1>
          <p>
            ООО «ФИНПРОГРЕСС» представляет собой современное строительное предприятие, обладающее офисными, производственными и складскими помещениями, парком тяжелой, легковой и специальной строительной техники.  
          </p>
          <button onClick={() => Navigate('/about/')}>
            Узнать подробнее
          </button>
        </div>
      </div>

    </div>
  )
}

export default Banner