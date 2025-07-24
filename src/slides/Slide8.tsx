import React from 'react';
import { Mail, Sparkles, ArrowRight } from 'lucide-react';

interface SlideProps {
  direction?: 'next' | 'prev';
}

const Slide8: React.FC<SlideProps> = ({ direction = 'next' }) => {
  return (
    <div className={`slide-enter-${direction} h-full flex items-center justify-center px-4`}>
      <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-16">
        {/* Thank You */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <div className="relative">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-transparent bg-gradient-to-r from-sky-400 via-emerald-400 to-purple-400 bg-clip-text animate-fade-in">
              Teşekkürler
            </h1>
            
            {/* Floating Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              <Sparkles className="absolute top-0 left-1/4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-sky-400 animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }} />
              <Sparkles className="absolute top-1/4 right-1/4 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-400 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.5s' }} />
              <Sparkles className="absolute bottom-0 left-1/3 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-400 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }} />
            </div>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed animate-fade-in-delay-1">
            Sorularınız ve demo talepleriniz için{' '}
            <span className="text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text font-semibold">
              bize ulaşın
            </span>
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in-delay-2">
          {/* Email */}
          <a href="mailto:info@vebilisim.com.tr" className="group bg-white/10 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 cursor-pointer touch-manipulation block">
            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap sm:flex-nowrap">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  info@vebilisim.com.tr
                </p>
                <p className="text-white/60 text-sm sm:text-base md:text-lg">Anında destek için</p>
              </div>
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white/40 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 flex-shrink-0 hidden sm:block" />
            </div>
          </a>
        </div>

        {/* Call to Action */}
        <div className="space-y-4 sm:space-y-6 animate-fade-in-delay-3">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 backdrop-blur-xl rounded-full px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 border border-white/20">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm sm:text-base md:text-lg font-medium">
              Hemen başlayın, farkı hissedin
            </span>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 rounded-full animate-float blur-xl" />
          <div className="absolute bottom-1/4 right-1/4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-500/20 to-sky-500/20 rounded-full animate-float-delayed blur-xl" />
          <div className="absolute top-1/2 right-1/3 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 rounded-full animate-float-slow blur-xl" />
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