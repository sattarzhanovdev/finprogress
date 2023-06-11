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
                Ао Газпромнефть мнпз
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, incidunt quidem libero excepturi eum ipsam, doloribus sit corporis explicabo repudiandae deleniti adipisci ipsa fuga, cum quis nostrum natus assumenda debitis!
              </p>
            </div>
            <div className={c.card_image}>
              <img src="https://сферанефтьигаз.рф/upload/node_photos/slider3_1587374901.jpg" alt="" />
            </div>
          </div>
          <div className={c.objects_card}>
            <div className={c.name}>
              <h1>
                Котельная 50 МВт
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, incidunt quidem libero excepturi eum ipsam, doloribus sit corporis explicabo repudiandae deleniti adipisci ipsa fuga, cum quis nostrum natus assumenda debitis!
              </p>
            </div>
            <div className={c.card_image}>
              <img src="https://static.tildacdn.com/tild6133-6238-4537-b736-323734623939/-min.png" alt="" />
            </div>
          </div>
          <div className={c.objects_card}>
            <div className={c.name}>
              <h1>
                Капитальный ремонт многоквартирных домов
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, incidunt quidem libero excepturi eum ipsam, doloribus sit corporis explicabo repudiandae deleniti adipisci ipsa fuga, cum quis nostrum natus assumenda debitis!
              </p>
            </div>
            <div className={c.card_image}>
              <img src="https://telegra.ph/file/2892bbb38e625e2ccc748.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Objects