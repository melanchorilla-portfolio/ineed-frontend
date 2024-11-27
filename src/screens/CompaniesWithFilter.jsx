import { useEffect, useState } from "react";
import SearchCompanies from "../components/SearchCompanies";
import Layout from "../layouts/Layout";
import { IoStarSharp } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const CompaniesWithFilter = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchQuery = searchParams.get("q") ?? "";

  useEffect(() => {
    // Fetch data whenever search params change
    const fetchCompanies = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/companies?search=${searchQuery}`
        );
        setData(response.data.data.docs);
      } catch (error) {
        console.error("Failed to fetch data", error);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    // Only fetch if there's a search query
    if (searchQuery) {
      fetchCompanies();
    } else {
      // Reset data if no search query
      setData([]);
      setIsLoading(false);
    }
  }, [searchQuery]);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-4">
        <SearchCompanies />

        <div className="mt-6 px-4 py-3">
          {isLoading ? (
            <p className="text-center text-gray-500">Memuat...</p>
          ) : data.length ? (
            data.map((company, index) => (
              <div
                className="bg-white border-b flex items-center px-4 py-3"
                key={company._id || index}
              >
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={company.imageURL}
                    alt={`${company.name} logo`}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-gray-900 truncate">
                    {company.name}
                  </h3>
                  <div className="flex items-center text-purple-500 mt-1 gap-1">
                    <span className="font-semibold text-black">
                      {company.rating}
                    </span>
                    <IoStarSharp />
                    <span className="ml-1 text-gray-500 text-xs">
                      {company.total} ulasan
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-3 lg:gap-7">
                  <a href="#" className="text-blue-600 hover:underline text-sm">
                    Ulasan
                  </a>
                  <a href="#" className="text-blue-600 hover:underline text-sm">
                    Gaji
                  </a>
                  <a href="#" className="text-blue-600 hover:underline text-sm">
                    Lowongan Kerja
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              Tidak ada data yang ditemukan. Silakan coba kata kunci yang
              berbeda.
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CompaniesWithFilter;
