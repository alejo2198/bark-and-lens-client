import Header from "./components/Header/Header";
import Services from "./sections/Services/Services";
import Inspiration from "./sections/Inspiration/Inspiration";
import Testimonials from "./sections/Testimonials/Testimonials";
import CTASection from "./sections/CTASection/CTASection";
import Footer from "./sections/Footer/Footer";
import { initializeApp } from "firebase/app";
  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default function Home() {

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqEzLZqVD3-Vx_7mHLiBgfTXiRmGwynV0",
  authDomain: "bark-and-lens-394ff.firebaseapp.com",
  projectId: "bark-and-lens-394ff",
  storageBucket: "bark-and-lens-394ff.firebasestorage.app",
  messagingSenderId: "250082457752",
  appId: "1:250082457752:web:5c58bfafdac5583efc38ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  return (
    <>
    <Header/>
    <main className="main">
      <Services/> 
      <Inspiration/>
      <Testimonials/>
      <CTASection/>
    </main>
    <Footer/>
    </>
  );
}
