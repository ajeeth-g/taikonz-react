import "./button.css";

const Button = ({ btnText, variant = 'primary' }) => {
  return (
    <button className={`btn ${variant}`}>
      {btnText}
    </button>
  );
};

export default Button;
