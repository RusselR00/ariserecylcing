"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
    children: ReactNode;
    animation?: "fadeIn" | "fadeInUp" | "slideInLeft" | "slideInRight" | "scaleIn";
    delay?: number;
    className?: string;
    threshold?: number;
}

export default function ScrollAnimation({
    children,
    animation = "fadeInUp",
    delay = 0,
    className = "",
    threshold = 0.1,
}: ScrollAnimationProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Initially hide the element
        element.style.opacity = "0";

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add animation class when element enters viewport
                        setTimeout(() => {
                            element.classList.add(`animate-${animation}`);
                            element.style.opacity = "1";
                        }, delay);

                        // Unobserve after animation triggers
                        observer.unobserve(element);
                    }
                });
            },
            {
                threshold,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [animation, delay, threshold]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
}

// Grid stagger animation wrapper
interface StaggerGridProps {
    children: ReactNode[];
    animation?: "fadeInUp" | "scaleIn";
    staggerDelay?: number;
    className?: string;
}

export function StaggerGrid({
    children,
    animation = "fadeInUp",
    staggerDelay = 100,
    className = "",
}: StaggerGridProps) {
    return (
        <div className={className}>
            {children.map((child, index) => (
                <ScrollAnimation
                    key={index}
                    animation={animation}
                    delay={index * staggerDelay}
                >
                    {child}
                </ScrollAnimation>
            ))}
        </div>
    );
}
