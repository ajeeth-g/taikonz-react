import './button.css';

const Button = ({ btnText, variant }) => {
  return <button className={`btn btn--${variant}`}>{btnText}</button>;
};

export default Button;
