import Number from "./components/number/Number";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";
import Min from "./components/min/Min";
import Footer from "./components/footer/Footer";
export default function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="line"/>
        <Hero/>
        <div className="line"/>
        <Number/>
        <div className="line"/>
        <Project/>
        <div className="line"/>
        <Min/>
        <div className="line"/>
      </div>
        <div className="line"/>
      <Footer/>
    </>
  );
}
