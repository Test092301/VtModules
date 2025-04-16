import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";

export default function FacilitiesSection() {
  const { scrollToSection } = useScroll();
  
  const facilities = [
    {
      image: "https://images.unsplash.com/photo-1581092458741-b352608788cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: "Class 100 Clean Rooms",
      description: "Our ISO-certified clean rooms maintain less than 100 particles per cubic foot, ensuring a contamination-free manufacturing environment.",
      tags: ["HEPA Filtration", "Temperature Controlled"],
    },
    {
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: "Automated Assembly Lines",
      description: "Precision-engineered assembly lines with robotics and AI-driven quality control systems for consistent production quality.",
      tags: ["Robotic Precision", "AI Integration"],
    },
    {
      image: "https://images.unsplash.com/photo-1576086135878-bd1e30cb5cf3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: "Advanced Testing Laboratory",
      description: "Comprehensive testing facilities equipped with image quality analysis, environmental stress testing, and durability verification.",
      tags: ["Image Quality Analysis", "Stress Testing"],
    },
  ];

  return (
    <section id="facilities" className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-6">World-Class Facilities</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-neutral-dark">
            Our cutting-edge manufacturing facilities are equipped with the latest technology to ensure precision, quality, and efficiency in every camera module we produce.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl card-shine"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={facility.image}
                  alt={facility.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-poppins text-primary mb-3">{facility.title}</h3>
                <p className="text-neutral-dark mb-4">
                  {facility.description}
                </p>
                <div className="flex items-center flex-wrap">
                  {facility.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-primary text-sm font-semibold mr-2">
                      {tagIndex > 0 && <span className="mr-2">•</span>}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-md transition-colors shadow-lg"
          >
            Schedule a Facility Tour
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
