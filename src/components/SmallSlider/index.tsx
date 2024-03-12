import Slider, { Settings } from 'react-slick';
import styles from './styles.module.css';
import { FC, useRef, useState } from 'react';

type SlideType = { id: number; photo: string; feedback?: string; author?: string };

type SliderComponentProps = {
  slides: SlideType[];
};

export const SmallSlider: FC<SliderComponentProps> = ({ slides }) => {
  const sliderRef = useRef<Slider>(null);
  const sliderWrapperRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const [showRightArrow, setShowRightArrow] = useState<boolean>(true);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);

  const settings: Settings = {
    centerMode: false,
    variableWidth: true,
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentSlide: number) => handleChangeSlide(currentSlide),
  };

  const handleChangeSlide = (currentSlide: number) => {
    const leftArrowVisible = currentSlide !== 0;

    const rightArrowVisible = currentSlide < slides.length - 1;

    setShowLeftArrow(leftArrowVisible);

    setShowRightArrow(rightArrowVisible);
  };

  console.log('showRightArrow', showRightArrow);

  return (
    <div
      ref={sliderWrapperRef}
      className={styles.root}>
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
          </div>
        ))}
      </Slider>
      <div className={`${styles.container} ${styles.containerBottom}`}>
        <div className={styles.buttons}>
          <button
            type='button'
            className={`${styles.button} ${styles.buttonLeft} ${styles.buttonBottom}`}
            onClick={() => sliderRef.current?.slickPrev()}
            style={!showLeftArrow ? { opacity: 0, visibility: 'hidden' } : {}}
          />
          <button
            type='button'
            className={`${styles.button} ${styles.buttonRight} ${styles.buttonBottom}`}
            onClick={() => sliderRef.current?.slickNext()}
            style={!showRightArrow ? { opacity: 0, visibility: 'hidden' } : {}}
          />
        </div>
      </div>
    </div>
  );
};
