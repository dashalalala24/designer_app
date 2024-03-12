import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { projects } from '../../utils/constants';
import { SectionTitle, SectionTitleColor } from '../ui/SectionTitle';

export const Projects = () => {
  return (
    <section
      id='projects'
      className={styles.root}>
      <div className={styles.container}>
        <SectionTitle
          text='Проекты'
          color={SectionTitleColor.LIGHT}
        />
        <div className={styles.projects}>
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className={styles.cover}
              style={{ backgroundImage: `url(${project.mainPhoto})` }}>
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
