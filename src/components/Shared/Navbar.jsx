import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../assets/nav-logo.png"
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth()
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Your account logout successfully.",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          icon: "error",
        });
      });
  };
  const menu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {/* <li>
        <NavLink to="/findAJob">Find a Job</NavLink>
      </li> */}
      {/* <li>
        <NavLink to="/recruiters">Recruiters</NavLink>
      </li>
      <li>
        <NavLink to="/candidates">Candidates</NavLink>
      </li>
      <li>
        <NavLink to="/pages">Pages</NavLink>
      </li> */}
      <li>
        <NavLink to="/addJob">Add a Job</NavLink>
      </li> 
      <li>
        <NavLink to="/myApplications">My Applications</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/myPostedJobs">My Posted Job</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar pl-0 text-blue-950 my-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menu}
          </ul>
        </div>
        <a className="text-xl md:text-2xl font-bold flex items-center gap-1">
          <img src={logo} alt="" />
          JobFinder</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end gap-2 md:gap-4">
        {user ? (
          <>
            <p className="text-sm font-bold text-blue-950">
              {user.displayName}
            </p>
            <button
              onClick={handleSignOut}
              className="text-xs font-medium bg-[#05264e] text-white p-3 cursor-pointer my-2 rounded hover:bg-blue-500 transition duration-300 hover:-translate-y-0.5"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link to="/register">
              <button className="text-sm underline cursor-pointer hover:text-blue-500 transition duration-300 hover:-translate-y-0.5">
                Register
              </button>
            </Link>
            <Link to="/signIn">
              <button className="text-sm bg-blue-500 p-2.5 rounded cursor-pointer font-medium w-full hover:bg-[#05264e] text-white my-2 transition duration-300 hover:-translate-y-0.5">
                Sign in
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
