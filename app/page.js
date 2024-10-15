import Header from "./components/Header/Header";
import Services from "./sections/Services/Services";

export default function Home() {
  return (
    <>
    <Header/>
    <main className="main">
      <Services/> 
    </main>
    </>
  );
}
