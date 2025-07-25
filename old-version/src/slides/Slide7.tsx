import React from 'react';
import { DollarSign, Users, Clock, TrendingUp } from 'lucide-react';

interface SlideProps {
  direction?: 'next' | 'prev';
}

const Slide7: React.FC<SlideProps> = ({ direction = 'next' }) => {
  return (
    <div className={`slide-enter-${direction} h-full flex items-center justify-center`}>
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-white animate-fade-in">
            Maliyet ve{' '}
            <span className="text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text">
              Verimlilik Avantajı
            </span>
          </h1>
          <p className="text-xl text-white/70 animate-fade-in-delay-1">
            Geleneksel sistemlerle karşılaştırmalı analiz
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Traditional Call Center */}
          <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-l-4 border-rose-500 border border-white/20 hover:bg-white/15 transition-all duration-500 animate-fade-in-stagger" style={{ animationDelay: '0.2s' }}>
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-rose-400">Geleneksel Çağrı Merkezi</h3>
                <p className="text-white/60">Mevcut sistem yaklaşımı</p>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-rose-500/10 backdrop-blur-sm rounded-2xl border border-rose-500/20">
                <DollarSign className="w-8 h-8 text-rose-400" />
                <div>
                  <div className="text-white font-semibold">Çağrı başına maliyet</div>
                  <div className="text-2xl font-bold text-rose-400">4.50 - 6.00 USD</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-rose-500/10 backdrop-blur-sm rounded-2xl border border-rose-500/20">
                <Clock className="w-8 h-8 text-rose-400" />
                <div>
                  <div className="text-white font-semibold">Günlük kapasite</div>
                  <div className="text-2xl font-bold text-rose-400">~100 çağrı</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-rose-500/10 backdrop-blur-sm rounded-2xl border border-rose-500/20">
                <TrendingUp className="w-8 h-8 text-rose-400" />
                <div>
                  <div className="text-white font-semibold">Yıllık personel devir oranı</div>
                  <div className="text-2xl font-bold text-rose-400">%30+</div>
                </div>
              </div>
            </div>

            {/* Additional Issues */}
            <div className="mt-8 p-4 bg-rose-500/5 backdrop-blur-sm rounded-2xl border border-rose-500/10">
              <h4 className="text-white font-semibold mb-3">Ek Maliyetler:</h4>
              <ul className="text-white/70 space-y-1 text-sm">
                <li>• İşe alım ve eğitim masrafları</li>
                <li>• Ofis kirası ve ekipman giderleri</li>
                <li>• Sürekli denetim ihtiyacı</li>
                <li>• Mesai saati kısıtlaması</li>
              </ul>
            </div>

            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-red-600/20 opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500" />
          </div>

          {/* X AI Call Center */}
          <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-l-4 border-emerald-500 border border-white/20 hover:bg-white/15 transition-all duration-500 animate-fade-in-stagger" style={{ animationDelay: '0.4s' }}>
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-400">X AI Call Center</h3>
                <p className="text-white/60">Yeni nesil çözüm</p>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-emerald-500/10 backdrop-blur-sm rounded-2xl border border-emerald-500/20">
                <DollarSign className="w-8 h-8 text-emerald-400" />
                <div>
                  <div className="text-white font-semibold">Çağrı başına maliyet</div>
                  <div className="text-2xl font-bold text-emerald-400">0.20 - 0.40 USD</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-emerald-500/10 backdrop-blur-sm rounded-2xl border border-emerald-500/20">
                <Clock className="w-8 h-8 text-emerald-400" />
                <div>
                  <div className="text-white font-semibold">Eş zamanlı kapasite</div>
                  <div className="text-2xl font-bold text-emerald-400">Yüzlerce çağrı</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-emerald-500/10 backdrop-blur-sm rounded-2xl border border-emerald-500/20">
                <TrendingUp className="w-8 h-8 text-emerald-400" />
                <div>
                  <div className="text-white font-semibold">Personel devir oranı</div>
                  <div className="text-2xl font-bold text-emerald-400">Sıfır</div>
                </div>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="mt-8 p-4 bg-emerald-500/5 backdrop-blur-sm rounded-2xl border border-emerald-500/10">
              <h4 className="text-white font-semibold mb-3">Ek Avantajlar:</h4>
              <ul className="text-white/70 space-y-1 text-sm">
                <li>• Anında devreye alma</li>
                <li>• Sıfır fiziksel maliyet</li>
                <li>• Sürekli öğrenme ve gelişim</li>
                <li>• 7/24 kesintisiz hizmet</li>
              </ul>
            </div>

            {/* Success Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full p-3 shadow-xl animate-pulse">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>

            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-600/20 opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500" />
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="text-center animate-fade-in-delay-3">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-emerald-500/20 to-sky-500/20 backdrop-blur-xl rounded-full px-8 py-6 border border-white/20">
            <div className="text-4xl font-black text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text">
              %90+
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Maliyet Tasarrufu</div>
              <div className="text-white/60 text-sm">Geleneksel sistemlere göre</div>
            </div>
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

export default Slide7;