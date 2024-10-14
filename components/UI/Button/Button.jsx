'use client'
import './Button.scss'
const Button = ({ variant, text }) => {
  const handleLogin = () => {
    //send to login page
  };
  const handleSignup = () => {
    //send to signup page
  };
  return (
    <button
      className={variant ? `button__${variant}` : `button`}
      onClick={handleLogin}
    >
      {text}
    </button>
  );
};
export default Button;
