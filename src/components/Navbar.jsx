import { FaUserAlt, FaBell } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleClickBell = () => {
    navigate("/notifications");
  }

  const handleClickChat = () => {
    navigate("/conversations");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-4xl text-sky-900">ineed</a>
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
                      <a className="">Sign Out</a>
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
            <a>Perusahaan: Pasang Lowongan Kerja</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
