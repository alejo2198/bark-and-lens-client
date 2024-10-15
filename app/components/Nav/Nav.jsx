import "./Nav.scss";
import Image from "next/image";
import Button from "../UI/Button/Button";

const Nav = () => {
  const logo = "/images/logo.png";
  
  return (
    <nav className="nav">
      <Image src={logo} alt="logo" height={60} width={90} />
      <ul className="nav__links">
        <li className="nav__link">Home</li>
        <li className="nav__link">Services</li>
        <li className="nav__link">Testimonials</li>
        <li className="nav__link">Contact Us</li>
      </ul>
      <div className="nav__buttons">
        <Button variant="signup" text="Sign Up" />
        <Button variant="login" text="Log In" />
      </div>
    </nav>
  );
};
export default Nav;
