"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Building2, Paintbrush, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function ExteriorWorks() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <WhatsAppButton />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="container px-4">
                    <Link href="/#maintenance" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Services
                    </Link>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                                Exterior Works
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                Professional exterior maintenance and renovation solutions for commercial properties.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="bg-primary hover:bg-primary/90">
                                    <Link href="/#contact">Request Service</Link>
                                </Button>
                                <Button size="lg" variant="outline">
                                    <Link href="https://wa.me/97333170820" target="_blank">Contact Us</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/building1.png"
                                alt="Exterior Works"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Offered */}
            <section className="py-16">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">Our Exterior Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card>
                            <CardContent className="p-6">
                                <Building2 className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Facade Maintenance</h3>
                                <p className="text-muted-foreground">
                                    Cleaning, repairs, and restoration of building exteriors.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <Paintbrush className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Exterior Painting</h3>
                                <p className="text-muted-foreground">
                                    Weather-resistant coatings and professional finishing.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Weather Protection</h3>
                                <p className="text-muted-foreground">
                                    Protective treatments against harsh environmental conditions.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-16 bg-brand-light">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">What We Offer</h2>
                    <Card className="max-w-3xl mx-auto">
                        <CardContent className="p-8">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Building Facade Cleaning</h4>
                                        <p className="text-muted-foreground">High-pressure washing and chemical cleaning services</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Exterior Painting & Coating</h4>
                                        <p className="text-muted-foreground">Weather-resistant paints and protective coatings</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Cladding & Siding</h4>
                                        <p className="text-muted-foreground">Installation and repair of exterior cladding systems</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Window & Door Maintenance</h4>
                                        <p className="text-muted-foreground">Repair, replacement, and weatherproofing</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Structural Repairs</h4>
                                        <p className="text-muted-foreground">Crack filling, concrete repairs, and reinforcement</p>
                                    </div>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="container px-4">
                    <Card className="bg-gradient-to-r from-primary to-primary/80 text-white">
                        <CardContent className="p-12 text-center">
                            <h2 className="text-3xl font-bold mb-4">Enhance Your Building's Exterior</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Professional exterior maintenance to protect and beautify your property.
                            </p>
                            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                                <Link href="/#contact">Get Started</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <Footer />
        </main>
    );
}
