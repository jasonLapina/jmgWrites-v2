import classes from './Portfolio.module.scss';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import facebook from '../../assets/Facebook.jpg';
import email from '../../assets/email.webp';

const items = [
  {
    src: email,
    caption: 'Email Copy',
    key: 1,
    alt: 'email copy',
    link: 'https://docs.google.com/document/d/1QxGh6PJlx3O16v_Qu8l6gGGqNrdaAypM5ykzgU_o2E0/edit',
  },
  {
    src: facebook,
    caption: 'Facebook Copy',
    key: 2,
    alt: 'facebook copy',
    link: 'https://docs.google.com/document/d/1V5lSjuwQZK82eyn4Td_gm2VcUAzvWTwJPvgMLazYxB0/edit',
  },
];

function Portfolio(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem key={item.src}>
        <a href={item.link} target='_blank' rel='noopener noreferrer'>
          <img className={classes.img} src={item.src} alt={item.alt} />
        </a>
        <CarouselCaption
          className={classes.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <section>
      <div className={classes.heading}>
        <h3>You know what they say...</h3>
        <h1>the proof is in the portfolio!</h1>
      </div>

      <Carousel
        className={classes.carousel}
        ride={false}
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction='prev'
          directionText='Previous'
          onClickHandler={previous}
          className={classes.ctrl}
        />
        <CarouselControl
          direction='next'
          directionText='Next'
          onClickHandler={next}
          className={classes.ctrl}
        />
      </Carousel>
    </section>
  );
}

export default Portfolio;
