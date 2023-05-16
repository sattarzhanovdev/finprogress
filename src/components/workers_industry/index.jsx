import React from 'react'
import c from './industry.module.scss'
import { GiGasMask } from 'react-icons/gi'
import { MdOutlineEmojiTransportation } from 'react-icons/md'
import { SlEnergy } from 'react-icons/sl'

const Workers_industry = () => {
  return (
    <div className={c.workers}>
      <div className={c.card}>
        <li >
          <GiGasMask />
        </li>
        <p>
          Отраслей промышленности (газовой, нефтяной, дорожного строительства);
        </p>
      </div>
      <div className={c.card}>
        <li>
          <MdOutlineEmojiTransportation />
        </li>
        <p>
          Транспорта (автодорожный, трубопроводный, железнодорожный) 
        </p>
      </div>
      <div className={c.card}>
        <li>
          <SlEnergy />
        </li>
        <p>
          Энергетики и связи
        </p>
      </div>
    </div>
  )
}

export default Workers_industry

