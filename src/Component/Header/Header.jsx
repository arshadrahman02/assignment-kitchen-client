import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-rose-600">
      <div className="flex-1">
        <Link to="/" className=" text-2xl text-white font-bold font-serif">
          Chef's Kitchen
        </Link>

        <div className="lg:mx-auto text-white font-bold lg:text-2xl">
          <ul>
            <Link to="/" className="lg:m-5 me-8">
              Home
            </Link>
            <Link to="/blog" className="me-5">
              Blog
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex-none gap-2">
        <Link to="/login" className="btn bg-green-800 lg:me-10">
          Log In
        </Link>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
          </label>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
