import React, { memo } from 'react';
import { JourneyItem as IJourneyItem } from '@/constants/journey';

interface JourneyItemProps {
    item: IJourneyItem;
    index: number;
}

const JourneyItem: React.FC<JourneyItemProps> = memo(({ item, index }) => {
    const Icon = item.icon;
    const isEven = index % 2 === 0;

    return (
        <div className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''} group`}>

            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${isEven ? 'left-[calc(50%+3.5rem)] text-left' : 'right-[calc(50%+3.5rem)] text-right'} z-0`}>
                <span className="gsap-timeline-year text-[9rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/[0.15] to-transparent tracking-tighter select-none pointer-events-none scale-150 transform origin-center transition-all duration-700 group-hover:from-emerald-500/[0.25] group-hover:to-transparent group-hover:scale-[1.6]">
                    {item.year}
                </span>
            </div>

            {/* Central Node - Refined Size & Glow */}
            <div className="absolute left-[9px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-auto flex flex-col items-center z-20">
                <div className="gsap-timeline-marker w-4 h-4 rounded-full bg-[#020106] border border-emerald-500/50 group-hover:border-emerald-400 group-hover:scale-150 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.8)] transition-all duration-500 flex items-center justify-center relative backdrop-blur-md z-30">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            </div>

            {/* Spacer for Desktop Layout */}
            <div className="w-full md:w-1/2" />

            {/* Content Card Area */}
            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left'} relative z-10`}>
                <div
                    className="gsap-timeline-card relative group/card cursor-default"
                    data-side={isEven ? 'left' : 'right'} // Inverted logic relative to flex direction visually
                >

                    {/* Connecting Line - Ultra Thin */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[1px] w-24 bg-gradient-to-r from-emerald-500/30 to-transparent ${isEven ? 'left-full ml-0' : 'right-full mr-0 rotate-180'}`} />

                    {/* Card Container - Glass Supreme - More Subtle Borders */}
                    <div className="relative p-8 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-700 group-hover/card:bg-white/[0.03] group-hover/card:border-emerald-500/20 group-hover/card:shadow-[0_0_40px_-10px_rgba(16,185,129,0.1)]">

                        {/* Delicate Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                        {/* Icon - Minimalist Corner */}
                        <div className={`absolute top-0 ${isEven ? 'right-0 rounded-bl-2xl border-l border-b border-white/5' : 'left-0 rounded-br-2xl border-r border-b border-white/5'} p-3 bg-white/[0.02] backdrop-blur-xl group-hover/card:bg-emerald-500/10 transition-colors duration-500`}>
                            <Icon size={20} className="text-emerald-500/70 group-hover/card:text-emerald-400 transition-colors" />
                        </div>

                        {/* Content */}
                        <div className="pt-6">
                            {/* Mobile Year */}
                            <div className="md:hidden flex items-center gap-2 mb-4">
                                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500/40 to-transparent">{item.year}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover/card:text-emerald-300 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed font-light text-sm tracking-wide group-hover/card:text-gray-300 transition-colors">
                                {item.description}
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
});

JourneyItem.displayName = 'JourneyItem';

export default JourneyItem;
