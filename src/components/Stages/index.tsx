// import { SVGProps } from 'react';
import { stages } from '../../utils/constants';
import { SectionTitle, SectionTitleColor } from '../ui/SectionTitle';
import styles from './styles.module.css';

export const Stages = () => {
  return (
    <section
      id='stages'
      className={styles.root}>
      <SectionTitle
        text='Как мы будем работать'
        color={SectionTitleColor.LIGHT}
      />
      <ul className={styles.list}>
        {stages.map((stage) => (
          <li
            className={styles.listItem}
            key={stage.id}>
            {stage.icon ? (
              <div className={styles.icon}>
                <stage.icon />
              </div>
            ) : (
              <div className={styles.itemHeader}>
                <p className={styles.number}>{stage.id}</p>
                <hr className={styles.line} />
              </div>
            )}
            <h3 className={styles.itemTitle}>{stage.title}</h3>
            <p className={styles.itemDescription}>{stage.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
