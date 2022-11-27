import classes from './Portfolio.module.scss';

function Portfolio() {
  return (
    <section>
      <h3>You know what they say...</h3>
      <h1>the proof is in the portfolio!</h1>
      <div className={classes.container}></div>
    </section>
  );
}
export default Portfolio;
