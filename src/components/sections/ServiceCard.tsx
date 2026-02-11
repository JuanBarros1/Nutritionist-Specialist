import React, { memo } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/utils';
import { Service } from '@/constants/services';

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = memo(({ service }) => {
    return (
        <div className="group">
            {/* Supreme Card */}
            <div className={cn(
                "gsap-services-card supreme-card-magnetic relative h-full bg-white rounded-3xl p-8 shadow-lg border border-slate-200 group-hover:-translate-y-4 group-hover:scale-[1.02] overflow-hidden",
                `hover:${service.borderColor}`
            )}>

                {/* Dynamic Aura Glow */}
                <div className={cn("absolute -inset-4 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 -z-20", service.bgGlow)} />

                {/* Light Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-3xl" />

                {/* Dynamic Hover Background */}
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl", service.hoverBg)} />

                <div className="relative z-10">
                    {/* Icon - Clean without border */}
                    <div className="relative mb-8 inline-block">
                        <div className="w-16 h-16 rounded-2xl bg-slate-5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-sm group-hover:shadow-lg">
                            <service.icon className={cn(
                                " w-8 h-8 transition-all duration-700 group-hover:scale-110",
                                service.color
                            )} />
                        </div>
                        {/* Pulsing Rings with service color */}
                        <div className={cn("absolute -inset-2 rounded-2xl border-2 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700", service.borderColor)} />
                        <div className={cn("absolute -inset-4 rounded-3xl border opacity-0 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000 delay-100", service.borderColor)} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-500 leading-tight">
                        {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 leading-relaxed mb-8 text-sm group-hover:text-slate-700 transition-colors duration-500">
                        {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 transition-colors duration-500">
                        <button
                            className={cn("flex items-center px-0 h-auto font-black text-sm uppercase tracking-wide group/btn hover:bg-transparent cursor-pointer bg-transparent border-none outline-none", service.color)}
                        >
                            <span className="mr-2">Access</span>
                            <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-500" />
                        </button>

                        {/* Progress Bar with dynamic color */}
                        <div className="w-12 h-1 bg-slate-200 rounded-full overflow-hidden">
                            <div className={cn("h-full rounded-full w-0 group-hover:w-full transition-all duration-1000 delay-300", service.barColor)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
