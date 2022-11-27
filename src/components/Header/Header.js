import classes from './Header.module.scss';
import Button from '../UI/Button';
function Header() {
  return (
    <section className={classes.section}>
      <div className={classes.heading}>
        <h3>
          Want to level up your marketing <br />
          <strong> without breaking a sweat?</strong>
        </h3>
        <h1>Let the copy do the heavy lifting.</h1>
      </div>
      <div className={classes.cta}>
        <span>Better yet,</span>
        <Button>Let Jel do the copy &rarr;</Button>
      </div>
    </section>
  );
}

export default Header;
