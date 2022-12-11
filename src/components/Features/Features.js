import classes from './Features.module.scss';
import Button from '../../components/UI/Button';

function Features() {
  return (
    <section id='benefits' className={classes.section}>
      <div className={classes.left}>
        <div className={classes.heading}>
          <h3>Enough about me.</h3>
          <h1>
            What does this mean for you? <ion-icon name='search-outline' />
          </h1>
        </div>
        <p>
          If you are a business owner or an entrepreneur who’s{' '}
          <strong>
            clear on your brand’s purpose, eager to amplify impact, and ready to
            maximize revenue
          </strong>
        </p>
        <p>
          <strong>...BUT</strong> is struggling to communicate your brand’s
          value, generate more sales and build stronger relationships with your
          subscribers…
        </p>
        <p>
          Then, <strong>you've come to the right place.</strong>
        </p>
      </div>
      <div className={classes.right}>
        <p className={classes['right__txt-box']}>
          <u>With me</u>, you'd get a copy that:
          <ul>
            <li>
              <strong>R</strong>esonate with your audience
            </li>
            <li>
              <strong>O</strong>vercome Pain Points
            </li>
            <li>
              <strong>I</strong>nvoke urgency to take action
            </li>
          </ul>
          <em>
            Perfect <strong>ROI</strong> formula for you!
          </em>
        </p>
        <Button className={classes.btn}>Let Jel do the copy &rarr;</Button>
      </div>
    </section>
  );
}
export default Features;
