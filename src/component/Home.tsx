import Firstpage from "./Firstpage";
import Stories from "./Stories";
import Navbar from "./Navbar";
import AnoSlide from "./AnoSlide";

const Home = () => {
  return (
    <div className="bg-black">
      <Firstpage />
      <Stories />
      <AnoSlide />
      <Navbar />
    </div>
  );
};
export default Home;
