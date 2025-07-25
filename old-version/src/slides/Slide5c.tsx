import React from 'react';
import { TrendingUp, XCircle, CheckCircle, TrendingDown } from 'lucide-react';

interface SlideProps {
  direction?: 'next' | 'prev';
}

const Slide5c: React.FC<SlideProps> = ({ direction = 'next' }) => {
  return (
    <div className={`slide-enter-${direction} h-full flex items-center justify-center`}>
      <div className="max-w-6xl mx-auto space-y-4 px-4 py-4">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-3 animate-fade-in">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-white">
              Finans Sektörü{' '}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">
                Başarı Hikayesi
              </span>
            </h1>
          </div>
          <h2 className="text-lg md:text-xl text-blue-300 font-semibold animate-fade-in-delay-1">
            Akıllı Lead Filtreleme
          </h2>
        </div>

        {/* Before/After Comparison */}
        <div className="grid lg:grid-cols-2 gap-4 animate-fade-in-delay-2">
          {/* Before */}
          <div className="bg-red-500/10 backdrop-blur-xl rounded-2xl p-4 border border-red-500/20 hover:border-red-500/40 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-red-400" />
              <h3 className="text-xl font-bold text-red-300">Öncesi</h3>
            </div>
            
            <div className="bg-red-500/20 backdrop-blur-sm rounded-xl p-3 mb-3 border border-red-500/30">
              <p className="text-white/90 text-sm leading-relaxed italic">
                "Temsilcilerimi günlerinin yarısını ilgisiz listeleri arayarak geçiriyordu."
              </p>
            </div>

            {/* Problem Stats */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <TrendingDown className="w-4 h-4 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">Zaman Kaybı</p>
                  <p className="text-red-300 text-xs">İlgisiz arama listelerinde</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrendingDown className="w-4 h-4 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">Düşük Verimlilik</p>
                  <p className="text-red-300 text-xs">Az sayıda nitelikli görüşme</p>
                </div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="bg-emerald-500/10 backdrop-blur-xl rounded-2xl p-4 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-bold text-emerald-300">Sonrası (AI ile)</h3>
                <div className="px-2 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white text-xs font-bold whitespace-nowrap">
                  2x artış
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-3 mb-3 border border-emerald-500/30">
              <p className="text-white/90 text-sm leading-relaxed italic">
                "AI asistanımız haftada 1000 potansiyel müşteriyi arayıp filtreliyor, danışmanlarımız sadece gerçekten ilgilenen 50 kişiyle görüşerek satışlarını ikiye katlıyor."
              </p>
            </div>

            {/* Success Stats */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">1000 Lead/Hafta</p>
                  <p className="text-emerald-300 text-xs">AI tarafından filtreleniyor</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">50 Nitelikli Görüşme</p>
                  <p className="text-emerald-300 text-xs">Danışmanlar için optimize edilmiş</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Call Example */}
        <div className="animate-fade-in-delay-3 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-xl rounded-2xl p-4 border border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">AI</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">HeyPilot AI - Lead Filtreleme</p>
                <p className="text-blue-300 text-xs">Gerçek konuşma örneği</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <p className="text-white/90 text-base italic font-medium text-center">
                "Tesla hisselerindeki hareketliliği gördünüz mü Ahmet Bey?"
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="flex justify-center items-center space-x-6 animate-fade-in-delay-4 flex-wrap gap-2">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">1000</div>
            <div className="text-xs text-white/60">Haftalık Lead</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/20" />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">50</div>
            <div className="text-xs text-white/60">Nitelikli Görüşme</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/20" />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">2x</div>
            <div className="text-xs text-white/60">Satış Artışı</div>
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

export default Slide5c;