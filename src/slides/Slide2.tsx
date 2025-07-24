import React from 'react';
import { Puzzle, Brain, ArrowRight, PhoneOff, Mic, Volume2 } from 'lucide-react';

interface SlideProps {
  direction?: 'next' | 'prev';
}

const Slide2: React.FC<SlideProps> = ({ direction = 'next' }) => {
  const steps = [
    {
      number: "1",
      icon: Puzzle,
      title: "Zahmetsiz Entegrasyon",
      description: "Mevcut telefon ve CRM sistemlerinize sorunsuzca ve hızla entegre olur.",
      gradient: "from-sky-500 to-blue-600",
      delay: "0.2s"
    },
    {
      number: "2", 
      icon: Brain,
      title: "Sezgisel Diyalog",
      description: "Gelen çağrıları 7/24 karşılar, niyetini anlar ve akıcı bir dille yanıtlar.",
      gradient: "from-indigo-500 to-purple-600",
      delay: "0.4s"
    },
    {
      number: "3",
      icon: ArrowRight,
      title: "Akıllı Yönlendirme", 
      description: "Gerektiğinde, konuşmanın tüm bağlamıyla birlikte çağrıyı doğru uzmana yönlendirir.",
      gradient: "from-emerald-500 to-cyan-600",
      delay: "0.6s"
    }
  ];

  return (
    <div className={`slide-enter-${direction} h-full flex items-center justify-center py-4`}>
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white animate-fade-in">
              <span className="text-transparent bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text">
                Sezgisel Güç,
              </span>
              <br />
              <span className="text-white">Kusursuz Akış</span>
            </h1>
          </div>

          {/* Step Cards */}
          <div className="space-y-3 sm:space-y-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 cursor-pointer animate-slide-in-stagger touch-manipulation"
                  style={{ animationDelay: step.delay }}
                >
                  {/* Step Number */}
                  <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center shadow-lg font-bold text-white text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300`}>
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-all duration-300">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Border Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm scale-105`} />
                </div>
              );
            })}
          </div>

          {/* Phone Interface - Compact for Mobile */}
          <div className="relative animate-fade-in-delay-2">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-white/20 shadow-2xl max-w-sm mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">HeyPilot AI</h3>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-emerald-400 text-xs">Canlı</span>
                    </div>
                  </div>
                </div>
                <div className="text-white/60 text-xs">14:32</div>
              </div>

              {/* Sample Conversation */}
              <div className="bg-gradient-to-r from-sky-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl p-3 mb-3 border border-sky-500/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">M</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-xs">Mehmet A.</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white text-sm font-bold">2:34</p>
                  </div>
                </div>
                <p className="text-white/90 text-center italic text-xs px-2">
                  "Randevumu iptal etmek istiyorum..."
                </p>
              </div>

              {/* AI Response */}
              <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-xl p-3 border border-emerald-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xs">HeyPilot AI</p>
                  </div>
                </div>
                <p className="text-white/90 text-center italic text-xs px-2">
                  "Tabii ki! Hangi randevunuzu iptal etmek istiyorsunuz?"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Steps */}
          <div className="space-y-8">
            {/* Title */}
            <h1 className="text-6xl font-black text-white animate-fade-in">
              <span className="text-transparent bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text">
                Sezgisel Güç,
              </span>
              <br />
              <span className="text-white">Kusursuz Akış</span>
            </h1>

            {/* Step Cards */}
            <div className="space-y-4">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 cursor-pointer animate-slide-in-stagger"
                    style={{ animationDelay: step.delay }}
                  >
                    {/* Step Number */}
                    <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center shadow-lg font-bold text-white text-sm group-hover:scale-110 transition-transform duration-300`}>
                      {step.number}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-all duration-300">
                        {step.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>

                    {/* Animated Icon */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className={`w-8 h-8 bg-gradient-to-br ${step.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm scale-105`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Full Phone Interface */}
          <div className="relative animate-fade-in-delay-2">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">HeyPilot AI</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-emerald-400 text-xs">Canlı</span>
                    </div>
                  </div>
                </div>
                <div className="text-white/60 text-sm">14:32</div>
              </div>

              {/* Call Status Display */}
              <div className="bg-gradient-to-r from-sky-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-sky-500/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">M</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Mehmet A.</p>
                      <p className="text-sky-300 text-sm">+90 532 xxx xx34</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white text-lg font-bold">2:34</p>
                    <p className="text-sky-300 text-sm">Süre</p>
                  </div>
                </div>
                
                {/* Voice Waveform Animation */}
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <div 
                      key={i} 
                      className="w-1 bg-sky-400 rounded-full animate-pulse" 
                      style={{ 
                        height: `${Math.random() * 20 + 10}px`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '1s'
                      }} 
                    />
                  ))}
                </div>
                
                <p className="text-white/90 text-center italic">
                  "Randevumu iptal etmek istiyorum..."
                </p>
              </div>

              {/* AI Response Panel */}
              <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-emerald-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">HeyPilot AI</p>
                    <p className="text-emerald-300 text-sm">Yanıtlıyor...</p>
                  </div>
                </div>
                
                {/* AI Voice Waveform */}
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <div 
                      key={i} 
                      className="w-1 bg-emerald-400 rounded-full animate-pulse" 
                      style={{ 
                        height: `${Math.random() * 25 + 15}px`,
                        animationDelay: `${i * 0.15}s`,
                        animationDuration: '1.2s'
                      }} 
                    />
                  ))}
                </div>
                
                <p className="text-white/90 text-center italic">
                  "Tabii ki! Hangi randevunuzu iptal etmek istiyorsunuz? Sistemde 15 Ocak tarihli randevunuz görünüyor."
                </p>
              </div>

              {/* Call Controls */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <button className="w-12 h-12 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 touch-manipulation">
                  <PhoneOff className="w-5 h-5 text-white" />
                </button>
                <button className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 touch-manipulation">
                  <Mic className="w-5 h-5 text-white" />
                </button>
                <button className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 touch-manipulation">
                  <Volume2 className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Live Call Queue */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm mb-3">Bekleyen Çağrılar</h4>
                
                <div className="bg-purple-500/20 backdrop-blur-sm rounded-xl p-3 border border-purple-500/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">A</span>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Ayşe K.</p>
                        <p className="text-purple-300 text-xs">Sepet Hatırlatma</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                      <span className="text-purple-300 text-xs">Bekliyor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl scale-110" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-stagger {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-message {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.8s forwards;
          opacity: 0;
        }
        .animate-slide-in-stagger {
          animation: slide-in-stagger 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-message {
          animation: fade-in-message 0.6s ease-out forwards;
          opacity: 0;
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

export default Slide2;