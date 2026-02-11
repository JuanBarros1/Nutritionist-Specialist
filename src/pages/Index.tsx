import React, { Suspense, useEffect } from 'react';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';

// Hard Mode: Aggressive Lazy Loading for non-critical sections
const AboutSection = React.lazy(() => import('@/components/sections/About'));
const Services = React.lazy(() => import('@/components/sections/Services'));
const Journey = React.lazy(() => import('@/components/sections/Journey'));
const Testimonials = React.lazy(() => import('@/components/sections/Testimonials'));
const Contact = React.lazy(() => import('@/components/sections/Contact'));
const Footer = React.lazy(() => import('@/components/sections/Footer'));

// Ultra-lightweight fallback to prevent layout thrashing without spinners
const SectionLoader = () => <div className="min-h-[50vh] w-full invisible" aria-hidden="true" />;

const Index = () => {
  // Predictive Preloading: Load rest of app when main thread is idle
  useEffect(() => {
    const preloadComponents = () => {
      const components = [
        import('@/components/sections/About'),
        import('@/components/sections/Services'),
        import('@/components/sections/Journey'),
        import('@/components/sections/Testimonials'),
        import('@/components/sections/Contact'),
        import('@/components/sections/Footer')
      ];
      Promise.all(components).catch(() => { });
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        // Delay slightly to prioritize Hero interaction
        setTimeout(preloadComponents, 2000);
      });
    } else {
      setTimeout(preloadComponents, 3000);
    }
  }, []);

  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden selection:bg-emerald-500/30">
      {/* === IMMERSIVE GALAXY BACKGROUND === */}
      <div className="fixed inset-0 z-[-100] bg-[#030108] pointer-events-none overflow-hidden content-visibility-auto">

        {/* === DEEP SPACE BASE === */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030108] via-[#050812] to-[#020106]" />

        {/* === MILKY WAY BAND === */}
        <div
          className="absolute top-[10%] left-[-30%] w-[200vw] h-[40vh] bg-gradient-to-r from-transparent via-emerald-900/15 to-transparent rotate-[-15deg] blur-[100px] animate-aurora-wave"
        />

        {/* === GALAXY CORE === */}
        <div
          className="absolute top-[15%] left-[20%] w-[60vw] h-[60vw] rounded-full animate-galaxy-pulse"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0.1) 30%, rgba(6, 78, 59, 0.05) 60%, transparent 100%)',
          }}
        />

        {/* === MAJOR NEBULAS === */}

        {/* Purple-Emerald Nebula - Top Right */}
        <div
          className="absolute top-[-10%] right-[-15%] w-[70vw] h-[70vw] rounded-full blur-[150px] animate-nebula-breathe"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.12) 0%, rgba(16, 185, 129, 0.08) 40%, transparent 70%)',
            animationDelay: '2s'
          }}
        />

        {/* Teal Nebula - Bottom Left */}
        <div
          className="absolute bottom-[-20%] left-[-20%] w-[80vw] h-[60vw] rounded-full blur-[180px] animate-nebula-drift"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(20, 184, 166, 0.15) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 80%)',
          }}
        />

        {/* Gold Nebula - Center */}
        <div
          className="absolute top-[50%] left-[40%] w-[40vw] h-[30vw] rounded-full blur-[120px] animate-cosmic-float"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.06) 0%, rgba(16, 185, 129, 0.04) 50%, transparent 80%)',
            animationDelay: '4s'
          }}
        />

        {/* === COSMIC DUST CLOUDS === */}
        <div className="absolute top-[20%] right-[5%] w-[30vw] h-[20vw] bg-emerald-500/[0.06] rounded-full blur-[80px] rotate-12 animate-cosmic-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[10%] w-[25vw] h-[15vw] bg-teal-500/[0.08] rounded-full blur-[60px] -rotate-6 animate-cosmic-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[65%] right-[20%] w-[18vw] h-[12vw] bg-violet-500/[0.05] rounded-full blur-[50px] rotate-45 animate-cosmic-float" style={{ animationDelay: '5s' }} />

        {/* === BRILLIANT STARS FIELD === */}

        {/* Large Bright Stars with Glow */}
        <div className="absolute top-[35%] left-[8%] w-2.5 h-2.5 bg-white rounded-full animate-twinkle animate-star-glow" style={{ animationDelay: '1s' }} />

        {/* Medium Stars */}
        <div className="absolute top-[8%] left-[45%] w-2 h-2 bg-white/70 rounded-full animate-twinkle" style={{ animationDelay: '0.3s' }} />
        <div className="absolute top-[18%] right-[50%] w-2 h-2 bg-emerald-300/60 rounded-full animate-twinkle" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-[28%] left-[70%] w-2 h-2 bg-white/60 rounded-full animate-twinkle" style={{ animationDelay: '1.3s' }} />
        <div className="absolute top-[42%] left-[25%] w-2 h-2 bg-teal-300/50 rounded-full animate-twinkle" style={{ animationDelay: '1.8s' }} />
        <div className="absolute top-[58%] right-[45%] w-2 h-2 bg-white/55 rounded-full animate-twinkle" style={{ animationDelay: '2.3s' }} />
        <div className="absolute top-[72%] left-[60%] w-2 h-2 bg-emerald-200/50 rounded-full animate-twinkle" style={{ animationDelay: '2.8s' }} />
        <div className="absolute bottom-[32%] right-[15%] w-2 h-2 bg-white/65 rounded-full animate-twinkle" style={{ animationDelay: '0.6s' }} />
        <div className="absolute bottom-[45%] left-[35%] w-2 h-2 bg-violet-200/40 rounded-full animate-twinkle" style={{ animationDelay: '1.1s' }} />

        {/* Small Distant Stars */}
        <div className="absolute top-[3%] right-[12%] w-1 h-1 bg-white/50 rounded-full animate-twinkle-slow" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[7%] left-[32%] w-1 h-1 bg-white/45 rounded-full animate-twinkle-slow" style={{ animationDelay: '0.4s' }} />
        <div className="absolute top-[14%] right-[68%] w-1 h-1 bg-emerald-200/40 rounded-full animate-twinkle-slow" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-[22%] left-[52%] w-1 h-1 bg-white/50 rounded-full animate-twinkle-slow" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-[45%] left-[12%] w-1 h-1 bg-white/40 rounded-full animate-twinkle-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[52%] right-[28%] w-1 h-1 bg-emerald-100/50 rounded-full animate-twinkle-slow" style={{ animationDelay: '2.4s' }} />
        <div className="absolute top-[63%] left-[78%] w-1 h-1 bg-white/45 rounded-full animate-twinkle-slow" style={{ animationDelay: '2.8s' }} />
        <div className="absolute top-[75%] right-[55%] w-1 h-1 bg-violet-100/40 rounded-full animate-twinkle-slow" style={{ animationDelay: '3.2s' }} />
        <div className="absolute top-[82%] left-[42%] w-1 h-1 bg-white/50 rounded-full animate-twinkle-slow" style={{ animationDelay: '3.6s' }} />
        <div className="absolute bottom-[38%] right-[72%] w-1 h-1 bg-emerald-200/45 rounded-full animate-twinkle-slow" style={{ animationDelay: '0.2s' }} />
        <div className="absolute bottom-[28%] left-[58%] w-1 h-1 bg-white/40 rounded-full animate-twinkle-slow" style={{ animationDelay: '0.6s' }} />
        <div className="absolute bottom-[18%] right-[42%] w-1 h-1 bg-teal-100/50 rounded-full animate-twinkle-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[8%] left-[28%] w-1 h-1 bg-white/45 rounded-full animate-twinkle-slow" style={{ animationDelay: '1.4s' }} />
        <div className="absolute bottom-[5%] right-[18%] w-1 h-1 bg-emerald-100/40 rounded-full animate-twinkle-slow" style={{ animationDelay: '1.8s' }} />

        {/* === SHOOTING STARS === */}
        <div
          className="absolute top-[15%] left-[30%] w-32 h-[2px] rounded-full animate-shooting-star"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), rgba(16, 185, 129, 0.6), transparent)',
            animationDelay: '0s'
          }}
        />
        <div
          className="absolute top-[45%] right-[40%] w-24 h-[1px] rounded-full animate-shooting-star"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), rgba(20, 184, 166, 0.5), transparent)',
            animationDelay: '4s'
          }}
        />
        <div
          className="absolute top-[70%] left-[50%] w-20 h-[1px] rounded-full animate-shooting-star"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
            animationDelay: '6s'
          }}
        />

        {/* === CONSTELLATION LINES (Subtle) === */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <line x1="15%" y1="5%" x2="25%" y2="12%" stroke="white" strokeWidth="1" />
          <line x1="25%" y1="12%" x2="20%" y2="22%" stroke="white" strokeWidth="1" />
          <line x1="70%" y1="35%" x2="82%" y2="40%" stroke="white" strokeWidth="1" />
          <line x1="82%" y1="40%" x2="78%" y2="55%" stroke="white" strokeWidth="1" />
        </svg>

        {/* === SUBTLE GRID OVERLAY === */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* === NOISE TEXTURE === */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        {/* === CINEMATIC VIGNETTE === */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      <div className="relative z-10 isolate">
        <Header />
        <main id="home">
          <Hero />

          <section className="section-container min-h-[50vh]">
            <Suspense fallback={<SectionLoader />}>
              <AboutSection />
            </Suspense>
          </section>

          <section className="section-container min-h-[50vh]">
            <Suspense fallback={<SectionLoader />}>
              <Services />
            </Suspense>
          </section>

          <section className="section-container min-h-[50vh]">
            <Suspense fallback={<SectionLoader />}>
              <Journey />
            </Suspense>
          </section>

          <section className="section-container min-h-[50vh]">
            <Suspense fallback={<SectionLoader />}>
              <Testimonials />
            </Suspense>
          </section>

          <section className="section-container min-h-[50vh]">
            <Suspense fallback={<SectionLoader />}>
              <Contact />
            </Suspense>
          </section>
        </main>

        <section className="section-container">
          <Suspense fallback={<div aria-hidden="true" />}>
            <Footer />
          </Suspense>
        </section>
      </div>
    </div>
  );
};

export default Index;

