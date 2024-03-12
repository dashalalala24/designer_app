import styles from './styles.module.css';
import { opinions } from '../../utils/constants';
// import { useRef } from 'react';
import { SliderComponent } from '../Slider';

export const Feedback = () => {
  // const sliderWrapperRef = useRef<HTMLDivElement>(null);

  // const infinite: boolean = true;
  // const title: string = 'Что говорят заказчики';
  // const slides = opinions;
  // const sectionId: string = 'feedback'

  // const sliderRef = useRef<Slider>(null);
  // const slideRef = useRef<HTMLDivElement>(null);

  // const [showRightArrow, setShowRightArrow] = useState<boolean>(false);
  // const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  // const [maxNumberOfCardsToShow, setMaxNumberOfCardsToShow] = useState<number>(0);

  // const settings: Settings = {
  //   centerMode: false,
  //   variableWidth: true,
  //   arrows: true,
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   afterChange: (currentSlide: number) => handleChangeSlide(currentSlide),
  // };

  // const handleChangeSlide = (currentSlide: number) => {
  //   const leftArrowVisible = currentSlide !== 0;

  //   const rightArrowVisible = currentSlide <= slides.length - maxNumberOfCardsToShow;

  //   setShowLeftArrow(leftArrowVisible);

  //   setShowRightArrow(rightArrowVisible);
  // };

  // useEffect(() => {
  //   const slideWidth = slideRef.current?.getBoundingClientRect().width || 620;

  //   const wrapperWidth = sliderWrapperRef.current?.clientWidth || 0;

  //   const maxNumberOfCards = Math.ceil(wrapperWidth / slideWidth);

  //   setMaxNumberOfCardsToShow(maxNumberOfCards);

  //   setShowRightArrow(slides.length > maxNumberOfCards);
  // }, []);

  return (
    <section
      // ref={sliderWrapperRef}
      id='feedback'
      className={styles.root}>
      <SliderComponent
        title='Что говорят заказчики'
        isInfinite={true}
        slides={opinions}
        // sliderWrapperOuterRef={sliderWrapperRef}
      />
    </section>
  );
};
