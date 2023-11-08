import Category from "../../components/Category/Category";
import AboutLibrary from "./AboutLibrary/AboutLibrary";
import Experience from "./AboutLibrary/Experience/Experience";
import Banner from "./Banner/Banner";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Experience></Experience>
      <AboutLibrary></AboutLibrary>
    </div>
  );
};

export default Home;
