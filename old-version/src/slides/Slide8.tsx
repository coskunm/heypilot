import React from 'react';
import { Mail, Globe, Sparkles, ArrowRight } from 'lucide-react';

interface SlideProps {
  direction?: 'next' | 'prev';
}

const Slide8: React.FC<SlideProps> = ({ direction = 'next' }) => {
  return (
    <div className={`slide-enter-${direction} h-full flex items-center justify-center`}>
      <div className="max-w-4xl mx-auto text-center space-y-16">
        {/* Thank You */}
        <div className="space-y-8">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-gradient-to-r from-sky-400 via-emerald-400 to-purple-400 bg-clip-text animate-fade-in">
              Teşekkürler
            </h1>
            
            {/* Floating Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              <Sparkles className="absolute top-0 left-1/4 w-8 h-8 text-sky-400 animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }} />
              <Sparkles className="absolute top-1/4 right-1/4 w-6 h-6 text-emerald-400 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.5s' }} />
              <Sparkles className="absolute bottom-0 left-1/3 w-7 h-7 text-purple-400 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }} />
            </div>
          </div>

          <p className="text-2xl md:text-3xl text-white/80 leading-relaxed animate-fade-in-delay-1">
            Sorularınız ve demo talepleriniz için{' '}
            <span className="text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text font-semibold">
              bize ulaşın
            </span>
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-8 animate-fade-in-delay-2">
          {/* Website */}
          <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 cursor-pointer">
            <div className="flex items-center justify-center gap-6">
              <div className="p-4 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text">
                  websiteniz.com
                </p>
                <p className="text-white/60 text-lg">Demo ve detaylı bilgi için</p>
              </div>
              <ArrowRight className="w-8 h-8 text-white/40 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
            </div>
          </div>

          {/* Email */}
          <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 cursor-pointer">
            <div className="flex items-center justify-center gap-6">
              <div className="p-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  iletisim@websiteniz.com
                </p>
                <p className="text-white/60 text-lg">Anında destek için</p>
              </div>
              <ArrowRight className="w-8 h-8 text-white/40 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-6 animate-fade-in-delay-3">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 backdrop-blur-xl rounded-full px-8 py-4 border border-white/20">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-lg font-medium">
              Hemen başlayın, farkı hissedin
            </span>
          </div>
          
          {/* Demo Button */}
          <div className="pt-6">
            <button className="group bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-bold py-4 px-12 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
              <span className="flex items-center gap-3">
                <span className="text-xl">Ücretsiz Demo İsteyin</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 rounded-full animate-float blur-xl" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-sky-500/20 rounded-full animate-float-delayed blur-xl" />
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 rounded-full animate-float-slow blur-xl" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-10deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-delay-1 {
          animation: fade-in 1s ease-out 0.5s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 1s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 1.5s forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
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

export default Slide8;