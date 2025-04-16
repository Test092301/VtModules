import { useState } from "react";
import { useScroll } from "@/hooks/use-scroll";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled, scrollToSection } = useScroll();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Facilities", id: "facilities" },
    { name: "Collaboration", id: "collaboration" },
    { name: "Quality", id: "quality" },
    { name: "Timeline", id: "timeline" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className={cn(
      "fixed w-full bg-white z-50 transition-all duration-300",
      isScrolled ? "shadow-md" : ""
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => handleNavigation(item.id)}
                    className="text-neutral-dark hover:text-primary font-medium transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
          <ul className="py-4 space-y-4">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigation(item.id)}
                  className="block w-full text-left text-neutral-dark hover:text-primary font-medium transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
