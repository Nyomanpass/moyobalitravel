import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false); 
  const { t, i18n } = useTranslation();

  const navItems = [
    { key: "navbar.home", path: "/" },
    { key: "navbar.airport_transfer", path: "/airport-transfer" },
    { key: "navbar.about", path: "/about" },
    { key: "navbar.tour_packages", path: "/tour-package" },
    { key: "navbar.contact", path: "/contact" },
  ];


  const isHomePage = location.pathname === "/";

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
    // Tambahan: Jika ini adalah mobile, tutup juga menu utama
    if (isOpen) setIsOpen(false); 
  };

  // Mengubah kelas sesuai dengan state scroll
  const navClass = isScrolled
    ? "bg-white text-primary shadow-lg"
    : "text-secondary";
    
  // Tentukan warna teks dan hover berdasarkan state scroll
  const textColor = isScrolled
  ? "text-primary"
  : isHomePage
  ? "text-white"
  : "text-primary";

  const hoverBg = isScrolled ? "bg-secondary" : "bg-primary";

    const contactButtonClass = 
     // KONDISI TRUE (Sudah discroll): Border Gray/Secondary, Text Secondary, Hover BG Primary (Yellow)
      "px-4 py-2 border bg-primary border-primary text-white rounded-lg hover:bg-yellow-500 hover:text-white transition duration-300 font-semibold text-sm"
   
  

  return (
    <>
      <nav
        className={`w-full z-50 fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-11 lg:px-14 xl:px-14 py-4 lg:py-2 ${navClass} transition-colors duration-300`}
      >
        {/* 1. Logo (Kiri) */}
        <a to="/">
          <img
            src={isScrolled ? "/logo.png" : "/logo2.png"} // berubah saat scroll
            alt="Logo"
            className="h-14 -ml-3 md:h-16 transition-all duration-300"
          />
        </a>

        {/* 2. Link Navigasi (Tengah - Hanya Desktop) */}
        <div className="hidden md:flex gap-8 font-medium md:text-md items-center">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className={`group relative w-max transition-colors duration-300 ${textColor}`}
            >
              <span>{t(item.key)}</span>
              <span
                className={`absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 group-hover:w-3/6 ${hoverBg}`}
              ></span>
              <span
                className={`absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 group-hover:w-3/6 ${hoverBg}`}
              ></span>
            </a>
          ))}
        </div>

        {/* 3. Tombol Aksi & Language Dropdown (Kanan - Hanya Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
            
       
            
            {/* Language Dropdown Container - Wajib relative */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                // Sesuaikan styling primary/secondary agar dinamis dengan scroll
                className={`flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white text-primary shadow-sm hover:shadow-lg transition-all duration-300 font-medium text-sm`}
              >
                {i18n.language === "en" ? "🇺🇸 English" : "🇮🇩 Indonesia"}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              

              {langOpen && (
                // Dropdown harus diposisikan relatif terhadap container .relative di atas
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                  <button
                    onClick={() => changeLang("en")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-secondary text-sm"
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLang("id")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-secondary text-sm"
                  >
                    Indonesia
                  </button>
                </div>
              )}
            </div>
            {/* Tombol Contact Us/Book Now */}
            <Link 
            to="/contact-us" 
            className={contactButtonClass}
            >
            {t("Contact Us")}
            </Link>
        </div>

        {/* Mobile Menu Button (Hanya Mobile) */}
        <button
          className="text-2xl md:hidden transition-colors duration-300"
          onClick={handleToggle}
        >
          <FiMenu
            size={32}
            className={textColor}
          />
        </button>
      </nav>

      {/* --- Mobile Navigation --- */}
{isOpen && (
  <>
    {/* Overlay Transparan */}
    <div
      className="fixed inset-0 bg-black/50 z-40  transition-opacity duration-500 ease-in-out"
      onClick={handleToggle}
    ></div>

    {/* Panel Menu */}
    <div
      className={`fixed top-0 right-0 w-full h-auto bg-stone-200 text-gray-900 px-6 pt-6 z-50 transform transition-all duration-500 ease-in-out ${
        isOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"
      }`}
    >
      {/* Header Menu */}
      <div className="flex justify-between items-center mb-8">
         <a to="/">
          <img
            src={isScrolled ? "/logo.png" : "/logo2.png"} // berubah saat scroll (mobile)
            alt="Logo"
            className="h-14 -ml-3 md:h-16 transition-all duration-300"
          />
        </a>
        <button
          className="text-3xl hover:scale-110 transition-transform duration-300"
          onClick={handleToggle}
        >
          <X className="text-gray-900" size={28} />
        </button>
      </div>

      {/* Navigasi */}
      <div className="flex flex-col gap-6 text-lg font-semibold border-b border-gray-300 pb-6">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            onClick={handleToggle}
            className="cursor-pointer hover:text-yellow-600 transition-colors duration-300"
          >
            {t(item.key)}
          </a>
        ))}
      </div>

      {/* Tombol Contact Us */}
      <div className="mt-8">
        <Link
          to="/contact-us"
          onClick={handleToggle}
          className="w-full block text-center px-4 py-3 bg-yellow-500 text-gray-900 rounded-lg font-bold text-base hover:bg-yellow-400 transition duration-300"
        >
          {t("Contact Us")}
        </Link>
      </div>

      {/* Dropdown Bahasa */}
      <div className="mt-8 relative pb-10">
        <button
          onClick={() => setLangOpen(!langOpen)}
          className="flex items-center gap-2 px-4 py-3 rounded-full border border-gray-400 bg-white text-gray-800 shadow-sm hover:shadow-md transition-all duration-300 font-medium w-full justify-between"
        >
          <span>
            {i18n.language === "en" ? "🇺🇸 English" : "🇮🇩 Indonesia"}
          </span>
          <svg
            className={`w-4 h-4 transform transition-transform duration-300 ${
              langOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {langOpen && (
          <div className="absolute right-0 mt-1 w-full bg-white border rounded-lg shadow-lg z-50 overflow-hidden">
            <button
              onClick={() => changeLang("en")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900"
            >
              English
            </button>
            <button
              onClick={() => changeLang("id")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900"
            >
              Indonesia
            </button>
          </div>
        )}
      </div>
    </div>
  </>
)}


    </>
  );
}

export default Navbar;