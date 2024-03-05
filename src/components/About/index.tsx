import styles from "./styles.module.css";
import photo from "../../assets/person.png";
import { Button } from "../ui/Button";

export const About = () => {
  return (
    <section className={styles.root}>
      <p className={styles.text}>
        &laquo;Я&nbsp;считаю, что дом&nbsp;&mdash; это место силы. Здесь должно
        быть комфортно и&nbsp;уютно. У&nbsp;каждой вещи есть своё место,
        а&nbsp;у&nbsp;всех членов семьи&nbsp;&mdash; свой уголок. Поэтому
        я&nbsp;создаю функциональные планировки и&nbsp;продуманные
        дизайн-проекты&raquo;
      </p>
      <div className={styles.container}>
        <img src={photo} className={styles.photo} />
        <div className={styles.textContainer}>
          <div>
            <h2 className={styles.title}>Ольга Никитина</h2>
            <p className={styles.subtitle}>
              Дизайнер интерьеров, Куратор в&nbsp;школе дизайна Анны Акопян
              И&nbsp;еще пару слов об&nbsp;опыте
            </p>
          </div>
          <Button text="Обсудить проект" />
        </div>
      </div>
    </section>
  );
};
