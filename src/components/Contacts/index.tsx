import { Button } from '../ui/Button';
import styles from './styles.module.css';
import photo from '@/assets/person_2.png';
import { socials } from '@/utils/constants';

export const Contacts = () => {
  return (
    <section
      id='contacts'
      className={styles.root}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.title}>Связь со&nbsp;мной</h1>
          <p className={styles.subtitle}>Отвечу на&nbsp;любые интересующие вопросы</p>
        </div>
        <div className={styles.contacts}>
          {socials.map((social) => (
            <a
              href={social.type === 'mail' ? `mailto: ${social.title}` : social.link}
              className={styles.link}
              style={social.type === 'mail' ? { width: '100%' } : {}}>
              <Button
                key={social.id}
                text={social.title}
                icon={social.icon}
                style={social.type === 'mail' ? { width: '100%' } : {}}
              />
            </a>
          ))}
        </div>
      </div>
      <img src={photo} />
    </section>
  );
};
