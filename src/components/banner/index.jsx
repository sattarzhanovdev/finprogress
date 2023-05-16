import React from 'react'
import c from './banner.module.scss'

const Banner = () => {
  window.onscroll = function(e) {
    // log the length scrolled vertically
    console.log(window.pageYOffset);
}
  return (
    <div className={c.banner_container}>
      <div className={c.banner}>
        <div className={c.banner_content}>
          <h1>ФИНПРОГРЕСС</h1>
          <p>
            ООО «ФИНПРОГРЕСС» представляет собой современное строительное предприятие, обладающее офисными, производственными и складскими помещениями, парком тяжелой, легковой и специальной строительной техники.  
          </p>
          <button onClick={() => window.scrollTo(0, 650)}>
            Узнать подробнее
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner