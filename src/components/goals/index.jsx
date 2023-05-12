import React from 'react'
import c from './goals.module.scss'

const Goals = () => {
  return (
    <div className={c.goals_container}>
      <div className={c.goals}>
        <div className={c.image}>
          <img src="/img/goals.webp" alt="" />
        </div>
        <div className={c.title}>
          <h1>Цели</h1>
          <p>
            Компания формирует свою стратегию в соответствии с новейшими 
            требованиями в области экологии, системы менеджмента качества, 
            энергосбережения и безопасности.
          </p>
          <p>
            Накопленный опыт работ, технический потенциал и квалификация 
            сотрудников, внедрение передовых технологий позволяет нам осваивать 
            новые сегменты рынка строительства, в том числе на территории стран 
            таможенного союза.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Goals