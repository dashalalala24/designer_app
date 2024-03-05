import Slider from "react-slick";
import styles from "./styles.module.css";
import { slides } from "../../utils/constants";

export const Feedback = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
  };

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Что говорят заказчики</h2>
      <Slider {...settings} className={styles.slider}>
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <img src={slide.photo} className={styles.photo} />
            <p className={styles.feedback}>{slide.feedback}</p>
            <p className={styles.author}>{slide.author}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};
