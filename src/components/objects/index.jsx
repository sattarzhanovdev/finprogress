import React, { useRef } from "react";
import c from "./objects.module.scss";

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
              <h1>АО Газпромнефть МНПЗ</h1>
              <p>
                Работы по остановочному капитальному ремонту технологического
                оборудования и трубопроводов цехов аммиак- 2, ЦМУИК №1 (сак);
                Ремонт установки лг-35-8/300 б цеха 3 (газокаталитического
                производства); Ремонтные работы на блоках крекинга и
                стабилизации установки висбрекинга №1; Замена
                хромомолибденовых трубопроводов с аустенитными стыками; ремонт
                АВТ-3 цеха №1 (атмосферный блок); Ремонт оборудования,
                металлоконструкций во время эксплуатации цеха ПЭФК; Замена
                трубопроводов из углеродистых сталей выработавших нормативный
                срок службы установки авт-4 АО «КНПЗ» и т.д.
              </p>
            </div>
            <div className={c.card_image}>
              <img
                src="https://static.tildacdn.com/tild6133-6238-4537-b736-323734623939/-min.png"
                alt=""
              />
            </div>
          </div>
          <div className={c.objects_card}>
            <div className={c.name}>
              <h1>Котельная 50 МВт</h1>
              <p>
                Строительство котельной мощностью 50 МВт. "Устройство
                внеплощадочной ливневой канализации Ду315" расположенной по
                адресу: городской округ Химки, мкр. Подрезково
              </p>
            </div>
            <div className={c.card_image}>
              <img src="/img/kotelnaya.jpg" alt="" />
            </div>
          </div>
          <div className={c.objects_card}>
            <div className={c.name}>
              <h1>Капитальный ремонт многоквартирных домов</h1>
              <p>
              Комплекс работ по восстановлению и ремонту элементов фасадов зданий, устройству и ремонту кровель в г. Северодонецк, ЛНР.
              </p>
            </div>
            <div className={c.card_image}>
              <img src="https://i.ibb.co/VTVVdq0/image.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objects;
