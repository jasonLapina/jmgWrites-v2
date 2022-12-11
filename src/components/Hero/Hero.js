import classes from './Hero.module.scss';
import hero from '../../assets/hero.png';
function Hero() {
  return (
    <section id='about' className={classes.section}>
      <div className={classes['img-box']}>
        <img src={hero} alt='Jelanie Gapas' />
        <span>Jelanie Gapas, Copywriter.</span>
      </div>
      <div className={classes['txt-box']}>
        <h1>
          Hey there<span className={classes.emoji}>👋</span>,<br />{' '}
          <strong>it's Jel!</strong>
        </h1>
        <p>
          In my 20+ years of existence, I've probably spent most of my time
          reading, journaling, and dreaming of becoming a writer, and now, after
          four grueling years in college, I've finally decided to make a living
          out of the thing I love doing the most - <strong>writing!</strong>
        </p>
        <p>"But what do you do exactly?", you ask?</p>
        <p>
          I’m a <strong>direct-response copywriter</strong> who writes copy that
          converts AND connects, and I’m here to help you put words to work for
          your business.
        </p>
      </div>
    </section>
  );
}

export default Hero;
