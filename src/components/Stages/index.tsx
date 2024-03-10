// import { SVGProps } from 'react';
import { stages } from '../../utils/constants';
// import SvgIcon from '../ui/SvgIcon/SvgIcon';
import styles from './styles.module.css';

export const Stages = () => {
  return (
    <section
      id='stages'
      className={styles.root}>
      <h2 className={styles.title}>Как мы будем работать</h2>
      <ul className={styles.list}>
        {stages.map((stage) => (
          <li
            className={styles.listItem}
            key={stage.id}>
            {stage.icon ? (
              <div
                className={styles.icon}
                style={{ backgroundImage: `url(/assets/icons/${stage.icon}.svg)` }}></div>
            ) : (
              // <div className={styles.icon}>
              // <SvgIcon
              //   iconName={stage.icon}
              //   svgProp={styles.icon as SVGProps<SVGSVGElement>}
              // />
              // </div>
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
