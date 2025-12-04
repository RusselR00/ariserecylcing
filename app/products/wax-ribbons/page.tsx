"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Sparkles, Printer, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function WaxRibbons() {
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
                                Wax Ribbons
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                Premium quality ribbons for clear, crisp thermal transfer printing.
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
                                src="/assets/print2.png"
                                alt="Wax Ribbons"
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
                                <Sparkles className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Superior Print Quality</h3>
                                <p className="text-muted-foreground">
                                    Exceptional clarity and sharpness for barcodes and text.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <Printer className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Wide Compatibility</h3>
                                <p className="text-muted-foreground">
                                    Works with all major thermal transfer printer brands.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Cost-Effective</h3>
                                <p className="text-muted-foreground">
                                    Economical solution for high-volume label printing applications.
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
                                    <span className="font-semibold">Ribbon Types:</span>
                                    <span className="text-muted-foreground">Wax, Wax-Resin, Resin</span>
                                </div>
                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-semibold">Core Sizes:</span>
                                    <span className="text-muted-foreground">0.5", 1"</span>
                                </div>
                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-semibold">Widths Available:</span>
                                    <span className="text-muted-foreground">40mm to 220mm</span>
                                </div>
                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-semibold">Length:</span>
                                    <span className="text-muted-foreground">74m, 110m, 300m, 450m</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Applications:</span>
                                    <span className="text-muted-foreground">Shipping Labels, Product Tags, Barcodes</span>
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
                            <h2 className="text-3xl font-bold mb-4">Stock Up on Quality Ribbons</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Get competitive pricing on bulk orders of thermal transfer ribbons.
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
