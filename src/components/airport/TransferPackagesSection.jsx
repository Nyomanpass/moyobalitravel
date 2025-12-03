import React from 'react';
import { useTranslation } from "react-i18next";




const WA_BASE_URL = "https://wa.me/6281246728044?text="; // Ganti dengan nomor WA Anda!


function TransferPackagesSection() {

      const { t } = useTranslation();
      const transferDestinations = [
  {
    id: 1,
    title: "Kuta",
    priceUSD: "US$ 15",
    priceIDR: "IDR 200K",
    minPersonKey: "transfer.minPerson",
    descriptionKey: "transfer.destinations.kuta.description",
    image: "/kuta.jpg",
    whatsappText:
      "Hello, I’m interested in booking an airport transfer to Kuta for US$ 15 or IDR 200K."
  },
  {
    id: 2,
    title: "Jimbaran – Legian",
    priceUSD: "US$ 17",
    priceIDR: "IDR 250K",
    minPersonKey: "transfer.minPerson",
    descriptionKey: "transfer.destinations.jimbaran.description",
    image: "/jimbaranairport.jpg",
    whatsappText:
      "Hello, I’m interested in booking an airport transfer to Jimbaran/Legian for US$ 17 or IDR 250K."
  },
  {
    id: 3,
    title: "Nusa Dua – Sanur",
    priceUSD: "US$ 18",
    priceIDR: "IDR 350K",
    minPersonKey: "transfer.minPerson",
    descriptionKey: "transfer.destinations.nusa-dua.description",
    image: "/sanur.jpg",
    whatsappText:
      "Hello, I’m interested in booking an airport transfer to Nusa Dua/Seminyak/Sanur for US$ 18 or IDR 350K."
  },
  {
    id: 4,
    title: "Uluwatu – Canggu",
    priceUSD: "US$ 18",
    priceIDR: "IDR 350K",
    minPersonKey: "transfer.minPerson",
    descriptionKey: "transfer.destinations.uluwatu.description",
    image: "/uluwatu.jpg",
    whatsappText:
      "Hello, I’m interested in booking an airport transfer to Uluwatu/Canggu for US$ 18 or IDR 350K."
  },
  {
    id: 5,
    title: "Ubud",
    priceUSD: "US$ 25",
    priceIDR: "IDR 400K",
    minPersonKey: "transfer.minPerson",
    descriptionKey: "transfer.destinations.ubud.description",
    image: "/ubud.jpg",
    whatsappText:
      "Hello, I’m interested in booking an airport transfer to Ubud for US$ 25 or IDR 400K."
  },
  {
    id: 6,
    title: "Tegallalang",
    priceUSD: "US$ 28",
    priceIDR: "IDR 500K",
    minPersonKey: "transfer.minPerson",
    descriptionKey: "transfer.destinations.tegallalang.description",
    image: "/tegalalangdua.jpg",
    whatsappText:
      "Hello, I’m interested in booking an airport transfer to Tegallalang for US$ 28 or IDR 500K."
  },
  {
    id: 7,
    title: "Padangbai",
    priceUSD: "US$ 33",
    priceIDR: "IDR 600K",
    minPersonKey: "transfer.minPerson",
    descriptionKey: "transfer.destinations.padangbai.description",
    image: "/padangbai.jpg",
    whatsappText:
      "Hello, I’m interested in booking an airport transfer to Padangbai for US$ 33 or IDR 600K."
  },
  {
    id: 8,
    title: "Amed",
    priceUSD: "US$ 40",
    priceIDR: "IDR 800K",
    minPersonKey: "transfer.minPerson",
    descriptionKey: "transfer.destinations.amed.description",
    image: "/amed.jpg",
    whatsappText:
      "Hello, I’m interested in booking an airport transfer to Amed for US$ 40 or IDR 800K."
  },
  {
    id: 9,
    title: "Candidasa",
    priceUSD: "US$ 38",
    priceIDR: "IDR 750K",
    minPersonKey: "transfer.minPerson",
    descriptionKey: "transfer.destinations.candidasa.description",
    image: "/candidasa.jpg",
    whatsappText:
      "Hello, I’m interested in booking an airport transfer to Candidasa for US$ 38 or IDR 750K."
  },
  {
    id: 10,
    title: "Tulamben",
    priceUSD: "US$ 43",
    priceIDR: "IDR 850K",
    minPersonKey: "transfer.minPerson",
    descriptionKey: "transfer.destinations.tulamben.description",
    image: "/tulaben.jpg",
    whatsappText:
      "Hello, I’m interested in booking an airport transfer to Tulamben for US$ 43 or IDR 850K."
  },
  {
    id: 11,
    title: "Lovina",
    priceUSD: "US$ 50",
    priceIDR: "IDR 1.000K",
    minPersonKey: "transfer.minPerson",
    descriptionKey: "transfer.destinations.lovina.description",
    image: "/lovina.jpg",
    whatsappText:
      "Hello, I’m interested in booking an airport transfer to Lovina for US$ 50 or IDR 1.000K."
  },
  {
    id: 12,
    title: "Gilimanuk – Pemuteran",
    priceUSD: "US$ 55",
    priceIDR: "IDR 1.200K",
    minPersonKey: "transfer.minPerson",
    descriptionKey: "transfer.destinations.pemuteran.description",
    image: "/pemuteran.jpg",
    whatsappText:
      "Hello, I’m interested in booking an airport transfer to Gilimanuk/Pemuteran for US$ 55 or IDR 1.200K."
  }
];

    return (
        <section className="">
            

                {/* Header Section */}
            

                {/* Grid Kartu - Menggunakan 3 kolom untuk tata letak 7 kartu yang lebih rapi */}
               <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-3">
  {transferDestinations.map((dest) => (
    <div
      key={dest.id}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Gambar Card */}
      <div className="h-40 overflow-hidden">
        <img
          src={dest.image}
          alt={dest.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Konten Card */}
      <div className="p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
        {/* Header dan Deskripsi */}
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase">
            Airport Transfer
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">
            {dest.title}
          </h3>

          {/* Rating */}
          <div className="flex text-amber-500 text-sm mb-3">
            {"★".repeat(5)}
          </div>

          {/* Deskripsi */}
          <p className="text-sm text-gray-600 mb-4  overflow-hidden">
            {t(dest.descriptionKey)}
          </p>
        </div>

        {/* Harga dan Tombol (Footer Card) */}
        <div className="pt-3 border-t border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <div>
              {/* Harga IDR */}
              <p className="text-lg font-extrabold text-teal-600">
                {dest.priceIDR}
              </p>
              {/* Harga USD */}
              <p className="text-sm font-semibold text-gray-700">
                {dest.priceUSD}
              </p>
              {/* Minimum Person */}
              <span className="block text-xs font-normal text-gray-500">
                {t(dest.minPersonKey)}
              </span>
            </div>
          </div>

          {/* Tombol Booking WA */}
          <a
            href={`${WA_BASE_URL}${encodeURIComponent(dest.whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block text-center py-2 text-sm font-semibold rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition duration-200 shadow-md"
          >
            {t("transfer.button")}
          </a>
        </div>
      </div>
    </div>
  ))}
</div>



        </section>
    );
}

export default TransferPackagesSection;