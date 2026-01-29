import { Zap, UserCheck, Heart, Wallet, RefreshCw } from "lucide-react";

const WhyUsSection = () => {
  const reasons = [
    {
      icon: Zap,
      title: "سرعة الوصول",
      description: "نصل إليك في أسرع وقت ممكن",
      color: "bg-amber-500",
    },
    {
      icon: UserCheck,
      title: "تمريض مؤهل",
      description: "طاقم معتمد ومدرب",
      color: "bg-primary",
    },
    {
      icon: Heart,
      title: "رعاية إنسانية",
      description: "نتعامل بحب واهتمام",
      color: "bg-rose-500",
    },
    {
      icon: Wallet,
      title: "أسعار مناسبة",
      description: "خدمات بأسعار تنافسية",
      color: "bg-healing-green",
    },
    {
      icon: RefreshCw,
      title: "متابعة مستمرة",
      description: "نتابع حالتك باستمرار",
      color: "bg-violet-500",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm">مميزاتنا</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-4">
            لماذا تمريضي؟
          </h2>
          <p className="text-muted-foreground text-lg">
            نتميز بعدة عوامل تجعلنا الخيار الأمثل لرعايتك الصحية
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group flex-1 min-w-[200px] max-w-[250px] bg-white p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 text-center hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${reason.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
