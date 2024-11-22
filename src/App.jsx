import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { CiMenuKebab } from "react-icons/ci";
import { MdStar, MdDoNotDisturbAlt, MdLocationOn } from "react-icons/md";
import { FaRegBookmark, FaHeart, FaChevronDown, FaFlag } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState({
    _id: 0,
    title: "",
    description: "",
    qualification: "",
    type: "",
    tenure: "",
    salaryMin: 0,
    salaryMax: 0,
    companyId: { _id: 0, name: "", city: "", imageURL: ""},
    salaryRange: "",
  });

  useEffect(() => {
    if (isLoading) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/jobs`)
        .then((res) => {
          setData([...res.data.data.docs]);
          setDetailData(res.data.data.docs[0]);
        })
        .catch((err) => {
          console.error(err);
        });
      setIsLoading(false);
    }
  }, [isLoading, setIsLoading]);

  const handleClickJob = (id, index) => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/jobs/${id}`)
      .then((res) => {
        setDetailData({...res.data.data});
      })
      .catch((err) => {
        console.error(err);
      });
  }

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
          {data.length ? (
            data.map((job, index) => {
              return (
                <div
                  className="card card-bordered bg-base-100 shadow-xl mb-3"
                  key={index}
                  onClick={() => handleClickJob(job._id, index)}
                >
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
                        {job.title}
                      </h2>
                      <p className="text-sm items-center flex">
                        {job.companyId.name}{" "}
                        {/* <span className="ml-2 font-semibold">4,0</span>{" "}
                        <MdStar className="inline" /> */}
                      </p>
                      <p className="text-sm">{job.companyId.city}</p>

                      <p className="mt-3" id="description">
                        {job.description.slice(0, 100)}.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center text-gray-600">
              <MdLocationOn className="inline" />
              Tidak ada lowongan yang ditemukan
            </div>
          )}
        </div>
        <div className="w-1/2 h-screen">
          <div className="card bg-base-100 shadow-xl border-b">
            <div className="card-body">
              <h2 className="card-title">{detailData.title}</h2>
              <div>
                <p>{detailData.companyId.name ?? null}</p>
                <p className="text-sm">{detailData.companyId.city}</p>
                <p>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(detailData.salaryMin)}{" "}
                  -{" "}
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(detailData.salaryMax)}{" "}
                  per bulan
                </p>
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
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(detailData.salaryMin)}{" "}
                -{" "}
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(detailData.salaryMax)}{" "}
                per bulan <FaChevronDown />
              </button>
            </div>
            <div className="card-body border-b">
              <h2 className="card-title">Lokasi</h2>
              <span className="flex items-center gap-3">
                <MdLocationOn />
                {detailData.companyId.city}
              </span>
            </div>
            <div className="card-body border-b">
              <h2 className="card-title">Deskripsi Lowongan Lengkap</h2>
              {detailData.description}
              <p>Qualification: {detailData.qualification}</p>
              <p>Job Type: {detailData.type}</p>
              <p>Tenure: {detailData.tenure}</p>
              <p>Location: {detailData.companyId.city}</p>
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
