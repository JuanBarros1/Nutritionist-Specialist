import React, { useCallback, useState, memo } from 'react';
import { cn } from '@/utils';

const HeroCTA: React.FC<{ className?: string }> = memo(({ className }) => {
    const [loading, setLoading] = useState(false);

    const handleClick = useCallback(() => {
        if (loading) return;

        setLoading(true);

        const target = document.getElementById('contact');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }

        window.setTimeout(() => {
            setLoading(false);
        }, 900);
    }, [loading]);

    return (
        <div className={cn('relative mt-10 flex justify-center lg:justify-start', className)}>
            <button
                type="button"
                onClick={handleClick}
                disabled={loading}
                className="aura-button group isolate inline-flex items-center min-w-[260px] h-[58px] cursor-pointer overflow-hidden rounded-full relative bg-emerald-400 border-none outline-none disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {/* Camada de Shimmer Circular (Aura) */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
                    <div className="shimmer-container-aura">
                        <div className="shimmer-gradient-aura"></div>
                    </div>
                </div>

                {/* Camada de Onda (Fixada dentro do overflow) */}
                <div className="shimmer-onda"></div>

                {/* Borda de brilho suave */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                    <div style={{
                        position: 'absolute',
                        width: '150%',
                        height: '150%',
                        background: 'linear-gradient(90deg, transparent, #ffffff, transparent)',
                        animation: 'borderBeamRotation var(--speed) infinite linear',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}></div>
                </div>

                {/* Fundo Esmeralda com mini degradê */}
                <div className="absolute inset-[1.5px] bg-gradient-to-b from-emerald-300 via-emerald-500 to-emerald-600 rounded-full z-1"></div>

                {/* Esfumaçado radial na parte de baixo */}
                <div className="bottom-glow-aura"></div>

                {/* Fundo branco de hover */}
                <div className="fundo-white"></div>

                {/* Ícone móvel */}
                <div className="wrapper-icones">
                    {!loading ? (
                        <>
                            <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:hidden transition-all"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="hidden group-hover:block w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </>
                    ) : (
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    )}
                </div>

                {/* Textos */}
                <div className="relative z-10 w-full h-full flex items-center justify-center px-10">
                    <span className="texto-principal-aura whitespace-nowrap text-lg font-bold">
                        {!loading ? 'Book Consultation' : 'Processing...'}
                    </span>

                    <span className="texto-hover-aura whitespace-nowrap text-lg font-bold">
                        Let's Start
                    </span>
                </div>
            </button>
        </div>
    );
});

HeroCTA.displayName = 'HeroCTA';

export default HeroCTA;
