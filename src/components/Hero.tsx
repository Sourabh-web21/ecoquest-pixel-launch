import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-medieval-entrance">
        {/* Game Title */}
        <div className="mb-8">
          <h1 className="text-medieval-title mb-4">
            EcoQuest
          </h1>
          <div className="inline-block card-medieval">
            <p className="font-pixel text-sm md:text-base text-pixel-gold tracking-widest">
              CLIMATE ADVENTURE AWAITS
            </p>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-display text-foreground/90 mb-8 leading-relaxed">
          An epic educational journey teaching climate change through 
          <span className="text-pixel-gold font-semibold"> interactive gameplay</span>
        </p>

        {/* Description */}
        <div className="card-medieval max-w-2xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join brave heroes in a pixel-art world where environmental knowledge becomes magical power. 
            Perfect for schools and NGOs seeking engaging climate education.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-medieval group"
            onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Game
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-pixel-bronze bg-background/20 text-foreground hover:bg-pixel-bronze/20 backdrop-blur-sm"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="w-5 h-5 mr-2" />
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          <div className="text-center">
            <div className="font-pixel text-2xl text-pixel-gold">1000+</div>
            <div className="text-sm text-muted-foreground">Students Engaged</div>
          </div>
          <div className="text-center">
            <div className="font-pixel text-2xl text-pixel-gold">50+</div>
            <div className="text-sm text-muted-foreground">Schools Partner</div>
          </div>
          <div className="text-center">
            <div className="font-pixel text-2xl text-pixel-gold">25+</div>
            <div className="text-sm text-muted-foreground">NGOs Using</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pixel-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pixel-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;