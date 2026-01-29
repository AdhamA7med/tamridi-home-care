import { 
  Syringe, 
  Bandage, 
  Activity, 
  Wind, 
  HeartPulse, 
  Scissors, 
  TestTube, 
  UserCheck 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Syringe,
      title: "تركيب محاليل وحقن",
      description: "حقن عضلي ووريدي بأمان تام",
    },
    {
      icon: Bandage,
      title: "تغيير الجروح",
      description: "جروح وقرح الفراش مع تعقيم احترافي",
    },
    {
      icon: Activity,
      title: "متابعة ما بعد العمليات",
      description: "جراحية - قيصرية - جروح",
    },
    {
      icon: Wind,
      title: "جلسات بخار وتنفس",
      description: "نيبولايزر للكبار والصغار",
    },
    {
      icon: HeartPulse,
      title: "متابعة السكر والضغط",
      description: "مراقبة وقياسات دورية",
    },
    {
      icon: Scissors,
      title: "خياطة جروح بسيطة",
      description: "حسب الحالة والتقييم",
    },
    {
      icon: TestTube,
      title: "سحب عينات وتحاليل",
      description: "تحاليل طبية من المنزل",
    },
    {
      icon: UserCheck,
      title: "رعاية كبار السن",
      description: "رعاية يومية باهتمام خاص",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm">ما نقدمه</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-4">
            🩺 خدماتنا التمريضية
          </h2>
          <p className="text-muted-foreground text-lg">
            نقدم مجموعة متكاملة من الخدمات التمريضية المنزلية بأعلى معايير الجودة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
