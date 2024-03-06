import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import logo from 'src/assets/logo/logo_minified.svg';
import { navigation } from '../../utils/constants';

export const Header = () => {
  return (
    <header className={styles.root}>
      <Link to='/'>
        <img
          className={styles.logo}
          src={logo}
          alt='Ольга Никитина'></img>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navigation.map((item) => (
            <li
              key={item.id}
              className={styles.listItem}>
              <a
                href={item.link}
                className={styles.link}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
