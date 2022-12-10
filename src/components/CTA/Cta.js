import classes from './Cta.module.scss';
import CtaForm from './CtaForm';
import HowItWorks from './HowItWorks';

function Cta() {
  return (
    <section className={classes.section}>
      <div className={classes.left}>
        <span>
          But of course,{' '}
          <strong>
            <em>with great copy comes an even greater process!</em>
          </strong>
        </span>
        <h1>Here's how we can work together:</h1>
        <HowItWorks />
      </div>
      <div className={classes.right}>
        <div>
          <p>
            <em>Long story short</em>,
            <strong>
              I help purpose-driven brands get their message across and maximize
              their revenue through strategic and direct-response copy.
            </strong>
          </p>
          <span className={classes.interested}>Interested?</span>
          <button className={classes.cta}>
            Book a FREE discovery call with me!
          </button>
          <p>
            If you'd prefer to talk via email, you can reach me at:
            <a href='mailto:jelanie@jmgwrites.info'>
              <strong>jelanie@jmgwrites.info</strong>
            </a>
            , or use the contact form below:
          </p>
        </div>
        <CtaForm />
      </div>
    </section>
  );
}
export default Cta;
