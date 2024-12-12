import Image from "next/image";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Image
        src="/images/logo.png"
        height={140}
        width={180}
        alt="logo for bark and lens. a camera with a paw as the lens"
      />
      <div className="links-and-socials">
        <ul className="footer__links">
          <li>
            <a href="#header" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#footer" className="footer__link">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="footer__socials">
          <Image
            src="/icons/email.svg"
            height={50}
            width={50}
            alt="email logo"
          />
          <Image
            src="/icons/instagram.svg"
            height={40}
            width={40}
            alt="instagram logo"
          />
        </div>
      </div>
      <div className="location">
        <p className="location__title">Location</p>
        <p className="location__text">
          we’re located in Etobicoke right by Humber Bay, It’s the perfect spot
          for a nature photoshoot.
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.7817258875725!2d-79.47380942382433!3d43.63190177110315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b36759b97ac23%3A0x369affe02bf904e5!2sHumber%20Bay%20Arch%20Bridge!5e0!3m2!1sen!2sca!4v1729053211042!5m2!1sen!2sca"
        width="250"
        height="150"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="map"
      ></iframe>
    </footer>
  );
};

export default Footer;
