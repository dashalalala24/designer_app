import { FC, useState } from 'react';
import styles from './styles.module.css';

type questionType = {
  id: number;
  title: string;
  info: string;
};
const questions: questionType[] = [
  {
    id: 1,
    title: 'В каких городах работаю?',
    info: 'Сейчас нет необходимости искать дизайнера именно из своего города. Мы с заказчиками встречаемся онлайн, обсуждаем проект в общем чате, в удобном мессенджере и реализуем проект, скидывая фото и видео с объекта или из магазинов. Я живу в Москве и имею опыт удалённого ведения проектов в Волгограде, Красноярске и Краснодаре. Также могу помочь с ремонтом под ключ в Москве, если вы сами находитесь в другом городе',
  },
  {
    id: 2,
    title: 'Какие этапы оплаты?',
    info: 'Сейчас нет необходимости искать дизайнера именно из своего города. Мы с заказчиками встречаемся онлайн, обсуждаем проект в общем чате, в удобном мессенджере и реализуем проект, скидывая фото и видео с объекта или из магазинов. Я живу в Москве и имею опыт удалённого ведения проектов в Волгограде, Красноярске и Краснодаре. Также могу помочь с ремонтом под ключ в Москве, если вы сами находитесь в другом городе',
  },
  {
    id: 3,
    title: 'Есть ли у меня своя строительная бригада?',
    info: 'Сейчас нет необходимости искать дизайнера именно из своего города. Мы с заказчиками встречаемся онлайн, обсуждаем проект в общем чате, в удобном мессенджере и реализуем проект, скидывая фото и видео с объекта или из магазинов. Я живу в Москве и имею опыт удалённого ведения проектов в Волгограде, Красноярске и Краснодаре. Также могу помочь с ремонтом под ключ в Москве, если вы сами находитесь в другом городе',
  },
  {
    id: 4,
    title: 'Помогу ли я с поиском мебели?',
    info: 'Сейчас нет необходимости искать дизайнера именно из своего города. Мы с заказчиками встречаемся онлайн, обсуждаем проект в общем чате, в удобном мессенджере и реализуем проект, скидывая фото и видео с объекта или из магазинов. Я живу в Москве и имею опыт удалённого ведения проектов в Волгограде, Красноярске и Краснодаре. Также могу помочь с ремонтом под ключ в Москве, если вы сами находитесь в другом городе',
  },
  {
    id: 5,
    title: 'Сколько стоит дизайнерский ремонт?',
    info: 'Сейчас нет необходимости искать дизайнера именно из своего города. Мы с заказчиками встречаемся онлайн, обсуждаем проект в общем чате, в удобном мессенджере и реализуем проект, скидывая фото и видео с объекта или из магазинов. Я живу в Москве и имею опыт удалённого ведения проектов в Волгограде, Красноярске и Краснодаре. Также могу помочь с ремонтом под ключ в Москве, если вы сами находитесь в другом городе',
  },
];

type AccordionItemProps = {
  title: string;
  info: string;
  defaultExpanded?: boolean;
};

const AccordionItem: FC<AccordionItemProps> = ({ title, info, defaultExpanded = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <article className={styles.question}>
      <div className={styles.questionHeader}>
        <h4
          onClick={() => setExpanded(!expanded)}
          className={styles.questionTitle}>
          {title}
        </h4>
        <button
          className={` ${styles.expandButton} ${expanded && styles.expandButtonUp}`}
          onClick={() => setExpanded(!expanded)}
        />
      </div>
      {expanded && <p className={` ${styles.info} ${expanded && styles.infoVisible}`}>{info}</p>}
    </article>
  );
};

type AccordionProps = {
  questions: questionType[];
};

const Accordion: FC<AccordionProps> = ({ questions }) => {
  return (
    <div className={styles.accordion}>
      {questions.map((question) => (
        <AccordionItem
          defaultExpanded={question.id === 1}
          key={question.id}
          title={question.title}
          info={question.info}
        />
      ))}
    </div>
  );
};

export const Faq = () => {
  return (
    <section
      id='faq'
      className={styles.root}>
      <div className={styles.cover}>
        <div className={styles.container}>
          <h2 className={styles.title}>Часто спрашивают</h2>
        </div>
      </div>
      <Accordion questions={questions} />
    </section>
  );
};
