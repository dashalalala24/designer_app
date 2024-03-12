import { FC } from 'react';
import { Button } from '../ui/Button';
import styles from './styles.module.css';

type CoverProps = {
  openPopup: () => void;
  title?: string;
  subtitle?: string;
  pic?: string;
  footage?: string;
};

export const Cover: FC<CoverProps> = ({ openPopup, title, subtitle, pic, footage }) => {
  return (
    <section
      className={styles.root}
      style={pic ? { backgroundImage: `url(${pic})` } : {}}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.title}>{title ?? 'Интерьеры, в которых комфортно жить'}</h1>
          <p className={styles.subtitle}>
            {subtitle ??
              'Функциональные планировки и продуманные дизайн-проекты, чтобы комфортно жить и расслабляться. еще немного текста о чем-нибудь сюда напишем'}
          </p>
        </div>
        {footage ? (
          <p className={styles.footage}>{footage}</p>
        ) : (
          <Button
            text='Обсудить проект'
            style={{ marginBottom: '8px' }}
            onButtonClick={openPopup}
          />
        )}
      </div>
    </section>
  );
};
