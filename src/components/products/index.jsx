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
          <h3>Преимущества Бентонита Nero Gel HDD</h3>
          <br />
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
            <p>
              <span>3.</span>
              Очень простой в смешивании
            </p>
            <p>
              <span>4.</span>
              Не требует дополнительных полимеров и одинаково эффективно работает в песке,
              в глине и обводнённом реактивном суглинке
            </p>

          </div>
        </div>

        <div className={c.productsParent}>
          <div className={c.productsParent__items}>
            <div className={c.productsParent__items__imges}>
              <img src="https://kayensondaj.com/wp-content/uploads/Bentonit.jpg" alt="" />
              <div className={c.productsParent__items_desc}> <p>⬆</p>
                Это специально изготовленное присадка к буровому роствору,
                снижающая вязкость и водоотдачу для колонкового бурения 
               </div>
            </div>
            <h3>Бурение Бентонита</h3>
          </div>
          <div className={c.productsParent__items}>
            <div className={c.productsParent__items__imges}>
            <img src="https://kayensondaj.com/wp-content/uploads/HDD.jpg" alt="" />
              <div className={c.productsParent__items_desc}> <p>⬆</p>                Это специально разработаная для горизантального бурения, присадка для повышения вязкости, снижение потери воды</div>
            </div>
            <h3>Бентонит для горизантального бурения ГНб</h3>
          </div>
          <div className={c.productsParent__items}>
            <div className={c.productsParent__items__imges}>
              <img src="https://kayensondaj.com/wp-content/uploads/Bentonit.jpg" alt="" />
              <div className={c.productsParent__items_desc}> <p>⬆</p> 
              Его полуают путем сжатия бурового бентонита, это добавка, предотвращающая потерю воды и утечку
              </div>
            </div>
            <h3> Пелет БЕТНОНИТ</h3>
          </div>
          <div className={c.productsParent__items}>
            <div className={c.productsParent__items__imges}>
              <img src="https://kayensondaj.com/wp-content/uploads/Bentonit.jpg" alt="" />
              <div className={c.productsParent__items_desc}> <p>⬆</p>Сульфат Бария (BaSo4) используется для усугубление баритового бурового раствора</div>
            </div>
            <h3>Барит</h3>
          </div>
          <div className={c.productsParent__items}>
            <div className={c.productsParent__items__imges}>
              <img src="https://kayensondaj.com/wp-content/uploads/Bentonit.jpg" alt="" />
              <div className={c.productsParent__items_desc}> <p>⬆</p> Карбонат Кальция (CaCO3) используется для тяжести бурового раствораю</div>
            </div>
            <h3>Карбонат Кальция</h3>
          </div>
          {/* <div className={c.productsParent__items}>
            <div className={c.productsParent__items__imges}>
              <img src="https://kayensondaj.com/wp-content/uploads/Bentonit.jpg" alt="" />
              <div className={c.productsParent__items_desc}> <p>⬆</p> Загуститель QUIK-GEL очень легко смешивается, мелко измельчен в 200 меш, высококачественный, высокопродуктивный бентонит натрия, придает вязкость и контроль водоотдачи.</div>
            </div>
            <h3>БЕТНОНИТ</h3>
          </div>
          */}
        </div>

        <div className={c.hDD}>
          <div className={c.hDD__items}>
            <img src="https://kayensondaj.com/wp-content/uploads/HDD.jpg" alt="" />
            <br />
            <h2>Бентонит Nero Gel HDD</h2>
          </div>
          <div className={c.hDD__items}>
            Наша компания занимается поставкой и продажей турецкого высококачественного бентонита торговой марки Nero Gel HDD. <br /> <br />
            Высокопроизводительный бентонит натрия с высоким содержанием загустителя является основой для приготовления буровых растворов при проведении горизонтально-направленного бурения и микротоннелирования. Ключевая особенность применения бентонита - его способность создать высокопрочную суспензию при затворении в воде, которая в свою очередь позволяет не только очищать скважину от выбуренной породы (шлама), но и укреплять стенки скважины за счет своей природной глинистой основы. <br /><br />
            По вопросам покупки и сотрудничества обращаться по телефону: <br /> <a href="tel:+7 988 5626000">+7 988 5626000</a>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Products;
