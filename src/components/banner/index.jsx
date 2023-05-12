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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quia repellendus modi delectus voluptate quam. Qui, quisquam? Similique necessitatibus molestias debitis, esse, nemo delectus ullam aliquam possimus eum at magnam?
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