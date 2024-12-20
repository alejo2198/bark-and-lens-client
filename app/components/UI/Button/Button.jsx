"use client";
import "./Button.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Button = ({ variant, text, icon,photoPackage}) => {
  
  const router = useRouter(); // Initialize the router

  const handleClick = (e) => {
    e.preventDefault();
    switch (variant) {
      case "login":
        router.push("/login"); // Navigate to the login page
        break;
      case "signup":
        router.push("/signup"); // Navigate to the signup page
        break;
      case "signup--reverse":
      case "google-signup":
      case "google-login":
      case "login--reverse":
        router.push("/user"); // Navigate to the dashboard for these cases
        break;
      case "cta-book":
      case "book":
        router.push("/user/appointment/book"); // Navigate to the appointment booking
        break;
      case "select":
        router.push("/user/appointment/book"); // Navigate to the appointment booking
        break;
        case "select-param":
          console.log(photoPackage)
          router.push({
            pathname: "/user/appointment/book",
            query: { photoshoot:"basic" },
        }); // Navigate to the appointment booking
        break;
      case "select-time":
        router.push("/user"); // Navigate to the appointment booking
        break;
      case "home":
        router.push("/user"); // Navigate to the main page
        break;
      case "logout":
        router.push("/"); // Navigate to the main page
        break;
      case "cancel":
        router.push("/"); // Navigate to the main page
        break;
        case "view":
        router.push("/admin"); // Navigate to the main page
        break;
      default:
        console.log("No navigation specified.");
    }
  };

  return (
    <button
      className={variant ? `button__${variant}` : "button"}
      onClick={handleClick}
    >
      {icon && (
        <Image
          src="/icons/google.svg"
          height={20}
          width={20}
          alt="google logo"
          className="google"
        />
      )}

      {text}
    </button>
  );
};

export default Button;
