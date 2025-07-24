import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide5a from './slides/Slide5a';
import Slide5b from './slides/Slide5b';
import Slide5c from './slides/Slide5c';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';

const slides = [
  { id: 1, component: Slide1, title: "Müşteri İletişiminde Yeni Bir Ufuk" },
  { id: 2, component: Slide2, title: "HeyPilot AI Nasıl Çalışır?" },
  { id: 3, component: Slide3, title: "Gelenekselden Farkı" },
  { id: 4, component: Slide4, title: "Neler Yapabilir?" },
  { id: 5, component: Slide5, title: "Örnek Senaryolar" },
  { id: "5a", component: Slide5a, title: "Sağlık Sektörü Başarısı" },
  { id: "5b", component: Slide5b, title: "E-ticaret Sektörü Başarısı" },
  { id: "5c", component: Slide5c, title: "Finans Sektörü Başarısı" },
  { id: 6, component: Slide6, title: "İstatistikler" },
  { id: 7, component: Slide7, title: "Maliyet Karşılaştırması" },
  { id: 8, component: Slide8, title: "Kapanış" }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setSlideDirection('next');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    // Scroll to top on mobile after slide change
    if (window.innerWidth < 768) {
      setTimeout(() => window.scrollTo(0, 0), 100);
    }
  }, []);

  const prevSlide = useCallback(() => {
    setSlideDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    // Scroll to top on mobile after slide change
    if (window.innerWidth < 768) {
      setTimeout(() => window.scrollTo(0, 0), 100);
    }
  }, []);

  const goToSlide = useCallback((index: number) => {
    setSlideDirection(index > currentSlide ? 'next' : 'prev');
    setCurrentSlide(index);
    // Scroll to top on mobile after slide change
    if (window.innerWidth < 768) {
      setTimeout(() => window.scrollTo(0, 0), 100);
    }
  }, [currentSlide]);

  const goToHome = () => {
    setSlideDirection('prev');
    setCurrentSlide(0);
    // Scroll to top on mobile after slide change
    if (window.innerWidth < 768) {
      setTimeout(() => window.scrollTo(0, 0), 100);
    }
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && currentSlide < slides.length - 1) {
      nextSlide();
    } else if (isRightSwipe && currentSlide > 0) {
      prevSlide();
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
      } else if (event.key === 'Home') {
        event.preventDefault();
        goToSlide(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        goToSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, goToSlide]);


  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-x-hidden overflow-y-auto md:overflow-hidden md:h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-emerald-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-full blur-2xl animate-float" />
      </div>

      {/* Slide Container */}
      <div 
        className="relative z-10 min-h-screen flex items-center justify-center p-4 pt-16 pb-24 sm:p-8 sm:pt-20 sm:pb-28 md:h-screen md:p-6 md:pt-16 md:pb-20"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="w-full max-w-7xl mx-auto">
          <CurrentSlideComponent direction={slideDirection} />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-4 sm:bottom-8 md:bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-1.5 sm:gap-3 bg-white/10 backdrop-blur-md rounded-full px-2.5 py-1.5 sm:px-4 sm:py-2 border border-white/20 shadow-2xl">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-1.5 sm:p-2 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 touch-manipulation"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-0.5 sm:gap-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 hover:scale-125 touch-manipulation ${
                  index === currentSlide 
                    ? 'bg-white scale-110' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Home Button */}
          <button
            onClick={goToHome}
            disabled={currentSlide === 0}
            className="p-1.5 sm:p-2 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 touch-manipulation"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-1.5 sm:p-2 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 touch-manipulation"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="h-1 bg-gradient-to-r from-sky-500 to-emerald-500 transition-all duration-500" 
             style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
      </div>

      {/* Slide Counter */}
      <div className="fixed top-3 sm:top-6 right-3 sm:right-6 z-50">
        <div className="bg-white/10 backdrop-blur-md rounded-full px-2 py-1 sm:px-4 sm:py-2 border border-white/20 shadow-lg">
          <span className="text-white text-xs sm:text-sm font-medium">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Slide Title */}
      <div className="fixed top-3 sm:top-6 left-3 sm:left-6 z-50">
        <div className="bg-white/10 backdrop-blur-md rounded-full px-2 py-1 sm:px-4 sm:py-2 border border-white/20 shadow-lg max-w-[200px] sm:max-w-none">
          <span className="text-white text-xs sm:text-sm font-medium truncate">
            {slides[currentSlide].title}
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;