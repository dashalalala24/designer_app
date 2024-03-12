import { FC } from 'react';
import styles from './styles.module.css';
import { photoType } from '../../utils/constants';

type ProjectPhotosProps = {
  photos?: { id: number; type: photoType; photo: string }[];
};

export const ProjectPhotos: FC<ProjectPhotosProps> = ({ photos }) => {
  if (!photos) return null;

  const squarePhotos = photos.filter((photo) => photo.type === photoType.SQUARE);
  const verticalPhotos = photos.filter((photo) => photo.type === photoType.VERTICAL);
  const horizontalPhotos = photos.filter((photo) => photo.type === photoType.HORIZONTAL);
  const horizontalFullPhotos = photos.filter((photo) => photo.type === photoType.HORIZONTALFULL);

  return (
    <section
      aria-label='Визуализации'
      className={styles.root}>
      <div className={`${styles.block} ${styles.twoVertical}`}>
        <img
          className={`${styles.photo} ${styles.vertical}`}
          src={verticalPhotos[0].photo}
        />
        <img
          className={`${styles.photo} ${styles.vertical}`}
          src={verticalPhotos[1].photo}
        />
      </div>
      <div className={`${styles.block} ${styles.oneHorizontalFullWidth}`}>
        <img
          className={`${styles.photo} ${styles.horizontalFullWidth}`}
          src={horizontalFullPhotos[0].photo}
        />
      </div>
      <div className={`${styles.block} ${styles.twoSquare}`}>
        <img
          className={`${styles.photo} ${styles.square}`}
          src={squarePhotos[0].photo}
        />
        <img
          className={`${styles.photo} ${styles.square}`}
          src={squarePhotos[1].photo}
        />
      </div>
      <div className={`${styles.block} ${styles.oneHorizontal}`}>
        <img
          className={`${styles.photo} ${styles.horizontal}`}
          src={horizontalPhotos[0].photo}
        />
      </div>
      <div className={`${styles.block} ${styles.oneHorizontalFullWidth}`}>
        <img
          className={`${styles.photo} ${styles.horizontalFullWidth}`}
          src={horizontalFullPhotos[1].photo}
        />
      </div>
      <div className={`${styles.block} ${styles.oneHorizontal}`}>
        <img
          className={`${styles.photo} ${styles.horizontal}`}
          src={horizontalPhotos[1].photo}
        />
      </div>
      <div className={`${styles.block} ${styles.oneHorizontal}`}>
        <img
          className={`${styles.photo} ${styles.horizontal}`}
          src={horizontalPhotos[2].photo}
        />
      </div>
      <div className={`${styles.block} ${styles.twoVertical}`}>
        <img
          className={`${styles.photo} ${styles.vertical}`}
          src={verticalPhotos[2].photo}
        />
        <img
          className={`${styles.photo} ${styles.vertical}`}
          src={verticalPhotos[3].photo}
        />
      </div>
    </section>
  );
};
