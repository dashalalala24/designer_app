import { Link, useParams } from 'react-router-dom';
import { projects } from '../../utils/constants';
import styles from './styles.module.css';
import { SectionTitle, SectionTitleColor } from '../ui/SectionTitle';

export const MoreProjects = () => {
  const { id: projectId } = useParams<{ id: string }>();

  const otherProjects = projects.filter(
    (project) => projectId && project.id !== (projectId as unknown as number)
  );

  if (!otherProjects) return null;

  return (
    <section
      id='projects'
      className={styles.root}>
      <SectionTitle text='Другие проекты' />
      <div className={styles.projects}>
        {otherProjects.slice(1, 3).map((project) => (
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
    </section>
  );
};
