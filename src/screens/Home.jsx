import { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar";
import { CiMenuKebab } from "react-icons/ci";
import { MdStar, MdDoNotDisturbAlt, MdLocationOn } from "react-icons/md";
import { FaRegBookmark, FaHeart, FaChevronDown, FaFlag } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import Layout from "../layouts/Layout";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState({
    jobKeyword: "",
    location: "",
  });
  const [detailData, setDetailData] = useState({
    _id: 0,
    title: "",
    description: "",
    qualification: "",
    type: "",
    tenure: "",
    salaryMin: 0,
    salaryMax: 0,
    companyId: { _id: 0, name: "", city: "", imageURL: "" },
    salaryRange: "",
  });

  const fetchJobs = async (currentPage, searchFilters = {}) => {
    try {
      setIsLoading(true);

      const queryParams = new URLSearchParams({
        page: currentPage,
        keyword: searchFilters.jobKeyword || "",
        location: searchFilters.location || "",
      });

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/jobs?${queryParams}`
      );

      // Reset data if it's the first page of a new search
      const jobData =
        currentPage === 1
          ? res.data.data.docs
          : [...(currentPage === 1 ? [] : data), ...res.data.data.docs];

      // For the first page, set the first job as detail data
      if (currentPage === 1 && jobData.length > 0) {
        setDetailData(jobData[0]);
      }

      setData(jobData);
      setHasMore(res.data.data.hasNextPage);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Reset to first page and fetch jobs when filters change
    setPage(1);
    fetchJobs(1, filters);
  }, [filters]);

  useEffect(() => {
    // Fetch more jobs when page changes
    if (page > 1) {
      fetchJobs(page, filters);
    }
  }, [page]);

  const handleSearch = (searchFilters) => {
    // Update filters, which will trigger useEffect and fetch new data
    setFilters({
      jobKeyword: searchFilters.jobKeyword,
      location: searchFilters.location,
    });
    setPage(1);
  };

  const handleClickJob = async (id) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/jobs/${id}`);
      setDetailData({ ...res.data.data });
    } catch (err) {
      console.error(err);
    }
  };

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Layout>
      <Searchbar onSearch={handleSearch} />

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
            <InfiniteScroll
              dataLength={data.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={
                <div className="text-center my-4">
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              }
              endMessage={
                <p className="text-center my-4 text-gray-500">
                  Tidak ada lowongan lagi yang dapat dimuat
                </p>
              }
            >
              {data.map((job, index) => (
                <div
                  className="card card-bordered bg-base-100 shadow-xl mb-3"
                  key={index}
                  onClick={() => handleClickJob(job._id)}
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
                        {job.companyId.name}
                      </p>
                      <p className="text-sm">{job.companyId.city}</p>

                      <p className="mt-3" id="description">
                        {job.description.slice(0, 100)}.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </InfiniteScroll>
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
    </Layout>
  );
}

export default Home;
