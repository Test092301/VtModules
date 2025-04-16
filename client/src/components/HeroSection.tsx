import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScroll } from "@/hooks/use-scroll";

export default function HeroSection() {
  const { scrollToSection } = useScroll();

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Manufacturing facility background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-secondary px-4 py-1 rounded-full mb-4"
          >
            <p className="text-white font-medium text-sm">Make in India Initiative</p>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight mb-6"
          >
            Pioneering Camera Module Manufacturing in India
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl"
          >
            Delivering world-class camera modules with state-of-the-art facilities, setting new standards for innovation and quality in Indian manufacturing.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-md transition-colors shadow-lg"
            >
              Get in Touch
            </Button>
            <Button 
              onClick={() => scrollToSection("about")}
              variant="outline" 
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-3 px-6 rounded-md transition-colors border-white"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
