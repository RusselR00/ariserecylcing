"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Package, Truck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function ThermalPaperRolls() {
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
                                Thermal Paper Rolls
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                High-sensitivity, long-life image paper for all your thermal printing needs.
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
                                src="/assets/rollingpaper1.png"
                                alt="Thermal Paper Rolls"
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
                                <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">High Sensitivity</h3>
                                <p className="text-muted-foreground">
                                    Superior image quality with excellent print clarity and contrast.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Long-Life Image</h3>
                                <p className="text-muted-foreground">
                                    Fade-resistant coating ensures your receipts remain readable for years.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <Package className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Custom Sizes</h3>
                                <p className="text-muted-foreground">
                                    Available in various widths and lengths to fit your specific requirements.
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
                                    <span className="font-semibold">Available Widths:</span>
                                    <span className="text-muted-foreground">57mm, 80mm, 112mm</span>
                                </div>
                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-semibold">Core Size:</span>
                                    <span className="text-muted-foreground">12mm, 25mm</span>
                                </div>
                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-semibold">Paper Weight:</span>
                                    <span className="text-muted-foreground">48-55 GSM</span>
                                </div>
                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-semibold">Image Life:</span>
                                    <span className="text-muted-foreground">5+ years</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Applications:</span>
                                    <span className="text-muted-foreground">POS, ATM, Parking, Retail</span>
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
                            <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Contact us today for competitive pricing and bulk discounts.
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
