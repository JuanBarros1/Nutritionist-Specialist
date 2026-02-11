import React, { memo } from 'react';
import { cn } from '@/utils';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { PILLARS_DATA } from '@/constants/about';
import ProfilePrism from '@/components/sections/about/ProfilePrism';
import PillarCard from '@/components/sections/about/PillarCard';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = memo(({ className }) => {
  const containerRef = useGsapReveal();

  return (
    <section
      id="about"
      ref={containerRef}
      className={cn("relative z-10 py-32 lg:py-48 overflow-hidden", className)}
    >
      {/* ══ SUPREME ATMOSPHERIC BACKGROUND ══ */}
      <div className="section-bg absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[700px] h-[700px] bg-emerald-950/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-teal-900/15 rounded-full blur-[120px]" />

        {/* Fine Technical Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* ══ LEFT SIDE: HOLOGRAPHIC MEDIA PRISM ══ */}
          <ProfilePrism />

          {/* ══ RIGHT SIDE: INTELLECTUAL CONTENT (6 COLS) ══ */}
          <div className="lg:col-span-6 space-y-14 order-1 lg:order-2">

            {/* Cinematic Header with Vertical Line */}
            <div className="relative">
              <div className="absolute -left-6 lg:-left-10 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500 via-emerald-500/20 to-transparent hidden lg:block" />

              <div className="space-y-5 lg:pl-2">
                {/* Main Title */}
                <h2 className="gsap-about-text supreme-text-hover text-2xl lg:text-4xl xl:text-5xl font-black text-white tracking-tighter leading-[0.95]">
                  HI! I AM <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-400 animate-gradient-x bg-[length:200%_auto]">
                    DR. CAROLINA.
                  </span>
                </h2>

                {/* Subtitle */}
                <p className="gsap-about-text supreme-text-hover text-xl text-gray-300 font-light leading-relaxed max-w-xl">
                  Nutritionist by <strong className="text-white font-bold">passion</strong> and <strong className="text-white font-bold">love</strong> for the profession. For me, nutrition is the art of orchestrating human biology.
                </p>
              </div>
            </div>

            {/* Narrative Pillars - Redesigned with Supreme Aesthetic */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {PILLARS_DATA.map(pillar => (
                <PillarCard key={pillar.id} data={pillar} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;