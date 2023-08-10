import { Link } from "react-router-dom";


const Navbar2 = () => {
    return (
        <>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link>Home</Link></li>
                            <li> <Link>Home</Link></li>
                            <li className="bg-white" tabIndex={0}>
                                <details>
                                    <summary>Course Catagories</summary>
                                    <ul className="p-2">
                                        <li><a>Development</a></li>
                                        <li><a>Design</a></li>
                                        <li><a>Office Productivity</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>Become Instructor</li>
                        </ul>
                    </div>
                    <Link to="/" className="font-extrabold text-3xl">
                        CM Academy
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li> <Link>Home</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Course Catagories</summary>
                                <ul className="p-2">
                                    <li><a>Development</a></li>
                                    <li><a>Design</a></li>
                                    <li><a>Office Productivity</a></li>

                                </ul>
                            </details>
                        </li>
                        <li><a className="ml-auto">Become an Instructor</a></li>

                    </ul>
                </div>
                <div className="navbar-end">

                    <Link to="/login" className="btn btn-success text-white">Login</Link>
                </div>
            </div>

        </>
    );
};

export default Navbar2;

