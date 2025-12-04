"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Package, Layers, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function ThermalLabels() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <WhatsAppButton />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="container px-4">
                    <Link href="/#trading" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Products
                    </Link>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                                Thermal Labels
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                Custom size and adhesive options for all labeling applications.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="bg-primary hover:bg-primary/90">
                                    <Link href="/#contact">Request Quote</Link>
                                </Button>
                                <Button size="lg" variant="outline">
                                    <Link href="https://wa.me/97333170820" target="_blank">Contact Sales</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/print1.png"
                                alt="Thermal Labels"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">Key Features</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card>
                            <CardContent className="p-6">
                                <Package className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Custom Sizes</h3>
                                <p className="text-muted-foreground">
                                    Any size, shape, or dimension to match your exact requirements.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <Layers className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Multiple Adhesives</h3>
                                <p className="text-muted-foreground">
                                    Permanent, removable, or freezer-grade adhesive options available.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Durable Material</h3>
                                <p className="text-muted-foreground">
                                    Resistant to moisture, heat, and environmental conditions.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Specifications */}
            <section className="py-16 bg-brand-light">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">Specifications</h2>
                    <Card className="max-w-3xl mx-auto">
                        <CardContent className="p-8">
                            <div className="space-y-4">
                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-semibold">Material Types:</span>
                                    <span className="text-muted-foreground">Direct Thermal, Thermal Transfer</span>
                                </div>
                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-semibold">Adhesive Options:</span>
                                    <span className="text-muted-foreground">Permanent, Removable, Freezer</span>
                                </div>
                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-semibold">Core Sizes:</span>
                                    <span className="text-muted-foreground">25mm, 40mm, 76mm</span>
                                </div>
                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-semibold">Print Method:</span>
                                    <span className="text-muted-foreground">Thermal Direct, Thermal Transfer</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Applications:</span>
                                    <span className="text-muted-foreground">Shipping, Inventory, Retail, Healthcare</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="container px-4">
                    <Card className="bg-gradient-to-r from-primary to-primary/80 text-white">
                        <CardContent className="p-12 text-center">
                            <h2 className="text-3xl font-bold mb-4">Need Custom Labels?</h2>
                            <p className="text-xl mb-8 opacity-90">
                                We offer fully customized thermal labels to meet your specific needs.
                            </p>
                            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                                <Link href="/#contact">Get a Quote</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <Footer />
        </main>
    );
}
