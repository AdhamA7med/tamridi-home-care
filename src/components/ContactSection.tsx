import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      details: ["01092199119", "01505994730"],
    },
    {
      icon: MapPin,
      title: "الموقع",
      details: ["المهندسين - الجيزة - مصر"],
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["24 ساعة / 7 أيام"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <span className="text-primary font-semibold text-sm">تواصل معنا</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-4">
                احجز خدمتك الآن
              </h2>
              <p className="text-muted-foreground text-lg">
                احجز خدمتك الآن بكل سهولة عبر الاتصال أو واتساب
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="whatsapp" size="lg" className="flex-1" asChild>
                <a href="https://wa.me/201092199119" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  واتساب
                </a>
              </Button>
              <Button variant="default" size="lg" className="flex-1" asChild>
                <a href="tel:01092199119">
                  <Phone className="w-5 h-5" />
                  اتصل الآن
                </a>
              </Button>
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-healing-green/5 rounded-3xl p-8 lg:p-12">
              <div className="bg-white rounded-2xl shadow-large p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-trust-navy mb-4">
                  تواصل معنا الآن
                </h3>
                <p className="text-muted-foreground mb-6">
                  فريقنا جاهز لخدمتك على مدار الساعة
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:01092199119"
                    className="flex items-center justify-center gap-3 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-bold text-foreground text-lg">01092199119</span>
                  </a>
                  <a
                    href="tel:01505994730"
                    className="flex items-center justify-center gap-3 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-bold text-foreground text-lg">01505994730</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
