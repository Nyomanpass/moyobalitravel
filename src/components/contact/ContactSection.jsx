import React, { useState } from 'react'; // Import useState
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function ContactSection() {
  const { t } = useTranslation();
  const PRIMARY = "teal-600";
  const SECONDARY = "amber-500";
  
  // State untuk formulir
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
  });

  // Handler untuk memperbarui state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  
  // URL WhatsApp
  const WA_BASE_URL = "https://wa.me/6281246728044?text="; // Ganti dengan nomor Anda
  
  // Handler untuk pengiriman formulir
  const handleSubmit = (e) => {
      e.preventDefault();

      // Template pesan WA menggunakan kunci terjemahan untuk judul
      const waMessage = `
*${t("contactSectionFull.formTitle")}*
--------------------------------
*${t("contactSectionFull.formName")}:* ${formData.name}
*${t("contactSectionFull.formEmail")}:* ${formData.email}
*${t("contactSectionFull.formMessage")}:* ${formData.message}
--------------------------------
`;

      const encodedText = encodeURIComponent(waMessage);

      // Buka WhatsApp
      window.open(WA_BASE_URL + encodedText, "_blank");
      
      // Opsional: Reset form setelah kirim
      setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="pt-10 pb-20" id="contact">
      <div className="max-w-6xl mx-auto px-6 md:px-14 grid md:grid-cols-2 gap-10">
        
        {/* Kiri: Info Kontak (Tidak Berubah) */}
        <div className={`bg-white p-8 md:p-10 rounded-2xl shadow-lg space-y-8`}>
            {/* ... (Konten Kontak, Mail, Phone, MapPin, Social Media) ... */}
            <h3 className="text-3xl font-bold text-primary">{t("contactSectionFull.infoTitle")}</h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start bg-gray-50 p-4 rounded-xl hover:shadow-md transition">
                <div className={`p-3 rounded-full bg-${SECONDARY}/10 text-${SECONDARY} mr-4`}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{t("contactSectionFull.addressTitle")}</p>
                  <p className="text-gray-600">{t("contactSectionFull.addressText")}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start bg-gray-50 p-4 rounded-xl hover:shadow-md transition">
                <div className={`p-3 rounded-full bg-${SECONDARY}/10 text-${SECONDARY} mr-4`}>
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{t("contactSectionFull.phoneTitle")}</p>
                  <p className="text-gray-600">{t("contactSectionFull.phoneText")}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start bg-gray-50 p-4 rounded-xl hover:shadow-md transition">
                <div className={`p-3 rounded-full bg-${SECONDARY}/10 text-${SECONDARY} mr-4`}>
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{t("contactSectionFull.emailTitle")}</p>
                  <p className="text-gray-600">{t("contactSectionFull.emailText")}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <h4 className="text-xl font-bold text-gray-800 mb-5">{t("contactSectionFull.socialTitle")}</h4>
              <div className="flex justify-center space-x-6">
                <FaInstagram className={`text-${PRIMARY} hover:text-${SECONDARY} w-7 h-7 transition-transform transform hover:scale-110`} />
                <FaFacebook className={`text-${PRIMARY} hover:text-${SECONDARY} w-7 h-7 transition-transform transform hover:scale-110`} />
                <FaTiktok className={`text-${PRIMARY} hover:text-${SECONDARY} w-7 h-7 transition-transform transform hover:scale-110`} />
              </div>
            </div>
        </div>


        {/* Kanan: Form (MODIFIKASI) */}
        <form
            onSubmit={handleSubmit} // Tambahkan handler submit
            className={`bg-white p-10 rounded-2xl shadow-xl border border-gray-100 space-y-6 
                        transition-all duration-300 hover:shadow-2xl`}
        >
            {/* Judul Form */}
            <h3 className="text-3xl font-bold text-primary">
                {t("contactSectionFull.formTitle")}
            </h3>

            {/* Input Nama */}
            <div className="relative">
                <input
                    type="text"
                    placeholder={t("contactSectionFull.formName")}
                    className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 px-1 
                               text-gray-800 placeholder-transparent focus:border-teal-600 
                               focus:outline-none transition-all duration-200"
                    id="name"
                    value={formData.name} // Dikontrol oleh state
                    onChange={handleChange} // Tambahkan handler change
                    required
                />
                <label
                    htmlFor="name"
                    className="absolute left-1 top-3 text-gray-500 text-md transition-all 
                               peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                               peer-placeholder-shown:text-md peer-focus:-top-3 peer-focus:text-sm 
                               peer-focus:text-teal-600 bg-white px-1"
                >
                    {t("contactSectionFull.formName")}
                </label>
            </div>

            {/* Input Email */}
            <div className="relative">
                <input
                    type="email"
                    placeholder={t("contactSectionFull.formEmail")}
                    className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 px-1 
                               text-gray-800 placeholder-transparent focus:border-teal-600 
                               focus:outline-none transition-all duration-200"
                    id="email"
                    value={formData.email} // Dikontrol oleh state
                    onChange={handleChange} // Tambahkan handler change
                    required
                />
                <label
                    htmlFor="email"
                    className="absolute left-1 top-3 text-gray-500 text-md transition-all 
                               peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                               peer-placeholder-shown:text-md peer-focus:-top-3 peer-focus:text-sm 
                               peer-focus:text-teal-600 bg-white px-1"
                >
                    {t("contactSectionFull.formEmail")}
                </label>
            </div>

            {/* Textarea Pesan */}
            <div className="relative">
                <textarea
                    rows="5"
                    placeholder={t("contactSectionFull.formMessage")}
                    className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 px-1 
                               text-gray-800 placeholder-transparent focus:border-teal-600 
                               focus:outline-none transition-all duration-200"
                    id="message"
                    value={formData.message} // Dikontrol oleh state
                    onChange={handleChange} // Tambahkan handler change
                    required
                ></textarea>
                <label
                    htmlFor="message"
                    className="absolute left-1 top-3 text-gray-500 text-md transition-all 
                               peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                               peer-placeholder-shown:text-md peer-focus:-top-3 peer-focus:text-sm 
                               peer-focus:text-teal-600 bg-white px-1"
                >
                    {t("contactSectionFull.formMessage")}
                </label>
            </div>

            {/* Tombol Kirim */}
            <button
                type="submit"
                className={`w-full bg-${PRIMARY} text-white px-6 py-4 rounded-xl font-semibold text-lg 
                           uppercase tracking-wide shadow-md hover:shadow-lg 
                           hover:bg-teal-700 transform hover:-translate-y-1 
                           transition-all duration-300`}
            >
                {t("contactSectionFull.formButton")}
            </button>
        </form>

      </div>
    </section>
  );
}