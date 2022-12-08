import classes from './Button.module.scss';

function Button({ onClick, children, className }) {
  return (
    <button className={`${classes.btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;

