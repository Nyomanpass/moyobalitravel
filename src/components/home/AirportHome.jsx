import React, { useState } from 'react';
// Asumsikan BookingModal sudah diimport dengan benar
import BookingModal from '../BookingModal'; 
import { FaCar, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa'; // Menambahkan ikon
import { useTranslation } from "react-i18next";

// --- Komponen Utama: AirportHome (Tabel Harga yang Ditingkatkan) ---
const AirportHome = () => {
    // Data Harga Transfer Bandara

    const { t } = useTranslation();

  const prices = [
  { pickup: "Airport", destination: "Kuta", price: "IDR 200K", min: "Min 2 Person" },
  { pickup: "Airport", destination: "Jimbaran – Legian", price: "IDR 250K", min: "Min 2 Person" },
  { pickup: "Airport", destination: "Nusa Dua – Seminyak – Sanur", price: "IDR 350K", min: "Min 2 Person" },
  { pickup: "Airport", destination: "Uluwatu – Canggu", price: "IDR 350K", min: "Min 2 Person" },
  { pickup: "Airport", destination: "Ubud", price: "IDR 400K", min: "Min 2 Person" },
  { pickup: "Airport", destination: "Tegallalang", price: "IDR 500K", min: "Min 2 Person" },
  { pickup: "Airport", destination: "Padangbai", price: "IDR 600K", min: "Min 2 Person" },
  { pickup: "Airport", destination: "Amed", price: "IDR 800K", min: "Min 2 Person" },
  { pickup: "Airport", destination: "Candidasa", price: "IDR 750K", min: "Min 2 Person" },
  { pickup: "Airport", destination: "Tulamben", price: "IDR 850K", min: "Min 2 Person" },
  { pickup: "Airport", destination: "Lovina", price: "IDR 1.000K", min: "Min 2 Person" },
  { pickup: "Airport", destination: "Gilimanuk – Pemuteran", price: "IDR 1.200K", min: "Min 2 Person" }
];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
        <section className="py-20 md:py-32 flex items-start justify-center bg-white">
            <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 w-full">
                
                {/* Bagian Judul (Menggunakan Warna Primary & Secondary) */}
                <div className="text-center mb-16">
                    <p className="uppercase tracking-widest text-md md:text-lg mb-2 font-medium text-secondary">
                         {t("airporthome.subtitle")}
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">
                        {t("airporthome.title")}{" "} <span className="text-secondary">{t("airporthome.highlight")}</span>
                    </h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-md md:text-lg">
                         {t("airporthome.desc")}
                    </p>
                </div>

                {/* Tabel Harga - Styling Diperbarui */}
              <div className="bg-white p-4 md:p-8 rounded-2xl shadow-2xl border border-gray-100">
  {/* 📱 MOBILE VIEW: Tampilkan sebagai kartu */}
  <div className="block md:hidden space-y-4">
    {prices.map((item, idx) => (
      <div
        key={idx}
        className="p-4 bg-secondary/5 rounded-xl shadow-sm border border-gray-100"
      >
        <div className="flex items-center text-primary font-bold mb-2">
          <FaCar className="mr-2 text-secondary" /> {item.pickup}
        </div>
        <div className="flex items-center text-gray-700 mb-2">
          <FaMapMarkerAlt className="mr-2 text-secondary" /> {item.destination}
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="text-sm text-gray-500">{item.min}</div>
          <div className="text-2xl font-extrabold text-secondary">
            {item.price}
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* 💻 DESKTOP VIEW: Tabel seperti biasa */}
  <div className="hidden md:block overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr className="text-left text-sm font-bold uppercase tracking-wider text-primary bg-secondary/10">
          <th className="md:px-6 py-3 rounded-tl-xl w-1/4">
            <div className="flex items-center">
              <FaCar className="mr-2 text-secondary" /> Pick Up
            </div>
          </th>
          <th className="md:px-6 py-3 w-1/2">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-secondary" /> Destination
            </div>
          </th>
          <th className="md:px-6 py-3 text-right rounded-tr-xl w-1/4">
            <div className="flex items-center justify-end">
              <FaDollarSign className="mr-1 text-secondary" /> Price (Per Car)
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {prices.map((item, idx) => (
          <tr
            key={idx}
            className="hover:bg-secondary/5 transition duration-150"
          >
            <td className="md:px-6 py-3 text-base font-semibold text-gray-900">
              {item.pickup}
            </td>
            <td className="md:px-6 py-3 text-base font-medium text-primary">
              {item.destination}
            </td>
            <td className="md:px-6 py-3 text-right text-sm">
              <div className="font-extrabold text-secondary text-lg">
                {item.price}
              </div>
              <div className="text-xs text-gray-500">{item.min}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="text-center mt-10">
    <button
      onClick={openModal}
      className="bg-primary hover:bg-secondary text-white font-extrabold py-4 px-10 rounded-full text-lg shadow-xl transition duration-300 transform hover:scale-[1.02]"
    >
     {t("airporthome.button")}
    </button>
  </div>
</div>

            </div>
             {/* Modal diimport dari BookingModal.jsx */}
            <BookingModal isOpen={isModalOpen} onClose={closeModal} prices={prices} />
        </section>
    );
};

export default AirportHome;