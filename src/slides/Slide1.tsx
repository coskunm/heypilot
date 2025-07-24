import React from 'react';
import { Zap, Sparkles } from 'lucide-react';

interface SlideProps {
  direction?: 'next' | 'prev';
}

const Slide1: React.FC<SlideProps> = ({ direction = 'next' }) => {
  return (
    <div className={`slide-enter-${direction} h-full flex flex-col items-center justify-center text-center space-y-8`}>
      {/* Animated Background Mesh Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-indigo-600/30 via-purple-600/20 to-cyan-500/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-cyan-500/30 via-blue-600/20 to-purple-600/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 rounded-full blur-2xl animate-float-slow" />
      </div>

      {/* Logo with Pulsating Glow */}
      <div className="relative mb-6 sm:mb-8 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-indigo-500 to-cyan-400 rounded-full blur-3xl opacity-40 animate-pulse-glow" />
        <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-full p-4 sm:p-6 md:p-8 border border-white/30 shadow-2xl animate-scale-in">
          <div className="relative">
            <Zap className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white animate-pulse-heartbeat" />
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-300 absolute -top-2 -right-2 sm:-top-3 sm:-right-3 animate-sparkle" />
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-indigo-300 absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 animate-sparkle" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Main Title with Word-by-Word Animation */}
      <div className="space-y-4 sm:space-y-6 z-10 px-4">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-light text-white/90 animate-fade-in-words">
          Müşteri İletişiminde{' '}
          <span className="sm:hidden"><br /></span>
          <span className="font-bold text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-cyan-400 bg-clip-text animate-fade-in-words-delay-1 text-3xl sm:text-4xl md:text-6xl">
            Yeni Bir Ufuk
          </span>
        </h1>
        
        {/* Brand Name - Large and Prominent */}
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-sky-100 to-cyan-100 bg-clip-text text-transparent animate-fade-in-delay-2">
          HeyPilot AI
        </h2>
      </div>

      {/* Core Qualities */}
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-lg sm:text-2xl md:text-3xl font-semibold text-white/80 animate-fade-in-delay-3 px-4">
        <span className="animate-fade-in-stagger">Anında</span>
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sky-400 rounded-full animate-pulse" />
        <span className="animate-fade-in-stagger" style={{ animationDelay: '0.3s' }}>Zeki</span>
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-400 rounded-full animate-pulse" />
        <span className="animate-fade-in-stagger" style={{ animationDelay: '0.6s' }}>Kesintisiz</span>
      </div>

      {/* Glassmorphism Description Panel */}
      <div className="relative max-w-3xl mx-auto animate-fade-in-delay-4 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-cyan-500/10 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
        <div className="relative p-4 sm:p-6 md:p-8">
          <p className="text-base sm:text-xl md:text-2xl text-white/90 leading-relaxed">
            HeyPilot AI, müşteri ilişkilerinizin{' '}
            <span className="text-transparent bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text font-semibold">
              co-pilotudur
            </span>
            . Yapay zekanın gücüyle müşteri diyaloglarınızı yönetir, ekibinizi özgürleştirir ve markanıza{' '}
            <span className="text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text font-semibold">
              7/24 ulaşılabilirlik
            </span>
            {' '}kazandırır.
          </p>
        </div>
        
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-500/0 via-sky-500/30 to-cyan-500/0 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm scale-105 -z-10" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-sky-400/60 rounded-full animate-float-particle" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-indigo-400/60 rounded-full animate-float-particle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-cyan-400/40 rounded-full animate-float-particle" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-400/60 rounded-full animate-float-particle" style={{ animationDelay: '6s' }} />
      </div>

      <style jsx>{`
        @keyframes fade-in-words {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-words-delay-1 {
          0%, 30% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse-heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 1; }
          50% { transform: translateY(-40px) translateX(-5px); opacity: 0.8; }
          75% { transform: translateY(-20px) translateX(-10px); opacity: 1; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.4; transform: scale(1) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        }
        .animate-fade-in-words {
          animation: fade-in-words 1s ease-out forwards;
        }
        .animate-fade-in-words-delay-1 {
          animation: fade-in-words-delay-1 1.5s ease-out forwards;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in-words 1s ease-out 0.8s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in-words 1s ease-out 1.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-4 {
          animation: fade-in-words 1s ease-out 1.6s forwards;
          opacity: 0;
        }
        .animate-fade-in-stagger {
          animation: fade-in-words 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-scale-in {
          animation: scale-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-pulse-heartbeat {
          animation: pulse-heartbeat 2s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-particle {
          animation: float-particle 6s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        .slide-enter-next {
          animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .slide-enter-prev {
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Slide1;