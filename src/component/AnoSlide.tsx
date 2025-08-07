import Slide from "../data/Slide";
import MySlide from "./MySlide";

const AnoSlide = () => {
  return (
    <div className=" mx-lg-5 mx-md-5 img-fluid">
      {Slide.map((slide, index) => (
        <MySlide key={index} slide={slide} />
      ))}
    </div>
  );
};

export default AnoSlide;
