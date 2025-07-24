import React from 'react';
import { TrendingDown, TrendingUp, Target, Users } from 'lucide-react';

interface SlideProps {
  direction?: 'next' | 'prev';
}

const Slide6: React.FC<SlideProps> = ({ direction = 'next' }) => {
  const stats = [
    {
      icon: TrendingDown,
      number: "72%",
      description: "Randevuya gelmeme oranı azalması + %38 personel iş yükü düşüşü",
      source: "Northeast Medical Group - $1.2M tasarruf",
      gradient: "from-rose-500 to-red-600",
      delay: "0.2s"
    },
    {
      icon: TrendingUp,
      number: "153%",
      description: "Müşteri memnuniyeti artışı + %166 agent memnuniyeti artışı",
      source: "Central Pacific Bank - Amazon Connect",
      gradient: "from-emerald-500 to-green-600",
      delay: "0.4s"
    },
    {
      icon: Target,
      number: "78%",
      description: "USAA poliçe hizmetlerinde insan müdahalesi olmadan işlem",
      source: "Günde 30.000+ etkileşim - Rekor NPS",
      gradient: "from-sky-500 to-blue-600",
      delay: "0.6s"
    },
    {
      icon: Users,
      number: "40%",
      description: "Liberty Mutual hasar bildirimi süre azalması + %25 memnuniyet artışı",
      source: "Başvuruların %60'ı otomatik tamamlanıyor",
      gradient: "from-purple-500 to-indigo-600",
      delay: "0.8s"
    }
  ];

  return (
    <div className={`slide-enter-${direction} h-full flex items-center justify-center px-4 py-4 sm:py-6`}>
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-8 md:space-y-16">
        {/* Title */}
        <div className="text-center space-y-2 sm:space-y-4 md:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-white animate-fade-in">
            Rakamlarla{' '}
            <span className="text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text">
              Gerçekler
            </span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white/70 animate-fade-in-delay-1">
            Gerçek şirketlerden kanıtlanmış sonuçlar
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-500 text-center animate-fade-in-stagger touch-manipulation"
                style={{ animationDelay: stat.delay }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-3 sm:mb-4 md:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto bg-gradient-to-br ${stat.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white" />
                  </div>
                  
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-40 blur-xl scale-150 transition-opacity duration-500`} />
                </div>

                {/* Number */}
                <div className="relative mb-3 sm:mb-4 md:mb-6">
                  <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-gradient-to-br ${stat.gradient} bg-clip-text group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  
                  {/* Number Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-sky-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 left-0 w-1 h-1 bg-emerald-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3 md:mb-4 group-hover:text-white transition-colors duration-300">
                  {stat.description}
                </p>

                {/* Source */}
                <p className="text-white/50 text-xs md:text-sm group-hover:text-white/70 transition-colors duration-300">
                  {stat.source}
                </p>

                {/* Progress Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-b-3xl overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`} />
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-r-2 border-white/20 group-hover:border-white/60 transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-l-2 border-white/20 group-hover:border-white/60 transition-colors duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom Insight */}
        <div className="text-center animate-fade-in-delay-3">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-xl rounded-full px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 border border-white/20">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse flex-shrink-0" />
            <span className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg text-center">
              Bu sonuçlar HeyPilot AI'nin neden kritik önemde olduğunu gösteriyor
            </span>
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

export default Slide6;