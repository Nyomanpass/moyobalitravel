import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; // Pastikan Anda menginstal lucide-react
import { useTranslation } from "react-i18next";

const PaketHome = () => {

    const { t } = useTranslation();
    const paketWisata = t("tours", { returnObjects: true });

  return (
    // Menggunakan bg-gray-50 untuk kontras dari section putih lainnya
    <section className="bg-gray-50 w-full px-6 md:px-11 lg:px-14 xl:px-16  py-24">
      <div className="max-w-screen-xl mx-auto">
      {/* Header Section: Judul dan Tombol View All */}
       <div
      className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col mb-6 md:mb-0">
        {/* JUDUL UTAMA */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary pb-1">
          {t("trip.title.main")}{" "}
          <span className="text-secondary">{t("trip.title.highlight")}</span>
        </h2>

        {/* GARIS DEKORATIF */}
        <div className="w-16 h-1 bg-secondary rounded-full mb-3" />

        {/* SUBTITLE */}
        <p className="text-gray-700 max-w-xl text-md md:text-lg">
          {t("trip.subtitle")}
        </p>
      </div>

      {/* TOMBOL VIEW ALL */}
      <a
        href="/tour-package"
        className="flex items-center text-secondary font-bold hover:text-primary transition duration-300 group text-md md:text-lg"
      >
        {t("trip.button")}
        <ArrowRight
          size={24}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </div>
      {/* Content Grid (4 item) */}
       <div className="grid md:grid-cols-3 gap-3">
        {paketWisata.slice(0, 3).map((tour, index) => (
        <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 flex flex-col"
                            >
                                {/* Gambar */}
                                <img
                                    // Asumsi properti image sudah benar dari data JSON
                                    src={tour.image} 
                                    alt={tour.title}
                                    className="w-full h-56 object-cover flex-shrink-0"
                                />

                                {/* Konten */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            {tour.title}
                                        </h3>
                                        
                                  

                                        <p className="text-gray-600 text-sm mb-4">
                                            {/* Memastikan description ada sebelum slicing */}
                                            {tour.description ? (
                                                tour.description.split(" ").length > 20
                                                    ? tour.description.split(" ").slice(0, 20).join(" ") + "..."
                                                    : tour.description
                                            ) : ''}
                                        </p>

                                        {/* Highlight */}
                                        {tour.highlight && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {tour.highlight.slice(0, 3).map((item, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                    </div>

                                    {/* Tombol */}
                                    <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
                                        <a
                                            href={`${tour.whatsappLink || "#"} `}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700 transition-transform transform hover:scale-105 font-semibold text-sm"
                                        >
                                            {t("book_now")}
                                            {/* SVG icon booking */}
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
                                                <path d="M18.92 6.01C18.72 5.36 18.09 4.98 17.43 5H6.57C5.91 4.98 5.28 5.36 5.08 6.01L3 12v8h2v-2h14v2h2v-8l-2.08-5.99zM6.85 7h10.3c.03.06.05.13.05.2v2H6.8v-2c0-.07.02-.14.05-.2zM19 18H5v-5.26l1.3-.34 2.15-.57c.33-.08.67-.12 1.01-.12h5c.34 0 .68.04 1.01.12l2.15.57 1.3.34V18z" />
                                            </svg>
                                        </a>

                                        <a
                                            href={`/tours/${tour.id}`}
                                            className="inline-flex items-center gap-2 border border-teal-600 text-teal-600 px-5 py-2 rounded-full hover:bg-teal-50 transition-transform transform hover:scale-105 font-semibold text-sm"
                                        >
                                            {t("details")}
                                            {/* SVG icon details */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
      ))}
              </div>
      </div>
    </section>
  );
};

export default PaketHome;