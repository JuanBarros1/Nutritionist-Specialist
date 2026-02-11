import React, { memo } from 'react';
import { cn } from '@/utils';
import { PillarData } from '@/constants/about';

const PillarCard = memo(({ data }: { data: PillarData }) => (
    <div className="gsap-about-card supreme-card-magnetic relative group overflow-hidden">
        <div className={cn("absolute inset-0 bg-gradient-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500", data.colors.gradientFrom)} />
        <div className={cn("relative space-y-4 p-8 bg-white/[0.03] backdrop-blur-md border rounded-[2rem] transition-all duration-500", data.colors.border)}>
            <div className="flex items-center justify-between mb-2">
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center border transition-all", data.colors.bg, data.colors.border, data.colors.shadow)}>
                    <data.icon className={cn("gsap-icon-float w-6 h-6 group-hover:scale-110 transition-transform", data.colors.text)} />
                </div>
                <span className={cn("text-[10px] font-mono tracking-tighter uppercase font-bold opacity-50", data.colors.text)}>{data.conceptId}</span>
            </div>
            <h4 className="text-xl font-black text-white uppercase tracking-tight">{data.title}</h4>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
                {data.description}
            </p>
            {/* Bottom accent bar */}
            <div className={cn("absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700", `via-${data.colors.text.split('-')[1]}-500/40`)} />
        </div>
    </div>
));

PillarCard.displayName = 'PillarCard';

export default PillarCard;
