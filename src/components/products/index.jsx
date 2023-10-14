import React from "react";
import c from "./products.module.scss";
import img from '../../assets/images/beton1.jpg'
import img2 from '../../assets/images/beton2.jpg'
import img3 from '../../assets/images/beton3.jpg'
import img4 from '../../assets/images/beton4.jpg'
const Products = () => {
  return (
    <div className={c.container}>
      <div className={c.products}>
        <div className={c.product}>
          <h1>Бентонит</h1>
          <p>
            Наша компания занимается поставкой и продажей высококачественного натриевого бентонита (производство Турция). <br /> <br />

            Высококачественный бентонит натрия с высоким содержанием загустителя является основой для приготовления буровых растворов при проведении горизонтально-направленного бурения и микротоннелирования. Ключевая особенность применения бентонита - его способность создать высокопрочную суспензию при затворении в воде, которая в свою очередь позволяет не только очищать скважину от выбуренной породы (шлама), но и укреплять стенки скважины за счет своей природной глинистой основы.

            По вопросам покупки и сотрудничества обращаться по телефону: <br /> <a href="tel:+7 988 5626000">+7 988 5626000 </a>
          </p>
          {/* <p>
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
          </p> */}
          <h3>Назначение</h3><br />
          <p>
            Бентонит для ГНБ осуществляет группу значимых функций:
          </p>
          <ul className={c.left_20}>
            <li>Очистка скважины за счет выноса бурового шлама при создании необходимого потока</li>
            <li>Удержание частиц выбуренного шлама в отсутствие циркуляции (потока) бурового раствора</li>
            <li>Формирование фильтрационной корки на стенках скважины, которая способствует укреплению самих стенок и снижению проникновения свободной воды в грунт.</li>
            <li>Охлаждение буровой колонны и бурового инструмента (расширители, переходники и пр.)</li>
          </ul>
          <h3>Преимущества </h3>
          <br />
          <div className={c.preim}>
            <p><span>1.</span>Быстрый набор вязкостно-реологических характеристик.</p>
            <p><span>2.</span>Стабильность параметров бурового раствора.</p>
            <p><span>3.</span>Очень простой в смешивании</p>
            <p><span>4.</span>Не требует дополнительных полимеров и одинаково эффективно работает в песке, в глине и обводнённом реактивном суглинке </p>

          </div>
        </div>

        <div className={c.productsParent}>
          <div className={c.productsParent__items}>
            <div className={c.productsParent__items__imges}>
              <img src="https://kayensondaj.com/wp-content/uploads/Bentonit.jpg" alt="" />
              <div className={c.productsParent__items_desc}> <p>⬆</p>
                QUIK-GEL - очень простой в смешивании тонкоизмельченный (200 меш. = 0,074 мм) высококачественный натриевый бентонит, обеспечивающий контроль вязкости и водоотдачи. Произведен из бентонитовой глины высшего сорта месторождений США (штат Вайоминг), благодаря чему буровой раствор получается с низким содержанием твердых частиц, но высокой вязкостью.

                QUIK-GEL позволяет получить более чем в 2 раза больший объем бурового раствора с вязкостью не ниже, чем у бентонита стандарта API (используемый при бурении нефтяных скважин), применяемого в том же количестве.

                Сертифицирован по стандарту ANSI/NSF 60


              </div>
            </div>
            <h3>QUIK-GEL</h3>
          </div>
          <div className={c.productsParent__items}>
            <div className={c.productsParent__items__imges}>
              <img src="https://kayensondaj.com/wp-content/uploads/HDD.jpg" alt="" />
              <div className={c.productsParent__items_desc}> <p>⬆</p>  Nero Gel Hdd - специально разработанный для горизонтального бурения бентонит, представляющий собой высокопроизводительный, легкосмешиваемый, высококачественный натриевый бентонит премиум-класса, обеспечивающий контроль вязкости и потерь жидкости.</div>
            </div>
            <h3>Nero Gel Hdd </h3>
          </div>
          <div className={c.productsParent__items}>
            <div className={c.productsParent__items__imges}>
              <img src={img2} alt="" />
              <div className={c.productsParent__items_desc}> <p>⬆</p>
                Гранулированный бентонит Nero-Gel - гранулированная форма чистого высококачественного натриевого бентонита, придающего вязкость и снижающего потерю циркуляции. Подходит для восстановления непроницаемых слоев почвы.
              </div>
            </div>
            <h3> Гранулированный бентонит </h3>
          </div>
          <div className={c.productsParent__items}>
            <div className={c.productsParent__items__imges}>
              <img src={img3} alt="" />
              <div className={c.productsParent__items_desc}> <p>⬆</p>Природный утяжелитель сульфат бария (BaSO4). Добавление его в небольшом количестве значительно повышает плотность жидкой смеси.</div>
            </div>
            <h3>Барит</h3>
          </div>
          <div className={c.productsParent__items}>
            <div className={c.productsParent__items__imges}>
              <img src={img4} alt="" />
              <div className={c.productsParent__items_desc}> <p>⬆</p>Карбонат кальция (CaCO3) является утяжеляющей добавкой, увеличивающей плотность бурового раствора.</div>
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
        <div className={c.postProductsParent}>
          <p>Качество бурового раствора, подаваемого в скважину при выполнении бурения, в основном зависит от качества применяемого бентонита. Низкое качество бурового раствора приводит к повышенным нагрузкам на узлы и агрегаты буровой машины, при этом возрастает риск поломки дорогостоящих узлов буровой машины:

            гидравлической системы, насосов, двигателя.

            Несоблюдение технологии бурения и использование некачественного бентонита и полимеров приводит к необратимым последствиям:
          </p><br />
          <ol>
            <li>ускоренному износу деталей насосов высокого давления буровых машин, двигателей, оборудования и инструмента при увеличении рабочих нагрузок при бурении; </li>
            <li>обжиму трубы или бурового инструмента при потере циркуляции раствора в скважине; </li>
            <li>обрыву трубы или поломке бурового инструмента вследствие критических нагрузок; </li>
            <li>выбросу бурового раствора на поверхность из буровой скважины (т.н. «грифоны»). </li>
          </ol><br />
          <p>Избежать этих последствий, в том числе при тяжелых условиях бурения (рыхлые или сыпучие грунты, большая длина прокола), можно выбрав высококачественные натриевые бентониты. </p>
        </div>
        {/* <div className={c.hDD}>
          <div className={c.hDD__items}>
            <img src="https://kayensondaj.com/wp-content/uploads/HDD.jpg" alt="" />
            <br />
            <h2>Бентонит Nero Gel HDD</h2>
          </div>
          <div className={c.hDD__items}>
            Наша компания занимается поставкой и продажей турецкого высококачественного бентонита. <br /> <br />
            Высокопроизводительный бентонит натрия с высоким содержанием загустителя является основой для приготовления буровых растворов при проведении горизонтально-направленного бурения и микротоннелирования. Ключевая особенность применения бентонита - его способность создать высокопрочную суспензию при затворении в воде, которая в свою очередь позволяет не только очищать скважину от выбуренной породы (шлама), но и укреплять стенки скважины за счет своей природной глинистой основы. <br /><br />
            По вопросам покупки и сотрудничества обращаться по телефону: <br /> <a href="tel:+7 988 5626000">+7 988 5626000</a>

          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Products;
