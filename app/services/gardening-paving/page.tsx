"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Trees, Layers, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function GardeningPaving() {
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
                                Gardening & Paving
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                Landscape design and professional paving services for commercial properties.
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
                                src="/assets/workingarise1.png"
                                alt="Gardening & Paving"
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
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">Our Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card>
                            <CardContent className="p-6">
                                <Trees className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Landscape Design</h3>
                                <p className="text-muted-foreground">
                                    Custom landscape planning and installation services.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <Layers className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Professional Paving</h3>
                                <p className="text-muted-foreground">
                                    High-quality paving for driveways, walkways, and parking areas.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <Sprout className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Garden Maintenance</h3>
                                <p className="text-muted-foreground">
                                    Regular upkeep to keep your outdoor spaces beautiful.
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
                                        <h4 className="font-semibold mb-1">Landscape Design & Installation</h4>
                                        <p className="text-muted-foreground">Custom garden design, plant selection, and installation</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Lawn Care & Maintenance</h4>
                                        <p className="text-muted-foreground">Mowing, fertilization, and seasonal lawn care</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Paving & Hardscaping</h4>
                                        <p className="text-muted-foreground">Interlocking pavers, concrete, and stone installations</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Irrigation Systems</h4>
                                        <p className="text-muted-foreground">Automated sprinkler systems and drip irrigation</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Tree & Shrub Care</h4>
                                        <p className="text-muted-foreground">Pruning, trimming, and plant health management</p>
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
                            <h2 className="text-3xl font-bold mb-4">Transform Your Outdoor Space</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Create beautiful, functional outdoor areas for your property.
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
