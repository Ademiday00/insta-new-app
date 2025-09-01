import YourStory from "../assets/YourStory.jpg";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import SethingsPage from "./SethingsPage";

const Navbar = () => {
  const navigate = useNavigate();
  // const [OpenSettings, setOpenSettings] = useState(false);
  return (
    <>
      <nav className="navbar bg-black border-black border-black p-md-1 p-lg-4 pronav  ">
        <h2 className="mb-0 mx-lg-5 mx-md-5 text-white d-none d-lg-inline">
          Instagram
        </h2>

        <div className=" nav-items mb-1">
          <i
            className="fas fa-home text-white fs-4 hoicon "
            onClick={() => navigate("/")}
          >
            {" "}
            <span className="frontawes fs-6 d-none d-lg-inline ms-3 text-capitalize">
              {" "}
              home
            </span>
          </i>

          <i className="fas fa-search text-white fs-4 ">
            <span className="frontawes fs-6 d-none d-lg-inline ms-3">
              {" "}
              Search
            </span>
          </i>
          <i className="fas fa-plus-square text-white fs-4">
            {" "}
            <span className="frontawes fs-6 d-none d-lg-inline ms-3">
              Upload
            </span>
          </i>
          <i className="fas fa-heart d-none d-lg-inline text-white fs-4 ">
            <span className="frontawes fs-6 d-none d-lg-inline ms-3">
              notification
            </span>
          </i>
          <i className="fab fas fa-facebook-messenger d-none d-lg-block text-white fs-4">
            {" "}
            <span className="frontawes fs-6 d-none d-lg-inline ms-3 ">
              message
            </span>
          </i>
          <i className="fas fa-video text-white fs-4">
            <span className="frontawes fs-6 d-none d-lg-inline ms-3 ">
              Create
            </span>
          </i>

          <i
            className="fas fa-bars d-none d-lg-block text-white fs-4"
            onClick={() => navigate("/settings")}
            // setOpenSettings(!OpenSettings)
          >
            <span className="frontawes fs-6 d-md-none d-lg-inline ms-3 ">
              Menu
            </span>
          </i>
          {/* <div
            className=" "
            style={{
              position: "absolute", // independent from navbar
              // below navbar
              marginLeft: "250px",
              // padding: "20px",

              // zIndex: 1000, // makes sure it's on top
            }}
          >
            {OpenSettings && <SethingsPage />}
          </div> */}

          <div className=" profile">
            <img
              src={YourStory}
              alt="Profile"
              className="rounded-circle profile"
              onClick={() => navigate("/profile")}
              style={{
                width: "30px",
                height: "30px",
                objectFit: "cover",
                marginRight: "50px",
              }}
            />
            <span
              className=" frontawes text-white d-none d-lg-inline ms-n2"
              style={{
                marginRight: "-20px",
                marginLeft: "-30px",
                fontSize: "17px",
                fontWeight: "bolder",
              }}
            >
              Profile
            </span>
          </div>
        </div>
        <style>
          {`
             @media (min-width: 992px){
             .pronav{
             position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width:250px;
          
         
            }
         
            .nav-items i,
            .nav-items img {
              display:block;
              margin: 50px auto;
              margin-top: 50px;
             
            
            } 
              .nav-items{
              
              }
              .profile{
              display:flex;
              align-items:center;
               margin-top: -50px;
              margin-right:100px;
               gap:0
              }
              .nav-items{
              gap:0px;
              }
              .profile p {
              
              }
              span {
              font-size:20px;
              text-transform:capitalize
              }
              .hoicon{
             
              }
             }
            @media (max-width: 991px) {
        .pronav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 60px;
          display:flex;
          
          

        }
         .nav-items {
              display: flex;
              justify-content: space-around;
              align-items: center;
              width: 100%;
            } 
            .hoicon{
            margin-left:1px;
            } 
            .profile{
            margin-right:-50px;
            }   
      }
            @media (min-width: 200px){
              .frontawes{
              
            }
       `}
        </style>
      </nav>
    </>
  );
};

export default Navbar;
