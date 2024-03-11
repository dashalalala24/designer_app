import { FC } from 'react';
import { socials } from '../../utils/constants';
import { Button } from '../ui/Button';
import styles from './styles.module.css';
// import { useTransition } from 'react-spring';

type PopupProps = {
  opened: boolean;
  closePopup: () => void;
};

export const Popup: FC<PopupProps> = ({ opened, closePopup }) => {
  // if (!opened) return null;

  return (
    <div
      className={styles.root}
      onClick={closePopup}
      style={
        opened
          ? { opacity: 1, visibility: 'visible', transition: 'all 0.5s ease' }
          : {
              opacity: 0,
              visibility: 'hidden',
              transition: 'all 0.5s ease',
            }
      }>
      <div className={styles.popup}>
        <div className={styles.text}>
          <h2 className={styles.title}>Связаться со&nbsp;мной и&nbsp;обсудить проект</h2>
          <p className={styles.subtitle}>Отвечу на&nbsp;любые интересующие вопросы</p>
        </div>
        <div className={styles.contacts}>
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.type === 'mail' ? `mailto: ${social.title}` : social.link}
              target='_blank'
              className={styles.link}>
              <Button
                key={social.id}
                text={social.title}
                icon={
                  social.icon as unknown as React.FunctionComponent<React.SVGProps<SVGSVGElement>>
                }
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
