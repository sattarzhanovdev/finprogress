import React from "react";
import c from "./products.module.scss";
import img1 from '../products/quik1.jpg'
const Products = () => {
  return (
    <div className={c.container}>
      <div className={c.products}>
        <div className={c.product}>
          <h1>Бентонит</h1>
          <p>
            Наша компания занимается поставкой и продажей турецких
            высококачественных дисперсионных систем, предназначенных для
            промывки скважин при проведении горизонтального направленного
            бурения.
          </p>
          <p>
            По вопросам покупки и сотрудничества обращаться по телефону{" "}
            <span>+7 988 5626000</span>
          </p>
          <p>
            Для производства буровых работ рекомендуется применять растворы на
            основе бентонита марки HDD Gel Premium.
          </p>
          <p>
            Бентонит или бентонитовая глина для скважины является основой для
            приготовления буровых растворов при производстве работ методом
            горизонтально-направленного бурения. Ключевая особенность применения
            бентонита для ГНБ - его способность создать высокопрочную сузпензию
            при затворении в воде, которая в свою очередь позволяет не только
            очищать скважину от выбуренной породы (шлама), но и укреплять стенки
            скважины за счет своей природной глинистой основы.
          </p>
          <h3>Назначение Бентонита</h3>
          <p>
            Глина бентонитовая для ГНБ осуществляет группу значимых функций:
          </p>
          <ul>
            <li>
              Очистка скважины за счет выноса бурового шлама при создании
              необходимого потока
            </li>
            <li>
              Удержание частиц выбуренного шлама в отсутствие циркуляции
              (потока) бурового раствора
            </li>
            <li>
              Формирование фильтрационной корки на стенках скважины, которая
              способствует укреплению самих стенок и снижению проникновения
              свободной воды в грунт.
            </li>
            <li>
              Охлаждение буровой колонны и бурового инструмента (расширители,
              переходники и пр.)
            </li>
          </ul>
          <h3>Преимущества Бентонита</h3>
          <div className={c.preim}>
            <p>
              <span>1.</span>
              Быстрый набор вязкостно-реологических характеристик.
            </p>
            <p>
              <span>2.</span>
              Стабильность параметров
              бурового раствора.
            </p>

          </div>
        </div>
        <div className={c.main__cards}>
          <div className={c.main__card}>
            <img src="https://kayensondaj.com/wp-content/uploads/Bentonit.jpg" alt="" />
            <div className={c.main__text__card}>
              <h3>Bentonite</h3>
            </div>
            <p className={c.info__text}>QUIK-GEL viscosifier is very easy-to-mix, finely ground in 200 mesh, premium-grade, high-yielding sodium bentonite, imparts viscosity and fluid loss control.</p>
          </div>
          <div className={c.main__card}>
            <img src="https://kayensondaj.com/wp-content/uploads/HDD.jpg" alt="" />
            <div className={c.main__text__card}>
              <h3>Hdd Bentonite</h3>
            </div>
            <p className={c.info__text}>Nero Gel Hdd, specially designed for horizontal drilling operations, is a high viscosifier, very easy-to-mix, premium-grade, high-yielding sodium bentonite, imparts viscosity and fluid loss control.</p>
          </div>
          <div className={c.main__card}>
            <img src="https://kayensondaj.com/wp-content/uploads/pelet.jpg" alt="" />
            <div className={c.main__text__card}>
              <h3>Pelleted Bentonite</h3>
            </div>
            <p className={c.info__text}>Pelleted Nero-Gel bentonite, prilled form of pure high-grade sodium bentonite imparts viscosity and lost circulation. Suitable for restoring unpermeable layers in the soil.</p>
          </div>
        </div>
        <div className={c.next__line__cards}>
          <div className={c.management}>
            <div className={c.main__card}>
              <img src="https://kayensondaj.com/wp-content/uploads/barit.jpg" alt="" />
              <div className={c.main__text__card}>
                <h3>Barite</h3>
              </div>
              <p className={c.info__text}>A natural weighting agent Barium Sulphate (BaSo4), highly increases the density of fluid mix in small amounts.</p>
            </div>
            <div className={c.main__card}>
              <img src="https://kayensondaj.com/wp-content/uploads/kalsiyum.jpg" alt="" />
              <div className={c.main__text__card}>
                <h3>Calcium Carbonate</h3>
              </div>
              <p className={c.info__text}>Calcium Carbonate (CaCO3), is a weighting additive, increases the density of drilling fluid.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
