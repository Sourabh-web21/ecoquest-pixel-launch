import { Button } from "@/components/ui/button";
import { Download, Monitor, Smartphone, BookOpen, Users, Shield } from "lucide-react";

const DownloadSection = () => {
  const systemRequirements = [
    { label: "OS", value: "Windows 10+ / macOS 10.15+ / Ubuntu 18.04+" },
    { label: "Memory", value: "4 GB RAM" },
    { label: "Storage", value: "2 GB available space" },
    { label: "Graphics", value: "DirectX 11 compatible" }
  ];

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Complete Curriculum",
      description: "15+ climate topics with guided lesson plans"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-player Support", 
      description: "Team-based learning for up to 30 students"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe & Secure",
      description: "COPPA compliant, no ads, offline capable"
    }
  ];

  const handleDownload = () => {
    // In a real app, this would trigger the actual download
    // For now, we'll just show a placeholder action
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual download URL
    link.download = 'EcoQuest-v1.0.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // You could also track this download event
    console.log('Game download initiated');
  };

  return (
    <section id="download" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-pixel-gold mb-6">
            Begin Your Adventure
          </h2>
          <div className="w-24 h-1 bg-gradient-medieval mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Download EcoQuest and start teaching climate science through epic adventures. 
            Free for educational use by schools and non-profit organizations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Download Card */}
          <div className="card-medieval text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-medieval rounded-full flex items-center justify-center mb-6 animate-pixel-glow">
                <Download className="w-16 h-16 text-pixel-shadow" />
              </div>
              
              <h3 className="font-display text-3xl font-bold text-pixel-gold mb-4">
                EcoQuest v1.0
              </h3>
              
              <div className="inline-block bg-pixel-forest/20 text-pixel-gold px-4 py-2 rounded border border-pixel-bronze mb-6">
                <span className="font-pixel text-sm">FREE FOR EDUCATION</span>
              </div>
              
              <p className="text-muted-foreground mb-8">
                Complete educational package with game, teacher guides, and assessment tools.
                Works offline once downloaded.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4 mb-8">
              <Button 
                size="lg" 
                className="btn-medieval w-full group"
                onClick={handleDownload}
              >
                <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Download for Windows
                <span className="ml-2 text-xs">(245 MB)</span>
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="w-full border-2 border-pixel-bronze bg-background/20 text-foreground hover:bg-pixel-bronze/20 backdrop-blur-sm"
                onClick={() => console.log('macOS download')}
              >
                <Monitor className="w-5 h-5 mr-3" />
                Download for macOS
                <span className="ml-2 text-xs">(250 MB)</span>
              </Button>
            </div>

            {/* Mobile Note */}
            <div className="bg-pixel-earth/30 border border-pixel-bronze rounded p-4">
              <div className="flex items-center justify-center mb-2">
                <Smartphone className="w-5 h-5 text-pixel-gold mr-2" />
                <span className="font-medium text-foreground">Mobile Version Coming Soon</span>
              </div>
              <p className="text-sm text-muted-foreground">
                iOS and Android versions are in development for 2024 release.
              </p>
            </div>
          </div>

          {/* Features & Requirements */}
          <div className="space-y-8">
            {/* Features */}
            <div className="card-medieval">
              <h4 className="font-display text-xl font-semibold text-pixel-gold mb-6">
                What's Included
              </h4>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-pixel-gold mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Requirements */}
            <div className="card-medieval">
              <h4 className="font-display text-xl font-semibold text-pixel-gold mb-6">
                System Requirements
              </h4>
              <div className="space-y-3">
                {systemRequirements.map((req, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-pixel-bronze/30 last:border-b-0">
                    <span className="font-medium text-foreground">{req.label}:</span>
                    <span className="text-sm text-muted-foreground text-right">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Note */}
            <div className="bg-gradient-forest/20 border border-pixel-bronze rounded p-6">
              <h5 className="font-display font-semibold text-pixel-gold mb-3">
                Need Help Getting Started?
              </h5>
              <p className="text-sm text-muted-foreground mb-4">
                We provide comprehensive onboarding for educational institutions, 
                including teacher training and technical support.
              </p>
              <Button 
                variant="outline"
                size="sm"
                className="border-pixel-bronze text-pixel-gold hover:bg-pixel-bronze/20"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </div>

        {/* License Information */}
        <div className="card-medieval mt-12 text-center">
          <h4 className="font-display text-lg font-semibold text-pixel-gold mb-4">
            Educational License
          </h4>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            EcoQuest is free for use by educational institutions, non-profit organizations, 
            and individual educators. Commercial use requires a separate license. 
            By downloading, you agree to our <a href="#" className="text-pixel-gold hover:underline">Terms of Use</a> and 
            <a href="#" className="text-pixel-gold hover:underline ml-1">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;