import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Stethoscope, Clock, Users } from "lucide-react";

const HeroSection = () => {
  const features = [
    { icon: Stethoscope, text: "تمريض منزلي متخصص" },
    { icon: Clock, text: "استجابة سريعة" },
    { icon: Users, text: "طاقم مؤهل" },
  ];

  return (
    <section id="home" className="relative min-h-screen gradient-hero overflow-hidden pt-24">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-healing-green/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-healing-green rounded-full animate-pulse" />
              <span className="text-accent-foreground font-medium text-sm">
                خدمات تمريضية منزلية 24/7
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trust-navy leading-tight">
              رعاية تمريضية منزلية
              <span className="text-gradient block mt-2">باحترافية وإنسانية</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              نوفر لك خدمات تمريضية متكاملة في منزلك بأعلى معايير الأمان والراحة
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-soft"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/201092199119" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  احجز عبر واتساب
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:01092199119">
                  <Phone className="w-5 h-5" />
                  اتصل الآن
                </a>
              </Button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <div className="w-full h-[500px] bg-gradient-to-br from-primary/10 to-healing-green/10 rounded-3xl flex items-center justify-center overflow-hidden shadow-large">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-6 animate-float">
                    <Stethoscope className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-trust-navy">رعاية صحية متميزة</p>
                  <p className="text-muted-foreground mt-2">في راحة منزلك</p>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-medium animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-healing-green/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-healing-green" />
                </div>
                <div>
                  <p className="font-bold text-foreground">24/7</p>
                  <p className="text-sm text-muted-foreground">خدمة متواصلة</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-medium animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">+500</p>
                  <p className="text-sm text-muted-foreground">عميل راضي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
