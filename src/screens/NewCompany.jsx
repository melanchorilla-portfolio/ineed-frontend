import { useState } from "react";
import NavbarAccount from "../components/NavbarAccount";
import { GiModernCity } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewCompany() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    city: "",
    imageURL: "https://placehold.co/400x400/png",
    rating: "0",
    total: "0",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_API_URL}/companies`, input, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      console.log(res.data.company.name);
      navigate('/')
    }).catch((err) => {
      console.error(err)
    })
    console.log(input);
  };

  return (
    <>
      <NavbarAccount />
      <div className="max-w-3xl mx-auto">
        <div className="w-full h-40 bg-slate-100 flex items-center justify-between p-4 mt-5">
          <h1 className="text-2xl font-semibold ml-3 text-slate-800">
            Buat akun perusahaan
          </h1>
          <GiModernCity className="text-8xl text-slate-800" />
        </div>
        <form className="mt-10" onSubmit={handleSubmit}>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="text-base font-semibold">
                  Nama perusahaan Anda
                </span>
              </div>
              <input
                type="text"
                name="name"
                placeholder=""
                className="input input-bordered w-full"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="text-base font-semibold">Kota</span>
              </div>
              <input
                type="text"
                name="city"
                placeholder=""
                className="input input-bordered w-full"
                onChange={handleChange}
              />
            </label>
          </div>
          {/* <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="text-base font-semibold">Image URL</span>
              </div>
              <input
                type="text"
                name="imageURL"
                placeholder=""
                className="input input-bordered w-full"
                onChange={handleChange}
              />
            </label>
          </div> */}
          <input type="hidden" name="rating" />
          <input type="hidden" name="total" />

          <div className="">
            <button
              type="submit"
              className="btn btn-primary text-white w-full mt-10"
            >
              Lanjutkan
            </button>
          </div>
        </form>
      </div>
      
    </>
  );
}

export default NewCompany;
