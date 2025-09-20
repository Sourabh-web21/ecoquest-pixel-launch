import { Github, Linkedin, Mail } from "lucide-react";
import teamPortraits from "@/assets/team-portraits.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Developer",
      title: "Code Wizard",
      description: "10+ years in game development, Godot expert, passionate about educational technology.",
      skills: ["Godot", "C#", "Game Architecture"],
      social: {
        github: "#",
        linkedin: "#",
        email: "alex@ecoquest.game"
      }
    },
    {
      name: "Maya Rodriguez",
      role: "Art Director", 
      title: "Pixel Mage",
      description: "Award-winning pixel artist specializing in environmental themes and character design.",
      skills: ["Pixel Art", "Animation", "UI Design"],
      social: {
        github: "#",
        linkedin: "#", 
        email: "maya@ecoquest.game"
      }
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Climate Scientist",
      title: "Environmental Sage",
      description: "PhD in Climate Science, ensures all game content is scientifically accurate and engaging.",
      skills: ["Climate Science", "Curriculum Design", "Research"],
      social: {
        linkedin: "#",
        email: "sarah@ecoquest.game"
      }
    },
    {
      name: "James Park",
      role: "Game Designer",
      title: "Quest Architect", 
      description: "15+ years designing educational games that balance fun with effective learning outcomes.",
      skills: ["Game Design", "UX/UI", "Educational Theory"],
      social: {
        github: "#",
        linkedin: "#",
        email: "james@ecoquest.game"
      }
    },
    {
      name: "Lisa Thompson",
      role: "Education Specialist",
      title: "Learning Oracle",
      description: "Former teacher with expertise in making complex science concepts accessible to students.",
      skills: ["Pedagogy", "Curriculum", "Assessment"],
      social: {
        linkedin: "#",
        email: "lisa@ecoquest.game"
      }
    },
    {
      name: "Marcus Williams",
      role: "Project Manager",
      title: "Guild Master",
      description: "Agile expert keeping our diverse team focused on creating impactful educational experiences.",
      skills: ["Project Management", "Team Leadership", "Strategy"],
      social: {
        github: "#",
        linkedin: "#",
        email: "marcus@ecoquest.game"
      }
    }
  ];

  return (
    <section id="team" className="py-20 px-4 bg-gradient-earth">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-pixel-gold mb-6">
            Our Guild
          </h2>
          <div className="w-24 h-1 bg-gradient-medieval mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the passionate team of developers, artists, scientists, and educators 
            working together to create the ultimate climate education adventure.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="card-medieval group hover:scale-105 transition-all duration-300 hover:shadow-glow"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div 
                  className="w-24 h-24 mx-auto rounded-full border-4 border-pixel-bronze bg-cover bg-center bg-no-repeat"
                  style={{ 
                    backgroundImage: `url(${teamPortraits})`,
                    backgroundPosition: `${(index % 3) * 33.33}% ${Math.floor(index / 3) * 50}%`
                  }}
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-pixel-gold text-pixel-shadow px-3 py-1 rounded-full">
                  <span className="font-pixel text-xs">{member.title}</span>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-pixel-gold font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-pixel-earth/50 text-pixel-gold text-xs px-2 py-1 rounded border border-pixel-bronze"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  {member.social.github && (
                    <a 
                      href={member.social.github}
                      className="p-2 rounded-full bg-pixel-shadow text-pixel-gold hover:bg-pixel-bronze transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      className="p-2 rounded-full bg-pixel-shadow text-pixel-gold hover:bg-pixel-bronze transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="p-2 rounded-full bg-pixel-shadow text-pixel-gold hover:bg-pixel-bronze transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="card-medieval text-center mt-16">
          <h3 className="font-display text-2xl font-semibold text-pixel-gold mb-4">
            Join Our Quest
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to make a difference 
            in climate education. Whether you're a developer, educator, or climate advocate, 
            there's a place for you in our guild.
          </p>
          <a 
            href="mailto:team@ecoquest.game" 
            className="btn-medieval inline-flex items-center"
          >
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;