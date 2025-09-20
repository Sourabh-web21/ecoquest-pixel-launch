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
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual download URL
    link.download = 'EcoQuest-v1.0.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Game download initiated');
  };

  return (
    <section id="download" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="eco-title text-4xl md:text-5xl mb-6">
            Begin Your Adventure
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Download EcoQuest and start teaching climate science through epic adventures. 
            Free for educational use by schools and non-profit organizations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Download Card */}
          <div className="nes-container text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-6 eco-glow-animation">
                <Download className="w-16 h-16 text-black" />
              </div>
              
              <h3 className="eco-title text-3xl mb-4">
                EcoQuest v1.0
              </h3>
              
              <div className="nes-badge mb-6">
                <span className="is-success">FREE FOR EDUCATION</span>
              </div>
              
              <p className="mb-8">
                Complete educational package with game, teacher guides, and assessment tools.
                Works offline once downloaded.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4 mb-8">
              <button 
                className="nes-btn is-primary w-full eco-glow-animation"
                onClick={handleDownload}
              >
                <Download className="inline w-4 h-4 mr-2" />
                Download for Windows (245 MB)
              </button>
              
              <button 
                className="nes-btn w-full"
                onClick={() => console.log('macOS download')}
              >
                <Monitor className="inline w-4 h-4 mr-2" />
                Download for macOS (250 MB)
              </button>
            </div>

            {/* Mobile Note */}
            <div className="nes-container is-dark">
              <div className="flex items-center justify-center mb-2">
                <Smartphone className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="font-bold">Mobile Version Coming Soon</span>
              </div>
              <p className="text-sm">
                iOS and Android versions are in development for 2024 release.
              </p>
            </div>
          </div>

          {/* Features & Requirements */}
          <div className="space-y-8">
            {/* Features */}
            <div className="nes-container">
              <h4 className="eco-title text-xl mb-6">
                What's Included
              </h4>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-yellow-400 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">
                        {feature.title}
                      </h5>
                      <p className="text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Requirements */}
            <div className="nes-container">
              <h4 className="eco-title text-xl mb-6">
                System Requirements
              </h4>
              <div className="nes-table-responsive">
                <table className="nes-table is-bordered">
                  <tbody>
                    {systemRequirements.map((req, index) => (
                      <tr key={index}>
                        <td className="font-bold">{req.label}</td>
                        <td>{req.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Support Note */}
            <div className="nes-container is-dark">
              <h5 className="eco-title mb-3">
                Need Help Getting Started?
              </h5>
              <p className="text-sm mb-4">
                We provide comprehensive onboarding for educational institutions, 
                including teacher training and technical support.
              </p>
              <button className="nes-btn is-warning">
                Contact Support
              </button>
            </div>
          </div>
        </div>

        {/* License Information */}
        <div className="nes-container text-center mt-12">
          <h4 className="eco-title text-lg mb-4">
            Educational License
          </h4>
          <p className="max-w-3xl mx-auto">
            EcoQuest is free for use by educational institutions, non-profit organizations, 
            and individual educators. Commercial use requires a separate license. 
            By downloading, you agree to our <a href="#" className="text-yellow-400 hover:underline">Terms of Use</a> and 
            <a href="#" className="text-yellow-400 hover:underline ml-1">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
export default DownloadSection;
