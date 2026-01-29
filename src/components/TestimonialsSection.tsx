import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "أحمد محمود",
      role: "القاهرة - المهندسين",
      rating: 5,
      text: "خدمة ممتازة واحترافية. الممرض كان متعاون جداً وشرح كل حاجة بالتفصيل. أنصح بيهم بشدة.",
    },
    {
      name: "سارة علي",
      role: "الجيزة",
      rating: 5,
      text: "والدتي كانت محتاجة رعاية يومية والفريق كان رائع معاها. شكراً تمريضي على الاهتمام.",
    },
    {
      name: "محمد إبراهيم",
      role: "المهندسين",
      rating: 5,
      text: "سرعة الاستجابة مذهلة. اتصلت وفي خلال ساعة الممرض كان عندي. خدمة محترمة جداً.",
    },
    {
      name: "فاطمة حسن",
      role: "الدقي",
      rating: 5,
      text: "بعد عملية الولادة القيصرية، تمريضي وفروا لي رعاية ممتازة في البيت. شكراً من القلب.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-healing-green/10 px-4 py-2 rounded-full mb-4">
            <span className="text-healing-green font-semibold text-sm">آراء العملاء</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-4">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-muted-foreground text-lg">
            نفتخر بثقة عملائنا ورضاهم عن خدماتنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-muted/30 p-6 rounded-2xl hover:bg-white hover:shadow-medium transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
