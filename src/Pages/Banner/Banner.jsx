// import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
// import banner1 from "../../assets/images/bannerImage1.png";
// import banner2 from "../../assets/images/app-development.png";
// import banner3 from "../../assets/images/study.png";

const Banner = () => {
    return (
        <Carousel>
            {/* Banner 1 */}
            <div className="flex flex-col min-h-screen bg-[#A5CAD3] text-left sm:flex-row">
                <div className="text-container sm:w-1/2 p-10">
                    <p className="text-white">Welcome to CM Academy</p>
                    <h1 className="mb-5 text-7xl font-semibold text-white">
                        Empowering Learning Through Technology
                    </h1>
                    <h1 className="mb-5 text-xl text-black">
                        Unleash Your Potential Today - Elevate Your Skills with CM Academys
                        Engaging Courses! <br />
                        Unlock Your Potential with CM Academy&apos;s Dynamic Courses! Are you ready
                        to dive into a world of limitless possibilities? Welcome to CM
                        Academy, where learning knows no bounds.
                    </h1>
                    <p className="mb-5 text-white"></p>
                    <Link to="/" className="btn btn-success text-white p-5 m-3 ml-0">
                        Get Started
                    </Link>
                    <Link to="/" className="btn bg-white text-teal-400 font-semibold p-5 m-3">
                        View Courses
                    </Link>
                </div>
                <div className="image-container sm:w-1/2">
                <img src="https://i.ibb.co/DMMs4fx/banner-bg-boy.png" alt="" />
                </div>
            </div>

            {/* Banner 2 */}
            <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#A5CAD3] to-cyan-300 relative sm:flex-row">
                {/* ... similar structure as above for Banner 2 */}
            </div>

            {/* Banner 3 */}
            <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#A5CAD3] to-cyan-300 relative sm:flex-row">
                {/* ... similar structure as above for Banner 3 */}
            </div>
        </Carousel>
    );
};

export default Banner;
