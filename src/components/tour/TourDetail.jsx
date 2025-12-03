import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar";
import FullFooterSection from "../home/FullFooterSection";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function TourDetail() {
  const { id } = useParams();
  const { t } = useTranslation();

  // Ambil semua tour sesuai bahasa aktif
  const tours = t("tours", { returnObjects: true });
  const tour = tours.find((item) => item.id === parseInt(id));

  // ==========================
  // FORM STATE
  // ==========================
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const WA_BASE_URL = "https://wa.me/6281246728044?text="; // nomor WA kamu

  // handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================
  // HANDLE SUBMIT → KIRIM WA
  // ==========================
  const handleSubmit = (e) => {
    e.preventDefault();

    const text =
      `Booking Tour: ${tour.title}\n\n` +
      `Nama: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `No HP: ${form.phone}\n` +
      `Pesan: ${form.message}\n`;

    const finalUrl = WA_BASE_URL + encodeURIComponent(text);

    window.open(finalUrl, "_blank"); // buka WA
  };

  // Jika tour tidak ditemukan
  if (!tour) {
    return (
      <div className="text-center py-20 text-gray-600">
        <p>{t("tour_not_found")}</p>
        <Link
          to="/tour-package"
          className="mt-4 inline-block bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700"
        >
          {t("back")}
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <section className="py-16 mt-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-10 mb-12">

            {/* ======================================
                KIRI (Gambar + Info Tour)
            ======================================= */}
            <div className="md:col-span-2 flex flex-col space-y-8">

              {/* Gambar */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-96 object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Judul + Deskripsi */}
              <div className="pt-4">
                <h1 className="text-2xl font-extrabold text-gray-900 mb-4">
                  {tour.title}
                </h1>

                <div className="space-y-4 mb-6">
                  {tour.description.split("\n").map((p, idx) => (
                    <p key={idx} className="text-lg text-gray-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Durasi & Highlight */}
                <div className="flex flex-wrap items-center gap-6 mb-8 border-b pb-4 border-gray-100">
                  <div className="flex items-center text-lg text-amber-600 font-semibold gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h-2V7h2v6z" />
                    </svg>
                    <span>{tour.duration}</span>
                  </div>

                  {tour.category === "Bali Day Tour" && tour.highlight && (
                    <div className="flex flex-wrap gap-3">
                      {tour.highlight.map((item, i) => (
                        <span
                          key={i}
                          className="text-sm bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Harga */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {t("price_title")}
                  </h2>
                  <p className="text-2xl font-extrabold text-teal-600 mb-1">
                    {tour.price}
                  </p>
                  {tour.note && (
                    <pre className="text-sm text-gray-600 italic">*{tour.note}</pre>
                  )}
                </div>

               {/* PROGRAM */}
<div className="bg-white rounded-2xl p-8 border border-gray-200">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-3 border-gray-100">
    {t("program_title")}
  </h2>

  {tour.program && (
    <ul className="list-inside space-y-4 text-gray-700">
      {tour.program.map((step, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="flex-shrink-0 text-xl font-bold text-teal-600">
            {index + 1}.
          </span>
          <p className="flex-1">{step}</p>
        </li>
      ))}
    </ul>
  )}
</div>


{/* INCLUDED */}
<div className="bg-white rounded-2xl p-8 border border-gray-200">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-3 border-gray-100">
    {t("includes_title")}
  </h2>

  {tour.includes && (
    <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4 text-gray-700">
      {tour.includes.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          {item}
        </li>
      ))}
    </ul>
  )}
</div>


{/* EXCLUDES */}
<div className="bg-white rounded-2xl p-8 border border-gray-200">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-3 border-gray-100">
    {t("excludes_title")}
  </h2>

  {tour.excludes && (
    <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4 text-gray-700">
      {tour.excludes.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-red-500 flex-shrink-0 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          {item}
        </li>
      ))}
    </ul>
  )}
</div>


{/* WHAT TO BRING — BalI Activities Only */}
{tour.category === "Bali Activities" && tour.whatToBring && (
  <div className="bg-white rounded-2xl p-8 border border-gray-200">
    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-3 border-gray-100">
      {t("what_to_bring_title")}
    </h2>

    <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4 text-gray-700">
      {tour.whatToBring.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 13.255A23.513 23.513 0 0112 15c-3.15 0-6.05-.767-8.7-2.008V12a10 10 0 0017.4 5.255z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 21a9 9 0 01-9-9 9 9 0 0118 0 9 9 0 01-9 9z"
            ></path>
          </svg>
          {item}
        </li>
      ))}
    </ul>
  </div>
)}


{/* GALLERY */}
{tour.gallery && (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-6">
    {tour.gallery.map((img, index) => (
      <div key={index} className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={img}
          alt={
            tour.highlight && tour.highlight[index]
              ? tour.highlight[index]
              : `${t("image_alt_fallback")} ${index + 1}`
          }
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
)}


                

              </div>
            </div>

            {/* ======================================
                KANAN — FORM PEMESANAN (diubah sedikit)
            ======================================= */}
            <div className="md:col-span-1 bg-gray/30 rounded-2xl p-5 sticky top-24 self-start border border-gray-200">

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-5 border-b pb-3 border-gray-200">
                  {t("booking_form_title")}
                </h2>

                {/* FORM */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder={t("form_name")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-30 bg-white text-gray-900"
                  />

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder={t("form_email")}
                    className="w-full px-4 py-3 rounded-xl border bg-white text-gray-900"
                  />

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder={t("form_phone")}
                    className="w-full px-4 py-3 rounded-xl border bg-white text-gray-900"
                  />

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder={t("form_message")}
                    className="w-full px-4 py-3 rounded-xl border bg-white text-gray-900"
                  />

                  <button
                    type="submit"
                    className="w-full bg-teal-600 text-white text-lg font-semibold px-5 py-3 rounded-xl shadow-lg hover:bg-teal-700"
                  >
                    {t("book_now_detail")}
                  </button>
                </form>
              </div>

              {/* Kontak Tetap Sama */}
              <div className="mt-6 border-t border-gray-300 pt-6 space-y-4 text-gray-700">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t("contact_info")}
                </h3>

                <a href="https://wa.me/6281246728044" className="flex items-center gap-3">
                  <FaWhatsapp className="text-teal-600 w-5 h-5" />
                  <span className="font-medium">+62 812-4672-8044</span>
                </a>

                <a href="mailto:info@tourbali.com" className="flex items-center gap-3">
                  <FaEnvelope className="text-teal-600 w-5 h-5" />
                  <span className="font-medium">info@tourbali.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FullFooterSection />
    </>
  );
}

export default TourDetail;
