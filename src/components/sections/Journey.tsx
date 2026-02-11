import React, { memo } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { journeyData } from '@/constants/journey';
import JourneyItem from '@/components/sections/journey/JourneyItem';

const Journey: React.FC = memo(() => {
    const containerRef = useGsapReveal();

    return (
        <section ref={containerRef} className="relative py-32 bg-[#020106] overflow-hidden">
            {/* ══ BACKGROUND EFFECTS ══ */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Subtle Gradient Line Background */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-900/40 to-transparent hidden md:block" />

                {/* Ambient Glows */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px]" />

                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ══ HEADER ══ */}
                <div className="text-center mb-32 relative z-10">
                    <h2 className="gsap-reveal-text text-4xl md:text-6xl font-black text-white tracking-tight mb-6 relative inline-block">
                        A Journey of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Purpose</span>
                    </h2>
                    <p className="gsap-reveal-text text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Every step of my career has been guided by a mission: to simplify nutrition and enhance your health.
                    </p>
                </div>

                {/* ══ TIMELINE ══ */}
                <div className="relative">
                    {/* Vertical Line for Desktop - Now Brighter */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-900/0 via-emerald-500/30 to-emerald-900/0 md:-translate-x-1/2 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                        {/* Pulse effect traveling down */}
                        <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent via-emerald-400 to-transparent blur-sm animate-data-stream opacity-50" />
                    </div>

                    <div className="space-y-24">
                        {journeyData.map((item, index) => (
                            <JourneyItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
});

Journey.displayName = 'Journey';

export default Journey;
