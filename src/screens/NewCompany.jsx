import NavbarAccount from "../components/NavbarAccount";
import { GiModernCity } from "react-icons/gi";

function NewCompany() {
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
        <form className="mt-10">
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
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="text-base font-semibold">Image URL</span>
              </div>
              <input
                type="text"
                name="imageURL"
                placeholder=""
                className="input input-bordered w-full"
              />
            </label>
          </div>
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
