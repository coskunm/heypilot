import React from 'react';
import { ArrowRight, Heart, ShoppingCart, TrendingUp } from 'lucide-react';

interface SlideProps {
  direction?: 'next' | 'prev';
}

const Slide5: React.FC<SlideProps> = ({ direction = 'next' }) => {
  const sectors = [
    {
      icon: Heart,
      title: "Sağlık Sektörü",
      description: "Randevu yönetimi ve hasta iletişimi devrimi",
      gradient: "from-rose-500 to-pink-600",
      delay: "0.2s"
    },
    {
      icon: ShoppingCart,
      title: "E-ticaret Sektörü",
      description: "Sepet kurtarma ve müşteri geri kazanım sistemi",
      gradient: "from-emerald-500 to-green-600",
      delay: "0.4s"
    },
    {
      icon: TrendingUp,
      title: "Finans Sektörü",
      description: "Akıllı lead filtreleme ve nitelikli müşteri bulma",
      gradient: "from-blue-500 to-indigo-600",
      delay: "0.6s"
    }
  ];

  return (
    <div className={`slide-enter-${direction} h-full flex items-center justify-center`}>
      <div className="max-w-5xl mx-auto text-center space-y-16">
        {/* Title */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-white animate-fade-in">
            Sektör{' '}
            <span className="text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text">
              Başarı Hikayeleri
            </span>
          </h1>
          <p className="text-xl text-white/70 animate-fade-in-delay-1">
            Gerçek işletmelerden gerçek sonuçlar
          </p>
        </div>

        {/* Sector Preview Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-500 cursor-pointer animate-fade-in-stagger"
                style={{ animationDelay: sector.delay }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${sector.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                  {sector.title}
                </h3>
                <p className="text-white/80 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                  {sector.description}
                </p>

                {/* Arrow Indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${sector.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm scale-105`} />
              </div>
            );
          })}
        </div>

        {/* Bottom Navigation Hint */}
        <div className="flex justify-center animate-fade-in-delay-3">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20">
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm">
              Her sektörün detaylarına ilerleyin
            </span>
            <ArrowRight className="w-4 h-4 text-white/60" />
          </div>
        </div>
      </div>

      <style jsx>{`
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
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 1.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-stagger {
          animation: fade-in 1s ease-out forwards;
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

export default Slide5;