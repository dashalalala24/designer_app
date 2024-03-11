import { useEffect, useState } from 'react';
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
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const MainPage = () => {
  // const main = document.querySelector('body');

  const [isPopupOpened, setIsPopupOpened] = useState(false);

  // useEffect(() => {
  //   if (isPopupOpened && main) {
  //     disableBodyScroll(main);
  //   }

  //   if (!isPopupOpened && main) {
  //     enableBodyScroll(main);
  //   }
  // }, [isPopupOpened, main]);

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
      <div
        className={styles.root}
        // style={isPopupOpened ? { overflow: 'hidden' } : {}}
      >
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
