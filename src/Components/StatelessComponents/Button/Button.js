import './Button.css';

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="signup-login-button"
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;
