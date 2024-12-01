import {
  IoHelpCircleOutline
} from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarAccount = () => {
  const {user} = useSelector((state) => state.auth)

  const handleClickLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-4xl text-sky-900">ineed</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center gap-2">
          <li>
            <a href="#">
              <IoHelpCircleOutline className="text-xl" />
              Bantuan
            </a>
          </li>
          <li>
            <a href="#">
              <IoIosNotificationsOutline className="text-xl" />
              Notifikasi
            </a>
          </li>
          <li>
            <a href="#">
              <HiOutlineEnvelope className="text-xl" />
              Pesan
            </a>
          </li>
          <div className="text-slate-300">|</div>
          <li>
            <details className="dropdown">
              <summary className="">{user.email}</summary>
              <ul className="bg-base-100 rounded-t-none p-2 w-52">
                <li>
                  <a>Profile</a>
                </li>
                <hr />
                <li className="text-sky-700">
                  <a className="" onClick={() => handleClickLogout()}>
                    Sign Out
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarAccount;
