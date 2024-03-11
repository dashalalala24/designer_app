import styles from './styles.module.css';
import logo from '../../assets/logo/logo_full.svg';
import { socials } from '../../utils/constants';

export const Footer = () => {
  const phone = socials.find((social) => social.name === 'phone')?.title || '';
  const mail = socials.find((social) => social.name === 'mail')?.title || '';

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
              target='_blank'
              href={`tel:${phone}`}>
              {phone}
            </a>
            <p className={styles.text}>Olga Nikitina</p>
          </div>
        </div>
        <div
          className={styles.textContainer}
          style={{ textAlign: 'end' }}>
          <a
            className={styles.text}
            target='_blank'
            href={`tel:${phone}`}>
            {phone}
          </a>
          <a
            className={styles.text}
            target='_blank'
            href={`mailto:${mail}`}>
            {mail}
          </a>
        </div>
      </div>
    </footer>
  );
};
