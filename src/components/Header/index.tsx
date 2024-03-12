import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import logo from '../../assets/logo/logo_minified.svg';
import { navigation } from '../../utils/constants';
import { useRef, useEffect } from 'react';

export const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); //
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }, 100);
    }
  }, [location]);

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
              {currentPath === '/' ? (
                <a
                  href={item.link}
                  className={styles.link}>
                  {item.text}
                </a>
              ) : (
                <Link
                  to={item.link}
                  className={styles.link}>
                  {item.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
