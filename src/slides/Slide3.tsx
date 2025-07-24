import React from 'react';
import { Clock, Heart, Zap } from 'lucide-react';

interface SlideProps {
  direction?: 'next' | 'prev';
}

const Slide3: React.FC<SlideProps> = ({ direction = 'next' }) => {
  const features = [
    {
      icon: Clock,
      title: "7/24 Aktif",
      description: "Müşterileriniz için mesai saati kavramını ortadan kaldırır.",
      gradient: "from-sky-500 to-blue-600",
      delay: "0.2s"
    },
    {
      icon: Heart,
      title: "%100 Sabır & Tutarlılık",
      description: "Her müşteriyle aynı kalitede ve sabırla iletişim kurar.",
      gradient: "from-emerald-500 to-green-600",
      delay: "0.4s"
    },
    {
      icon: Zap,
      title: "Doğrudan Çözüm",
      description: "Müşteriyi tanır, zaman kaybetmeden konuya odaklanır.",
      gradient: "from-purple-500 to-indigo-600",
      delay: "0.6s"
    }
  ];

  return (
    <div className={`slide-enter-${direction} h-full flex items-center justify-center`}>
      <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-16 px-4">
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white animate-fade-in">
          Kuralları{' '}
          <span className="text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text">
            Değiştiriyoruz
          </span>
        </h1>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer animate-fade-in-stagger"
                style={{ animationDelay: feature.delay }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  {/* Floating Particles - Hidden on small screens */}
                  <div className="hidden sm:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute bottom-0 right-1/2 w-1 h-1 bg-sky-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-500/0 via-sky-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-105" />
              </div>
            );
          })}
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 animate-fade-in-delay-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s`, animationDuration: '2s' }}
            />
          ))}
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
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.8s forwards;
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

export default Slide3;