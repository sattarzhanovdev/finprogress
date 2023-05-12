import React from 'react'
import c from './footer.module.scss'

const Footer = () => {
  return (
    <div className={c.footer_container}>
      <div className={c.footer}>
        <div className={c.title}>
          <h1>Контактная информация</h1>
        </div>
        <div className={c.contents}>
          <div className={c.content}>
            <h3>Наименование организации: ООО «ФИНПРОГРЕСС»</h3>
            <h3>ИНН/КПП: 6162064746 / 616701001</h3>
          </div>
          <div className={c.content}>
            <h3>Адрес: 344019, г. Ростов-на-Дону, ул. 2-я линия</h3>
            <h3>Тел./факс: +7(863) 283-09-33</h3>
          </div>
          <div className={c.content}>
            <h3>Директор: Ализаде Владимир Николаевич</h3>
            <h3>Заместитель директора: Филиппов Денис Анатольевич</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer