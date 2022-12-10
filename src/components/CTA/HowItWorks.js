import { useState } from 'react';
import classes from './How.module.scss';
function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h3>𝟭. 𝗦𝘁𝗿𝗮𝘁𝗲𝗴𝘆 𝗳𝗶𝗿𝘀𝘁, 𝗰𝗼𝗽𝘆 𝘀𝗲𝗰𝗼𝗻𝗱.</h3>
        <p>
          🌀We’ll hop on a quick 15 to 30-minute call to talk about how I can
          help you make the most out of your email list.
        </p>
        <p>
          🌀To keep us both on the same page, we’ll finalize everything through
          a strategy document which would contain the following: Project
          Timeline, Deliverables, and Copy Quote.
        </p>
      </div>
      <div className={`${classes.content} ${classes.hidden}`}>
        <h3>𝟮. 𝗔 𝗰𝗼𝗽𝘆 𝘁𝗵𝗮𝘁 𝗶𝘀 𝗱𝗼𝗻𝗲 𝗿𝗶𝗴𝗵𝘁 𝘁𝗵𝗲 𝗳𝗶𝗿𝘀𝘁 𝘁𝗶𝗺𝗲.</h3>
        <p>
          🌀Writing your copy comes with finding your brand voice, market and
          competitor research, and a little bit of spice! 😉 It may take some
          time, but I’ll make sure to get it done right the first time.
        </p>
        <p>
          🌀 Don’t worry, I’m offering unlimited revisions in case anything
          comes up!
        </p>
      </div>
      <button className={`${classes.btn} ${classes['btn--prev']}`}>
        <ion-icon name='chevron-back-outline' />
      </button>
      <button className={`${classes.btn} ${classes['btn--next']}`}>
        <ion-icon name='chevron-forward-outline' />
      </button>
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
