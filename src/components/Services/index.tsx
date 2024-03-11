import { Button } from '../ui/Button';
import styles from './styles.module.css';
import fileIcon from '../../assets/icons/file.svg?react';
import { Stages } from '../Stages';
import { services } from '../../utils/constants';
import { FC } from 'react';

type ServicesProps = {
  openPopup: () => void;
};

export const Services: FC<ServicesProps> = ({ openPopup }) => {
  const handleButtonClick = (path: string | undefined) => {
    window.open(path);
  };

  return (
    <section
      id='services'
      className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>Базовые услуги</h2>
        <div className={styles.cardsContainer}>
          {services.map(
            (service) =>
              service.type === 'primary' && (
                <article
                  className={styles.card}
                  key={service.id}>
                  <div className={styles.cardInfo}>
                    <h3 className={styles.cardName}>{service.name}</h3>
                    <p className={styles.cardText}>{service.description}</p>
                    <div>
                      <p className={styles.cardText}>Что входит:</p>
                      {service.includes && (
                        <ul className={styles.cardList}>
                          {service.includes.map((item, index) => (
                            <li
                              className={styles.cardListItem}
                              key={index}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className={styles.cardInfo}>
                    <div>
                      <p className={styles.cardPrice}>{service.price}</p>
                      <p className={styles.cardText}>Срок исполнения {service.timing}</p>
                    </div>
                    <Button
                      text='Пример документации'
                      icon={
                        fileIcon as unknown as React.FunctionComponent<
                          React.SVGProps<SVGSVGElement>
                        >
                      }
                      variant='smooth'
                      onButtonClick={() => handleButtonClick(service.example)}
                    />
                  </div>
                </article>
              )
          )}
        </div>
        <div className={styles.container}>
          <h2 className={styles.title}>Дополнительные услуги</h2>
          <div className={styles.cardsContainer}>
            {services.map(
              (service) =>
                service.type === 'secondary' && (
                  <div
                    className={styles.secondaryCardInfo}
                    key={service.id}>
                    <h3 className={styles.secondaryCardName}>{service.name}</h3>

                    <p className={styles.cardText}>{service.description}</p>
                    <div>
                      <p className={styles.cardPrice}>{service.price}</p>
                      <p className={styles.cardText}>{service.timing}</p>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <div className={styles.connect}>
        <div className={styles.connectText}>
          <h2 className={styles.connectTitle}>Не&nbsp;понимаете, какая услуга вам подходит?</h2>
          <p className={styles.connectSubtitle}>
            Свяжитесь со&nbsp;мной и&nbsp;я&nbsp;помогу определиться с&nbsp;подходящей услугой под
            ваш запрос
          </p>
        </div>
        <Button
          text={'Связаться со мной'}
          style={{ padding: '0 25px', margin: '10px 0 0', maxHeight: '60px' }}
          onButtonClick={openPopup}
        />
      </div>
      <Stages />
    </section>
  );
};
