'use client'
import "./Nav.scss";
import Image from "next/image";
import Button from "../UI/Button/Button";
import { useEffect } from "react";
const Nav = () => {
  const logo = "/images/logo.png";

  //useEffect function to improve smooth scroll given by chatGPT
  useEffect(() => {
    const handleSmoothScroll = (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (anchor) {
            e.preventDefault(); // Prevent default anchor click behavior
            const target = document.querySelector(anchor.getAttribute('href'));
            const navHeight = document.querySelector('nav').offsetHeight; // Get the height of the nav

            window.scrollTo({
                top: target.offsetTop - navHeight, // Offset the scroll position
                behavior: 'smooth' // Smooth scroll
            });
        }
    };

    // Attach the click event listener to the anchor tags
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });

    // Clean up the event listener on component unmount
    return () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.removeEventListener('click', handleSmoothScroll);
        });
    };
}, []);
  
  return (
    <nav className="nav">
      <Image src={logo} alt="logo" height={60} width={90} />
      <ul className="nav__links">
        <li><a href="#header" className="nav__link">Home</a></li>
        <li><a href="#services" className="nav__link">Services</a></li>
        <li><a href="#testimonials" className="nav__link">Testimonials</a></li>
        <li><a href="#footer" className="nav__link">Contact Us</a></li>
      </ul>
      <div className="nav__buttons">
        <Button variant="signup" text="Sign Up" />
        <Button variant="login" text="Log In" />
      </div>
    </nav>
  );
};
export default Nav;
