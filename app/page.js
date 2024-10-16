import Header from "./components/Header/Header";
import Services from "./sections/Services/Services";
import Inspiration from "./sections/Inspiration/Inspiration";
import Testimonials from "./sections/Testimonials/Testimonials";
import CTASection from "./sections/CTASection/CTASection";
import Footer from "./sections/Footer/Footer";

export default function Home() {
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
