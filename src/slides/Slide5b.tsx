import React, { useState, useRef } from 'react';
import { ShoppingCart, XCircle, CheckCircle, TrendingDown, TrendingUp, Play, Pause, Volume2 } from 'lucide-react';

interface SlideProps {
  direction?: 'next' | 'prev';
}

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      const newTime = percentage * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-emerald-500/30">
      <div className="flex items-center gap-3 mb-2 sm:mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
          <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm sm:text-base">HeyPilot AI - Sepet Hatırlatması</p>
          <p className="text-emerald-300 text-xs sm:text-sm">Gerçek konuşma örneği</p>
        </div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 mb-2 sm:mb-4">
        <p className="text-white/90 text-sm sm:text-base italic font-medium text-center mb-4">
          "Sepetinizde bıraktığınız ürünler için özel indirim hazırladık."
        </p>
        
        {/* Audio Waveform Visual */}
        <div className="flex items-center justify-center gap-1 mb-4 h-[28px]">
          {[14, 18, 12, 24, 16, 20, 10, 22, 14, 18, 12, 26].map((height, i) => (
            <div
              key={i}
              className={`w-1 bg-gradient-to-t from-emerald-500 to-green-400 rounded-full transition-all duration-300 ${
                isPlaying ? 'animate-pulse' : ''
              }`}
              style={{
                height: `${height}px`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>

        {/* Audio Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-lg touch-manipulation"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white ml-0.5" />
            )}
          </button>

          <div className="flex-1">
            {/* Progress Bar */}
            <div 
              className="w-full h-2 bg-white/20 rounded-full cursor-pointer overflow-hidden"
              onClick={handleSeek}
            >
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-100"
                style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>
            
            {/* Time Display */}
            <div className="flex justify-between mt-2 text-xs text-white/60">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-2 sm:mt-4 text-center">
          <p className="text-emerald-300 text-xs font-medium">
            👆 Örnek konuşmayı dinlemek için oynatın
          </p>
        </div>
      </div>

      <audio
        ref={audioRef}
        src="/voices/Alışveriş Sitesi.wav"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />
    </div>
  );
};

const Slide5b: React.FC<SlideProps> = ({ direction = 'next' }) => {
  return (
    <div className={`slide-enter-${direction} h-full flex items-center justify-center py-2 sm:py-4`}>
      <div className="max-w-6xl mx-auto space-y-2 sm:space-y-4 px-4 py-2 sm:py-4">
        {/* Header */}
        <div className="text-center space-y-1 sm:space-y-2">
          <div className="flex items-center justify-center gap-3 animate-fade-in">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-black text-white">
              E-ticaret Sektörü{' '}
              <span className="text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text">
                Başarı Hikayesi
              </span>
            </h1>
          </div>
          <h2 className="text-base sm:text-lg md:text-xl text-emerald-300 font-semibold animate-fade-in-delay-1">
            Sepet Kurtarma Sistemi
          </h2>
        </div>

        {/* Before/After Comparison */}
        <div className="grid lg:grid-cols-2 gap-4 animate-fade-in-delay-2">
          {/* Before */}
          <div className="bg-red-500/10 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-red-500/20 hover:border-red-500/40 transition-all duration-500">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
              <XCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-400" />
              <h3 className="text-lg sm:text-xl font-bold text-red-300">Öncesi</h3>
            </div>
            
            <div className="bg-red-500/20 backdrop-blur-sm rounded-xl p-2 sm:p-3 mb-2 sm:mb-3 border border-red-500/30">
              <p className="text-white/90 text-sm leading-relaxed italic">
                "Sepette unutulan ürünler nedeniyle ciddi bir ciro kaybı yaşıyorduk."
              </p>
            </div>

            {/* Problem Stats */}
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-xs sm:text-sm">Yüksek Sepet Terk Oranı</p>
                  <p className="text-red-300 text-xs">Müşteri kaybı problemi</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-xs sm:text-sm">Ciro Kaybı</p>
                  <p className="text-red-300 text-xs">Potansiyel satışlar kaçıyor</p>
                </div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="bg-emerald-500/10 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
              <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-emerald-400" />
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg sm:text-xl font-bold text-emerald-300">Sonrası (AI ile)</h3>
                <div className="px-2 py-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full text-white text-xs font-bold whitespace-nowrap">
                  %30 gelişme
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-2 sm:p-3 mb-2 sm:mb-3 border border-emerald-500/30">
              <p className="text-white/90 text-sm leading-relaxed italic">
                "AI, sepetini terk eden müşterileri 2 saat içinde arayarak özel bir indirim sunuyor. Bu yöntemle sepet terk etme oranını %30 azalttık."
              </p>
            </div>

            {/* Success Stats */}
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-xs sm:text-sm">2 Saat İçinde Arama</p>
                  <p className="text-emerald-300 text-xs">Anında müdahale</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-xs sm:text-sm">Özel İndirim Teklifi</p>
                  <p className="text-emerald-300 text-xs">Kişiselleştirilmiş yaklaşım</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Call Example with Audio Player */}
        <div className="animate-fade-in-delay-3">
          <AudioPlayer />
        </div>

      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-delay-1 {
          animation: fade-in 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.9s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-4 {
          animation: fade-in 1s ease-out 1.2s forwards;
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

export default Slide5b;