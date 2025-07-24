import React from 'react';
import { UserPlus, Calendar, MessageCircle, Settings } from 'lucide-react';

interface SlideProps {
  direction?: 'next' | 'prev';
}

const Slide4: React.FC<SlideProps> = ({ direction = 'next' }) => {
  const capabilities = [
    {
      icon: UserPlus,
      title: "Anında Lead Arama",
      description: "Form dolduran müşteriyi saniyeler içinde arar.",
      color: "from-sky-500 to-blue-600"
    },
    {
      icon: Calendar,
      title: "Otomatik Hatırlatmalar",
      description: "Randevu, takip ve ödemeleri asla atlamaz.",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: MessageCircle,
      title: "Proaktif İletişim",
      description: "Geri bildirim, destek ve tahsilat aramaları yapar.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Settings,
      title: "Tam Entegrasyon",
      description: "CRM ve ERP sistemlerinizle kusursuz çalışır.",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className={`slide-enter-${direction} h-full flex items-center justify-center`}>
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-16 px-4">
        {/* Title */}
        <div className="text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white animate-fade-in">
            Operasyonel{' '}
            <span className="text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text">
              Gücünüz
            </span>
          </h1>
          <p className="text-base sm:text-xl text-white/70 animate-fade-in-delay-1 px-4">
            Müşteri deneyimini dönüştüren akıllı yetenekler
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <div
                key={index}
                className="group flex items-start gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 animate-fade-in-stagger"
                style={{ animationDelay: `${(index + 2) * 0.15}s` }}
              >
                {/* Icon Container */}
                <div className="relative flex-shrink-0">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${capability.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-lg scale-150 transition-opacity duration-500`} />
                  
                  {/* Floating Indicator - Hidden on small screens */}
                  <div className="hidden sm:flex absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 sm:space-y-3 flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {capability.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${capability.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="flex justify-center items-center space-x-6 sm:space-x-8 md:space-x-12 animate-fade-in-delay-3 px-4 mb-4 md:mb-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text">∞</div>
            <div className="text-xs sm:text-sm text-white/60">Eş Zamanlı Çağrı</div>
          </div>
          <div className="w-px h-8 sm:h-10 md:h-12 bg-white/20" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text">24/7</div>
            <div className="text-xs sm:text-sm text-white/60">Kesintisiz Hizmet</div>
          </div>
          <div className="w-px h-8 sm:h-10 md:h-12 bg-white/20" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text">%99</div>
            <div className="text-xs sm:text-sm text-white/60">Uptime Garantisi</div>
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

export default Slide4;