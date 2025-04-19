import { motion } from "framer-motion";
import { Eye, Flag } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-6">
              Advancing India's Manufacturing Vision
            </h2>
            <div className="w-20 h-1 bg-secondary mb-6"></div>
            <p className="text-neutral-dark mb-6 leading-relaxed">
              At VT Modules, we are committed to revolutionizing camera module manufacturing within India, reducing import dependency and generating skilled employment opportunities across our nation.
            </p>
            <p className="text-neutral-dark mb-8 leading-relaxed">
              Our state-of-the-art facilities will be incorporate the latest technological advancements, ensuring that we meet international quality standards while promoting the Make in India initiative.
            </p>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                className="bg-neutral-light p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="text-secondary mb-2">
                  <Eye size={32} />
                </div>
                <h3 className="text-xl font-bold font-poppins text-primary mb-2">Our Vision</h3>
                <p className="text-neutral-dark">To become India's premier camera module manufacturer, recognized globally for quality and innovation.</p>
              </motion.div>
              
              <motion.div 
                className="bg-neutral-light p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="text-secondary mb-2">
                  <Flag size={32} />
                </div>
                <h3 className="text-xl font-bold font-poppins text-primary mb-2">Our Mission</h3>
                <p className="text-neutral-dark">To build self-reliance in critical technology while upholding the highest standards of manufacturing excellence.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
