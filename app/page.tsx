"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Phone, ShieldCheck, ThumbsUp, Truck, Wrench } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          type: "success",
          message: "Thank you! We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setFormStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Failed to submit form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary w-full overflow-x-hidden">
      <Header />
      <WhatsAppButton />

      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

        {/* Video Background */}
        <div className="absolute inset-0 z-0">

          {/* NEW OVERLAY — improves text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 z-10" />

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://4cwqegzr3mp4p6xh.public.blob.vercel-storage.com/Herosectionnew1.mp4" type="video/mp4" />
          </video>

        </div>

        {/* Content */}
        <div className="container relative z-20 px-4 text-center text-white space-y-8 animate-in fade-in zoom-in duration-1000">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
            Quality Products & <br />
            <span className="text-secondary">Service Excellence</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-semibold">
            Your trusted partner for Corporate Supplies, Trading, and Professional Maintenance solutions in the region.
          </p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-brand-dark font-semibold text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <Link href="#trading">Discover More</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white/10 hover:text-yellow-300 font-semibold text-lg px-8 py-6 h-auto rounded-full backdrop-blur-sm transition-all shadow-lg"
            >
              <Link href="#contact">Get a Quote</Link>
            </Button>

          </div>
        </div>

      </section>

      {/* TWO PILLAR SECTION */}
      <section className="py-24 bg-brand-light">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Trading Pillar */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-8 lg:p-12 space-y-6 relative z-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto group-hover:scale-110 transition-transform duration-500">
                  <Truck className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-brand-dark font-heading">Premium Trading Solutions</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Providing high-quality industrial and office supplies, specializing in thermal paper, ribbons, and custom printing forms for businesses of all sizes.
                </p>
                <Button variant="link" className="text-primary p-0 h-auto font-semibold text-lg group-hover:translate-x-2 transition-transform">
                  <Link href="#trading" className="flex items-center gap-2">
                    View Products <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
            </div>

            {/* Maintenance Pillar */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-8 lg:p-12 space-y-6 relative z-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-brand-dark mb-4 mx-auto group-hover:scale-110 transition-transform duration-500">
                  <Wrench className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-brand-dark font-heading">Professional Maintenance</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Dedicated to delivering reliable, cost-effective maintenance and interior/exterior fit-out solutions for commercial properties and facilities.
                </p>
                <Button variant="link" className="text-brand-dark p-0 h-auto font-semibold text-lg group-hover:translate-x-2 transition-transform">
                  <Link href="#maintenance" className="flex items-center gap-2">
                    View Services <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="trading" className="py-24 bg-white">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading">Our Trading Division</h2>
            <p className="text-lg text-muted-foreground">
              Arise Trading Division is your dependable supplier for specialized corporate consumables. We ensure your operations run smoothly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Thermal Paper Rolls", img: "/assets/rollingpaper1.png", desc: "High-sensitivity, long-life image paper.", link: "/products/thermal-paper-rolls" },
              { title: "Thermal Labels", img: "/assets/print1.png", desc: "Custom size and adhesive options.", link: "/products/thermal-labels" },
              { title: "Computer Forms", img: "/assets/printing realistic1.png", desc: "Tailored multi-ply and continuous forms.", link: "/products/computer-forms" },
              { title: "Wax Ribbons", img: "/assets/print2.png", desc: "Premium quality ribbons for clear printing.", link: "/products/wax-ribbons" },
            ].map((product, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-brand-dark">{product.title}</h3>
                  <p className="text-muted-foreground text-sm">{product.desc}</p>
                  <Link href={product.link}>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                      View Product
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAINTENANCE SERVICES */}
      <section id="maintenance" className="py-24 bg-brand-light">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading">Maintenance Services</h2>
            <p className="text-lg text-muted-foreground">
              Professional maintenance and fit-out solutions for commercial properties across the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "General Maintenance", img: "/assets/tools1.png", desc: "Comprehensive property maintenance services.", link: "/services/general-maintenance" },
              { title: "Interior Works", img: "/assets/carpentry1.png", desc: "Custom interior fit-outs and carpentry.", link: "/services/interior-works" },
              { title: "Exterior Works", img: "/assets/building1.png", desc: "Professional exterior maintenance solutions.", link: "/services/exterior-works" },
              { title: "Waterproofing", img: "/assets/insulation2.png", desc: "Advanced waterproofing and insulation.", link: "/services/waterproofing" },
              { title: "Electrical & Plumbing", img: "/assets/wiring1.png", desc: "Expert electrical wiring and plumbing.", link: "/services/electrical-plumbing" },
              { title: "Gardening & Paving", img: "/assets/workingarise1.png", desc: "Landscape design and professional paving.", link: "/services/gardening-paving" },
            ].map((service, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 flex flex-col h-full">
                <div className="relative h-48 rounded-xl overflow-hidden mb-6 bg-gray-100">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.desc}</p>
                <Link href={service.link}>
                  <Button variant="ghost" className="w-fit p-0 hover:bg-transparent hover:text-primary font-semibold group">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/arissuppplytwo.png"
                  alt="About Arise"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary rounded-2xl flex items-center justify-center p-4 shadow-xl hidden md:flex">
                <div className="text-center">
                  <span className="block text-4xl font-bold text-brand-dark mb-1">10+</span>
                  <span className="text-sm font-medium text-brand-dark/80">Years of Excellence</span>
                </div>
              </div>
            </div>

            <div className="space-y-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading">About Arise Trading & Maintenance</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded on the principles of reliability and quality, Arise Trading & Maintenance W.L.L. has grown to become a dual-service powerhouse, supporting businesses across the GCC with essential products and property care.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4 p-6 rounded-2xl bg-brand-light border border-border/50">
                  <h3 className="text-xl font-bold text-primary">Our Mission</h3>
                  <p className="text-muted-foreground text-sm">
                    To consistently deliver the highest quality trading products and maintenance services, fostering long-term partnerships built on trust.
                  </p>
                </div>
                <div className="space-y-4 p-6 rounded-2xl bg-brand-light border border-border/50">
                  <h3 className="text-xl font-bold text-brand-dark">Our Vision</h3>
                  <p className="text-muted-foreground text-sm">
                    To be the recognized leader in integrated corporate trading and professional maintenance across the Middle East.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAIRMAN MESSAGE SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl lg:order-last">
              <Image
                src="/assets/chairman.png"
                alt="Abdulla Janahi - CEO"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading">Message from Chairman</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-center">
                <p>
                  At Arise, we take great pride in being a leading player in the thermal paper trading industry. Since our inception, we have been dedicated to delivering high-quality products and services to meet the growing demands of businesses across Kingdom of Bahrain.
                </p>
                <p>
                  Our commitment to innovation, sustainability, and customer satisfaction drives everything we do. In an increasingly competitive market, we continue to focus on building strong relationships with our clients, ensuring that they receive not only the best products but also the best service experience.
                </p>
                <p>
                  Our team is continually adapting to the latest technological advancements and industry trends to offer solutions that meet the evolving needs of our customers. As we move forward, our vision is to expand our reach into new markets and industries while maintaining the high standards that have been the hallmark of our success.
                </p>
                <p>
                  We are also committed to embracing environmentally responsible practices, ensuring that our operations contribute to a sustainable future. Thank you for being a part of our journey, and I look forward to continuing our growth and success together.
                </p>
              </div>
              <div className="pt-4 border-t border-border/50">
                <h3 className="text-2xl font-bold text-primary">Abdulla Janahi</h3>
                <p className="text-brand-dark font-medium">CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-[#2C3E50] text-white relative overflow-hidden">
        <div className="container px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Why Choose Us</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              We are committed to delivering excellence in every project and product we provide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Quality", desc: "Premium products exceeding industry standards." },
              { icon: Clock, title: "On-Time Delivery", desc: "Reliable scheduling and prompt service." },
              { icon: ThumbsUp, title: "Reliability", desc: "Trusted partner for businesses across the GCC." },
              { icon: CheckCircle2, title: "Cost-Effective", desc: "Competitive pricing without compromising quality." },
            ].map((feature, i) => (
              <div
                key={i}
                className="text-center space-y-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mb-4 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-white/90 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA BANNER */}
      <section className="py-24 bg-gradient-to-r from-primary to-brand-dark text-white text-center">
        <div className="container px-4 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold font-heading">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get premium trading products and reliable maintenance services today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary text-brand-dark hover:bg-secondary/90 font-bold text-lg px-8 py-6 h-auto rounded-full shadow-lg">
              <Link href="#contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white/10 hover:text-yellow-300 font-semibold text-lg px-8 py-6 h-auto rounded-full backdrop-blur-sm transition-all shadow-lg"
            >
              <Link href="#contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-brand-light">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading">Get In Touch</h2>
                <p className="text-muted-foreground text-lg">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Working Hours</h4>
                    <p className="text-muted-foreground">Sunday - Thursday</p>
                    <p className="text-muted-foreground">8:00 AM – 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-brand-dark shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Contact Us</h4>
                    <p className="text-muted-foreground">+973 33170820</p>
                    <p className="text-muted-foreground">+973 38786000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-brand-dark shrink-0">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Visit Us</h4>
                    <p className="text-muted-foreground">Arise Trading & Maintenance W.L.L</p>
                    <p className="text-muted-foreground">CR No.168617-1, Shop No 2141 Bldg 934</p>
                    <p className="text-muted-foreground">Road 1015, Block 410, Sanabis, Manama</p>
                    <p className="text-muted-foreground">Kingdom of Bahrain</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-xl">
              <CardContent className="p-8 space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <Input
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="+973 1234 5678"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea
                      name="message"
                      placeholder="How can we help you?"
                      className="min-h-[150px]"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  {formStatus.type && (
                    <div
                      className={`text-sm p-3 rounded ${formStatus.type === "success"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                        }`}
                    >
                      {formStatus.message}
                    </div>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
