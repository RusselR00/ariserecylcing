"use client";

import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Phone, ShieldCheck, ThumbsUp, Truck, Wrench, ChevronDown, User, Mail, MapPin } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import ParallaxSection from "@/app/components/ParallaxSection";
import AnimatedBackground from "@/app/components/AnimatedBackground";
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
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Parallax effect for hero video
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e: React.FormEvent, type: 'callback' | 'contact') => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type,
          message: type === 'callback' ? (formData.message || "Requesting a Call Back") : formData.message
        }),
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

  const handleHeroSubmit = (e: React.FormEvent) => submitForm(e, 'callback');
  const handleContactSubmit = (e: React.FormEvent) => submitForm(e, 'contact');

  return (
    <main className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary w-full overflow-x-hidden">
      <Header />
      <WhatsAppButton />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">

        {/* Video Background with Parallax */}
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 z-10">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background: 'linear-gradient(135deg, rgba(0,80,157,0.6) 0%, rgba(255,195,0,0.3) 50%, rgba(0,80,157,0.6) 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 15s ease infinite'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/40" />
          </div>

          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-110"
          >
            <source src="https://4cwqegzr3mp4p6xh.public.blob.vercel-storage.com/Herosectionnew1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Floating Background Shapes */}
        <AnimatedBackground />

        {/* Two-Column Layout */}
        <div className="container relative z-20 px-4 h-full flex items-center pt-28 pb-12 md:py-0">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-8 w-full items-center max-w-6xl mx-auto">

            {/* LEFT SIDE - Hero Content */}
            <div className="text-white space-y-6 md:space-y-8 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] animate-fadeInUp">
                Quality Products & <br />
                <span className="text-yellow-400 animate-fadeInUp stagger-1">Service Excellence</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0 font-semibold animate-fadeInUp stagger-2">
                Your trusted partner for Corporate Supplies, Trading, and Professional Maintenance solutions in the region.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 md:pt-4 animate-fadeInUp stagger-3">
                <Button
                  className="bg-secondary hover:bg-secondary/90 text-brand-dark font-semibold text-base px-6 py-3 h-auto rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 magnetic-hover glow-effect w-full sm:w-auto"
                >
                  <Link href="#trading">Discover More</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-brand-dark font-semibold text-base px-6 py-3 h-auto rounded-full backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 magnetic-hover w-full sm:w-auto"
                >
                  <Link href="#trading">View Services</Link>
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE - Modern Contact Form */}
            <div className="animate-fadeInUp stagger-4 flex justify-center lg:justify-end w-full">
              <div className="relative rounded-3xl p-6 shadow-2xl border-2 border-secondary/50 overflow-hidden w-full max-w-md backdrop-blur-md mx-auto lg:mx-0">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-brand-dark/95 opacity-95"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold text-white mb-1">Request a Call Back</h2>
                    <p className="text-yellow-400 text-sm font-medium">We'll contact you shortly</p>
                  </div>

                  <form onSubmit={handleHeroSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-secondary h-10 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                        <Input
                          name="phone"
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-secondary h-10 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                        <Input
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-secondary h-10 rounded-xl"
                        />
                      </div>
                    </div>

                    {formStatus.type && (
                      <div
                        className={`text-xs p-2 rounded ${formStatus.type === "success"
                          ? "bg-green-500/20 text-green-100 border border-green-500/30"
                          : "bg-red-500/20 text-red-100 border border-red-500/30"
                          }`}
                      >
                        {formStatus.message}
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-secondary hover:bg-yellow-500 text-brand-dark font-bold py-4 text-base rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : (
                        <>
                          <span>Request Call</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden lg:block">
          <div className="flex flex-col items-center gap-2 text-white/80 cursor-pointer" onClick={() => {
            document.getElementById('trading')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>

      </section>

      {/* TWO PILLAR SECTION */}
      <section className="py-24 bg-brand-light relative overflow-hidden">
        <AnimatedBackground />
        <div className="container px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Trading Pillar */}
            <ScrollAnimation animation="slideInLeft">
              <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 card-3d">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-8 lg:p-12 space-y-6 relative z-10 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
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
            </ScrollAnimation>

            {/* Maintenance Pillar */}
            <ScrollAnimation animation="slideInRight">
              <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 card-3d">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-8 lg:p-12 space-y-6 relative z-10 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-brand-dark mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
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
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="trading" className="py-24 bg-white">
        <div className="container px-4">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading">Our Trading Division</h2>
              <p className="text-lg text-muted-foreground">
                Arise Trading Division is your dependable supplier for specialized corporate consumables. We ensure your operations run smoothly.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Thermal Paper Rolls", img: "/assets/rollingpaper1.png", desc: "High-sensitivity, long-life image paper.", link: "/products/thermal-paper-rolls" },
              { title: "Thermal Labels", img: "/assets/thermal_labels.jpeg", desc: "Custom size and adhesive options.", link: "/products/thermal-labels" },
              { title: "Computer Forms", img: "/assets/printing realistic1.png", desc: "Tailored multi-ply and continuous forms.", link: "/products/computer-forms" },
              { title: "Wax Ribbons", img: "/assets/wax_ribbon.jpeg", desc: "Premium quality ribbons for clear printing.", link: "/products/wax-ribbons" },
            ].map((product, i) => (
              <ScrollAnimation key={i} animation="fadeInUp" delay={i * 100}>
                <Link href={product.link} className="block h-full">
                  <div className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 card-3d gradient-border h-full flex flex-col cursor-pointer">
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <Image
                        src={product.img}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-125 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6 space-y-4 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-brand-dark">{product.title}</h3>
                      <p className="text-muted-foreground text-sm flex-grow">{product.desc}</p>
                      <Button className="w-full bg-gray-50 hover:bg-primary hover:text-white text-brand-dark font-semibold py-6 rounded-xl transition-all duration-300 group shadow-sm hover:shadow-lg border border-gray-100 hover:border-primary flex items-center justify-between px-6 pointer-events-none">
                        View Product
                        <ArrowRight className="w-4 h-4 text-primary group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                      </Button>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* MAINTENANCE SERVICES */}
      <section id="maintenance" className="py-24 bg-brand-light">
        <div className="container px-4">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading">Maintenance Services</h2>
              <p className="text-lg text-muted-foreground">
                Professional maintenance and fit-out solutions for commercial properties across the region.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "General Maintenance", img: "/assets/tools1.png", desc: "Comprehensive property maintenance services.", link: "/services/general-maintenance" },
              { title: "Interior Works", img: "/assets/carpentry1.png", desc: "Custom interior fit-outs and carpentry.", link: "/services/interior-works" },
              { title: "Exterior Works", img: "/assets/building1.png", desc: "Professional exterior maintenance solutions.", link: "/services/exterior-works" },
              { title: "Waterproofing", img: "/assets/insulation2.png", desc: "Advanced waterproofing and insulation.", link: "/services/waterproofing" },
              { title: "Electrical & Plumbing", img: "/assets/wiring1.png", desc: "Expert electrical wiring and plumbing.", link: "/services/electrical-plumbing" },
              { title: "Gardening & Paving", img: "/assets/workingarise1.png", desc: "Landscape design and professional paving.", link: "/services/gardening-paving" },
            ].map((service, i) => (
              <ScrollAnimation key={i} animation="scaleIn" delay={i * 80}>
                <Link href={service.link} className="block h-full">
                  <div className="glass-card rounded-2xl p-6 flex flex-col h-full card-3d hover:shadow-2xl transition-shadow duration-500 cursor-pointer group">
                    <div className="relative h-48 rounded-xl overflow-hidden mb-6 bg-gray-100">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{service.desc}</p>
                    <Button variant="ghost" className="w-fit p-0 hover:bg-transparent hover:text-primary font-semibold group magnetic-hover pointer-events-none">
                      Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slideInLeft">
              <div className="relative">
                <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                  <ParallaxSection speed={0.3} className="h-full w-full">
                    <Image
                      src="/assets/arissuppplytwo.png"
                      alt="About Arise"
                      fill
                      className="object-cover scale-110"
                    />
                  </ParallaxSection>
                </div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary rounded-2xl flex items-center justify-center p-4 shadow-xl hidden md:flex animate-float">
                  <div className="text-center">
                    <span className="block text-4xl font-bold text-brand-dark mb-1">10+</span>
                    <span className="text-sm font-medium text-brand-dark/80">Years of Excellence</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideInRight">
              <div className="space-y-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading">About Arise Trading & Maintenance</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded on the principles of reliability and quality, Arise Trading & Maintenance W.L.L. has grown to become a dual-service powerhouse, supporting businesses across the GCC with essential products and property care.
                </p>

                <div className="grid sm:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-4 p-6 rounded-2xl bg-brand-light border border-border/50 card-3d">
                    <h3 className="text-xl font-bold text-primary">Our Mission</h3>
                    <p className="text-muted-foreground text-sm">
                      To consistently deliver the highest quality trading products and maintenance services, fostering long-term partnerships built on trust.
                    </p>
                  </div>
                  <div className="space-y-4 p-6 rounded-2xl bg-brand-light border border-border/50 card-3d">
                    <h3 className="text-xl font-bold text-brand-dark">Our Vision</h3>
                    <p className="text-muted-foreground text-sm">
                      To be the recognized leader in integrated corporate trading and professional maintenance across the Middle East.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CHAIRMAN MESSAGE SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeIn" className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl lg:order-last">
              <Image
                src="/assets/chairman.png"
                alt="Abdulla Janahi - CEO"
                fill
                className="object-cover"
              />
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp">
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
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container px-4 relative z-10">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-brand-dark">Why Choose Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                We are committed to delivering excellence in every project and product we provide.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Quality", desc: "Premium products exceeding industry standards." },
              { icon: Clock, title: "On-Time Delivery", desc: "Reliable scheduling and prompt service." },
              { icon: ThumbsUp, title: "Reliability", desc: "Trusted partner for businesses across the GCC." },
              { icon: CheckCircle2, title: "Cost-Effective", desc: "Competitive pricing without compromising quality." },
            ].map((feature, i) => (
              <ScrollAnimation key={i} animation="scaleIn" delay={i * 100}>
                <div className="text-center space-y-4 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 card-3d group">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>


      {/* CTA BANNER */}
      <section className="py-24 bg-gradient-to-r from-primary to-brand-dark text-white text-center relative overflow-hidden">
        {/* Animated glow effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/50 rounded-full blur-[100px] animate-pulse" />
        </div>

        <div className="container px-4 space-y-8 relative z-10">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="text-3xl md:text-5xl font-bold font-heading">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get premium trading products and reliable maintenance services today.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary text-brand-dark hover:bg-secondary/90 font-bold text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 magnetic-hover glow-effect">
                <Link href="#contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-brand-dark font-semibold text-lg px-8 py-6 h-auto rounded-full backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 magnetic-hover"
              >
                <Link href="#contact">Request Quote</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-brand-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.png')] opacity-5 pointer-events-none" />
        <div className="container px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollAnimation animation="slideInLeft">
              <div className="space-y-8">
                <div className="space-y-4 text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading">Get In Touch</h2>
                  <p className="text-muted-foreground text-lg">
                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </div>

                <div className="grid gap-6">
                  <div className="group flex items-start gap-4 p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/20 hover:border-primary/20">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <Clock className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1 text-lg group-hover:text-primary transition-colors">Working Hours</h4>
                      <p className="text-muted-foreground">Sunday - Thursday</p>
                      <p className="text-muted-foreground font-medium text-primary">8:00 AM – 5:00 PM</p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/20 hover:border-secondary/20">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center text-brand-dark shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1 text-lg group-hover:text-secondary transition-colors">Contact Us</h4>
                      <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">+973 33170820</p>
                      <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">+973 38786000</p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/20 hover:border-primary/20">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-dark/5 to-transparent flex items-center justify-center text-brand-dark shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1 text-lg group-hover:text-primary transition-colors">Visit Us</h4>
                      <p className="text-muted-foreground">Arise Trading & Maintenance W.L.L</p>
                      <p className="text-muted-foreground">CR No.168617-1, Shop No 2141 Bldg 934</p>
                      <p className="text-muted-foreground">Road 1015, Block 410, Sanabis, Manama</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideInRight">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-20 -z-10 transform rotate-1"></div>
                <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden">
                  <div className="h-2 w-full bg-gradient-to-r from-primary via-secondary to-primary"></div>
                  <CardContent className="p-8 md:p-10 space-y-6">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-brand-dark">Send us a Message</h3>
                      <p className="text-muted-foreground">We usually respond within 24 hours.</p>
                    </div>

                    <form onSubmit={handleContactSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-brand-dark ml-1">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              name="name"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="pl-10 bg-white border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 h-12 rounded-xl transition-all"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-brand-dark ml-1">Email</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="pl-10 bg-white border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 h-12 rounded-xl transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-brand-dark ml-1">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            name="phone"
                            type="tel"
                            placeholder="+973 1234 5678"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="pl-10 bg-white border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 h-12 rounded-xl transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-brand-dark ml-1">Message</label>
                        <Textarea
                          name="message"
                          placeholder="How can we help you?"
                          className="min-h-[150px] bg-white border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl p-4 transition-all resize-none"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      {formStatus.type && (
                        <div
                          className={`text-sm p-4 rounded-xl flex items-center gap-2 ${formStatus.type === "success"
                            ? "bg-green-50 text-green-700 border border-green-100"
                            : "bg-red-50 text-red-700 border border-red-100"
                            }`}
                        >
                          {formStatus.type === "success" ? <CheckCircle2 className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                          {formStatus.message}
                        </div>
                      )}

                      <Button
                        type="submit"
                        className="w-full bg-brand-dark hover:bg-primary text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
