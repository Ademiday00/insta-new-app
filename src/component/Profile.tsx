import YourStory from "../assets/YourStory.jpg";
import Navbar from "./Navbar";
import pictures from "../data/Picture";
import MyProfile from "./MyProfile";
import { useNavigate } from "react-router-dom";
// import Settingsside from "./Settingsside";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="m-0 p-0 mx-lg-5 mx-md-5 main-content">
        <div className="m-0 p-0  mx-lg-5 mx-md-5">
          <div className="d-flex justify-content-between align-items-center m-3  text-white mx-lg-5 mx-md-5">
            <div className="d-flex align-items-center gap-2 ">
              <p className="mb-1 fs-1">Korewa</p>
              <i className="fas fa-less-than fa-rotate-270 fs-6"></i>
            </div>
            <div className="d-flex gap-4 fs-3">
              <i className="far fa-at d-lg-none"></i>
              <i className="far fa-plus-square d-lg-none"></i>
              <i
                className="fas fa-bars d-lg-none"
                onClick={() => navigate("/settings")}
              ></i>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center m-3 text-white ms-md-5 picturepp">
            <img
              src={YourStory}
              alt="Profile"
              className="rounded-circle  responsive-img"
              // style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
            <style>
              {`
  .responsive-img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  @media (min-width: 992px) {
    .responsive-img {
      width: 220px;
      height: 220px;
      margin-top:40px;
      margin-left:70px;
    }
  }
    @media (min-width: 700px){
    .responsive-img {
      width: 150px;
      height: 150px;
      
    }
    }
     @media (max-width: 991px) {
     
     }
`}
            </style>
            <div className="d-flex justify-content-between align-items-center gap-4 pt-3 following ">
              <div className="">
                <a
                  className="text-white text-decoration-none "
                  href="#"
                  role="button"
                >
                  173
                </a>
                <p className="mt-0">Posts</p>
              </div>
              <div className=" ">
                <a
                  className="text-white text-decoration-none ms-3 "
                  href="#"
                  role="button"
                >
                  774k
                </a>
                <p className="mt-0">Followers</p>
              </div>
              <div className="">
                <a
                  className="text-white text-decoration-none ms-3"
                  href="#"
                  role="button"
                >
                  714
                </a>
                <p className=" mt-0 ">Following</p>
              </div>
            </div>
          </div>
          <style>
            {`

            @media (min-width: 992px){
            .following{
            margin-top:-50px;
            font-size:15px;
            text-align:center;
            position:absolute;
            margin-left:300px;
            }
            }
            @media (min-width: 800px){
            .following{
            margin-right:100px;
            }
            }
             @media (max-width: 991px) {
             .following{
              
            }
             }
            `}
          </style>
          <div
            className=" text-white korewa mb-1 text-md-start text-lg-end ms-lg-5 ms-3 ms-md-5"
            style={{ fontSize: "13px" }}
          >
            <p className="mb-1 mt-2 me-lg-2 paulson me-lg-5">
              Korewa davista t.
            </p>
            <p className="mb-1 me-lg-2  me-lg-4 dev">Front-end developer</p>
            <p className="mb-1 ms-lg-5 me-lg-5 jscss">React, Bootstrap</p>
            <p className="mb-1 me-lg-2  me-lg-4 email">korewa4@gmail.com</p>
          </div>
          <style>
            {`
             @media (min-width: 992px){
             .korewa{
             margin-top:-80px;
             font-size:10px;
            
             align-text:start;
             width:500px;
             margin-left:30px
             }
             }
            
             @media (min-width: 800px){
             .korewa {
                 font-size:20px;
                 margin-left:15px
                 
    }
    }
            `}
          </style>
          <div className="d-flex justify-content-between align-items-center m-3 gap-2 text-white mx-lg-5 mx-md-5">
            <a className="btn btn-primary w-100" href="#" role="button">
              Following
            </a>
            <a
              className="btn btn-outline-secondary text-white w-100"
              href="#"
              role="button"
            >
              Message
            </a>
            <a
              className="btn btn-outline-secondary w-100 text-white"
              href="#"
              role="button"
            >
              Email
            </a>
            <a
              className="btn btn-outline-secondary w-100 text-white"
              href="#"
              role="button"
            >
              <i className="fas fa-chevron-up"></i>
            </a>
          </div>
          <div className="d-flex justify-content-between align-items-center m-4 text-white fs-4 mx-lg-5 mx-md-5">
            <i className="fas fa-th"></i>
            <i className="fas fa-video"></i>
            <i className="fas fa-play"></i>
            <i className="fas fa-user-tag"></i>
          </div>
          <div className="container-fluid ">
            <div className="row row-cols-3 row-cols-md-3 row-cols-lg-3 g-3 mx-lg-5 mx-md-5">
              {pictures.map((pictures, index) => (
                <MyProfile key={index} picture={pictures} />
              ))}
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Profile;
