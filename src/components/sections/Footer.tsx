import React, { useMemo } from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { cn } from '@/utils';
import { socialLinks } from '@/constants/contact';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = React.memo(({ className }) => {
  const currentYear = new Date().getFullYear();

  const iconMap = useMemo(() => ({
    Instagram: Instagram,
    Facebook: Facebook,
    LinkedIn: Linkedin
  }), []);

  return (
    <footer className={cn("bg-black border-t border-white/10 text-white py-12", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-500 mb-4">
            Nutritionist CRN 12345 • Transforming lives through nutrition
          </p>

          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => {
              const Icon = iconMap[social.name as keyof typeof iconMap];
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-500 hover:text-emerald-400 transition-colors"
                  aria-label={social.name}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </a>
              );
            })}
          </div>

          <div className="pt-8 border-t border-white/10 text-gray-600 text-sm">
            © {currentYear} Dr. Carolina Mendes. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
