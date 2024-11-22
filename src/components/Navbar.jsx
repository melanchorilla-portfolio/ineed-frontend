import { FaUserAlt, FaBell } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isLogin, setIsLogin] = useState(true);

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
          <li>
            <a>Cari Info Gaji</a>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center gap-2">
          {isLogin ? (
            <>
              <li>
                <button className="btn btn-square btn-ghost">
                  <BsChatLeftTextFill />
                </button>
              </li>
              <li>
                <button className="btn btn-square btn-ghost">
                  <FaBell />
                </button>
              </li>
              <li>
                <button className="btn btn-square btn-ghost">
                  <FaUserAlt />
                </button>
              </li>
            </>
          ) : (
            <li>
              <a className="font-semibold text-sky-900">
                Sign in
              </a>
            </li>
          )}
          <div className="text-slate-300">
            |
          </div>
          <li>
            <a>Perusahaan: Pasang Lowongan Kerja</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
