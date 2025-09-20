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
          <h2 className="eco-title text-4xl md:text-5xl mb-6">
            About EcoQuest
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Where medieval adventure meets modern climate science. Our innovative game transforms 
            environmental education into an epic quest that inspires action and understanding.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Story */}
          <div className="nes-container">
            <h3 className="eco-title text-2xl mb-6">
              The Quest Begins
            </h3>
            <div className="space-y-4 leading-relaxed">
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
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="nes-container eco-card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="text-yellow-400 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="nes-container is-dark">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="eco-title text-3xl mb-2">15+</div>
              <div className="mb-1">Climate Topics Covered</div>
              <div className="text-sm opacity-75">
                From renewable energy to biodiversity
              </div>
            </div>
            <div>
              <div className="eco-title text-3xl mb-2">8-16</div>
              <div className="mb-1">Age Range</div>
              <div className="text-sm opacity-75">
                Adaptable difficulty levels
              </div>
            </div>
            <div>
              <div className="eco-title text-3xl mb-2">100%</div>
              <div className="mb-1">Open Source</div>
              <div className="text-sm opacity-75">
                Free for educational use
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
export default About;
