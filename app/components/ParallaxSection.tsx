"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ParallaxSectionProps {
    children: ReactNode;
    speed?: number;
    className?: string;
    direction?: "up" | "down";
}

export default function ParallaxSection({
    children,
    speed = 0.5,
    className = "",
    direction = "up",
}: ParallaxSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

            if (scrollProgress >= 0 && scrollProgress <= 1) {
                const movement = scrollProgress * 100 * speed;
                setOffset(direction === "up" ? -movement : movement);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial calculation

        return () => window.removeEventListener("scroll", handleScroll);
    }, [speed, direction]);

    return (
        <div ref={sectionRef} className={`parallax-slow ${className}`}>
            <div
                style={{
                    transform: `translateY(${offset}px)`,
                    willChange: "transform",
                    height: "100%",
                    width: "100%",
                }}
            >
                {children}
            </div>
        </div>
    );
}
