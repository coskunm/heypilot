import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';
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
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');

  const nextSlide = useCallback(() => {
    setSlideDirection('next');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setSlideDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setSlideDirection(index > currentSlide ? 'next' : 'prev');
    setCurrentSlide(index);
  };

  const resetPresentation = () => {
    setCurrentSlide(0);
    setIsAutoPlay(false);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
      } else if (event.key === 'Escape') {
        setIsAutoPlay(false);
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
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        nextSlide();
      }, 8000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlay, nextSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-emerald-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-full blur-2xl animate-float" />
      </div>

      {/* Slide Container */}
      <div className="relative z-10 h-screen flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-7xl mx-auto">
          <CurrentSlideComponent direction={slideDirection} />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-2xl">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentSlide 
                    ? 'bg-white scale-110' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Auto Play Button */}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`p-2 rounded-full transition-all duration-200 hover:scale-105 ${
              isAutoPlay ? 'bg-emerald-500/80 hover:bg-emerald-500' : 'bg-white/20 hover:bg-white/30'
            }`}
          >
            {isAutoPlay ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
          </button>

          {/* Reset Button */}
          <button
            onClick={resetPresentation}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 hover:scale-105"
          >
            <RotateCcw className="w-5 h-5 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="h-1 bg-gradient-to-r from-sky-500 to-emerald-500 transition-all duration-500" 
             style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
      </div>

      {/* Slide Counter */}
      <div className="fixed top-6 right-6 z-50">
        <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 shadow-lg">
          <span className="text-white text-sm font-medium">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Slide Title */}
      <div className="fixed top-6 left-6 z-50">
        <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 shadow-lg">
          <span className="text-white text-sm font-medium">
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