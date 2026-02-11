import React, { useState, useEffect } from 'react';
import { cn } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { testimonials } from '@/constants/testimonials';
import TestimonialCard from '@/components/sections/testimonials/TestimonialCard';

interface TestimonialsProps {
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const containerRef = useGsapReveal();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className={cn(
        "relative z-10 py-24 overflow-hidden",
        className
      )}
    >
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Keeping the same style but updating text if needed */}
        <div className="text-center mb-12">
          <h2 className="gsap-reveal-text text-4xl lg:text-5xl font-black mb-6 leading-tight text-white">
            What our <span className="text-emerald-400">clients say</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="gsap-reveal-testimonial-container relative h-[650px] flex items-center justify-center perspective-1000">

          <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
            <AnimatePresence mode='popLayout'>
              {testimonials.map((testimonial, index) => {
                // Only render visible cards for performance + simpler transitions if needed, 
                // but for smooth sliding we render all and rely on styles.
                // Logic: determine position relative to active.
                const total = testimonials.length;
                let position = (index - currentIndex + total) % total;
                if (position > total / 2) position -= total;

                // Force strict ordering for stacking context
                // 0 is top, +/-1 are below.
                const zIndex = 10 - Math.abs(position);

                const isVisible = Math.abs(position) <= 1;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2 w-full max-w-sm md:max-w-md"
                    initial={false}
                    animate={{
                      x: `calc(-50% + ${position * (typeof window !== 'undefined' && window.innerWidth < 768 ? 90 : 460)}px)`, // Adjusted spacing to be closer but not touching
                      y: '-50%',
                      scale: position === 0 ? 1 : 0.85,
                      opacity: 1, // Full opacity to block the stars
                      zIndex: zIndex,
                      rotateY: position * -5, // Subtle 3D rotation
                      filter: position === 0 ? 'brightness(1)' : 'brightness(0.85)', // Shade the side cards slightly less
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.32, 0.72, 0, 1]
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

