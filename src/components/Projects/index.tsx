import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { projects } from '../../utils/constants';

export const Projects = () => {
  return (
    <section
      id='projects'
      className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>Проекты</h2>
        <div className={styles.projects}>
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.link}
              className={styles.cover}
              style={{ backgroundImage: `url(${project.photo})` }}>
              <div className={styles.text}>
                <h3 className={styles.name}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
