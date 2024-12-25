import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../user/Authprovider";
import { FaRegUserCircle } from "react-icons/fa";

export default function Header() {
  const { user, logOut } = useContext(AuthContext);

  const logoutHandle = () => {
    logOut();
  };

  return (
    <div className="bg-slate-300">
      <div className=" navbar  max-w-[1440px] mx-auto ">
        <div className="navbar-start flex gap-4">
          <img
            className="h-12 w-12  rounded-full"
            src="https://i.ibb.co.com/k1Lnzrf/images.png"
            alt=""
          />
          <h1 className="font-bold ">
            HOTLE <span className=" text-orange-500">HAVEN</span>
          </h1>
        </div>
        {/* ------------------------------------ */}
        <div className="navbar-center flex gap-4">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={"/rooms"}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Rooms
          </NavLink>
          <NavLink
            to={"/add-room"}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Add Room
          </NavLink>
          <NavLink
            to={"/special-offer"}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Offer Add
          </NavLink>
          <NavLink
            to={"/myBooking"}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            My Bookings
          </NavLink>
          <NavLink
            to={"/gallery"}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Gallery{" "}
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Contact Us{" "}
          </NavLink>
        </div>
        {/* ---------------------------------------- */}
        <div className="navbar-end flex gap-4">
          {user?.email ? (
            <NavLink onClick={logoutHandle} className="btn bg-orange-400">
              logOut
            </NavLink>
          ) : (
            <NavLink to={"/login"} className="btn bg-orange-400">
              {" "}
              <button>Login</button>
            </NavLink>
          )}

          {user?.email && user.email ? (
            <div>
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="h-10 w-10 rounded-full"
                />
              ) : (
                <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-sm text-gray-500">No Image</span>
                </div>
              )}
            </div>
          ) : (
            <FaRegUserCircle className="text-2xl" />
          )}
        </div>
      </div>
    </div>
  );
}
