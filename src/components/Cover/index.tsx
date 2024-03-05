import { Button } from "../ui/Button";
import styles from "./styles.module.css";

export const Cover = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Интерьеры, в&nbsp;которых комфортно жить
          </h1>
          <p className={styles.subtitle}>
            Функциональные планировки и&nbsp;продуманные дизайн-проекты, чтобы
            комфортно жить и&nbsp;расслабляться. еще немного текста
            о&nbsp;чем-нибудь сюда напишем
          </p>
        </div>
        <Button text="Обсудить проект" />
      </div>
    </section>
  );
};
