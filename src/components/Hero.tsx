import { Download, Play } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 eco-hero-bg"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto eco-entrance">
        {/* Game Title */}
        <div className="mb-8">
          <h1 className="eco-title text-6xl md:text-8xl mb-6">
            EcoQuest
          </h1>
          <div className="nes-container is-dark inline-block">
            <p className="text-sm md:text-base">
              CLIMATE ADVENTURE AWAITS
            </p>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
          An epic educational journey teaching climate change through 
          <span className="eco-title text-xl md:text-2xl"> interactive gameplay</span>
        </p>

        {/* Description */}
        <div className="nes-container is-dark max-w-2xl mx-auto mb-12">
          <p className="text-lg leading-relaxed">
            Join brave heroes in a pixel-art world where environmental knowledge becomes magical power. 
            Perfect for schools and NGOs seeking engaging climate education.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            className="nes-btn is-primary eco-glow-animation"
            onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Download className="inline w-4 h-4 mr-2" />
            Download Game
          </button>
          
          <button 
            className="nes-btn"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="inline w-4 h-4 mr-2" />
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="nes-container is-dark text-center">
            <div className="eco-title text-xl mb-2">1000+</div>
            <div className="text-sm">Students Engaged</div>
          </div>
          <div className="nes-container is-dark text-center">
            <div className="eco-title text-xl mb-2">50+</div>
            <div className="text-sm">Schools Partner</div>
          </div>
          <div className="nes-container is-dark text-center">
            <div className="eco-title text-xl mb-2">25+</div>
            <div className="text-sm">NGOs Using</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 eco-float">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
export default Hero;
