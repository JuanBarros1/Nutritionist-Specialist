import React from 'react';
import portraitImage from '@/assets/hero-portrait-custom.webp';
import { cn } from '@/utils';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import HeroCTA from '@/components/ui/HeroCTA';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = React.memo(({ className }) => {
  const containerRef = useGsapReveal();

  return (
    <section
      ref={containerRef}
      className={cn(
        'relative z-10 min-h-screen overflow-hidden pt-20 lg:pt-0',
        className,
      )}
    >

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr,2fr] gap-8 lg:gap-16 items-center min-h-[60vh] lg:min-h-[70vh]">
          {/* Content Left Side */}
          <div className="text-center lg:text-left space-y-6 lg:pr-12 xl:pr-16">
            {/* Cinematic Title */}
            <div className="gsap-hero-title space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
                <span className="block">Transform</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-emerald-400 animate-gradient-x bg-[length:200%_auto]">Your Life</span>
                <span className="block text-emerald-50">With Me</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Personalized nutritional monitoring for <span className="text-white font-medium">weight loss</span>, <span className="text-white font-medium">performance</span> and <span className="text-white font-medium">holistic health</span>.
              </p>
            </div>

            {/* Premium CTA (separate component) */}
            <div className="gsap-hero-cta flex justify-center lg:justify-start pt-4">
              <HeroCTA />
            </div>
          </div>

          {/* Right Side - Nutritionist Image - Desktop Only */}
          <div className="hidden lg:block relative lg:order-last">
            {/* ══ SUPREME G.S.I. STYLE FRAME ══ */}
            <div className="gsap-hero-image relative p-3 group max-w-xl mx-auto lg:ml-auto">
              {/* Rotating Corner Orbits - Sincronizado com Método GSI */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-emerald-500 rounded-tl-2xl animate-spin-slow opacity-40 group-hover:opacity-100 transition-opacity" style={{ animationDuration: '8s' }} />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-emerald-500 rounded-tr-2xl animate-spin-slow opacity-40 group-hover:opacity-100 transition-opacity" style={{ animationDuration: '8s', animationDirection: 'reverse' }} />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-emerald-500 rounded-bl-2xl animate-spin-slow opacity-40 group-hover:opacity-100 transition-opacity" style={{ animationDuration: '18s', animationDirection: 'reverse' }} />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-emerald-500 rounded-br-2xl animate-spin-slow opacity-40 group-hover:opacity-100 transition-opacity" style={{ animationDuration: '8s' }} />

              {/* Main Prism Container */}
              <div className="relative rounded-[3.5rem] overflow-hidden p-2 bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/20 shadow-2xl backdrop-blur-sm">
                {/* Refractive Glass Border */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] pointer-events-none" />

                <div className="relative rounded-[3.2rem] overflow-hidden bg-emerald-950/20 ring-1 ring-white/10 h-[400px] md:h-[480px] lg:h-[500px] shadow-inner">
                  <img
                    src={portraitImage}
                    alt="Dra. Carolina Mendes"
                    onLoad={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.opacity = '0.9';
                    }}
                    className="w-full h-full object-cover object-top opacity-0 transition-opacity duration-1000 ease-out group-hover:opacity-100 group-hover:scale-105"
                    loading="eager"
                    fetchPriority="high"
                  />

                  {/* Cinematic Technical Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                  {/* Pulse Ripple Effect */}
                  <div className="absolute inset-0 bg-emerald-500/5 group-hover:animate-pulse pointer-events-none" />

                  {/* Data Pulse Line */}
                  <div className="absolute inset-x-0 h-[100px] bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent -top-[100px] animate-data-stream" />

                  {/* Floating Tech Points */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-emerald-400 rounded-full animate-ping shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                    <div className="absolute bottom-[40%] right-[30%] w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
                  </div>

                  {/* Technical Scanner */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-scanner z-20" />

                </div>
              </div>

              {/* Aura Glow */}
              <div className="absolute -inset-10 bg-emerald-500/5 blur-[80px] rounded-full -z-10 group-hover:bg-emerald-500/10 transition-colors duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
