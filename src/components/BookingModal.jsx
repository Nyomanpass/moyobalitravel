import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

const BookingModal = ({ isOpen, onClose, prices }) => {
    // Hooks selalu di bagian atas
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        destination: '',
        bookingDate: '',
        hotelName: '',
        message: ''
    });

    const WA_BASE_URL = "https://wa.me/6281246728044?text=";

    // Kondisi render setelah hooks
    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Template pesan WA menggunakan terjemahan untuk judul
        const waMessage = `
*${t('modal_title')}*
----------------------------
*${t('label_name')}:* ${formData.name}
*${t('label_email')}:* ${formData.email}
*${t('label_phone')}:* ${formData.phone}
*${t('label_destination')}:* ${formData.destination}
*${t('label_booking_date')}:* ${formData.bookingDate}
*${t('label_hotel')}:* ${formData.hotelName || "-"}
*${t('label_message')}:* ${formData.message || "-"}
----------------------------
${t('wa_thankyou_message')}
        `;

        const encodedText = encodeURIComponent(waMessage);
        window.open(WA_BASE_URL + encodedText, "_blank");
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                
                {/* Header */}
                <div className="sticky top-0 bg-teal-600 text-white p-5 rounded-t-xl flex justify-between items-center">
                    <h3 className="text-2xl font-bold">{t('modal_title')}</h3> 
                    <button onClick={onClose} className="text-white hover:text-gray-200 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">

                    {/* Nama */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('label_name')}</label>
                        <input 
                            type="text" name="name" id="name" value={formData.name} onChange={handleChange} required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('label_email')}</label>
                        <input
                            type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>

                    {/* WhatsApp */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t('label_phone')}</label>
                        <input
                            type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>

                    {/* Destinasi */}
                    <div>
                        <label htmlFor="destination" className="block text-sm font-medium text-gray-700">{t('label_destination')}</label>
                        <select
                            name="destination" id="destination" value={formData.destination} onChange={handleChange} required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        >
                            <option value="">{t('placeholder_select_destination')}</option>
                            {prices.map((item, index) => (
                                <option key={index} value={item.destination}>
                                    {item.destination} ({item.price})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Tanggal Booking */}
                    <div>
                        <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-700">{t('label_booking_date')}</label>
                        <input
                            type="date" name="bookingDate" id="bookingDate" value={formData.bookingDate} onChange={handleChange} required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>

                    {/* Hotel */}
                    <div>
                        <label htmlFor="hotelName" className="block text-sm font-medium text-gray-700">{t('label_hotel')}</label>
                        <input
                            type="text" name="hotelName" id="hotelName" value={formData.hotelName} onChange={handleChange}
                            placeholder={t('placeholder_hotel_name')} // Menggunakan placeholder
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>

                    {/* Pesan */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('label_message')}</label>
                        <textarea
                            name="message" id="message" rows="3" value={formData.message} onChange={handleChange}
                            placeholder={t('placeholder_flight_details')} // Menggunakan placeholder
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 px-4 rounded-md text-lg font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-lg transition"
                    >
                       {t("message_send_label")} 
                    </button>

                </form>
            </div>
        </div>
    );
};

export default BookingModal;