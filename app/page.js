import Header from "./components/Header/Header";
import Services from "./sections/Services/Services";
import Inspiration from "./sections/Inspiration/Inspiration";
import Testimonials from "./sections/Testimonials/Testimonials";
import CTASection from "./sections/CTASection/CTASection";
import Footer from "./sections/Footer/Footer";
import React from "react";
import { initializeApp } from "firebase/app";



export default function Home() {

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.envNEXT_PUBLIC_FIREBASE_APP_ID
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
