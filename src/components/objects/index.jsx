import React, { useRef } from 'react'
import c from './objects.module.scss'

const Objects = () => {
  const ref = useRef(null);

  return (
    <div className={c.objects_container} ref={ref}>
      <div className={c.objects}>
        <div className={c.title}>
          <h1>Объекты</h1>
        </div>
        <div className={c.objects_cards}>
          <div className={c.objects_card}>
            <div className={c.name}>
              <h1>
                Название объекта
              </h1>
              <p>
                Астраханское газоконденсатное месторождение (устройство сетей 
                электроснабжения 6кВ, 0,4кВ и сетей КИПиА при строительстве 
                скважин).
              </p>
            </div>
            <div className={c.card_image}>
              <img src="https://i.pinimg.com/originals/b6/55/70/b65570254b28317eb400908f7b4341fb.jpg" alt="" />
            </div>
          </div>
          <div className={c.objects_card}>
            <div className={c.name}>
              <h1>
                Название объекта
              </h1>
              <p>
                Комплекс строительно-монтажных работ при Реконструкции 
                Краснодарской СПХГ
              </p>
            </div>
            <div className={c.card_image}>
              <img src="https://i.pinimg.com/originals/b6/55/70/b65570254b28317eb400908f7b4341fb.jpg" alt="" />
            </div>
          </div>
          <div className={c.objects_card}>
            <div className={c.name}>
              <h1>
                Название объекта
              </h1>
              <p>
                Строительство котельной мощностью 50 МВт. "Устройство 
                внеплощадочной ливневой канализации Ду315" расположенной по 
                адресу: городской округ Химки, мкр. Подрезково.
              </p>
            </div>
            <div className={c.card_image}>
              <img src="https://i.pinimg.com/originals/b6/55/70/b65570254b28317eb400908f7b4341fb.jpg" alt="" />
            </div>
          </div>
          <div className={c.objects_card}>
            <div className={c.name}>
              <h1>
                Название объекта
              </h1>
              <p>
                АО "Газпромнефть МНПЗ« Работы по остановочному капитальному 
                ремонту технологического оборудования и трубопроводов цехов аммиак 2, ЦМУИК №1 (сак); Ремонт установки лг-35-8/300 б цеха 3 
                (газокаталитического производства); 
              </p>
            </div>
            <div className={c.card_image}>
              <img src="https://i.pinimg.com/originals/b6/55/70/b65570254b28317eb400908f7b4341fb.jpg" alt="" />
            </div>
          </div>
          <div className={c.objects_card}>
            <div className={c.name}>
              <h1>
                Название объекта
              </h1>
              <p>
                Строительство подводных переходов газо-нефтепроводов методом ГНБ
                через р. Бердь, р. Вах, р. Сороминская, р. Большой Юган, р. Чая, р. Томь, 
                р. Обь и др.
              </p>
            </div>
            <div className={c.card_image}>
              <img src="https://i.pinimg.com/originals/b6/55/70/b65570254b28317eb400908f7b4341fb.jpg" alt="" />
            </div>
          </div>
          <div className={c.objects_card}>
            <div className={c.name}>
              <h1>
                Название объекта
              </h1>
              <p>
                Капитальный ремонт многоквартирных жилых домов по адресу: ЛНР, г. 
                Северодонецк.
              </p>
            </div>
            <div className={c.card_image}>
              <img src="https://i.pinimg.com/originals/b6/55/70/b65570254b28317eb400908f7b4341fb.jpg" alt="" />
            </div>
          </div>
          <div className={c.objects_card}>
            <div className={c.name}>
              <h1>
                Название объекта
              </h1>
              <p>
                «Устройство подводного перехода методом ГНБ через р. Мертвый Донец, 
                ж/д путей на перегоне Синявская – Хапры 1311 км ПК 4» по объекту: 
                «Строительство альтернативного источника водоснабжения «Река Дон -
                канал Северский Донец - Донбасс»
              </p>
            </div>
            <div className={c.card_image}>
              <img src="https://i.pinimg.com/originals/b6/55/70/b65570254b28317eb400908f7b4341fb.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Objects