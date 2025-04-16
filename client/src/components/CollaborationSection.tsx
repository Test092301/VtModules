import { motion } from "framer-motion";
import { Globe, School, Users, Handshake } from "lucide-react";

export default function CollaborationSection() {
  return (
    <section id="collaboration" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-6">Global Collaboration, Indian Innovation</h2>
            <div className="w-20 h-1 bg-secondary mb-6"></div>
            <p className="text-neutral-dark mb-8 leading-relaxed">
              We've partnered with international technology leaders and Indian research institutions to create a unique ecosystem that combines global expertise with local innovation capabilities.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-white">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins text-primary mb-2">International Technology Transfer</h3>
                  <p className="text-neutral-dark">Collaborations with leading camera module manufacturers from Korea, Japan, and Germany to implement best practices.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-white">
                  <School size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins text-primary mb-2">Research Institution Partnerships</h3>
                  <p className="text-neutral-dark">Active collaboration with IITs and CSIR labs to drive continuous innovation in optical technologies.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-white">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins text-primary mb-2">Expert Team</h3>
                  <p className="text-neutral-dark">Our team includes industry veterans with decades of experience in optical engineering and precision manufacturing.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Engineers collaborating on camera module design" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581093804475-577d72e81e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Global partnership meeting" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Research and development lab" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="rounded-xl overflow-hidden bg-primary">
              <div className="p-6 h-full flex flex-col justify-center items-center text-center text-white">
                <Handshake className="text-4xl mb-2" size={40} />
                <p className="font-bold font-poppins text-lg">10+ Global Partnerships</p>
                <p className="text-sm opacity-80">Across 3 continents</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
