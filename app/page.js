import Header from "./components/Header/Header";
import Services from "./sections/Services/Services";
import Inspiration from "./sections/Inspiration/Inspiration";

export default function Home() {
  return (
    <>
    <Header/>
    <main className="main">
      <Services/> 
      <Inspiration/>
    </main>
    </>
  );
}
