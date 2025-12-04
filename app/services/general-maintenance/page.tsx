"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Wrench, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function GeneralMaintenance() {
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
                                General Maintenance
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                Comprehensive property maintenance services to keep your facilities in optimal condition.
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
                                src="/assets/tools1.png"
                                alt="General Maintenance"
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
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">Our Services Include</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card>
                            <CardContent className="p-6">
                                <Wrench className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Preventive Maintenance</h3>
                                <p className="text-muted-foreground">
                                    Regular inspections and scheduled maintenance to prevent costly repairs.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <Clock className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">24/7 Emergency Support</h3>
                                <p className="text-muted-foreground">
                                    Round-the-clock emergency response for urgent maintenance issues.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                                <p className="text-muted-foreground">
                                    All work performed by certified technicians with quality guarantees.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-16 bg-brand-light">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">What We Cover</h2>
                    <Card className="max-w-3xl mx-auto">
                        <CardContent className="p-8">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">HVAC Systems</h4>
                                        <p className="text-muted-foreground">Maintenance and repair of air conditioning and ventilation systems</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Plumbing & Fixtures</h4>
                                        <p className="text-muted-foreground">Leak repairs, pipe maintenance, and fixture installations</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Electrical Systems</h4>
                                        <p className="text-muted-foreground">Wiring, lighting, and electrical equipment maintenance</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Building Structure</h4>
                                        <p className="text-muted-foreground">Walls, doors, windows, and general structural repairs</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Safety Systems</h4>
                                        <p className="text-muted-foreground">Fire alarms, emergency exits, and safety equipment checks</p>
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
                            <h2 className="text-3xl font-bold mb-4">Need Maintenance Services?</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Contact us today for reliable, professional maintenance solutions.
                            </p>
                            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                                <Link href="/#contact">Schedule Service</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <Footer />
        </main>
    );
}
