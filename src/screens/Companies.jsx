import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
// import { FaCity } from "react-icons/fa6";
import PopularCompanies from "../components/PopularCompanies";
import SearchCompanies from "../components/SearchCompanies";

function Companies() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-4">
        <div className="mt-16">
          <h1 className="text-5xl font-bold mb-6">
            Telusuri tempat berkarir terbaik
          </h1>
          <SearchCompanies />
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
