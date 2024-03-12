import { useState } from 'react';
import { About } from '../../components/About';
import { Contacts } from '../../components/Contacts';
import { Cover } from '../../components/Cover';
import { Faq } from '../../components/Faq';
import { Feedback } from '../../components/Feedback';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Popup } from '../../components/Popup';
import { Projects } from '../../components/Projects';
import { Services } from '../../components/Services';
import styles from './styles.module.css';

export const MainPage = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const togglePopup = () => {
    setIsPopupOpened(!isPopupOpened);

    if (isPopupOpened) {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <div className={styles.root}>
        <Header />
        <main className={styles.main}>
          <Cover openPopup={togglePopup} />
          <About openPopup={togglePopup} />
          <Projects />
          <Feedback />
          <Services openPopup={togglePopup} />
          <Faq />
          <Contacts />
        </main>
        <Footer />
        <Popup
          opened={isPopupOpened}
          closePopup={togglePopup}
        />
      </div>
    </>
  );
};
