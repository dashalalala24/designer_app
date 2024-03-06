import styles from './styles.module.css';
import logo from '../../assets/logo/logo_full.svg';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img
            src={logo}
            className={styles.logo}></img>
          <div className={styles.textContainer}>
            <a
              className={styles.text}
              href='tel:+79999999999'>
              + 7 999 999 99 99
            </a>
            <p className={styles.text}>Olga Nikitina</p>
          </div>
        </div>
        <div
          className={styles.textContainer}
          style={{ textAlign: 'end' }}>
          <a
            className={styles.text}
            href='tel:+79999999999'>
            + 7 999 999 99 99
          </a>
          <a
            className={styles.text}
            href='mailto:thebestdesigner@gmail.com'>
            thebestdesigner@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};
