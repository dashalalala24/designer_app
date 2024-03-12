import Slider, { Settings } from 'react-slick';
import styles from './styles.module.css';
import { FC, useEffect, useRef, useState } from 'react';
import { SectionTitle, SectionTitleColor } from '../ui/SectionTitle';

export enum buttonsPositions {
  TOP = 'top',
  BOTTOM = 'bottom',
}

type SlideType = { id: number; photo: string; feedback?: string; author?: string };

type SliderComponentProps = {
  isInfinite?: boolean;
  title?: string;
  titleColor?: SectionTitleColor;
  slides: SlideType[];
  // sliderWrapperOuterRef?: React.RefObject<HTMLDivElement>;
  buttonsPosition?: buttonsPositions;
  slidesToShowNumber?: number;
};

export const SliderComponent: FC<SliderComponentProps> = ({
  isInfinite,
  title,
  titleColor = SectionTitleColor.DARK,
  slides,
  // sliderWrapperOuterRef,
  buttonsPosition = buttonsPositions.TOP,
  // slidesToShowNumber = 2,
}) => {
  // const infinite: boolean = true;
  // const title: string = 'Что говорят заказчики';
  // const slides = opinions;
  // const sectionId: string = 'feedback'

  const sliderRef = useRef<Slider>(null);
  const sliderWrapperRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [maxNumberOfCardsToShow, setMaxNumberOfCardsToShow] = useState<number>(0);

  const settings: Settings = {
    centerMode: false,
    variableWidth: true,
    arrows: true,
    dots: false,
    infinite: isInfinite,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentSlide: number) => handleChangeSlide(currentSlide),
  };

  const handleChangeSlide = (currentSlide: number) => {
    const leftArrowVisible = currentSlide !== 0;

    const rightArrowVisible = currentSlide <= slides.length - maxNumberOfCardsToShow;

    setShowLeftArrow(leftArrowVisible);

    setShowRightArrow(rightArrowVisible);
  };

  useEffect(() => {
    const slideWidth = slideRef.current?.getBoundingClientRect().width || 652;
    // const slideWidth = slideRef.current?.getBoundingClientRect().width || 497;

    // let wrapperWidth: number;

    // if (sliderWrapperOuterRef) {
    //   wrapperWidth = sliderWrapperOuterRef.current?.clientWidth || 0;
    // } else {
    const wrapperWidth = sliderWrapperRef.current?.clientWidth || 0;
    // }

    const maxNumberOfCards = Math.ceil(wrapperWidth / slideWidth);

    setMaxNumberOfCardsToShow(maxNumberOfCards);

    setShowRightArrow(slides.length > maxNumberOfCards);
  }, [slides.length]);

  return (
    <div
      ref={sliderWrapperRef}
      className={styles.root}>
      {buttonsPosition === buttonsPositions.TOP && (
        <div
          className={styles.container}
          // ref={sliderWrapperRef}
        >
          {title && (
            <SectionTitle
              text={title}
              color={titleColor}
            />
          )}
          <div className={styles.buttons}>
            <button
              type='button'
              className={`${styles.button} ${styles.buttonLeft} ${styles.buttonTop}`}
              onClick={() => sliderRef.current?.slickPrev()}
              style={!isInfinite && !showLeftArrow ? { opacity: 0, visibility: 'hidden' } : {}}
            />
            <button
              type='button'
              className={`${styles.button} ${styles.buttonRight} ${styles.buttonTop}`}
              onClick={() => sliderRef.current?.slickNext()}
              style={!isInfinite && !showRightArrow ? { opacity: 0, visibility: 'hidden' } : {}}
            />
          </div>
        </div>
      )}
      <Slider
        {...settings}
        ref={sliderRef}
        className={styles.slider}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            ref={slideRef}
            className={styles.slide}>
            <img
              src={slide.photo}
              className={styles.photo}
            />
            {slide.feedback && <p className={styles.feedback}>{slide.feedback}</p>}
            {slide.author && <p className={styles.author}>{slide.author}</p>}
          </div>
        ))}
      </Slider>
      {buttonsPosition === buttonsPositions.BOTTOM && (
        <div className={`${styles.container} ${styles.containerBottom}`}>
          <div className={styles.buttons}>
            <button
              type='button'
              className={`${styles.button} ${styles.buttonLeft} ${styles.buttonBottom}`}
              onClick={() => sliderRef.current?.slickPrev()}
              style={!isInfinite && !showLeftArrow ? { opacity: 0, visibility: 'hidden' } : {}}
            />
            <button
              type='button'
              className={`${styles.button} ${styles.buttonRight} ${styles.buttonBottom}`}
              onClick={() => sliderRef.current?.slickNext()}
              style={!isInfinite && !showRightArrow ? { opacity: 0, visibility: 'hidden' } : {}}
            />
          </div>
        </div>
      )}
    </div>
  );
};
