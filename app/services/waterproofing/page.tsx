"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Building, Droplets, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function Waterproofing() {
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
                                Waterproofing Services
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                Advanced waterproofing and insulation solutions to protect your property.
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
                                src="/assets/insulation2.png"
                                alt="Waterproofing"
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
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">Our Waterproofing Solutions</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card>
                            <CardContent className="p-6">
                                <Building className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Roof Waterproofing</h3>
                                <p className="text-muted-foreground">
                                    Complete roof protection with advanced membrane systems.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <Droplets className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Basement Protection</h3>
                                <p className="text-muted-foreground">
                                    Prevent water seepage and dampness in underground areas.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Long-Term Warranty</h3>
                                <p className="text-muted-foreground">
                                    Guaranteed protection with comprehensive warranty coverage.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-16 bg-brand-light">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">Waterproofing Services</h2>
                    <Card className="max-w-3xl mx-auto">
                        <CardContent className="p-8">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Roof & Terrace Waterproofing</h4>
                                        <p className="text-muted-foreground">Bitumen, APP, and liquid membrane applications</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Basement & Foundation</h4>
                                        <p className="text-muted-foreground">Tanking systems and cavity drainage solutions</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Bathroom & Wet Areas</h4>
                                        <p className="text-muted-foreground">Specialized waterproofing for bathrooms and kitchens</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Expansion Joint Sealing</h4>
                                        <p className="text-muted-foreground">Professional joint sealing and crack repairs</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Thermal Insulation</h4>
                                        <p className="text-muted-foreground">Energy-efficient insulation for roofs and walls</p>
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
                            <h2 className="text-3xl font-bold mb-4">Protect Your Property</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Get professional waterproofing solutions that last.
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
