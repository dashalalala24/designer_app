import { About } from '@/components/About';
import { Contacts } from '@/components/Contacts';
import { Cover } from '@/components/Cover';
import { Faq } from '@/components/Faq';
import { Feedback } from '@/components/Feedback';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import styles from './styles.module.css';

export const MainPage = () => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>
        <Cover />
        <About />
        <Projects />
        <Feedback />
        <Services />
        <Faq />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};
