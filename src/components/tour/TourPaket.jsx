import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
// 1. IMPORT KOMPONEN TRANSFER
import TransferPackagesSection from "../airport/TransferPackagesSection";
import i18n from "../../i18n";


function TourPackagesSection() {
    const { t } = useTranslation();
    
    // 1. Inisialisasi State Filter
    const [activeFilter, setActiveFilter] = useState('Bali Day Tour');

    // Data dari i18n
    const allTours = t("tours", { returnObjects: true }); 

    // Daftar Kategori Filter
    const categories = [
        { label: t('filter_day_tour_label'), value: 'Bali Day Tour' },
        { label: t('filter_activities_label'), value: 'Bali Activities' },
        { label: t('Nusa Penida Tour'), value: 'Nusa Penida Tour' },
        { label: t('navbar.airport_transfer'), value: 'Airport Transfer' },
    ];
    
    // 2. Logika Filtering (hanya untuk Day Tour/Activities)
    const filteredTours = useMemo(() => {
        if (!allTours) return [];
        
        // Logika filtering di sini TIDAK menyertakan 'Airport Transfer'
        return allTours.filter(tour => tour.category === activeFilter);
    }, [allTours, activeFilter]);


    // Fungsi untuk menentukan style tombol aktif
    const getButtonClass = (filterValue) => {
        const baseClass = 'px-5 py-2 mx-1 rounded-full font-semibold text-lg transition-colors duration-200 whitespace-nowrap';
        if (filterValue === activeFilter) {
            return baseClass + ' bg-teal-600 text-white shadow-lg';
        } else {
            return baseClass + ' bg-white text-gray-700 border border-gray-300 hover:bg-teal-50';
        }
    };

    const WA_BASE_URL = "https://wa.me/6281246728044?text=";

    const generateWAMessage = (tour) => {
        const lang = i18n.language;

        if (lang === "id") {
            // Bahasa Indonesia
            return encodeURIComponent(
                `Halo, saya ingin memesan paket:\n` +
                `• Judul Paket: ${tour.title}\n` +
                `• Kategori: ${tour.category}\n\n` +
                `Apakah tersedia untuk tanggal tertentu?`
            );
        } else {
            // Bahasa Inggris
            return encodeURIComponent(
                `Hello, I would like to book this package:\n` +
                `• Package Title: ${tour.title}\n` +
                `• Category: ${tour.category}\n\n` +
                `Is this available on my preferred date?`
            );
        }
    };



    return (
        <section className="pb-24 bg-gradient-to-b from-white via-secondary/10 to-white" id="tours">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">


                <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
                    <div className="max-w-xl">
                        <h2 className="text-2xl md:text-4xl font-extrabold text-teal-600">
                             {t("tourPackagesTitle")}
                        </h2>
                    </div>
                </div>

                {/* === START: Tombol Filter Kategori === */}
           <div className="flex justify-center mb-12">
    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 p-1">
        {categories.map((cat) => (
            <button
                key={cat.value}
                className={getButtonClass(cat.value)}
                onClick={() => setActiveFilter(cat.value)}
            >
                {cat.label}
            </button>
        ))}
    </div>
</div>

                {/* === END: Tombol Filter Kategori === */}

                {/* === START: Grid Konten Dinamis (Conditional Rendering) === */}

                {/* KONDISI: Jika filter adalah Airport Transfer */}
                {activeFilter === 'Airport Transfer' ? (
                    // 3. PANGGIL KOMPONEN TRANSFER
                    // Catatan: Karena TransferPackagesSection sudah memiliki div section di dalamnya,
                    // Anda mungkin perlu menyesuaikan strukturnya atau menghapus div terluar di komponen Transfer.
                    <TransferPackagesSection />

                ) : (
                    // KONDISI: Jika filter adalah Day Tour atau Activities (menggunakan filteredTours)
                    <div className="grid md:grid-cols-4 gap-3">
                        {filteredTours.length > 0 ? (
                            filteredTours.map((tour, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 flex flex-col"
                                >
                                    {/* Gambar */}
                                    <img
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
                                                    {tour.highlight.slice(0, 2).map((item, i) => (
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
                                        <div className="flex gap-3 mt-2 border-t border-gray-100">
                                            <a
                                                href={`${WA_BASE_URL}${generateWAMessage(tour)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700 transition-transform transform hover:scale-105 font-semibold text-sm"
                                            >
                                                {t("book_now")}
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
                            ))
                        ) : (
                            <p className="md:col-span-4 text-center text-lg text-gray-500 py-10">
                                {t('no_tours_found_message')}
                            </p>
                        )}
                    </div>
                )}
                {/* === END: Grid Konten Dinamis === */}
            </div>
        </section>
    );
}

export default TourPackagesSection;