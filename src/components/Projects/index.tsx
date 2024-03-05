import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { projects } from "../../utils/constants";

export const Projects = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>Проекты</h2>
        <div className={styles.projects}>
          {projects.map((project) => (
            <Link
              to={project.link}
              className={styles.cover}
              style={{ backgroundImage: `url(${project.photo})` }}
            >
              <h3 className={styles.name}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
