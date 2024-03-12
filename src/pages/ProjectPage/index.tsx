import { useState } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Popup } from '../../components/Popup';
import styles from './styles.module.css';
import { Cover } from '../../components/Cover';
import { useParams } from 'react-router-dom';
import { projects } from '../../utils/constants';
import { AboutProject } from '../../components/AboutProject';
import { Process } from '../../components/Process';
import { ProjectPhotos } from '../../components/ProjectPhotos';
import { MoreProjects } from '../../components/MoreProjects';

export const ProjectPage = () => {
  const { id: projectId } = useParams<{ id: string }>();
  const project = projects.find(
    (project) => projectId && project.id == (projectId as unknown as number)
  );

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
          <Cover
            openPopup={togglePopup}
            title={project?.title}
            subtitle={project?.subtitle}
            pic={project?.mainPhoto}
            footage={project?.footage}
          />
          <AboutProject
            description={project?.about}
            slides={project?.planPics}
            details={project?.details}
          />
          <Process slides={project?.processPics} />
          <ProjectPhotos photos={project?.photos} />
          <MoreProjects />
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
