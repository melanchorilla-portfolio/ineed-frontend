import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const SearchCompanies = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
    navigate(`/companies/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <>
      <p className="text-md font-semibold mb-1">
        Nama perusahaan atau posisi lowongan
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex items-center space-x-4 mx-auto mb-4"
      >
        <div className="flex-grow">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <IoIosSearch />
          </label>
        </div>
        <div>
          <button className="btn btn-primary text-white">
            Cari Perusahaan
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchCompanies;
