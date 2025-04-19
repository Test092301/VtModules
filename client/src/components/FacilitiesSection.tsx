import { motion } from "framer-motion";
import { useScroll } from "@/hooks/use-scroll";

export default function FacilitiesSection() {
  const facilities = [
    {
      title: "Fully Automated SMT line",
      description: "Our state-of-the-art SMT lines ensure precision and efficiency in assembling electronic components with minimal human intervention.",
      tags: ["High Precision", "Efficiency"],
    },
    {
      title: "Class-1000 Cleanroom Environment",
      description: "Maintaining a controlled environment with less than 1000 particles per cubic foot to ensure contamination-free manufacturing.",
      tags: ["Controlled Environment", "ISO Certified"],
    },
    {
      title: "Ultrasonic cleaning after SMT",
      description: "Advanced ultrasonic cleaning processes to remove contaminants and ensure the highest quality standards post-SMT.",
      tags: ["High Purity", "Advanced Cleaning"],
    },
    {
      title: "Active Alignment for lens Assembly",
      description: "Precision alignment technology for lens assembly to achieve optimal image quality and performance.",
      tags: ["Precision Alignment", "Optimal Performance"],
    },
    {
      title: "Manual Assembly + Baking for small orders",
      description: "Customized manual assembly and baking processes tailored for small batch orders, ensuring flexibility and quality.",
      tags: ["Custom Orders", "Flexibility"],
    },
    {
      title: "Vibration testing + Image Quality Verification",
      description: "Comprehensive testing to ensure durability and superior image quality under various conditions.",
      tags: ["Durability Testing", "Image Quality"],
    },
    {
      title: "UV Adhesive Bonding + Protective Packaging",
      description: "Advanced bonding techniques and secure packaging to protect products during transit and storage.",
      tags: ["Secure Packaging", "Advanced Bonding"],
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
            Our cutting-edge manufacturing facilities will be equipped with the latest technology to ensure precision, quality, and efficiency in every camera module we produce.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
