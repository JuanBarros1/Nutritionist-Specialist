import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom';
import GradientButton from '@/components/ui/GradientButton';
import { navLinks } from '@/constants/navigation';

const MobileMenuPortal = ({ children }: { children: React.ReactNode }) => {
    if (typeof window === 'undefined') return null;
    return ReactDOM.createPortal(children, document.body);
};

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 10);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
                    isScrolled
                        ? 'bg-black/80 backdrop-blur-xl shadow-lg shadow-emerald-900/10 py-3'
                        : 'bg-transparent py-5 lg:py-6'
                )}
            >
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex justify-between items-center">
                        {/* Logo - Text Based for Supreme Dark */}
                        <a href="#home" className="flex items-center gap-3 group relative z-50">
                            <div className="flex flex-col">
                                <span className="font-black text-white text-xl leading-none tracking-tight">Dr. Carolina</span>
                                <span className="text-[10px] text-emerald-400 font-bold tracking-[0.25em] uppercase">Nutritionist</span>
                            </div>
                        </a>

                        {/* Desktop Navigation - Dark Glass */}
                        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 bg-white/5 backdrop-blur-md px-8 py-2.5 rounded-full border border-white/10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-emerald-400 font-medium text-[15px] transition-all duration-300 relative group py-1"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full rounded-full" />
                                </a>
                            ))}
                        </nav>

                        <div className="hidden lg:block">
                            <GradientButton asChild className="rounded-full shadow-lg shadow-emerald-900/30">
                                <a href="#contact">
                                    Book Consultation
                                </a>
                            </GradientButton>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden p-2 text-white hover:text-emerald-400 transition-colors relative z-50 rounded-full hover:bg-white/10"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>

            </motion.header>

            {/* Mobile Menu Portal - Moves outside header stacking context */}
            {isMobileMenuOpen && (
                <MobileMenuPortal>
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-0 z-[9999] lg:hidden flex flex-col pt-28 px-8 overflow-hidden"
                            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, #020106, #050812)' }}
                        >
                            {/* ══ SUPREME BACKGROUND EFFECTS ══ */}
                            {/* Deep Space Noise */}
                            <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

                            {/* Aurora Glows */}
                            <div className="absolute top-[-10%] right-[-20%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
                            <div className="absolute bottom-[-10%] left-[-20%] w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />

                            {/* Close Button Inside Portal */}
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="absolute top-6 right-4 p-2 text-white/50 hover:text-white transition-colors z-[10000] rounded-full hover:bg-white/10"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            <div className="flex flex-col space-y-1 relative z-10 h-full overflow-y-auto no-scrollbar">
                                {navLinks.map((link, idx) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.08, ease: "easeOut" }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="relative text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-400 py-6 border-b border-white/[0.08] flex items-center justify-between group overflow-hidden"
                                    >
                                        <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-500">{link.name}</span>

                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />

                                        <ChevronRight className="w-6 h-6 text-emerald-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </motion.a>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="pt-8 pb-10"
                                >
                                    <GradientButton
                                        asChild
                                        className="w-full text-base tracking-[0.05em]"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <a href="#contact">
                                            Book Consultation
                                        </a>
                                    </GradientButton>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </MobileMenuPortal>
            )}
        </>
    );
};

export default React.memo(Header);

