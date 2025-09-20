import { useState } from "react";
import { Menu, X, Sword } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#team", label: "Our Guild" },
    { href: "#download", label: "Download" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-pixel-bronze">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-medieval rounded-full flex items-center justify-center">
              <Sword className="w-6 h-6 text-pixel-shadow" />
            </div>
            <div>
              <span className="font-pixel text-lg text-pixel-gold">EcoQuest</span>
              <div className="text-xs text-muted-foreground font-display">Climate Adventure</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="font-display text-foreground hover:text-pixel-gold transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pixel-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              className="btn-medieval"
              onClick={() => scrollToSection('#download')}
            >
              Download Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-pixel-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-pixel-bronze">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left font-display text-foreground hover:text-pixel-gold transition-colors duration-200 py-2"
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="btn-medieval w-full"
              onClick={() => scrollToSection('#download')}
            >
              Download Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;