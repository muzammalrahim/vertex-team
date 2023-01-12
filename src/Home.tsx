import Digitale from "./components/Digitale";
import Facciamo from "./components/Facciamo";
import HeroSection from "./components/HeroSection";
import Market from "./components/Market";
import People from "./components/People";
import Perche from "./components/Perche";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Digitale />
      <Facciamo />
      <Perche />
      <People />
      <Market />
    </div>
  );
};

export default Home;
