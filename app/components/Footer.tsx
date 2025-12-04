import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-heading text-white">Company</h3>
                        <ul className="space-y-3 text-gray-200">
                            <li>
                                <Link href="#about" className="hover:text-secondary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#trading" className="hover:text-secondary transition-colors">
                                    Trading Division
                                </Link>
                            </li>
                            <li>
                                <Link href="#maintenance" className="hover:text-secondary transition-colors">
                                    Maintenance Division
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-secondary transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-heading text-white">Products</h3>
                        <ul className="space-y-3 text-gray-200">
                            <li>
                                <Link href="#trading" className="hover:text-secondary transition-colors">
                                    Thermal Paper Rolls
                                </Link>
                            </li>
                            <li>
                                <Link href="#trading" className="hover:text-secondary transition-colors">
                                    Thermal Labels
                                </Link>
                            </li>
                            <li>
                                <Link href="#trading" className="hover:text-secondary transition-colors">
                                    Computer Forms
                                </Link>
                            </li>
                            <li>
                                <Link href="#trading" className="hover:text-secondary transition-colors">
                                    Wax Ribbons
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-heading text-white">Services</h3>
                        <ul className="space-y-3 text-gray-200">
                            <li>
                                <Link href="#maintenance" className="hover:text-secondary transition-colors">
                                    General Maintenance
                                </Link>
                            </li>
                            <li>
                                <Link href="#maintenance" className="hover:text-secondary transition-colors">
                                    Interior Works
                                </Link>
                            </li>
                            <li>
                                <Link href="#maintenance" className="hover:text-secondary transition-colors">
                                    Exterior Works
                                </Link>
                            </li>
                            <li>
                                <Link href="#maintenance" className="hover:text-secondary transition-colors">
                                    Waterproofing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-heading text-white">Stay Connected</h3>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start gap-3 text-gray-200">
                                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                                <p>Arise Trading & Maintenance W.L.L
                                    CR No.168617-1, Shop No 2141 Bldg 934
                                    Road 1015, Block 410, Sanabis, Manama
                                    Kingdom of Bahrain</p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-200">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <p>+973 33170820 | 38786000</p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-200">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <p>info@arisetrading.com</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-brand-dark transition-all">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-brand-dark transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-brand-dark transition-all">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-brand-dark transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Arise Trading & Maintenance W.L.L. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
