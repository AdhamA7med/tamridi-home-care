import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/201092199119"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 bg-healing-green rounded-full flex items-center justify-center shadow-large hover:scale-110 transition-transform animate-pulse-soft"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 bg-trust-navy text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          واتساب
        </span>
      </a>

      {/* Phone Button */}
      <a
        href="tel:01092199119"
        className="group w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-large hover:scale-110 transition-transform"
        aria-label="اتصل الآن"
      >
        <Phone className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 bg-trust-navy text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          اتصل الآن
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
