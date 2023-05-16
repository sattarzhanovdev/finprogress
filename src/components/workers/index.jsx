import React from 'react'
import c from './workers.module.scss'
import { SlEnergy } from 'react-icons/sl'
import { MdOutlineEmojiTransportation } from 'react-icons/md'
import { GiGasMask } from 'react-icons/gi'
import Workers_industry from '../workers_industry'

const Workers = () => {
  return (
    <div className={c.workers_container}>
      <div className={c.workers}>
        <div className={c.title}>
          <h1>Сотрудники</h1>
          <p>
            В настоящее время в ООО «ФИНПРОГРЕСС» работает более 200 
            человек, специалистов различного профиля, в том числе 
            высококвалифицированный штат инженерно-технического персонала с 
            профильным высшим образованием.
          </p>
          <p>
            Все профессионалы высокой квалификации, с опытом работы в 
            проектных и строительно-монтажных организациях на различных 
            объектах: 
            <Workers_industry />
          </p>
          <p>
            Весь персонал периодически проходит обучение и аттестацию в 
            области охраны труда, промышленной безопасности, экологии, 
            пожарной и электробезопасности, в специализированных центрах.
          </p>
          <p>
            Ответственные специалисты за выполнение сварочно- монтажных 
            работ аттестованы в соответствии с требованиями НАКС.
          </p>
          <p>
            Компания постоянно инвестирует в развитие своей команды и 
            профессиональный рост сотрудников.
          </p>
          <p>
            Высокий уровень подготовки персонала является залогом успеха 
            всего предприятия.
          </p>
        </div>
        <div className={c.image}>
          <img 
            src="/img/workers.webp" 
            alt="workers" 
          />
        </div>
      </div>
    </div>
  )
}

export default Workers