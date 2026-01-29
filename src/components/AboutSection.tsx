import { Award, Shield, Heart, RefreshCw } from "lucide-react";

const AboutSection = () => {
  const values = [
    { icon: Award, title: "خبرة", description: "سنوات من الخبرة في التمريض المنزلي" },
    { icon: Shield, title: "أمان", description: "طاقم مدرب ومعتمد" },
    { icon: Heart, title: "رحمة", description: "رعاية إنسانية بقلب" },
    { icon: RefreshCw, title: "متابعة مستمرة", description: "نتابع حالتك أولاً بأول" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-primary font-semibold text-sm">تعرف علينا</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-trust-navy">
              من نحن
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-bold text-primary">"تمريضي"</span> منصة متخصصة في تقديم خدمات تمريضية منزلية باحتراف، 
              نهدف لتوفير رعاية صحية آمنة ومريحة داخل منزلك، مع الالتزام الكامل بأخلاقيات المهنة وجودة الخدمة.
            </p>

            <p className="text-muted-foreground">
              نحن نؤمن بأن كل مريض يستحق رعاية متميزة في بيئة مريحة وآمنة. 
              فريقنا من الممرضين المؤهلين يقدم خدمات احترافية مع لمسة إنسانية.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group p-4 bg-muted/50 rounded-2xl hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/5 to-healing-green/5 rounded-3xl p-8 lg:p-12">
              <div className="aspect-square max-w-md mx-auto bg-white rounded-2xl shadow-large p-8 flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-trust-navy text-center mb-2">
                  رعاية من القلب
                </h3>
                <p className="text-muted-foreground text-center">
                  نضع صحتك وراحتك في المقام الأول
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 w-full">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">+5</p>
                    <p className="text-xs text-muted-foreground">سنوات خبرة</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-healing-green">+500</p>
                    <p className="text-xs text-muted-foreground">عميل راضي</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">24/7</p>
                    <p className="text-xs text-muted-foreground">خدمة متواصلة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
