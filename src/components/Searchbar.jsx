import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

const Searchbar = ({ onSearch }) => {
  const [jobKeyword, setJobKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ jobKeyword, location });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form
        onSubmit={handleSearch}
        className="flex items-center bg-white rounded-md border shadow-lg p-2"
      >
        {/* Job Position Search Input */}
        <div className="flex items-center flex-1 px-3 border-r border-gray-200">
          <IoIosSearch className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Posisi lowongan, kata kunci"
            className="w-full py-2 px-1 focus:outline-none text-gray-700 placeholder-gray-400"
            value={jobKeyword}
            onChange={(e) => setJobKeyword(e.target.value)}
          />
        </div>

        {/* Location Search Input */}
        <div className="flex items-center flex-1 px-3">
          <MdLocationOn className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Kota, provinsi, kode pos"
            className="w-full py-2 px-1 focus:outline-none text-gray-700 placeholder-gray-400"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Search Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md ml-2 font-medium">
          Cari Lowongan Kerja
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
