import { Button } from '../ui/Button';
import styles from './styles.module.css';
import photo from '../../assets/person_2.png';
import { socials } from '../../utils/constants';
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
          <h1 className={styles.title}>Связь со&nbsp;мной</h1>
          <p className={styles.subtitle}>Отвечу на&nbsp;любые интересующие вопросы</p>
        </div>
        <div className={styles.contacts}>
          {/* <a
            href='https://t.me/OlgaLazarchuk'
            className={styles.link}>
            <Button
              text='Telegram'
              icon={'telegram'}
            />
          </a>
          <a
            href='https://t.me/OlgaLazarchuk'
            className={styles.link}>
            <Button
              text='WhatsApp'
              icon={'whatsapp'}
            />
          </a>
          <a
            href='mailto:thebestdesigner@gmail.com'
            className={styles.link}
            style={{ width: '100%' }}>
            <Button
              text='thebestdesigner@gmail.com'
              icon={'mail'}
            />
          </a> */}
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
