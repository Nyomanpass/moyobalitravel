import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

// --- 1. DATA SLIDES ---

const transitionDuration = 500; // Durasi transisi (milidetik)

function Header() {

  const { t } = useTranslation();

const heroSlides = [
    {
      id: 1,
      image: "/ulundanu.webp",
      title: t("hero.ulundanu.title"),
      subtitle: t("hero.ulundanu.subtitle"),
    },
    {
      id: 2,
      image: "/tegalalang.webp",
      title: t("hero.tegalalang.title"),
      subtitle: t("hero.tegalalang.subtitle"),
    },
    {
      id: 3,
      image: "/kecak.webp",
      title: t("hero.kecak.title"),
      subtitle: t("hero.kecak.subtitle"),
    },
    {
      id: 4,
      image: "/lovinaheader.webp",
      title: t("hero.lovina.title"),
      subtitle: t("hero.lovina.subtitle"),
    },
    {
      id: 5,
      image: "/lempuyang.webp",
      title: t("hero.lempuyang.title"),
      subtitle: t("hero.lempuyang.subtitle"),
    },
    {
      id: 6,
      image: "/special.webp",
      title: t("hero.kelingking.title"),
      subtitle: t("hero.kelingking.subtitle"),
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideData, setSlideData] = useState(heroSlides[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardTranslate, setCardTranslate] = useState(0); 


  // Fungsi untuk menangani pergantian slide dan transisi
  const goToSlide = (index) => {
    if (isTransitioning) return; 
    setIsTransitioning(true); // Kunci perpindahan
    setCardTranslate(-30);

    // Tunggu durasi fade-out/transisi
    setTimeout(() => {
      setCurrentIndex(index);
      setSlideData(heroSlides[index]);
      setCardTranslate(0);
      setIsTransitioning(false); 
    }, transitionDuration);
  };
  
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % heroSlides.length;
    goToSlide(newIndex);
  };

  // 🚀 LOOPING OTOMATIS (5 DETIK)
  useEffect(() => {
    const autoSlideTime = 7000;
    const timer = setTimeout(() => {
      nextSlide();
    }, autoSlideTime); 
    return () => clearTimeout(timer);
  }, [currentIndex]); 
  
  // Class transisi untuk fade-in/out
  // ⭐ PERUBAHAN: Sinkronkan durasi di sini (500ms) dengan transitionDuration
  const transitionClass = isTransitioning 
    ? `opacity-0 transition-opacity duration-[500ms] ease-out` 
    : `opacity-100 transition-opacity duration-[500ms] ease-in`;

  // --- LOGIKA PREVIEW CARDS DINAMIS (3 KARTU) ---
  const previewCardsData = [];
  for (let i = 1; i <= 3; i++) { 
    const index = (currentIndex + i) % heroSlides.length;
    previewCardsData.push(heroSlides[index]);
  }

  return (
    <header className="relative w-full h-screen overflow-hidden">
      
      {/* 🖼️ Gambar Latar Belakang (dengan Transisi Fade) */}
      <div 
        key={slideData.id}
        style={{ 
          backgroundImage: `url(${slideData.image})`,
          transitionDuration: `${transitionDuration}ms`
        }}
        // ⭐ PERUBAHAN: Hapus `transform scale-105`
        className={`absolute inset-0 bg-cover bg-center ${transitionClass}`} 
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Konten Hero (Teks, Tombol) - Dibungkus di dalam kontainer max-w-7xl */}
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-11 lg:px-14 xl:px-16">
        <div className="w-full flex flex-col items-start justify-between relative z-10">
          
          {/* Teks dan Tombol (Kiri) */}
          <div
            className={`text-white max-w-4xl mb-10 lg:mb-0 ${transitionClass} text-center lg:text-left`}
          >
            <h1 className="text-4xl lg:text-7xl font-bold mb-4 leading-tight">
              {slideData.title}
            </h1>
            <p className="text-sm md:text-lg mb-6 max-w-lg mx-auto lg:mx-0">
              {slideData.subtitle}
            </p>
            <Link to="/tours" className="inline-block">
              <button className="bg-secondary text-white font-bold px-8 py-3 rounded-lg shadow-xl hover:bg-yellow-400 transition duration-300">
               {t("hero.button")}
              </button>
            </Link>
          </div>

          
        </div>
      </div>
      
      {/* 🖼️ PREVIEW CARDS DINAMIS - DIUBAH AGAR 3 KARTU MUNCUL PENUH */}
      <div 
        className="absolute hidden lg:flex items-center justify-end top-50 left-60 mt-10 w-full pr-4 lg:pr-20 z-10"
        style={{ height: 'calc(100vh - 100px)' }}
      >
        <div
            className="flex space-x-4" 
            style={{ 
                paddingBottom: '5rem',
                width: '800px', 
                marginLeft: 'auto', 
                transform: `translateX(${cardTranslate}px)`,
                transition: 'transform 700ms ease-in-out',
            }}
        >
          {previewCardsData.map((card, index) => (
              <div 
                  key={card.id}
                  onClick={() => goToSlide(heroSlides.findIndex(s => s.id === card.id))} 
                  className={`
                      flex-shrink-0 w-64 h-80 bg-cover bg-center rounded-xl shadow-2xl relative overflow-hidden cursor-pointer 
                      transition-all duration-700 ease-in-out transform hover:scale-[1.02] 
                      ${index === 0 ? 'z-20 opacity-100' : index === 1 ? 'z-15 opacity-100' : 'z-10 opacity-100'}
                  `} 
                  style={{ 
                      backgroundImage: `url(${card.image})`,
                      transitionDelay: `${index * 100}ms`
                  }}
              >
                  <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                      <p className="text-white font-semibold text-sm">{card.title.split(':')[0]}</p>
                  </div>
              </div>
          ))}
        </div>
      </div>


      {/* Indikator Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? 'bg-yellow-400' : 'bg-white/50 hover:bg-white'
            }`}
          ></button>
        ))}
      </div>
    </header>
  );
}

export default Header;