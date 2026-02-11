import React from 'react';
import { cn } from '@/utils';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { services } from '@/constants/services';
import ServiceCard from './ServiceCard';

interface ServicesProps {
    className?: string;
}

const Services: React.FC<ServicesProps> = React.memo(({ className }) => {
    const containerRef = useGsapReveal();
    return (
        <section
            id="services"
            ref={containerRef}
            className={cn(
                "relative z-10 overflow-hidden",
                className
            )}
        >
            {/* ═══ SUPREME WHITE SECTION ═══ */}
            <div className="relative bg-slate-100 py-32 lg:py-40">


                {/* Subtle Background */}
                <div className="section-bg absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-100/20 rounded-full blur-[100px]" />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-20 lg:mb-28">

                        {/* Title */}
                        <h2 className="gsap-services-text text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-slate-900">
                            My{' '}
                            <span className="text-emerald-600">Specialties</span>
                        </h2>

                        {/* Subtitle */}
                        <p className="gsap-services-text text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            Scientific protocols for your transformation
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
});

Services.displayName = 'Services';

export default Services;

