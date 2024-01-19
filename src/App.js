import "./App.css";
import Dose from "./components/Hero/Dose";
import Hero from "./components/Hero/Hero";
import Header from "./components/header/Header";
import Section from "./components/section/Section";
import SectionFirst from "./components/PartSection/SectionFirst";
import SectionSecond from "./components/PartSection/SectionSecond";
import SectionThird from "./components/PartSection/SectionThird";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <div className="box">
        <Header />
        <Section />
      </div>
      <Hero />
      <Dose />
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
      <Footer />
    </div>
  );
}

export default App;
