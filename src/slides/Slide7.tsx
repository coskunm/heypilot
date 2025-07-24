import React from 'react';
import { DollarSign, Clock, Users, Settings, Star, FileText, Heart } from 'lucide-react';

interface SlideProps {
  direction?: 'next' | 'prev';
}

const Slide7: React.FC<SlideProps> = ({ direction = 'next' }) => {
  const comparisonData = [
    {
      icon: DollarSign,
      traditional: "Aylık maaş, sigorta, eğitim, işe alım derken ciddi personel giderleri",
      ai: "Konuşma başına ödeme. Personel yok, ekstra masraf yok."
    },
    {
      icon: Clock,
      traditional: "Yeni bir temsilcinin işe alımı, eğitimi, alışması aylar sürer",
      ai: "Birkaç dakikada konuşma senaryosu tanımlanır ve çalışmaya başlar"
    },
    {
      icon: Users,
      traditional: "\"1'e basın, 2'ye basın…\" gibi menüler, uzun beklemeler",
      ai: "\"Size nasıl yardımcı olabilirim?\" ile doğal ve hızlı çözüm"
    },
    {
      icon: Settings,
      traditional: "Sadece basit işlemleri yapabilir, karmaşık konularda yetersiz kalır",
      ai: "Karmaşık konuları anlayarak anında çözüm sunar"
    },
    {
      icon: Star,
      traditional: "Yorgunluk, stres, tükenmişlik kaynaklı standart olmayan görüşmeler",
      ai: "Her konuşmada aynı standart ve kalite"
    },
    {
      icon: FileText,
      traditional: "Görüşme sonrası elle not alma, özet çıkarma, randevu girme gibi zaman alan işler",
      ai: "Otomatik özet, değerlendirme kriterlerine göre notlar, otomatik randevu ve görev atamaları"
    },
    {
      icon: Heart,
      traditional: "Müşterilerin %60'ı klasik sistemlerden memnun değil",
      ai: "Memnuniyet oranlarında %20'ye varan artış"
    }
  ];

  return (
    <div className={`slide-enter-${direction} h-full flex items-center justify-center px-2 sm:px-4 py-1 sm:py-2`}>
      <div className="max-w-6xl mx-auto space-y-1 sm:space-y-2">
        {/* Title */}
        <div className="text-center space-y-1">
          <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white animate-fade-in">
            <span className="text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text">
              Neden Geleneksel Çağrı Yerine<br />AI Call Center
            </span>
          </h1>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-2 md:gap-4">
          {/* Traditional Method */}
          <div className="group relative overflow-hidden animate-fade-in-stagger" style={{ animationDelay: '0.2s' }}>
            {/* Card Background */}
<div className="relative bg-gradient-to-br from-slate-900/80 to-red-900/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 border border-rose-500/20 hover:border-rose-400/30 transition-all duration-700 hover:scale-[1.01] hover:shadow-xl hover:shadow-rose-500/5">
              
              {/* Header with animated gradient */}
              <div className="flex items-center gap-2 mb-2 sm:mb-3 relative">
                <div className="relative">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center shadow-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 border border-white/20">
                    <div className="text-sm sm:text-lg md:text-xl text-white font-bold">✖</div>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-rose-500/20 to-red-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-black text-transparent bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text">
                    Geleneksel Yöntem
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-rose-500 to-red-500 rounded-full mt-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>

              {/* Comparison Points */}
              <div className="space-y-1 sm:space-y-2">
                {comparisonData.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="group/item relative">
                      <div className="flex items-start gap-2 p-2 bg-gradient-to-r from-rose-500/5 to-red-500/3 backdrop-blur-sm rounded-lg border border-rose-500/15 hover:border-rose-400/20 transition-all duration-300 hover:bg-rose-500/8">
                        <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-rose-500/15 to-red-500/15 rounded-md flex items-center justify-center border border-rose-500/20">
                          <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-rose-400" />
                        </div>
                        <p className="text-xs sm:text-sm text-white/90 leading-tight font-medium">
                          {item.traditional}
                        </p>
                      </div>
                      {/* Subtle glow effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500/5 to-red-500/5 rounded-xl blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>
                  );
                })}
              </div>

              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-12 right-8 w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{ animationDelay: '1s' }}></div>
              
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-700"></div>
            </div>
          </div>

          {/* AI Call Center */}
          <div className="group relative overflow-hidden animate-fade-in-stagger" style={{ animationDelay: '0.4s' }}>
            {/* Card Background */}
            <div className="relative bg-gradient-to-br from-slate-900/80 to-emerald-900/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 border border-emerald-500/20 hover:border-emerald-400/30 transition-all duration-700 hover:scale-[1.01] hover:shadow-xl hover:shadow-emerald-500/5">
              
              {/* Header with animated gradient */}
              <div className="flex items-center gap-2 mb-2 sm:mb-3 relative">
                <div className="relative">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                    <div className="text-sm sm:text-lg md:text-xl filter drop-shadow-lg">✅</div>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-black text-transparent bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text">
                    AI Call Center
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>

              {/* Comparison Points */}
              <div className="space-y-1 sm:space-y-2">
                {comparisonData.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="group/item relative">
                      <div className="flex items-start gap-2 p-2 bg-gradient-to-r from-emerald-500/5 to-green-500/3 backdrop-blur-sm rounded-lg border border-emerald-500/15 hover:border-emerald-400/20 transition-all duration-300 hover:bg-emerald-500/8">
                        <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-emerald-500/15 to-green-500/15 rounded-md flex items-center justify-center border border-emerald-500/20">
                          <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                        </div>
                        <p className="text-xs sm:text-sm text-white/90 leading-tight font-medium">
                          {item.ai}
                        </p>
                      </div>
                      {/* Subtle glow effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/5 to-green-500/5 rounded-xl blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>
                  );
                })}
              </div>

              {/* Success Badge */}
              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg p-1 shadow-lg rotate-12 group-hover:rotate-6 transition-transform duration-300">
                <div className="text-white text-xs font-bold tracking-wide">AI</div>
              </div>

              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-12 right-8 w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-8 right-12 w-1.5 h-1.5 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-700"></div>
            </div>
          </div>
        </div>

        {/* Source Credits */}
        <div className="text-center animate-fade-in-delay-3">
          <p className="text-xs text-white/40">
            Kaynaklar: Ironpaper, Gartner, Revenue.io, Nuance
          </p>
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

export default Slide7;