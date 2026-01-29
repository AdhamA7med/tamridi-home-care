import { Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "من نحن", href: "#about" },
    { name: "خدماتنا", href: "#services" },
    { name: "آراء العملاء", href: "#testimonials" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <footer className="bg-trust-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-right">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">ت</span>
              </div>
              <span className="text-2xl font-bold">تمريضي</span>
            </div>
            <p className="text-white/70 flex items-center gap-2 justify-center md:justify-start">
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              لأن صحتك أولويتنا
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <div className="space-y-2 text-white/70">
              <p>📞 01092199119</p>
              <p>📞 01505994730</p>
              <p>📍 المهندسين - الجيزة - مصر</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/50 text-sm">
            © {new Date().getFullYear()} تمريضي. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
