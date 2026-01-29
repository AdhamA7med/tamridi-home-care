import { Button } from "@/components/ui/button";
import { Gift, MessageCircle, Sparkles } from "lucide-react";

const OffersSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">عروض حصرية</span>
          </div>

          {/* Main Content */}
          <div className="mb-8">
            <Gift className="w-16 h-16 mx-auto mb-6 animate-float" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎁 عروض وخصومات حصرية لفترة محدودة
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              💬 أول زيارة كشف تمريضي مجاني عند حجز باقة خدمات
            </p>
          </div>

          {/* CTA */}
          <Button 
            size="xl" 
            className="bg-white text-primary hover:bg-white/90 shadow-large hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="https://wa.me/201092199119" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
              احجز العرض الآن
            </a>
          </Button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="text-sm">بدون رسوم مخفية</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="text-sm">خدمة فورية</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="text-sm">طاقم محترف</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
