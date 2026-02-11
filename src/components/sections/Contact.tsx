
import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { cn } from '@/utils';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { contactLinks, socialLinks } from '@/constants/contact';
import ShinyButton from '@/components/ui/ShinyButton';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = React.memo(({ className }) => {
  const containerRef = useGsapReveal();

  return (
    <section
      id="contact"
      ref={containerRef}
      className={cn(
        "relative z-10 py-24 lg:py-32 overflow-hidden",
        className
      )}
    >
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text & Links Side */}
          <div className="space-y-10 lg:pr-8">
            <div className="space-y-4">
              <div className="h-px w-12 bg-emerald-500/40" />
              <h2 className="gsap-reveal-text text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter">
                Let's talk <br />
                <span className="text-emerald-400">about your future</span>
              </h2>
            </div>

            <div className="space-y-6">
              {contactLinks.map((link, index) => (
                <div
                  key={index}
                  className="gsap-contact-link group"
                >
                  <a
                    href={link.href}
                    className="block"
                  >
                    <span className="text-[9px] font-black text-emerald-500/40 uppercase tracking-[0.4em] mb-1 block">
                      {link.label}
                    </span>
                    <div className="flex items-center gap-3">
                      <p className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {link.value}
                      </p>
                      <ArrowUpRight className="w-4 h-4 text-white/5 group-hover:text-emerald-400 transition-all" />
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Social Connection */}
            <div className="pt-4 flex items-center gap-8">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="gsap-contact-link text-xs font-bold text-white/20 hover:text-emerald-400 transition-colors uppercase tracking-widest"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Abstract CTA Side */}
          <div className="relative">
            <div className="gsap-contact-card supreme-card-magnetic relative p-8 lg:p-10 bg-[#f7faf9]/95 backdrop-blur-2xl border border-emerald-900/5 rounded-[32px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.25)]">
              {/* Visual Texture */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-emerald-900/5" />

              <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-black text-[#051a14] leading-[1.1] tracking-tighter">
                    Consultation <br />
                    <span className="text-[#051a14]">Booking.</span>
                  </h3>
                  <p className="text-base text-[#051a14]/60 font-medium leading-relaxed max-w-xs">
                    Protocols individually designed for your longevity goals.
                  </p>
                </div>

                <div className="pt-2">
                  <ShinyButton
                    className="inline-flex px-24 text-[11px] font-black uppercase tracking-[0.4em]"
                    onClick={() => window.open("mailto:juanbarros192@gmail.com", "_self")}
                  >
                    Send Email
                  </ShinyButton>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2 text-[#051a14]/10">
                  <span className="text-[9px] uppercase tracking-[0.4em] font-semibold">Boutique Wellness Experience</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
