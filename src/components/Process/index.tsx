import styles from './styles.module.css';
// import { opinions } from '../../utils/constants';
import { FC } from 'react';
import { SliderComponent } from '../Slider';

type ProcessProps = {
  slides?: {
    id: number;
    photo: string;
  }[];
};

export const Process: FC<ProcessProps> = ({ slides }) => {
  if (!slides) return null;

  return (
    <section className={styles.root}>
      <SliderComponent
        title='Процесс и реализация'
        isInfinite={true}
        slides={slides}
      />
    </section>
  );
};
