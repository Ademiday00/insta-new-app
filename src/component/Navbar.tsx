import YourStory from "../assets/YourStory.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar fixed-bottom bg-black border-none border-dark p-3 pronav mx-lg-5 mx-md-5">
      <div className="d-flex justify-content-between align-items-center w-100  mx-lg-5 mx-md-5 ">
        <i
          className="fas fa-home text-white fs-4 mx-lg-5 me-lg-5"
          onClick={() => navigate("/")}
        ></i>
        <i className="fas fa-search text-white fs-4 "></i>
        <i className="far fa-plus-square text-white fs-4"></i>
        <i className="fas fa-video text-white fs-4"></i>
        <img
          src={YourStory}
          alt="Profile"
          className="rounded-circle"
          onClick={() => navigate("/profile")}
          style={{ width: "30px", height: "30px", objectFit: "cover" }}
        />
      </div>
      <style>
        {`
             @media (min-width: 992px){
             .pronav{
              
            }
             }
       `}
      </style>
    </nav>
  );
};

export default Navbar;
