import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Camera, 
  Thermometer, 
  Vibrate, 
  Waves,
  Ruler,
  FlaskConical,
  Verified
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function QualitySection() {
  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "We are in the process of obtaining this certification for our Quality Management System.",
    },
    {
      title: "ISO 14001:2015",
      description: "We are planning to achieve this certification for our Environmental Management System.",
    },
    {
      title: "IATF 16949:2016",
      description: "This certification for Automotive Quality Management System is part of our future goals.",
    },
    {
      title: "BIS Certification",
      description: "We are working towards obtaining the Bureau of Indian Standards certification.",
    },
    {
      title: "UL Certification",
      description: "We aim to achieve this Product Safety Certification soon.",
    },
    {
      title: "RoHS Compliance",
      description: "We are committed to obtaining this certification for Restriction of Hazardous Substances.",
    }
  ];

  const testingEquipment = [
    { icon: <Camera size={20} className="text-secondary" />, name: "Image Quality Test System" },
    { icon: <Thermometer size={20} className="text-secondary" />, name: "Environmental Test Chamber" },
    { icon: <Vibrate size={20} className="text-secondary" />, name: "Vibration Test System" },
    { icon: <Waves size={20} className="text-secondary" />, name: "EMI/EMC Test Equipment" },
    { icon: <Ruler size={20} className="text-secondary" />, name: "Optical Measurement System" },
    { icon: <FlaskConical size={20} className="text-secondary" />, name: "Material Analysis Lab" }
  ];

  return (
    <section id="quality" className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-6">Quality Control & Certifications</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-neutral-dark">
            Our rigorous quality control processes and international certifications ensure that every camera module we will produce meets the highest standards of performance and reliability.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Tabs defaultValue="certifications">
            <TabsList>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
              <TabsTrigger value="testing">Testing Capabilities</TabsTrigger>
            </TabsList>
            
            <TabsContent value="certifications" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="border border-neutral p-6 rounded-lg flex flex-col items-center text-center">
                    <h4 className="font-bold text-primary mb-2">{cert.title}</h4>
                    <p className="text-neutral-dark text-sm">{cert.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="testing" className="mt-6">
              <div className="md:w-1/2 mx-auto">
                <div className="border border-neutral p-4 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">Testing Equipment Highlights</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {testingEquipment.map((equipment, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {equipment.icon}
                        <span className="text-neutral-dark text-sm">{equipment.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
