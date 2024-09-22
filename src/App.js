// import logo from './logo.svg';
// import './App.css';
import HeroSection from "./components/hero_section";
import ImproveSkill from "./components/improve_skill";
import Navbar from "./components/navbar";
import QuoteSection from "./components/quote_section";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container main">
        <HeroSection></HeroSection>
        <ImproveSkill></ImproveSkill>
        <QuoteSection></QuoteSection>
      </div>
    </div>
  );
}

export default App;
