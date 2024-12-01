import { FaUserAlt, FaBell } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleClickBell = () => {
    navigate("/notifications");
  }

  const handleClickChat = () => {
    navigate("/conversations");
  };

  const handleClickLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-4xl text-sky-900">ineed</Link>
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/companies">Ulasan Perusahaan</Link>
          </li>
          {/* <li>
            <a>Cari Info Gaji</a>
          </li> */}
        </ul>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center gap-2">
          {isAuthenticated ? (
            <>
              <li>
                <button
                  className="btn btn-square btn-ghost"
                  onClick={handleClickChat}
                >
                  <BsChatLeftTextFill />
                </button>
              </li>
              <li>
                <button
                  className="btn btn-square btn-ghost"
                  onClick={handleClickBell}
                >
                  <FaBell />
                </button>
              </li>
              <li>
                <details className="dropdown">
                  <summary className="">
                    <FaUserAlt />
                  </summary>
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
            </>
          ) : (
            <li>
              <Link to="/auth" className="font-semibold text-sky-900">
                Sign in
              </Link>
            </li>
          )}
          <div className="text-slate-300">|</div>
          <li>
            <Link to="/new-company">Perusahaan: Pasang Lowongan Kerja</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
