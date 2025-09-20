import { Github, Twitter, Mail, Heart, Sword } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    game: [
      { label: "Download", href: "#download" },
      { label: "System Requirements", href: "#download" },
      { label: "Teacher Guide", href: "#" },
      { label: "Release Notes", href: "#" }
    ],
    support: [
      { label: "Documentation", href: "#" },
      { label: "Community Forum", href: "#" },
      { label: "Contact Support", href: "mailto:support@ecoquest.game" },
      { label: "Bug Reports", href: "#" }
    ],
    organization: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Careers", href: "mailto:careers@ecoquest.game" },
      { label: "Press Kit", href: "#" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Educational License", href: "#" },
      { label: "COPPA Compliance", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:hello@ecoquest.game", label: "Email" }
  ];

  return (
    <footer className="bg-gray-900 border-t border-yellow-400">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <Sword className="w-7 h-7 text-black" />
              </div>
              <div>
                <span className="eco-title text-xl">EcoQuest</span>
                <div className="text-sm opacity-75">Climate Adventure</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 opacity-75">
              Empowering the next generation through epic environmental education adventures.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="nes-btn is-primary p-2"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="eco-title mb-4">Game</h4>
              <ul className="space-y-2">
                {footerLinks.game.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white hover:text-yellow-400 transition-colors duration-200 text-sm opacity-75 hover:opacity-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="eco-title mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white hover:text-yellow-400 transition-colors duration-200 text-sm opacity-75 hover:opacity-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="eco-title mb-4">Organization</h4>
              <ul className="space-y-2">
                {footerLinks.organization.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white hover:text-yellow-400 transition-colors duration-200 text-sm opacity-75 hover:opacity-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="eco-title mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white hover:text-yellow-400 transition-colors duration-200 text-sm opacity-75 hover:opacity-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="nes-container mb-12">
          <div className="text-center">
            <h4 className="eco-title text-xl mb-4">
              Join the Adventure
            </h4>
            <p className="mb-6 max-w-2xl mx-auto">
              Get updates on new content, educational resources, and community events. 
              Perfect for educators and climate advocates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="nes-input flex-1"
              />
              <button className="nes-btn is-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-400 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
            <div className="flex items-center gap-2">
              <span>© {currentYear} EcoQuest. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for our planet.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span>Built with Godot Engine</span>
              <span>•</span>
              <span>Open Source</span>
              <span>•</span>
              <span>COPPA Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
export default Footer;
