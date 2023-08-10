import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import banner1 from "../../assets/images/banner_bg_boy.png";
import banner2 from "../../assets/images/app-development.png";
import banner3 from "../../assets/images/study.png";


const Banner = () => {
    return (
        <Carousel>
            <div className="flex hero min-h-screen  bg-[#A5CAD3]">
                <div className=" ">
                    <div className=" bg-opacity-60"></div>
                    <div className="hero-content text-left text-neutral-content">
                        <div className="">
                            <p className="text-white">Welcome to CM Academy</p>
                            <h1 className="mb-5 text-7xl font-semibold text-white">Empowering Learning Through Technology</h1>
                            <h1 className="mb-5 text-xl  text-black">Unleash Your Potential Today - Elevate Your Skills with CM Academy&apos;s Engaging Courses! <br />
                                Unlock Your Potential with CM Academy&apos;s Dynamic Courses! Are you ready to dive into a world of limitless possibilities? br Welcome to CM Academy, where learning knows no bounds. </h1>
                            <p className="mb-5 text-white"></p>
                            <Link to="/" className="btn btn-success text-white p-5 m-3 ml-0">
                                Get Started
                            </Link>
                            <Link to="/" className="btn bg-white text-teal-400 font-semibold p-5 m-3">
                                View Courses
                            </Link>
                        </div>
                    </div>

                </div>
                <div>
                    <img src={banner1} alt="" />
                </div>

            </div>


            <div className="flex hero min-h-screen  bg-gradient-to-b from-[#A5CAD3] to-cyan-300 relative">
                <div className=" ">
                    <div className=" bg-opacity-60"></div>
                    <div className="hero-content text-left text-neutral-content">
                        <div className="">
                            <p className="text-white">Welcome to CM Academy</p>
                            <h1 className="mb-5 text-7xl font-semibold text-white">Unlock Your Potential Through Education Technology</h1>
                            <h1 className="mb-5 text-xl  text-black">Unleash Your Potential Today - Elevate Your Skills with CM Academy&apos;s Engaging Courses! <br />
                                Unlock Your Potential with CM Academy&apos;s Dynamic Courses! Are you ready to dive into a world of limitless possibilities? br Welcome to CM Academy, where learning knows no bounds. </h1>
                            <p className="mb-5 text-white"></p>
                            <Link to="/" className="btn btn-success text-white p-5 m-3 ml-0">
                                Get Started
                            </Link>
                            <Link to="/" className="btn bg-white text-teal-400 font-semibold p-5 m-3">
                                View Courses
                            </Link>
                        </div>
                    </div>

                </div>
                <div>
                    <img src={banner2} alt="" />
                </div>

            </div>



            <div className="flex hero min-h-screen  bg-gradient-to-b from-[#A5CAD3] to-cyan-300 relative">
                <div className=" ">
                    <div className=" bg-opacity-60"></div>
                    <div className="hero-content text-left text-neutral-content">
                        <div className="">
                            <p className="text-white">Welcome to CM Academy</p>
                            <h1 className="mb-5 text-7xl font-semibold text-white">Enriching Minds, Enabling Dreams</h1>
                            <h1 className="mb-5 text-xl  text-black"> Embrace the Path of Unlimited Growth with CM Academy&apos;s Dynamic Learning Experience!<br />
                                Unlock Your Potential with CM Academy&apos;s Dynamic Courses! Are you ready to dive into a world of limitless possibilities? br Welcome to CM Academy, where learning knows no bounds. </h1>
                            <p className="mb-5 text-white"></p>
                            <Link to="/" className="btn btn-success text-white p-5 m-3 ml-0">
                                Get Started
                            </Link>
                            <Link to="/" className="btn bg-white text-teal-400 font-semibold p-5 m-3">
                                View Courses
                            </Link>
                        </div>
                    </div>

                </div>
                <div>
                    <img src={banner3} alt="" />
                </div>

            </div>


        </Carousel>
    );
};

export default Banner;
