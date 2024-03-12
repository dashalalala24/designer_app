import { FC } from 'react';
import styles from './styles.module.css';

export enum SectionTitleColor {
  LIGHT = 'light',
  DARK = 'dark',
}

type SectionTitleProps = {
  text: string;
  color?: SectionTitleColor;
};

export const SectionTitle: FC<SectionTitleProps> = ({ text, color = SectionTitleColor.DARK }) => {
  return (
    <h2
      className={`${styles.title} ${
        color === SectionTitleColor.DARK ? styles.titleDark : styles.titleLight
      }`}>
      {text}
    </h2>
  );
};
