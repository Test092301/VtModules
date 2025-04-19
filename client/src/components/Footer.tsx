import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { text } from "stream/consumers";

export default function Footer() {
  const { scrollToSection } = useScroll();

  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Facilities", id: "facilities" },
    { name: "Collaboration", id: "collaboration" },
    { name: "Quality", id: "quality" },
    { name: "Timeline", id: "timeline" },
    { name: "Contact", id: "contact" },
  ];
  
  const services = [
    "Camera Module Manufacturing",
    "Quality Testing",
    "Research & Development",
    "OEM Partnerships",
  ];
  
  const contactInfo = [
    { 
      icon: <MapPin className="text-secondary flex-shrink-0" size={20} />,
      text: "Sanand, Gujarat, India.(Planned Location)"
    },
    { 
      icon: <Mail className="text-secondary flex-shrink-0" size={20} />,
      text: "info@vtmodules.com"
    },
    { 
      icon: <Phone className="text-secondary flex-shrink-0" size={20} />,
      text: ""
    },
    { 
      icon: <Clock className="text-secondary flex-shrink-0" size={20} />,
      text: ""
    },
  ];

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-8 md:gap-12 mb-12">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <Logo variant="light" className="mb-6" />
            <p className="text-white text-opacity-80 mb-6">
              Pioneering camera module manufacturing in India with a commitment to quality, innovation, and the Make in India vision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8.56 2.9A12.5 12.5 0 0 0 12 21.5c7.33 0 9.66-6.69 9.66-12.18 0-2.25-1.05-4.2-2.64-5.47-3.13-2.5-7.33-1.87-10.5.63"></path>
                  <path d="M10.46 4.95A12.5 12.5 0 0 0 12 21.5c7.33 0 9.66-6.69 9.66-12.18 0-2.25-1.05-4.2-2.64-5.47a9.81 9.81 0 0 0-2.42-1.4"></path>
                  <path d="M12.06 2c-.96 0-1.92.13-2.84.39"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/4 lg:w-1/5">
            <h3 className="text-lg font-bold font-poppins mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-white text-opacity-80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full md:w-1/4 lg:w-1/5">
            <h3 className="text-lg font-bold font-poppins mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-white text-opacity-80">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full md:w-1/4 lg:w-1/5">
            <h3 className="text-lg font-bold font-poppins mb-6">Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  {info.icon}
                  <span className="text-white text-opacity-80">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-opacity-60 text-sm mb-4 md:mb-0">
              &copy; {currentYear} VT Modules Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white text-opacity-60 hover:text-secondary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white text-opacity-60 hover:text-secondary text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-white text-opacity-60 hover:text-secondary text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
