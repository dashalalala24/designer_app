import { Button } from '../ui/Button';
import styles from './styles.module.css';
import photo from '../../assets/person_2.png';
import { socials } from '../../utils/constants';
import { SectionTitle } from '../ui/SectionTitle';
// import tg from '../../assets/icons/telegram.svg';
// import wa from '../../assets/icons/whatsapp.svg';
// import mail from '../../assets/icons/mail.svg';

export const Contacts = () => {
  return (
    <section
      id='contacts'
      className={styles.root}>
      <div className={styles.content}>
        <div className={styles.text}>
          <SectionTitle text='Связь со&nbsp;мной' />
          <p className={styles.subtitle}>Отвечу на&nbsp;любые интересующие вопросы</p>
        </div>
        <div className={styles.contacts}>
          {socials.map(
            (social) =>
              social.type === 'social' && (
                <a
                  key={social.id}
                  target='_blank'
                  href={social.name === 'mail' ? `mailto: ${social.title}` : social.link}
                  className={styles.link}
                  style={social.name === 'mail' ? { width: '100%' } : {}}>
                  <Button
                    key={social.id}
                    text={social.title}
                    icon={
                      social.icon as unknown as React.FunctionComponent<
                        React.SVGProps<SVGSVGElement>
                      >
                    }
                    style={social.name === 'mail' ? { width: '100%' } : {}}
                  />
                </a>
              )
          )}
        </div>
      </div>
      <img src={photo} />
    </section>
  );
};
