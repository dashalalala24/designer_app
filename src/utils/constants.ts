import cover from '../assets/project_cover.png';
import pic from '../assets/feedback.png';
import tic from '../assets/icons/tic.svg?react';
import telegram from '../assets/icons/telegram.svg?react';
import whatsapp from '../assets/icons/whatsapp.svg?react';
import mail from '../assets/icons/mail.svg?react';
import { FunctionComponent, SVGProps } from 'react';

type navigationItemType = {
  id: number;
  text: string;
  link: string;
};

export const navigation: navigationItemType[] = [
  { id: 1, text: 'Обо мне', link: '#about' },
  { id: 2, text: 'Проекты', link: '#projects' },
  { id: 3, text: 'Отзывы', link: '#feedback' },
  { id: 4, text: 'Услуги', link: '#services' },
  { id: 5, text: 'Этапы работы', link: '#stages' },
  { id: 6, text: 'Вопросы', link: '#faq' },
  { id: 7, text: 'Контакты', link: '#contacts' },
];

type projectType = {
  id: number;
  title: string;
  description: string;
  link: string;
  photo: string;
};

export const projects: projectType[] = [
  {
    id: 1,
    title: 'Квартира в Москве',
    description: 'пару слов о проекте, для кого, какая задумка что-то типа тизера',
    link: '#',
    photo: cover,
  },
  {
    id: 2,
    title: 'Квартира в Москве',
    description: 'пару слов о проекте, для кого, какая задумка что-то типа тизера',
    link: '#',
    photo: cover,
  },
  {
    id: 3,
    title: 'Квартира в Москве',
    description: 'пару слов о проекте, для кого, какая задумка что-то типа тизера',
    link: '#',
    photo: cover,
  },
  {
    id: 4,
    title: 'Квартира в Москве',
    description: 'пару слов о проекте, для кого, какая задумка что-то типа тизера',
    link: '#',
    photo: cover,
  },
];

type serviceType = {
  id: number;
  type: string;
  name: string;
  description: string;
  price: string;
  timing: string;
  includes?: string[];
  examle?: string;
};

export const services: serviceType[] = [
  {
    id: 1,
    type: 'primary',
    name: 'Планировочное решение',
    description:
      'Если необходимо грамотно организованное пространство и вы готовы заняться оформлением интерьера самостоятельно.',
    includes: [
      'план обмера',
      'план демонтажа стен и перегородок',
      'план возведения новых',
      'план расстановки мебели с указанием размеров',
    ],
    price: 'от 15 000 р.',
    timing: 'до 2 недель',
    examle: 'www.google.com',
  },
  {
    id: 2,
    type: 'primary',
    name: 'Технический проект',
    description:
      'Покажу розетки и выключатели, посчитаю количество лампочек, тыкну откуда начинать укладку плитки, куда повесить кондиционер и где уложить тёплый пол.',
    includes: [
      'планировочное решение',
      'план освещения',
      'план размещения электрических розеток и выключателей',
      'планы потолков, полов и стен с указанием типа используемых материалов',
    ],
    price: 'от 40 000 р.',
    timing: 'до 1 месяца',
    examle: 'www.google.com',
  },
  {
    id: 3,
    type: 'primary',
    name: 'Полный проект',
    description:
      'Полный дизайн-проект со всеми чертежами, подбором мебели и отделочных материалов, а так же фотореалистичные 3D-визуализации по каждой комнате.',
    includes: [
      'технический проект',
      'развёртки по стенам для каждого помещения',
      'спецификация с конкретными предметами мебели, сантехники и отделочных материалов',
      'коллажи 2D по каждой комнате',
      '3D-визуализации (фотореалистичное изображение) по каждой комнате',
    ],
    price: '2500 руб/кв.м.',
    timing: 'до 2 месяцев',
    examle: 'www.google.com',
  },
  {
    id: 4,
    type: 'secondary',
    name: 'Концепция интерьера',
    description:
      'Помогу разобраться, как должен выглядеть ваш будущий интерьер и сделаю наглядный коллаж с подбором палитры и реальных предметов мебели.',
    price: '500 руб/кв.м.',
    timing: 'Срок исполнения до 1 месяца',
  },
  {
    id: 5,
    type: 'secondary',
    name: 'Консультация',
    description:
      'Помогу разобраться, как должен выглядеть ваш будущий интерьер и сделаю наглядный коллаж с подбором палитры и реальных предметов мебели.',
    price: 'от 15 000 р.',
    timing: 'Созвон до 2х часов',
  },
  {
    id: 6,
    type: 'secondary',
    name: 'Авторский надзор',
    description:
      'Помогу разобраться, как должен выглядеть ваш будущий интерьер и сделаю наглядный коллаж с подбором палитры и реальных предметов мебели.',
    price: 'от 15 000 р.',
    timing: 'Созвон до 2х часов',
  },
  {
    id: 7,
    type: 'secondary',
    name: 'Комплектация',
    description:
      'Помогу разобраться, как должен выглядеть ваш будущий интерьер и сделаю наглядный коллаж с подбором палитры и реальных предметов мебели.',
    price: 'от 15 000 р.',
    timing: 'Созвон до 2х часов',
  },
];

type slideType = {
  id: number;
  photo: string;
  feedback: string;
  author: string;
};

export const slides: slideType[] = [
  {
    id: 1,
    photo: pic,
    feedback: '“Все очень классно, живу не тужу, прихожу домой в уютную атмосферу и наслаждаюсь”',
    author: 'Дмитрий, Москва',
  },
  {
    id: 2,
    photo: pic,
    feedback: '“1111”',
    author: 'Дмитрий, Москва',
  },
  {
    id: 3,
    photo: pic,
    feedback: '“2222”',
    author: 'Дмитрий, Москва',
  },
  {
    id: 4,
    photo: pic,
    feedback: '“3333”',
    author: 'Дмитрий, Москва',
  },
];

type stageType = {
  id: number;
  title: string;
  description: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
};

export const stages: stageType[] = [
  {
    id: 1,
    title: 'Встреча-знакомство',
    description:
      'Я попрошу рассказать о ваших желаниях и предпочтениях, расскажу подробно как будет строиться наш процесс взаимодействия. В ходе встречи мы заполним бриф и я задам ключевые вопросы. Также мы подпишем договор.',
  },
  {
    id: 2,
    title: 'Составление ТЗ',
    description:
      'Я попрошу рассказать о ваших желаниях и предпочтениях, расскажу подробно как будет строиться наш процесс взаимодействия. В ходе встречи мы заполним бриф и я задам ключевые вопросы. Также мы подпишем договор.',
  },
  {
    id: 3,
    title: 'Замеры и фотофиксация',
    description:
      'Технический этап с вашим минимальным участием. Замеры и фотофиксацию проводит специалист.',
  },
  {
    id: 4,
    title: 'Планировочное решение',
    description:
      'Этап, на котором продумывается расположение мебели, инженерного оборудования и перегородок на основе потенциала пространства и ваших запросов. Этот этап - база всего проекта.',
  },
  {
    id: 5,
    title: 'Концепция',
    description:
      'Творческий этап, где создается образ каждого помещения. Мы согласовываем их в виде интерьерных коллажей, где определены цветовые и стилистические решения, акценты, основные материалы.',
  },
  {
    id: 6,
    title: 'Визуализация',
    description:
      'Разработка необходимых чертежей электрики, полов, сантехники, потолков, развертки всех помещений, раскладка плитки и ведомость отделочных материалов. Параллельно создаются визуализации будущего интерьера.',
  },
  {
    id: 7,
    title: 'Ремонт',
    description:
      'Проводятся строительные работы, реализация проекта, оживают картинки. Авторское сопровождение дизайнера и комплектация помогут сэкономить время, деньги и нервные клетки заказчика.',
  },
  {
    id: 8,
    title: 'Новоселье',
    description: 'Ваше идеальное пространство готово :)',
    icon: tic,
  },
];

type socialType = {
  id: number;
  type: string;
  title: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  link?: string;
};

export const socials: socialType[] = [
  {
    id: 1,
    type: 'link',
    title: 'Telegram',
    icon: telegram,
    link: 'https://t.me/OlgaLazarchuk',
  },
  {
    id: 2,
    type: 'link',
    title: 'WhatsApp',
    icon: whatsapp,
    link: 'https://t.me/OlgaLazarchuk',
  },
  { id: 3, type: 'mail', title: 'thebestdesigner@gmail.com', icon: mail },
];
