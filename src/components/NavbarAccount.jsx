import {
  IoHelpCircleOutline
} from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavbarAccount = () => {
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const handleClickBell = () => {
    navigate("/notifications");
  };

  const handleClickChat = () => {
    navigate("/conversations");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-4xl text-sky-900">ineed</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center gap-2">
          <li>
            <a href="">
              <IoHelpCircleOutline className="text-xl" />
              Bantuan
            </a>
          </li>
          <li>
            <a href="">
              <IoIosNotificationsOutline className="text-xl" />
              Notifikasi
            </a>
          </li>
          <li>
            <a href="">
              <HiOutlineEnvelope className="text-xl" />
              Pesan
            </a>
          </li>
          <div className="text-slate-300">|</div>
          <li>
            <details className="dropdown">
              <summary className="">dickykamaludin11@gmail.com</summary>
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
        </ul>
      </div>
    </div>
  );
};

export default NavbarAccount;
