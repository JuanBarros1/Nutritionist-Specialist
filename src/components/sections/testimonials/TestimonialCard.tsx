import React, { memo } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/utils';
import { Testimonial } from '@/constants/testimonials';

// Base Card Components
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = memo(({ testimonial }) => {
    return (
        <Card className="h-[500px] md:h-[550px] bg-white border border-white/60 shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:shadow-emerald-500/40 hover:border-emerald-300/50 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 rounded-[2.5rem] overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-200/30 to-transparent skew-x-12 -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out z-0 pointer-events-none" />
            <CardContent className="p-10 flex flex-col h-full gap-8 relative z-10">
                <div className="flex gap-1.5 group-hover:gap-2 transition-all duration-300">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-sm group-hover:scale-110 transition-transform duration-300 delay-[50ms]" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg object-cover shadow-md bg-gradient-to-br ring-4 ring-white/50 group-hover:ring-emerald-400/50 group-hover:scale-110 transition-all duration-500",
                        testimonial.color || "from-gray-500 to-gray-600"
                    )}>
                        {testimonial.image.length > 2 ? (
                            <img src={testimonial.image} alt={testimonial.name} className="w-full h-full rounded-full object-cover" />
                        ) : (
                            testimonial.image
                        )}
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg leading-none mb-1 group-hover:text-emerald-800 transition-colors duration-300">{testimonial.name}</h4>
                        <span className="text-emerald-600 font-semibold text-sm capitalize opacity-80">{testimonial.role}</span>
                    </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-[1.05rem] font-medium italic relative z-10 pt-4 border-t border-emerald-100/50 group-hover:border-emerald-200/80 transition-colors duration-300">
                    "{testimonial.text}"
                </p>
            </CardContent>
        </Card>
    );
});

TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;
