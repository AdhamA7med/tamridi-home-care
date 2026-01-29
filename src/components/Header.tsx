import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "من نحن", href: "#about" },
    { name: "خدماتنا", href: "#services" },
    { name: "آراء العملاء", href: "#testimonials" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-medium py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl">ت</span>
          </div>
          <span className={`text-2xl font-bold ${isScrolled ? "text-primary" : "text-trust-navy"}`}>
            تمريضي
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-trust-navy"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="default" size="default" asChild>
            <a href="https://wa.me/201092199119" target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4" />
              احجز الآن
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-trust-navy"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full right-0 left-0 bg-white shadow-large animate-fade-in">
          <nav className="container mx-auto py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" className="mt-4" asChild>
              <a href="https://wa.me/201092199119" target="_blank" rel="noopener noreferrer">
                احجز الآن
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
