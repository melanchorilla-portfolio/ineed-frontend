import React from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { CiMenuKebab } from "react-icons/ci";
import { MdStar, MdDoNotDisturbAlt, MdLocationOn } from "react-icons/md";
import { FaRegBookmark, FaHeart, FaChevronDown, FaFlag } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";

function App() {
  return (
    <>
      <Navbar />
      <Searchbar />

      <div className="max-w-2xl mt-12 mx-auto">
        <div role="tablist" className="tabs tabs-bordered">
          <a role="tab" className="tab tab-active">
            Lowongan untuk Anda
          </a>
          <a role="tab" className="tab">
            Pencarian baru-baru ini
          </a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto my-5 flex">
        <div className="w-1/2 mx-5">
          {/* card */}
          <div className="card card-bordered bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="card-actions justify-between">
                <div></div>
                <details className="dropdown">
                  <summary className="btn">
                    <CiMenuKebab />
                  </summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li>
                      <a>Simpan Lowongan</a>
                    </li>
                    <li>
                      <a>Tidak Tertarik</a>
                    </li>
                    <li>
                      <a>Laporkan Lowongan</a>
                    </li>
                  </ul>
                </details>
              </div>
              <div className="" id="detail">
                <h2 className="font-semibold text-slate-900 text-xl mb-2">
                  Junior Programmer
                </h2>
                <p className="text-sm items-center flex">
                  PT. Sakamoto Indonesia Perdana{" "}
                  <span className="ml-2 font-semibold">4,0</span>{" "}
                  <MdStar className="inline" />
                </p>
                <p className="text-sm">Tangerang</p>

                <p className="mt-3" id="description">
                  Menguasai minimal satu dari bahasa pemrograman (PHP, Java,
                  Javascript).
                </p>
              </div>
            </div>
          </div>
          {/* end card */}
        </div>
        <div className="w-1/2 h-screen">
          <div className="card bg-base-100 shadow-xl border-b">
            <div className="card-body">
              <h2 className="card-title">Junior Programmer</h2>
              <div>
                <p>PT. Sakamoto Indonesia Perdana</p>
                <p className="text-sm">Tangerang</p>
                <p>Rp4.200.000 - Rp4.700.000 per bulan</p>
              </div>
              <div className="card-actions justify-start">
                <button className="btn btn-primary text-white rounded-lg">
                  Lamar sekarang
                </button>
                <button className="btn btn-primary-content rounded-lg">
                  <FaRegBookmark />
                </button>
                <button className="btn btn-primary-content rounded-lg">
                  <MdDoNotDisturbAlt />
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl overflow-y-auto">
            <div className="card-body border-b">
              <h2 className="card-title">Detail lowongan</h2>
              <p className="text-sm text-slate-400">
                Berikut ini adalah bagaimana detail lowongan selaras dengan
                profil Anda.
              </p>
              <span className="flex items-center gap-3">
                <FaMoneyBills /> Bayar
              </span>
              <button className="btn btn-success text-green-100">
                <FaHeart />
                Rp4.200.000 - Rp4.700.000 per bulan <FaChevronDown />
              </button>
            </div>
            <div className="card-body border-b">
              <h2 className="card-title">Lokasi</h2>
              <span className="flex items-center gap-3">
                <MdLocationOn />
                Tangerang
              </span>
            </div>
            <div className="card-body border-b">
              <h2 className="card-title">Deskripsi Lowongan Lengkap</h2>
              <ul>
                <li>Pria / Wanita</li>
                <li>Minimal SMA/SMK (Diutamakan S1).</li>
                <li>Usia di bawah 25 tahun.</li>
                <li>
                  Menguasai minimal satu dari bahasa pemrograman (PHP, Java,
                  Javascript).
                </li>
                <li>Menguasai MySQL atau database lainnya.</li>
                <li>Menguasai HTML (nilai lebih bila menguasai CSS).</li>
                <li>Kemampuan penyelesaian masalah (problem solving).</li>
                <li>
                  Bahasa Inggris (minimal pasif) untuk keperluan programming.
                </li>
                <li>Bekerja Onsite di Karawaci, Tangerang.</li>
              </ul>
              <p>Job Type: Full-time</p>
              <p>Education: SMA/SMU/SMK (Preferred)</p>
              <p>Location: Tangerang (Required)</p>
            </div>
            <div className="card-body border-b">
              <button className="btn">
                {" "}
                <FaFlag />
                Laporkan Lowongan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
