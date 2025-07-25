import React from 'react';
import { TrendingDown, TrendingUp, Target, Users } from 'lucide-react';

interface SlideProps {
  direction?: 'next' | 'prev';
}

const Slide6: React.FC<SlideProps> = ({ direction = 'next' }) => {
  const stats = [
    {
      icon: TrendingDown,
      number: "80%",
      description: "5 dk. içinde ulaşılmazsa düşen satış olasılığı.",
      source: "Kaynak: HBR",
      gradient: "from-rose-500 to-red-600",
      delay: "0.2s"
    },
    {
      icon: TrendingUp,
      number: "315%",
      description: "AI sistemleri ile elde edilen yatırım geri dönüşü (ROI).",
      source: "Kaynak: IBM",
      gradient: "from-emerald-500 to-green-600",
      delay: "0.4s"
    },
    {
      icon: Target,
      number: "72%",
      description: "AI ile azalan randevuya gelmeme oranı.",
      source: "Kaynak: Becker's",
      gradient: "from-sky-500 to-blue-600",
      delay: "0.6s"
    },
    {
      icon: Users,
      number: "28%",
      description: "AI kullanımı sonrası artan müşteri memnuniyeti (CSAT).",
      source: "Kaynak: Salesforce",
      gradient: "from-purple-500 to-indigo-600",
      delay: "0.8s"
    }
  ];

  return (
    <div className={`slide-enter-${direction} h-full flex items-center justify-center`}>
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-white animate-fade-in">
            Rakamlarla{' '}
            <span className="text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text">
              Gerçekler
            </span>
          </h1>
          <p className="text-xl text-white/70 animate-fade-in-delay-1">
            Endüstri araştırmalarından elde edilen veriler
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-500 text-center animate-fade-in-stagger"
                style={{ animationDelay: stat.delay }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-40 blur-xl scale-150 transition-opacity duration-500`} />
                </div>

                {/* Number */}
                <div className="relative mb-6">
                  <div className={`text-6xl md:text-7xl font-black text-transparent bg-gradient-to-br ${stat.gradient} bg-clip-text group-hover:scale-110 transition-transform duration-300`}>
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
                <p className="text-white/80 text-base leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                  {stat.description}
                </p>

                {/* Source */}
                <p className="text-white/50 text-sm group-hover:text-white/70 transition-colors duration-300">
                  {stat.source}
                </p>

                {/* Progress Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-b-3xl overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`} />
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white/20 group-hover:border-white/60 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-white/20 group-hover:border-white/60 transition-colors duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom Insight */}
        <div className="text-center animate-fade-in-delay-3">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-full px-8 py-4 border border-white/20">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-lg">
              Bu veriler X AI Call Center'ın neden kritik önemde olduğunu gösteriyor
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