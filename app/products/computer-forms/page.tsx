"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, FileText, Printer, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function ComputerForms() {
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
                                Computer Forms
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                Tailored multi-ply and continuous forms for business documentation.
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
                                src="/assets/printing realistic1.png"
                                alt="Computer Forms"
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
                                <FileText className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Multi-Ply Options</h3>
                                <p className="text-muted-foreground">
                                    2-ply, 3-ply, or 4-ply carbonless forms for instant copies.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <Printer className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Continuous Feed</h3>
                                <p className="text-muted-foreground">
                                    Compatible with dot matrix and impact printers for high-volume printing.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Custom Design</h3>
                                <p className="text-muted-foreground">
                                    Pre-printed with your logo, fields, and company information.
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
                                    <span className="font-semibold">Form Types:</span>
                                    <span className="text-muted-foreground">Continuous, Unit Sets, Snap Sets</span>
                                </div>
                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-semibold">Paper Plies:</span>
                                    <span className="text-muted-foreground">1-ply to 6-ply</span>
                                </div>
                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-semibold">Standard Sizes:</span>
                                    <span className="text-muted-foreground">9.5" x 11", 14.875" x 11", Custom</span>
                                </div>
                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-semibold">Perforation:</span>
                                    <span className="text-muted-foreground">Horizontal, Vertical, or Both</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Applications:</span>
                                    <span className="text-muted-foreground">Invoices, Delivery Notes, Purchase Orders</span>
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
                            <h2 className="text-3xl font-bold mb-4">Custom Forms for Your Business</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Get professional, customized computer forms tailored to your workflow.
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
