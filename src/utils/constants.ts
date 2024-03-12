import cover from '../assets/project_cover.png';
import pic from '../assets/feedback.png';
import plan from '../assets/plan.png';
import tic from '../assets/icons/tic.svg?react';
import telegram from '../assets/icons/telegram.svg?react';
import whatsapp from '../assets/icons/whatsapp.svg?react';
import mail from '../assets/icons/mail.svg?react';

// import plan from '../assets/plan.pdf';
import tech_project from '../assets/tech_project.pdf';
import full_project from '../assets/full_project.pdf';

import krasnodar_0 from '../assets/project_4/krasnodar_0.png';
import krasnodar_1 from '../assets/project_4/krasnodar_1.png';
import krasnodar_2 from '../assets/project_4/krasnodar_2.png';
import krasnodar_3 from '../assets/project_4/krasnodar_3.png';
import krasnodar_4 from '../assets/project_4/krasnodar_4.png';
import krasnodar_5 from '../assets/project_4/krasnodar_5.png';
import krasnodar_6 from '../assets/project_4/krasnodar_6.png';
import krasnodar_7 from '../assets/project_4/krasnodar_7.png';
import krasnodar_8 from '../assets/project_4/krasnodar_8.png';
import krasnodar_9 from '../assets/project_4/krasnodar_9.png';
import krasnodar_10 from '../assets/project_4/krasnodar_10.png';
import krasnodar_11 from '../assets/project_4/krasnodar_11.png';
import krasnodar_12 from '../assets/project_4/krasnodar_12.png';

type navigationItemType = {
  id: number;
  text: string;
  link: string;
};

export const navigation: navigationItemType[] = [
  { id: 1, text: 'Обо мне', link: '/#about' },
  { id: 2, text: 'Проекты', link: '/#projects' },
  { id: 3, text: 'Отзывы', link: '/#feedback' },
  { id: 4, text: 'Услуги', link: '/#services' },
  { id: 5, text: 'Этапы работы', link: '/#stages' },
  { id: 6, text: 'Вопросы', link: '/#faq' },
  { id: 7, text: 'Контакты', link: '/#contacts' },
];

export enum photoType {
  SQUARE = 'square',
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
  HORIZONTALFULL = 'horizontalFull',
}

export type projectType = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  about: string;
  link: string;
  mainPhoto: string;
  footage: string;
  planPics: {
    id: number;
    photo: string;
  }[];
  details: {
    name: string;
    text: string;
  }[];
  processPics: {
    id: number;
    photo: string;
  }[];
  photos: {
    id: number;
    type: photoType;
    photo: string;
  }[];
};

export const projects: projectType[] = [
  {
    id: 1,
    title: 'Квартира в Москве',
    subtitle: 'Для молодой семьи из 3х человек',
    description: 'пару слов о проекте, для кого, какая задумка что-то типа тизера',
    about:
      'Интерьер двухуровневой квартиры в светло-бежевых оттенках создавался для молодой пары. Большую часть времени они проводят на работе и дома им хочется отдохнуть. Поэтому наша основная задача в проекте — отойти от холодного минимализма, придать мягкости и тепла. Мы добились этого через цвет, фактуры. Так же предусмотрели мягкое вечернее освещение для расслабленной обстановки.',
    link: '#',
    mainPhoto: cover,
    footage: '100 кв.м.',
    planPics: [
      { id: 1, photo: plan },
      { id: 2, photo: plan },
      { id: 3, photo: plan },
    ],
    details: [
      { name: 'Площадь', text: '100 кв.м.' },
      { name: 'Местоположение', text: 'Центр' },
      { name: 'Сроки', text: '2 месяца' },
      { name: 'Бюджет', text: 'от 300 тыс.' },
    ],
    processPics: [
      { id: 1, photo: cover },
      { id: 2, photo: cover },
      { id: 3, photo: cover },
    ],
    photos: [
      { id: 1, type: photoType.SQUARE, photo: krasnodar_1 },
      { id: 2, type: photoType.SQUARE, photo: krasnodar_2 },
      { id: 3, type: photoType.VERTICAL, photo: krasnodar_0 },
      { id: 4, type: photoType.VERTICAL, photo: krasnodar_4 },
      { id: 5, type: photoType.VERTICAL, photo: krasnodar_11 },
      { id: 5, type: photoType.VERTICAL, photo: krasnodar_12 },
      { id: 5, type: photoType.HORIZONTALFULL, photo: krasnodar_3 },
      { id: 5, type: photoType.HORIZONTALFULL, photo: krasnodar_7 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_5 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_6 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_8 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_9 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_10 },
    ],
  },
  {
    id: 2,
    title: 'Квартира в Краснодаре',
    subtitle: 'Для молодой семьи из 3х человек',
    description: 'пару слов о проекте, для кого, какая задумка что-то типа тизера',
    about:
      'Интерьер двухуровневой квартиры в светло-бежевых оттенках создавался для молодой пары. Большую часть времени они проводят на работе и дома им хочется отдохнуть. Поэтому наша основная задача в проекте — отойти от холодного минимализма, придать мягкости и тепла. Мы добились этого через цвет, фактуры. Так же предусмотрели мягкое вечернее освещение для расслабленной обстановки.',
    link: '#',
    mainPhoto: cover,
    footage: '200 кв.м.',
    planPics: [
      { id: 1, photo: plan },
      { id: 2, photo: plan },
      { id: 3, photo: plan },
    ],
    details: [
      { name: 'Площадь', text: '100 кв.м.' },
      { name: 'Местоположение', text: 'Центр' },
      { name: 'Сроки', text: '2 месяца' },
      { name: 'Бюджет', text: 'от 300 тыс.' },
    ],
    processPics: [
      { id: 1, photo: cover },
      { id: 2, photo: cover },
      { id: 3, photo: cover },
    ],
    photos: [
      { id: 1, type: photoType.SQUARE, photo: krasnodar_1 },
      { id: 2, type: photoType.SQUARE, photo: krasnodar_2 },
      { id: 3, type: photoType.VERTICAL, photo: krasnodar_0 },
      { id: 4, type: photoType.VERTICAL, photo: krasnodar_4 },
      { id: 5, type: photoType.VERTICAL, photo: krasnodar_11 },
      { id: 5, type: photoType.VERTICAL, photo: krasnodar_12 },
      { id: 5, type: photoType.HORIZONTALFULL, photo: krasnodar_3 },
      { id: 5, type: photoType.HORIZONTALFULL, photo: krasnodar_7 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_5 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_6 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_8 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_9 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_10 },
    ],
  },
  {
    id: 3,
    title: 'Квартира в Ярославле',
    subtitle: 'Для молодой семьи из 3х человек',
    description: 'пару слов о проекте, для кого, какая задумка что-то типа тизера',
    about:
      'Интерьер двухуровневой квартиры в светло-бежевых оттенках создавался для молодой пары. Большую часть времени они проводят на работе и дома им хочется отдохнуть. Поэтому наша основная задача в проекте — отойти от холодного минимализма, придать мягкости и тепла. Мы добились этого через цвет, фактуры. Так же предусмотрели мягкое вечернее освещение для расслабленной обстановки.',
    link: '#',
    mainPhoto: cover,
    footage: '300 кв.м.',
    planPics: [
      { id: 1, photo: plan },
      { id: 2, photo: plan },
      { id: 3, photo: plan },
    ],
    details: [
      { name: 'Площадь', text: '100 кв.м.' },
      { name: 'Местоположение', text: 'Центр' },
      { name: 'Сроки', text: '2 месяца' },
      { name: 'Бюджет', text: 'от 300 тыс.' },
    ],
    processPics: [
      { id: 1, photo: cover },
      { id: 2, photo: cover },
      { id: 3, photo: cover },
    ],
    photos: [
      { id: 1, type: photoType.SQUARE, photo: krasnodar_1 },
      { id: 2, type: photoType.SQUARE, photo: krasnodar_2 },
      { id: 3, type: photoType.VERTICAL, photo: krasnodar_0 },
      { id: 4, type: photoType.VERTICAL, photo: krasnodar_4 },
      { id: 5, type: photoType.VERTICAL, photo: krasnodar_11 },
      { id: 5, type: photoType.VERTICAL, photo: krasnodar_12 },
      { id: 5, type: photoType.HORIZONTALFULL, photo: krasnodar_3 },
      { id: 5, type: photoType.HORIZONTALFULL, photo: krasnodar_7 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_5 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_6 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_8 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_9 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_10 },
    ],
  },
  {
    id: 4,
    title: 'Квартира на Луне',
    subtitle: 'Для молодой семьи из 3х человек',
    description: 'пару слов о проекте, для кого, какая задумка что-то типа тизера',
    about:
      'Интерьер двухуровневой квартиры в светло-бежевых оттенках создавался для молодой пары. Большую часть времени они проводят на работе и дома им хочется отдохнуть. Поэтому наша основная задача в проекте — отойти от холодного минимализма, придать мягкости и тепла. Мы добились этого через цвет, фактуры. Так же предусмотрели мягкое вечернее освещение для расслабленной обстановки.',
    link: '#',
    mainPhoto: krasnodar_1,
    footage: '400 кв.м.',
    planPics: [
      { id: 1, photo: plan },
      { id: 2, photo: plan },
      { id: 3, photo: plan },
      { id: 4, photo: plan },
    ],
    details: [
      { name: 'Площадь', text: '100 кв.м.' },
      { name: 'Местоположение', text: 'Центр' },
      { name: 'Сроки', text: '2 месяца' },
      { name: 'Бюджет', text: 'от 300 тыс.' },
    ],
    processPics: [
      { id: 1, photo: cover },
      { id: 2, photo: cover },
      { id: 3, photo: cover },
    ],
    photos: [
      { id: 1, type: photoType.SQUARE, photo: krasnodar_1 },
      { id: 2, type: photoType.SQUARE, photo: krasnodar_2 },
      { id: 3, type: photoType.VERTICAL, photo: krasnodar_0 },
      { id: 4, type: photoType.VERTICAL, photo: krasnodar_4 },
      { id: 5, type: photoType.VERTICAL, photo: krasnodar_11 },
      { id: 5, type: photoType.VERTICAL, photo: krasnodar_12 },
      { id: 5, type: photoType.HORIZONTALFULL, photo: krasnodar_3 },
      { id: 5, type: photoType.HORIZONTALFULL, photo: krasnodar_7 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_5 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_6 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_8 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_9 },
      { id: 5, type: photoType.HORIZONTAL, photo: krasnodar_10 },
    ],
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
  example?: string;
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
    // example: plan,
    example: 'plan',
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
    example: tech_project,
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
    example: full_project,
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

type opinionType = {
  id: number;
  photo: string;
  feedback: string;
  author: string;
};

export const opinions: opinionType[] = [
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
  icon?: string | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
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
  name: string;
  title: string;
  icon: string | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  link?: string;
};

export const socials: socialType[] = [
  { id: 1, type: 'phone', name: 'phone', title: '+7 977 986 27 68', icon: mail },
  {
    id: 2,
    type: 'social',
    name: 'link',
    title: 'Telegram',
    icon: telegram,
    link: 'https://t.me/OlgaLazarchuk',
  },
  {
    id: 3,
    type: 'social',
    name: 'link',
    title: 'WhatsApp',
    icon: whatsapp,
    link: 'https://wa.me/79779862768',
  },
  { id: 4, type: 'social', name: 'mail', title: 'nikitina.design@mail.ru', icon: mail },
];
