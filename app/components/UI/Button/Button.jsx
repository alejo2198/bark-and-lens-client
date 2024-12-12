"use client";
import "./Button.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Button = ({ variant, text, icon }) => {
  const router = useRouter(); // Initialize the router

  const handleClick = () => {
    if (variant === "login") {
      router.push("/login"); // Navigate to the login page
    } else if (variant === "signup") {
      router.push("/signup"); // Navigate to the signup page
    } else {
      console.log("No navigation specified.");
    }
  };

  return (
    <button
      className={variant ? `button__${variant}` : "button"}
      onClick={handleClick}
    >
      {icon &&
        <Image
        src="/icons/google.svg"
        height={20}
        width={20}
        alt="google logo"
        className="google"
      />
      }
      
      {text}
    </button>
  );
};

export default Button;
