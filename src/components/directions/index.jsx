import React from 'react'
import c from './directions.module.scss'
import { DirectionsList } from '../../utils'

const Directions = () => {
  return (
    <div className={c.directions_container}>
      <div className={c.directions}>
        <div className={c.title}>
          <h1>Основные направления деятельности</h1>
        </div>
        <div className={c.cards}>
          {
            DirectionsList.map(item => (
              <div 
                className={c.card}
                key={item.id}
              >
                <img 
                  src={'/img/history.webp'} 
                  alt="card__image" 
                />
                <div className={c.desc}>
                  <p>
                    {item.text}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Directions