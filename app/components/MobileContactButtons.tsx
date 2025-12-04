"use client";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function MobileContactButtons() {
    const phoneNumber = "+97333170820";
    const whatsappNumber = "97333170820";

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${whatsappNumber}`, "_blank");
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex">
            {/* Call Now Button */}
            <button
                onClick={handleCall}
                className="flex-1 bg-white text-black py-4 flex items-center justify-center gap-2 font-semibold text-base hover:bg-gray-200 transition-colors"
            >
                <Phone className="w-5 h-5 text-black" />
                Call Now
            </button>

            {/* WhatsApp Button */}
            <button
                onClick={handleWhatsApp}
                className="flex-1 bg-yellow-400 text-white py-4 flex items-center justify-center gap-2 font-semibold text-base hover:bg-yellow-500 transition-colors"
            >
                <FaWhatsapp className="w-5 h-5 text-white" />
                WhatsApp
            </button>
        </div>
    );
}
