import { LucideIcon, Target, Microscope, Brain, Gem, Dumbbell, Heart } from 'lucide-react';

export interface Service {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    borderColor: string;
    bgGlow: string;
    hoverBg: string;
    barColor: string;
}

export const services: Service[] = [
    {
        title: "Weight Loss & Obesity",
        description: "Obesity is considered a major public health issue worldwide. Nutrition plays a fundamental role in reversing this condition and promoting health and quality of life.",
        icon: Target,
        color: "text-emerald-600",
        borderColor: "border-emerald-500",
        bgGlow: "bg-emerald-500/20",
        hoverBg: "from-emerald-50 via-white to-emerald-50/60",
        barColor: "bg-emerald-500"
    },
    {
        title: "Parasite Cleanse",
        description: "Specific protocols for parasite elimination and gut microbiota rebalancing, essential for proper nutrient absorption.",
        icon: Microscope,
        color: "text-blue-600",
        borderColor: "border-blue-500",
        bgGlow: "bg-blue-500/20",
        hoverBg: "from-blue-50 via-white to-blue-50/60",
        barColor: "bg-blue-500"
    },
    {
        title: "Functional Nutrition",
        description: "Aims to treat imbalances caused by nutritional excess or deficiency in each individual, through the development of a balanced and individualized menu.",
        icon: Brain,
        color: "text-purple-600",
        borderColor: "border-purple-500",
        bgGlow: "bg-purple-500/20",
        hoverBg: "from-purple-50 via-white to-purple-50/60",
        barColor: "bg-purple-500"
    },
    {
        title: "Nutrition & Aesthetics",
        description: "Relates the improvement of aesthetic treatment results with applied nutritional conduct, based on the concept that beauty starts from within.",
        icon: Gem,
        color: "text-pink-600",
        borderColor: "border-pink-500",
        bgGlow: "bg-pink-500/20",
        hoverBg: "from-pink-50 via-white to-pink-50/60",
        barColor: "bg-pink-500"
    },
    {
        title: "Sports Nutrition",
        description: "Application of nutrition, biochemistry, and physiology knowledge in sports to maintain energy balance by indicating necessary nutrients for each organism.",
        icon: Dumbbell,
        color: "text-orange-600",
        borderColor: "border-orange-500",
        bgGlow: "bg-orange-500/20",
        hoverBg: "from-orange-50 via-white to-orange-50/60",
        barColor: "bg-orange-500"
    },
    {
        title: "Food Intolerances",
        description: "There are various types of food intolerances and allergies. Nutrition aims to analyze which foods cause allergy or intolerance and guide the patient with an adequate and individualized diet.",
        icon: Heart,
        color: "text-red-600",
        borderColor: "border-red-500",
        bgGlow: "bg-red-500/20",
        hoverBg: "from-red-50 via-white to-red-50/60",
        barColor: "bg-red-500"
    }
];
