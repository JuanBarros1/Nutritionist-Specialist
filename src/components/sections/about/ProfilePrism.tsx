import React, { memo } from 'react';
import { Award } from 'lucide-react';
import aboutProfileImage from '@/assets/about-profile-custom.webp';

const ProfilePrism = memo(() => (
    <div className="gsap-about-image lg:col-span-6 relative order-2 lg:order-1 mt-12 lg:mt-0">
        {/* Technical Prism Frame */}
        <div className="relative p-3 group max-w-xl mx-auto lg:ml-0">
            {/* Rotating Corner Orbits */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-emerald-500 rounded-tl-2xl animate-spin-slow opacity-40 group-hover:opacity-100 transition-opacity" style={{ animationDuration: '8s' }} />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-emerald-500 rounded-tr-2xl animate-spin-slow opacity-40 group-hover:opacity-100 transition-opacity" style={{ animationDuration: '8s', animationDirection: 'reverse' }} />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-emerald-500 rounded-bl-2xl animate-spin-slow opacity-40 group-hover:opacity-100 transition-opacity" style={{ animationDuration: '8s', animationDirection: 'reverse' }} />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-emerald-500 rounded-br-2xl animate-spin-slow opacity-40 group-hover:opacity-100 transition-opacity" style={{ animationDuration: '8s' }} />

            {/* Main Prism Container */}
            <div className="relative rounded-[3.5rem] overflow-hidden p-2 bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/20 shadow-2xl backdrop-blur-sm">
                {/* Refractive Glass Border */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] pointer-events-none" />

                <div className="relative rounded-[3.2rem] overflow-hidden bg-black ring-1 ring-white/10 h-[400px] md:h-[480px] lg:h-[500px] shadow-inner">
                    <img
                        src={aboutProfileImage}
                        alt="Dra. Carolina Mendes"
                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                        loading="lazy"
                    />

                    {/* Cinematic Technical Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                    <div className="absolute inset-0 bg-emerald-500/5 group-hover:animate-pulse pointer-events-none" />

                    {/* Data Pulse Line */}
                    <div className="absolute inset-x-0 h-[100px] bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent -top-[100px] animate-data-stream" />

                    {/* Floating Tech Points */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-[30%] left-[25%] w-2 h-2 bg-emerald-400 rounded-full animate-ping shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                    </div>

                    {/* Technical Scanner */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-scanner z-20" />

                    {/* ══ SUPREME DIAGNOSTIC BADGE ══ */}
                    <div className="absolute bottom-4 inset-x-4 p-4">
                        <div className="flex items-center justify-between bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl group-hover:border-emerald-500/30 transition-all duration-500">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-emerald-500 blur-md opacity-20 animate-pulse" />
                                    <Award className="w-6 h-6 text-emerald-400 relative z-10" />
                                </div>
                                <div>
                                    <span className="block text-[9px] text-emerald-500 font-bold uppercase tracking-[0.2em] mb-0.5">EXCELLENCE</span>
                                    <span className="block text-white font-black text-xs uppercase tracking-wider">DR. CAROLINA MENDES</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="text-[8px] text-gray-500 font-mono tracking-tighter">STATUS: SYNCED</div>
                                <div className="flex gap-1 mt-1">
                                    <div className="w-1 h-3 bg-emerald-500/60 rounded-full animate-pulse" />
                                    <div className="w-1 h-3 bg-emerald-500/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                                    <div className="w-1 h-3 bg-emerald-500/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Aura Glow */}
            <div className="absolute -inset-10 bg-emerald-500/5 blur-[80px] rounded-full -z-10 group-hover:bg-emerald-500/10 transition-colors duration-700" />
        </div>
    </div>
));

ProfilePrism.displayName = 'ProfilePrism';

export default ProfilePrism;
