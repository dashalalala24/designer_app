import { About } from "../../components/About";
import { Cover } from "../../components/Cover";
import { Feedback } from "../../components/Feedback";
import { Header } from "../../components/Header";
import { Projects } from "../../components/Projects";
import { Services } from "../../components/Services";
import styles from "./styles.module.css";

export const MainPage = () => {
  return (
    <div className={styles.root}>
      <Header />
      <main>
        <Cover />
        <About />
        <Projects />
        <Feedback />
        <Services />
      </main>
    </div>
  );
};
