'use client'
import "./Nav.scss";
import Image from "next/image";
import Button from "../UI/Button/Button";
import { useEffect } from "react";
import Link from "next/link";

const Nav = () => {
  const logo = "/images/logo.png";

  //useEffect function to improve smooth scroll given by chatGPT
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) { // Check if target exists on current page
          e.preventDefault();
          const navHeight = document.querySelector('nav').offsetHeight;
          window.scrollTo({
            top: target.offsetTop - navHeight,
            behavior: 'smooth'
          });
        } else if (anchor.origin !== window.location.origin) { // Check for external link
          // Let the default behavior happen for external links
        } else {
          // Handle error or display a message for broken links
        }
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
        <li><a href="/#header" className="nav__link">Home</a></li>
        <li><a href="/#services" className="nav__link">Services</a></li>
        <li><a href="/#testimonials" className="nav__link">Testimonials</a></li>
        <li><a href="/#footer" className="nav__link">Contact Us</a></li>
      </ul>
      <div className="nav__buttons">
        <Button variant="signup" text="Sign Up" />
        <Button variant="login" text="Log In" />
      </div>
    </nav>
  );
};
export default Nav;
