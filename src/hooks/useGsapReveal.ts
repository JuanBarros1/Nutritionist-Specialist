import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ══ GSAP SUPREME REVEAL HOOK v23 (Senior Edition) ══
 * Refactored for efficient resource management and strict type safety.
 */

// ══ CONFIGURAÇÕES GLOBAIS DE ESTILO ══
const ANIMATION_CONFIG = {
    easings: {
        supreme: "power4.out",
        fluid: "power2.inOut",
        snap: "back.out(1.7)",
        elastic: "elastic.out(1, 0.6)"
    },
    durations: {
        fast: 0.6,
        normal: 0.8,
        slow: 1.5,
        cinematic: 2.2
    }
};

interface AnimationConfig {
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    start?: string | number | ((self: ScrollTrigger) => string | number);
    stagger?: number | gsap.StaggerVars;
    // Allow any ScrollTrigger vars including batchMax
    triggerOptions?: ScrollTrigger.Vars & { batchMax?: number | ((batch: Element[]) => number) };
    isTimeline?: boolean;
    // eslint-disable-next-line no-unused-vars
    animation?: (el: Element) => void;
}

export const useGsapReveal = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.config({ force3D: true });

            // =================================================================
            // 🌀 FACTORY DE ANIMAÇÕES (DRY Principle)
            // =================================================================

            const createBatchReveal = (selector: string, key: string, config: AnimationConfig = {}) => {
                const elements = document.querySelectorAll(`${selector}:not([data-gsap-${key}])`);
                if (elements.length === 0) return;

                // Estado Inicial
                if (config.from) {
                    gsap.set(elements, { ...config.from, visibility: 'visible' });
                }

                ScrollTrigger.batch(selector, {
                    interval: 0.05,
                    start: config.start || 'top 90%',
                    onEnter: (batch: Element[], _triggers: ScrollTrigger[]) => {
                        const elements = batch;
                        elements.forEach(el => el.setAttribute(`data-gsap-${key}`, 'true'));
                        gsap.to(elements, {
                            ...(config.to || {}),
                            stagger: config.stagger || 0.1,
                            overwrite: 'auto'
                        });
                    },
                    ...config.triggerOptions
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } as any);
            };

            const createSingleReveal = (selector: string, key: string, config: AnimationConfig = {}) => {
                const elements = document.querySelectorAll(`${selector}:not([data-gsap-${key}])`);
                elements.forEach(el => {
                    el.setAttribute(`data-gsap-${key}`, 'true');

                    if (config.from) {
                        gsap.set(el, { ...config.from, visibility: 'visible' });
                    }

                    ScrollTrigger.create({
                        trigger: el,
                        start: config.start || 'top 80%',
                        onEnter: () => {
                            if (config.isTimeline && config.animation) {
                                config.animation(el);
                            } else if (config.to) {
                                gsap.to(el, { ...config.to, overwrite: true });
                            }
                        }
                    });
                });
            };

            // =================================================================
            // 🚀 EXECUÇÃO DAS ANIMAÇÕES
            // =================================================================

            // 1. TEXTOS & TÍTULOS
            createBatchReveal('.gsap-reveal-text', 'v23', {
                from: { y: 30, opacity: 0 },
                to: { y: 0, opacity: 1, duration: ANIMATION_CONFIG.durations.fast, ease: ANIMATION_CONFIG.easings.supreme }
            });

            // 2. PILLS & BAGDES
            createBatchReveal('.gsap-reveal-pill', 'v23', {
                from: { y: 20, opacity: 0 },
                to: { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
            });

            // 3. CARDS DE SERVIÇO
            createBatchReveal('.gsap-services-card', 'v23', {
                start: 'top 85%',
                from: { opacity: 0, y: 40 },
                to: {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out"
                },
                stagger: { each: 0.12, from: "start" },
                triggerOptions: { batchMax: 3 }
            });

            // 4. TIMELINE
            createSingleReveal('.gsap-timeline-year', 'v23', {
                from: { opacity: 0, scale: 0.9, x: -30 },
                to: { opacity: 1, scale: 1, x: 0, duration: 0.4 }
            });
            createSingleReveal('.gsap-timeline-marker', 'v23', {
                from: { scale: 0, opacity: 0 },
                to: { scale: 1, opacity: 1, duration: 0.6, ease: ANIMATION_CONFIG.easings.snap }
            });

            document.querySelectorAll('.gsap-timeline-card:not([data-gsap-v23])').forEach((el) => {
                el.setAttribute('data-gsap-v23', 'true');
                const side = el.getAttribute('data-side');
                const xOffset = side === 'left' ? -30 : 30;

                gsap.set(el, { x: xOffset, opacity: 0, scale: 0.95, visibility: 'visible' });
                ScrollTrigger.create({
                    trigger: el,
                    start: 'top 70%',
                    onEnter: () => gsap.to(el, { x: 0, opacity: 1, scale: 1, duration: 0.7, ease: ANIMATION_CONFIG.easings.supreme })
                });
            });

            // 5. TESTIMONIALS
            createSingleReveal('.gsap-reveal-testimonial-container', 'v23', {
                from: { opacity: 0, y: 30 },
                to: { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
            });

            // 6. HERO SECTION
            const heroTitle = document.querySelectorAll('.gsap-hero-title:not([data-gsap-v23])');
            if (heroTitle.length) {
                heroTitle.forEach(el => {
                    el.setAttribute('data-gsap-v23', 'true');
                    gsap.set(el.children, { y: 80, opacity: 0, skewY: 5 });
                    gsap.set(el, { visibility: 'visible', opacity: 1 });

                    ScrollTrigger.create({
                        trigger: el,
                        start: 'top 85%',
                        onEnter: () => {
                            gsap.to(el.children, {
                                y: 0, opacity: 1, skewY: 0,
                                stagger: 0.2,
                                duration: 1.5,
                                ease: ANIMATION_CONFIG.easings.supreme,
                                overwrite: true
                            });
                        }
                    });
                });
            }

            createSingleReveal('.gsap-hero-cta', 'v23', {
                start: 'top 85%',
                from: { scale: 0.5, opacity: 0 },
                to: { scale: 1, opacity: 1, delay: 0.5, duration: 1.4, ease: ANIMATION_CONFIG.easings.elastic }
            });

            createSingleReveal('.gsap-hero-image', 'v23', {
                start: 'top 95%',
                from: { y: 60, opacity: 0, transformOrigin: 'center bottom' },
                isTimeline: true,
                animation: (el: Element) => {
                    const tl = gsap.timeline();
                    tl.to(el, {
                        y: 0, opacity: 1, duration: 2.0, ease: "power2.out", clearProps: "transform"
                    })
                        .to(el, {
                            y: -15, rotation: 1, duration: 4,
                            ease: "sine.inOut", yoyo: true, repeat: -1, force3D: true
                        });
                }
            });

            // 7. SEÇÃO SOBRE
            createSingleReveal('.gsap-about-image', 'v23', {
                from: { opacity: 0, x: -30 },
                to: { opacity: 1, x: 0, duration: 0.8, ease: ANIMATION_CONFIG.easings.fluid }
            });

            createBatchReveal('.gsap-about-text', 'v23', {
                from: { opacity: 0, y: 20 },
                to: { opacity: 1, y: 0, duration: 0.6, ease: ANIMATION_CONFIG.easings.fluid },
                stagger: 0.1
            });

            createBatchReveal('.gsap-about-card', 'v23', {
                from: { opacity: 0, y: 30 },
                to: { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                stagger: 0.2
            });

            // 8. CONTATO & FOOTER
            createBatchReveal('.gsap-contact-link', 'v23', {
                from: { opacity: 0, x: -20 },
                to: { opacity: 1, x: 0, duration: 0.6 }
            });
            createSingleReveal('.gsap-contact-card', 'v23', {
                from: { opacity: 0, x: 40 },
                to: { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
            });

            ScrollTrigger.refresh();

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return containerRef;
};

