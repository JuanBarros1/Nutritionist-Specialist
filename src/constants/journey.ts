import React from 'react';
import { GraduationCap, Award, Heart, Star, BookOpen, Rocket } from 'lucide-react';

export interface JourneyItem {
    year: string;
    title: string;
    description: string;
    icon: React.ElementType;
}

export const journeyData: JourneyItem[] = [
    {
        year: '2015',
        title: "Passion's Beginning",
        description: 'Entered Nutrition school, driven by the desire to transform lives through food.',
        icon: Heart,
    },
    {
        year: '2019',
        title: 'Excellence in Education',
        description: 'Graduated with honors and immediately started specializations in Clinical and Sports Nutrition.',
        icon: GraduationCap,
    },
    {
        year: '2020',
        title: 'First Consultations',
        description: 'Started clinical practice, developing active listening and an individualized approach.',
        icon: BookOpen,
    },
    {
        year: '2022',
        title: 'Method Development',
        description: 'Creation of an exclusive method uniting science, behavior, and sustainable results.',
        icon: Star,
    },
    {
        year: '2024',
        title: 'Reference in the Field',
        description: 'Hundreds of lives transformed and recognition for excellence in care and results.',
        icon: Award,
    },
    {
        year: 'Today',
        title: 'Continuous Evolution',
        description: 'Always seeking the latest scientific updates to offer the best to my patients.',
        icon: Rocket,
    },
];
