"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Trading", href: "#trading" },
    { name: "Maintenance", href: "#maintenance" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
            // Close mobile menu first
            setIsMobileMenuOpen(false);

            // Use scrollIntoView with smooth behavior
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    const handleButtonClick = () => {
        const element = document.getElementById("contact");
        if (element) {
            setIsMobileMenuOpen(false);
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "backdrop-blur-lg bg-black/40 py-2 shadow-lg"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="#hero"
                    className="flex items-center gap-2"
                    onClick={(e) => handleNavClick(e, "#hero")}
                >
                    <div className="relative h-24 w-72">
                        <Image
                            src="/assets/newerlogo.png"
                            alt="Arise Trading & Maintenance"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white text-lg font-medium hover:text-secondary transition-all relative group"
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                        </Link>
                    ))}

                    {/* CTA BUTTON */}
                    <button
                        onClick={handleButtonClick}
                        className="bg-white text-brand-dark font-semibold text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-white/90 transition-all cursor-pointer"
                    >
                        Get Quote
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-black/70 border-t border-white/20 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white text-lg font-medium py-2 border-b border-white/10 last:border-0"
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* CTA Mobile */}
                    <button
                        className="w-full mt-2 bg-white text-brand-dark font-semibold py-3 rounded-full"
                        onClick={handleButtonClick}
                    >
                        Get Quote
                    </button>
                </div>
            )}
        </header>
    );
}
