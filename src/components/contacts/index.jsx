import React from 'react'
import c from './contacts.module.scss'
import { FaEnvelope, FaHome, FaPhone } from 'react-icons/fa'

const Contacts = () => {
  return (
    <div className={c.container}>
      <div className={c.contacts}>
        <h1>Контакты</h1>
        <div className={c.map}>
          <div 
            style={{position:'relative', overflow:'hidden' }}
          >
            <a 
              href="https://yandex.ru/maps/39/rostov-na-donu/?utm_medium=mapframe&utm_source=maps"
              style={{color:'#eee', fontSize:'12px', position:'absolute', top:0 }}
            >
              Ростов‑на‑Дону
            </a>
            <a 
              href="https://yandex.ru/maps/39/rostov-na-donu/house/ulitsa_2_ya_liniya_9/Z0AYcQJhS00AQFptfX5zeHtnZA==/?ll=39.751287%2C47.229740&utm_medium=mapframe&utm_source=maps&z=16.78" 
              style={{color:'#eee', fontSize:'12px', position:'absolute', top:'14px'}}
            >
              Улица 2-я Линия, 9 — Яндекс Карты
            </a>
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=39.751287%2C47.229740&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzMwNDU1MRJd0KDQvtGB0YHQuNGPLCDQoNC-0YHRgtC-0LIt0L3QsC3QlNC-0L3Rgywg0J3QsNGF0LjRh9C10LLQsNC90YwsINGD0LvQuNGG0LAgMi3RjyDQm9C40L3QuNGPLCA5IgoNUgEfQhVB6zxC&z=16.78" 
              width="100%" 
              height="400" 
              frameborder="1" 
              allowfullscreen="true" 
              style={{position:'relative', border: 0}}>
            </iframe>
          </div>
        </div>
        <div className={c.info}>
          <div>
            <div className={c.left}>
              <li>
                <FaHome />
              </li>
            </div>
            <div className={c.text}>
              <h4>Адрес местонахождения:</h4>
              <p>
                344019, г. Ростов-на-Дону, ул. 2-я линия, д.9, литер: А, комната 6
              </p>
            </div>
          </div>
          <div>
            <div className={c.left}>
              <li>
                <FaPhone />
              </li>
            </div>
            <div className={c.text}>
              <h4>Телефон:</h4>
              <p>
                +7 (863) 283-09-33
              </p>
            </div>
          </div>
          <div>
            <div className={c.left}>
              <li>
                <FaEnvelope />
              </li>
            </div>
            <div className={c.text}>
              <h4>E-mail:</h4>
              <p>
                finprogress61@mail.ru
              </p>
            </div>
          </div>
          <div>
            <div className={c.left}>
              <li>
                <img 
                  src="/img/icon/director.svg" 
                  alt=""
                />
              </li>
            </div>
            <div className={c.text}>
              <h4>Директор:</h4>
              <p>
                Ализаде Владимир Николаевич
              </p>
            </div>
          </div>
          <div>
            <div className={c.left}>
              <li>
                <img 
                  src="/img/icon/director.svg" 
                  alt=""
                />
              </li>
            </div>
            <div className={c.text}>
              <h4>Заместитель директора:</h4>
              <p>
                Филиппов Денис Анатольевич
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts