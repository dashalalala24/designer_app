import styles from './styles.module.css';
import { FC } from 'react';
import { SmallSlider } from '../SmallSlider';

type AboutProjectProps = {
  description?: string;
  slides?: {
    id: number;
    photo: string;
  }[];
  details?: {
    name: string;
    text: string;
  }[];
};

export const AboutProject: FC<AboutProjectProps> = ({ description, slides, details }) => {
  return (
    <section
      id='about'
      className={styles.root}>
      {slides && (
        <div className={styles.slider}>
          <SmallSlider slides={slides} />
        </div>
      )}

      <div className={styles.textContainer}>
        <div className={styles.text}>
          <h2 className={styles.title}>О проекте</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <ul className={styles.details}>
          {details?.map((detail) => (
            <li
              className={styles.detail}
              key={detail.name}>
              <h2 className={styles.detailTitle}>{detail.name}</h2>
              <p className={styles.detailText}>{detail.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
