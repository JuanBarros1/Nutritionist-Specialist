import { Heart, Target, LucideIcon } from 'lucide-react';

export interface PillarData {
    id: string;
    conceptId: string;
    title: string;
    description: string;
    icon: LucideIcon;
    colors: {
        text: string;
        bg: string;
        border: string;
        shadow: string;
        gradientFrom: string;
    };
}

export const PILLARS_DATA: PillarData[] = [
    {
        id: 'balance',
        conceptId: 'Concept_01',
        title: 'Balance',
        description: 'Perfect synchrony between biology and lifestyle.',
        icon: Heart,
        colors: {
            text: 'text-emerald-400',
            bg: 'bg-emerald-500/10',
            border: 'border-emerald-500/20 hover:border-emerald-500/30',
            shadow: 'group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]',
            gradientFrom: 'from-emerald-500/5'
        }
    },
    {
        id: 'individualization',
        conceptId: 'Protocol_02',
        title: 'Individualization',
        description: 'Exclusive strategies for your unique genetics.',
        icon: Target,
        colors: {
            text: 'text-teal-400',
            bg: 'bg-teal-500/10',
            border: 'border-teal-500/20 hover:border-teal-500/30',
            shadow: 'group-hover:shadow-[0_0_20px_rgba(20,184,166,0.2)]',
            gradientFrom: 'from-teal-500/5'
        }
    }
];
