import { Leaf, Users, GraduationCap, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Environmental Education",
      description: "Learn climate science through immersive storytelling and interactive challenges that make complex concepts accessible."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Learning", 
      description: "Team-based quests encourage cooperation and discussion about environmental solutions and sustainable practices."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Curriculum Aligned",
      description: "Designed with educators to complement existing science curricula and learning objectives for all ages."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Empowering the next generation with knowledge and tools to tackle real-world climate challenges."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-pixel-gold mb-6">
            About EcoQuest
          </h2>
          <div className="w-24 h-1 bg-gradient-medieval mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Where medieval adventure meets modern climate science. Our innovative game transforms 
            environmental education into an epic quest that inspires action and understanding.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Story */}
          <div className="card-medieval">
            <h3 className="text-2xl font-display font-semibold text-pixel-gold mb-6">
              The Quest Begins
            </h3>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                In the mystical realm of EcoQuest, players embark on an extraordinary journey where 
                environmental knowledge becomes magical power. As climate heroes, students explore 
                enchanted forests, navigate changing weather patterns, and discover the ancient 
                secrets of planetary balance.
              </p>
              <p>
                Built in Godot with stunning pixel art, our game combines the charm of classic RPGs 
                with cutting-edge educational design. Every quest teaches real climate science, 
                from carbon cycles to renewable energy, wrapped in engaging medieval fantasy.
              </p>
              <p>
                Perfect for classrooms and environmental organizations, EcoQuest transforms passive 
                learning into active adventure, inspiring the next generation of climate champions.
              </p>
            </div>
          </div>

          {/* Right: Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-medieval hover:scale-105 transition-transform duration-300 group"
              >
                <div className="text-pixel-gold mb-4 group-hover:animate-pulse">
                  {feature.icon}
                </div>
                <h4 className="font-display font-semibold text-lg mb-3 text-foreground">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="card-medieval bg-gradient-earth">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-pixel text-3xl text-pixel-gold mb-2">15+</div>
              <div className="text-foreground/80">Climate Topics Covered</div>
              <div className="text-sm text-muted-foreground mt-1">
                From renewable energy to biodiversity
              </div>
            </div>
            <div>
              <div className="font-pixel text-3xl text-pixel-gold mb-2">8-16</div>
              <div className="text-foreground/80">Age Range</div>
              <div className="text-sm text-muted-foreground mt-1">
                Adaptable difficulty levels
              </div>
            </div>
            <div>
              <div className="font-pixel text-3xl text-pixel-gold mb-2">100%</div>
              <div className="text-foreground/80">Open Source</div>
              <div className="text-sm text-muted-foreground mt-1">
                Free for educational use
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;