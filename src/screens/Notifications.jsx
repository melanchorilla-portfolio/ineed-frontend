import { MdNotificationsPaused } from "react-icons/md";
import Layout from '../layouts/Layout';
import { Link } from "react-router-dom";

function Notifications() {
  return (
    <Layout>
      <div className="container max-w-md mx-auto flex justify-center mt-10 flex-col items-center">
        <MdNotificationsPaused className="text-[140px] text-yellow-400 rotate-12 block" />
        <div className="mt-6">
          <h2 className="text-bold text-3xl text-center">
            Tidak ada untuk saat ini. Periksa lagi nanti!
          </h2>
          <p className="text-slate-600 mt-6 text-center text-md">
            Di sinilah kami akan memberi tahu Anda tentang lamaran pekerjaan
            Anda dan informasi berguna lainnya untuk membantu Anda mencari
            lowongan.
          </p>
          <div className="mt-6 mx-auto text-center">
            <Link to="/" className="btn btn-primary text-white rounded-md btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-wide">
              Cari Lowongan
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Notifications