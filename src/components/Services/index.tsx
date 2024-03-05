import { Button } from "../ui/Button";
import styles from "./styles.module.css";
import fileIcon from "../../assets/icons/file.svg";
import { Stages } from "../Stages";

const services = [
  {
    id: 1,
    type: "primary",
    name: "Планировочное решение",
    description:
      "Если необходимо грамотно организованное пространство и вы готовы заняться оформлением интерьера самостоятельно.",
    includes: [
      "план обмера",
      "план демонтажа стен и перегородок",
      "план возведения новых",
      "план расстановки мебели с указанием размеров",
    ],
    price: "от 15 000 р.",
    timing: "до 2 недель",
    examle: "www.google.com",
  },
  {
    id: 2,
    type: "primary",
    name: "Технический проект",
    description:
      "Покажу розетки и выключатели, посчитаю количество лампочек, тыкну откуда начинать укладку плитки, куда повесить кондиционер и где уложить тёплый пол.",
    includes: [
      "планировочное решение",
      "план освещения",
      "план размещения электрических розеток и выключателей",
      "планы потолков, полов и стен с указанием типа используемых материалов",
    ],
    price: "от 40 000 р.",
    timing: "до 1 месяца",
    examle: "www.google.com",
  },
  {
    id: 3,
    type: "primary",
    name: "Полный проект",
    description:
      "Полный дизайн-проект со всеми чертежами, подбором мебели и отделочных материалов, а так же фотореалистичные 3D-визуализации по каждой комнате.",
    includes: [
      "технический проект",
      "развёртки по стенам для каждого помещения",
      "спецификация с конкретными предметами мебели, сантехники и отделочных материалов",
      "коллажи 2D по каждой комнате",
      "3D-визуализации (фотореалистичное изображение) по каждой комнате",
    ],
    price: "2500 руб/кв.м.",
    timing: "до 2 месяцев",
    examle: "www.google.com",
  },
  {
    id: 4,
    type: "secondary",
    name: "Концепция интерьера",
    description:
      "Помогу разобраться, как должен выглядеть ваш будущий интерьер и сделаю наглядный коллаж с подбором палитры и реальных предметов мебели.",
    price: "500 руб/кв.м.",
    timing: "Срок исполнения до 1 месяца",
  },
  {
    id: 5,
    type: "secondary",
    name: "Консультация",
    description:
      "Помогу разобраться, как должен выглядеть ваш будущий интерьер и сделаю наглядный коллаж с подбором палитры и реальных предметов мебели.",
    price: "от 15 000 р.",
    timing: "Созвон до 2х часов",
  },
  {
    id: 6,
    type: "secondary",
    name: "Авторский надзор",
    description:
      "Помогу разобраться, как должен выглядеть ваш будущий интерьер и сделаю наглядный коллаж с подбором палитры и реальных предметов мебели.",
    price: "от 15 000 р.",
    timing: "Созвон до 2х часов",
  },
  {
    id: 7,
    type: "secondary",
    name: "Комплектация",
    description:
      "Помогу разобраться, как должен выглядеть ваш будущий интерьер и сделаю наглядный коллаж с подбором палитры и реальных предметов мебели.",
    price: "от 15 000 р.",
    timing: "Созвон до 2х часов",
  },
];

export const Services = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>Базовые услуги</h2>
        <div className={styles.cardsContainer}>
          {services.map(
            (service) =>
              service.type === "primary" && (
                <article className={styles.card}>
                  <div className={styles.cardInfo}>
                    <h3 className={styles.cardName}>{service.name}</h3>
                    <p className={styles.cardText}>{service.description}</p>
                    <div>
                      <p className={styles.cardText}>Что входит:</p>
                      {service.includes && (
                        <ul className={styles.cardList}>
                          {service.includes.map((item) => (
                            <li>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className={styles.cardInfo}>
                    <div>
                      <p className={styles.cardPrice}>{service.price}</p>
                      <p className={styles.cardText}>
                        Срок исполнения {service.timing}
                      </p>
                    </div>
                    <Button
                      text="Пример документации"
                      icon={fileIcon}
                      iconStyle={{
                        width: "24px",
                        height: "24px",
                      }}
                      style={{
                        borderRadius: "16px",
                        border: " 1px solid #544B48",
                        padding: "10px 16px",
                        color: "#594F4C",
                        fontSize: "16px",
                      }}
                    />
                  </div>
                </article>
              )
          )}
        </div>
        <div className={styles.container}>
          <h2 className={styles.title}>Дополнительные услуги</h2>
          <div className={styles.cardsContainer}>
            {services.map(
              (service) =>
                service.type === "secondary" && (
                  <div>
                    <div className={styles.secondaryCardInfo}>
                      <h3 className={styles.secondaryCardName}>
                        {service.name}
                      </h3>

                      <p className={styles.cardText}>{service.description}</p>
                      <div>
                        <p className={styles.cardPrice}>{service.price}</p>
                        <p className={styles.cardText}>{service.timing}</p>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <div className={styles.connect}>
        <div className={styles.connectText}>
          <h2 className={styles.connectTitle}>
            Не понимаете, какая услуга вам подходит?
          </h2>
          <p className={styles.connectSubtitle}>
            Свяжитесь со мной и я помогу определиться с подходящей услугой под
            ваш запрос
          </p>
        </div>
        <Button text={"Связаться со мной"} />
      </div>
      <Stages />
    </section>
  );
};
