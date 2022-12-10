import { useState } from 'react';
import classes from './How.module.scss';
function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      title: 'Strategy first, copy second',
      text: [
        'We’ll hop on a quick 15 to 30-minute call to talk about how I can help you make the most out of your email list.',
        'To keep us both on the same page, we’ll finalize everything through a strategy document which would contain the following: Project Timeline, Deliverables, and Copy Quote.',
      ],
    },
    {
      title: 'Done right the first time',
      text: [
        'Writing your copy comes with finding your brand voice, market and competitor research, and a little bit of spice! 😉 It may take some time, but I’ll make sure to get it done right the first time.',
        'Don’t worry, I’m offering unlimited revisions in case anything comes up!',
      ],
    },
  ];

  const renderSteps = steps.map((step, i) => {
    const style =
      activeIndex !== i ? { transform: `translateX(${i * 200 - 100}%)` } : {};

    const { title, text } = step;
    return (
      <div style={style} className={classes.step} key={i}>
        <h3 className={classes.title}>{`${i + 1}. ${title}`}</h3>
        <div className={classes['text-wrapper']}>
          {text.map((txt, i) => {
            return (
              <p className={classes.text} key={i}>
                {txt}
              </p>
            );
          })}
        </div>
      </div>
    );
  });

  const renderIndicators = Array.from({ length: 2 }).map((_, i) => {
    return (
      <div
        key={i}
        className={`${classes.indicator} ${
          i === activeIndex ? classes.active : ''
        }`}
      />
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes['steps-wrapper']}>{renderSteps}</div>
      <button
        onClick={() => {
          setActiveIndex((prev) => (prev === 1 ? 0 : 1));
        }}
        className={`${classes.ctrl} ${classes.prev}`}
      >
        <ion-icon name='chevron-back-outline'></ion-icon>
      </button>
      <button
        onClick={() => {
          setActiveIndex((prev) => (prev === 1 ? 0 : 1));
        }}
        className={`${classes.ctrl} ${classes.next}`}
      >
        <ion-icon name='chevron-forward-outline'></ion-icon>
      </button>
      <div className={classes.indicators}>{renderIndicators}</div>
    </div>
  );
}

export default HowItWorks;

/*

𝟭. 𝗦𝘁𝗿𝗮𝘁𝗲𝗴𝘆 𝗳𝗶𝗿𝘀𝘁, 𝗰𝗼𝗽𝘆 𝘀𝗲𝗰𝗼𝗻𝗱.
🌀We’ll hop on a quick 15 to 30-minute call to talk about how I can help you make the most out of your email list.


🌀To keep us both on the same page, we’ll finalize everything through a strategy document which would contain the following: Project Timeline, Deliverables, and Copy Quote.

𝟮. 𝗔 𝗰𝗼𝗽𝘆 𝘁𝗵𝗮𝘁 𝗶𝘀 𝗱𝗼𝗻𝗲 𝗿𝗶𝗴𝗵𝘁 𝘁𝗵𝗲 𝗳𝗶𝗿𝘀𝘁 𝘁𝗶𝗺𝗲.
🌀Writing your copy comes with finding your brand voice, market and competitor research, and a little bit of spice! ;) It may take some time, but I’ll make sure to get it done right the first time. 

🌀 Don’t worry, I’m offering unlimited revisions in case anything comes up!



*/
