import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import { IoIosSearch } from "react-icons/io";
import { FaCity } from "react-icons/fa6";
import PopularCompanies from "../components/PopularCompanies";

function Companies() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-4">
        <div className="mt-16">
          <h1 className="text-5xl font-bold mb-6">
            Telusuri tempat berkarir terbaik
          </h1>
          <p className="text-md font-semibold mb-1">
            Nama perusahaan atau posisi lowongan
          </p>
          <div className="flex items-center space-x-4 mx-auto mb-4">
            <div className="flex-grow">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <IoIosSearch />
              </label>
            </div>
            <div>
              <button className="btn btn-primary text-white">
                Cari Perusahaan
              </button>
            </div>
          </div>
          <Link to="/" className="text-md underline text-sky-700">
            Apakah kamu ingin mencari informasi gaji?
          </Link>
        </div>
        <PopularCompanies />
      </div>
    </Layout>
  );
}

export default Companies;
