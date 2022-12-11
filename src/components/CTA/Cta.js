import classes from './Cta.module.scss';
import CtaForm from './CtaForm';
import HowItWorks from './HowItWorks';
import linkedIn from '../../assets/socials/linkedin.png';
import calendar from '../../assets/socials/calendar.png';
import gmail from '../../assets/socials/gmail.png';

function Cta() {
  const socials = [
    {
      icon: calendar,
      link: 'https://calendly.com/jmgwrites',
    },
    {
      icon: gmail,
      link: 'mailto:jelanie@jmgwrites.info',
    },
    {
      icon: linkedIn,
      link: 'https://www.linkedin.com/in/jmgwrites/',
    },
  ];
  const renderSocials = socials.map((item, i) => {
    const { icon, link } = item;
    return (
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img src={icon} key={i} alt='social icon' />
      </a>
    );
  });
  return (
    <section id='cta' className={classes.section}>
      <div className={classes.left}>
        <span className={classes.subheading}>
          But of course,{' '}
          <strong>
            <em>with great copy comes an even greater process!</em>
          </strong>
        </span>
        <h1 className={classes.heading}>Here's how we can work together:</h1>
        <HowItWorks />
        <div className={classes.socials}>{renderSocials}</div>
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
