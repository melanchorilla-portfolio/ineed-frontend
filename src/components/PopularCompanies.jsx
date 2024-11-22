import React from "react";

const CompanyCard = ({
  company,
  logo,
  rating,
  reviewCount,
  showGaji = true,
}) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(rating) ? "text-purple-600" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 flex-shrink-0">
          <img
            src={logo}
            alt={company}
            className="w-full h-full object-contain rounded"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{company}</h3>
          <div className="flex items-center mt-1">
            <div className="flex">{renderStars(rating)}</div>
            <span className="ml-2 text-sm text-gray-600">
              {reviewCount} ulasan
            </span>
          </div>
          <div className="flex mt-3 space-x-4">
            {showGaji && (
              <a
                href="#"
                className="text-gray-700 text-sm hover:text-purple-600"
              >
                Gaji
              </a>
            )}
            <a href="#" className="text-gray-700 text-sm hover:text-purple-600">
              Pertanyaan
            </a>
            <a href="#" className="text-gray-700 text-sm hover:text-purple-600">
              Lowongan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const PopularCompanies = () => {
  const companies = [
    {
      name: "PT. ASTRA HONDA MOTOR",
      logo: "https://placehold.co/400",
      rating: 4.5,
      reviewCount: "65",
    },
    {
      name: "PT AMARTHA MIKRO FINTEK",
      logo: "https://placehold.co/400",
      rating: 3.5,
      reviewCount: "6",
    },
    {
      name: "PT. Pertamina (PERSERO)",
      logo: "https://placehold.co/400",
      rating: 4,
      reviewCount: "40",
    },
    {
      name: "PT. Swakarya Insan Mandiri",
      logo: "https://placehold.co/400",
      rating: 4,
      reviewCount: "116",
    },
    {
      name: "PT. Blue Bird Tbk. | Blue Bird Group",
      logo: "https://placehold.co/400",
      rating: 3.5,
      reviewCount: "34",
    },
    {
      name: "PT BFI Finance Indonesia Tbk",
      logo: "https://placehold.co/400",
      rating: 4,
      reviewCount: "129",
    },
    {
      name: "PT. Multirasa Nusantara",
      logo: "https://placehold.co/400",
      rating: 4,
      reviewCount: "47",
    },
    {
      name: "PT BANK MEGA TBK",
      logo: "https://placehold.co/400",
      rating: 4,
      reviewCount: "43",
    },
    {
      name: "DBS Bank",
      logo: "https://placehold.co/400",
      rating: 4,
      reviewCount: "643",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Perusahaan Populer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {companies.map((company) => (
          <CompanyCard
            key={company.name}
            company={company.name}
            logo={company.logo}
            rating={company.rating}
            reviewCount={company.reviewCount}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCompanies;
