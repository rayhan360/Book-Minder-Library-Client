
import Category from "../../components/Category/Category";
import AboutLibrary from "./AboutLibrary/AboutLibrary";
import Experience from "./AboutLibrary/Experience/Experience";
import Banner from "./Banner/Banner";
import "./Home.css";
import NesLatter from "./NesLatter/NesLatter";
import OurApp from "./OurApp/OurApp";


const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <div id="about">
        <Experience></Experience>
        <AboutLibrary></AboutLibrary>
        <OurApp></OurApp>
        <NesLatter></NesLatter>
      </div>
    </div>
  );
};

export default Home;
