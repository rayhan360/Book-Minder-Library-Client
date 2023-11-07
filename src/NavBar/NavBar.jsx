import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import logo from "../assets/logo2.png";
import "./NavBar.css";
import useAuth from "../hooks/useAuth/useAuth";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const { user, logOut } = useAuth()



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground("bg-[#1a2d62]");
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`lg:fixed top-0 left-0 right-0 ${navbarBackground} transition-all duration-300 z-50 lg:text-white`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center font-bold text-lg">
          <img src={logo} className="w-32" alt="logo of the website" />
        </div>
        <div className="">
          <div
            className="lg:hidden text-2xl mr-8 mt-5"
            onClick={() => setOpen(!open)}
          >
            {open === true ? (
              <AiOutlineClose></AiOutlineClose>
            ) : (
              <AiOutlineMenu></AiOutlineMenu>
            )}
          </div>
          <div>
            <nav
              className={`absolute bg-white z-50 lg:bg-transparent lg:block lg:static px-5 ${
                open ? "right-1" : "-right-72"
              } ${open ? "block" : "hidden"}`}
            >
              <div className="flex flex-col md:flex-row gap-5 py-3 items-center">
                <ul className={`flex flex-col md:flex-row gap-5`}>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/add-book">Add Book</NavLink>
                  </li>
                  <li>
                    <NavLink to="/all-book">All Books</NavLink>
                  </li>
                  <li>
                    <NavLink to="/borrowed-book">Borrowed Books</NavLink>
                  </li>
                </ul>

                <div>
                  {
                    user ?
                        <div className=" flex items-center gap-3">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} alt={user.displayName} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 md:w-96">
                                    <li>
                                        <button className="text-black text-base"><span className="font-medium">Name:</span> {user.displayName}</button>
                                    </li>
                                    <li><button className="text-black text-base"><span className="font-medium">Email:</span> {user.email ? user.email : "email not found"}</button></li>
                                </ul>
                            </div>
                            <div>
                                <button onClick={logOut} className="bg-[#f6425f] text-white px-5 py-2 rounded-md"
                                >Sign Out</button>
                            </div>
                        </div>
                        :
                    <div className="mb-5 md:mb-0">
                      <Link to="/signIn">
                        <button
                          className="border border-[#f6425f] px-5 py-2 rounded-md hover:bg-[#f6425f] hover:text-white"
                          type="button"
                          data-ripple-light="true"
                        >
                          Sign In
                        </button>
                      </Link>
                      <Link to="/signUp">
                        <button
                          className="bg-[#f6425f] text-white px-5 py-2 rounded-md ml-3 hover:border hover:border-[#f6425f] hover:bg-transparent "
                          type="button"
                          data-ripple-light="true"
                        >
                          Sign Up
                        </button>
                      </Link>
                    </div>
                  }
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
