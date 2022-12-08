import classes from './Cta.module.scss';
function Cta() {
  return (
    <section className={classes.section}>
      <div className={classes.left}>
        <h5>
          But of course,{' '}
          <strong>with great copy comes an even greater process!</strong>
        </h5>
        <h3>Here's how we can work together:</h3>
        <div className={classes.container}></div>
      </div>
      <div className={classes.right}>
        <div>
          <p>
            <em>Long story short</em>,
            <strong>
              I help purpose-driven brands get their message across and maximize
              their revenue through strategic and direct-response copy.
            </strong>
            <p>Interested?</p>
          </p>
        </div>
      </div>
    </section>
  );
}
export default Cta;
