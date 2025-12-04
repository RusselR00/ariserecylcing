"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Paintbrush, Ruler, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function InteriorWorks() {
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
                                Interior Works
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                Custom interior fit-outs and carpentry services to transform your commercial spaces.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="bg-primary hover:bg-primary/90">
                                    <Link href="/#contact">Request Quote</Link>
                                </Button>
                                <Button size="lg" variant="outline">
                                    <Link href="https://wa.me/97333170820" target="_blank">Contact Us</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/carpentry1.png"
                                alt="Interior Works"
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
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">Our Interior Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card>
                            <CardContent className="p-6">
                                <Paintbrush className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Custom Carpentry</h3>
                                <p className="text-muted-foreground">
                                    Bespoke woodwork, cabinetry, and furniture tailored to your needs.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <Ruler className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Space Planning</h3>
                                <p className="text-muted-foreground">
                                    Efficient layout design to maximize your commercial space.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <Home className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Complete Fit-Outs</h3>
                                <p className="text-muted-foreground">
                                    Full interior renovation from concept to completion.
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
                                        <h4 className="font-semibold mb-1">False Ceiling & Partitions</h4>
                                        <p className="text-muted-foreground">Gypsum board, acoustic panels, and glass partitions</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Flooring Solutions</h4>
                                        <p className="text-muted-foreground">Tiles, vinyl, carpet, and wooden flooring installation</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Painting & Finishing</h4>
                                        <p className="text-muted-foreground">Professional painting, wallpaper, and decorative finishes</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Custom Furniture</h4>
                                        <p className="text-muted-foreground">Reception desks, workstations, and storage solutions</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Lighting Design</h4>
                                        <p className="text-muted-foreground">LED installations and ambient lighting solutions</p>
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
                            <h2 className="text-3xl font-bold mb-4">Transform Your Interior Space</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Let us create a stunning, functional interior for your business.
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
