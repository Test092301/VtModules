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
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ISO_logo.svg/1200px-ISO_logo.svg.png",
      title: "ISO 9001:2015",
      description: "Quality Management System"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ISO_logo.svg/1200px-ISO_logo.svg.png",
      title: "ISO 14001:2015",
      description: "Environmental Management System"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/IATF-Logo.svg/1200px-IATF-Logo.svg.png",
      title: "IATF 16949:2016",
      description: "Automotive Quality Management System"
    },
    {
      logo: null,
      icon: <Verified className="text-5xl text-primary" size={50} />,
      title: "BIS Certification",
      description: "Bureau of Indian Standards"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/UL_logo.svg/1200px-UL_logo.svg.png",
      title: "UL Certification",
      description: "Product Safety Certification"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/RoHS_logo.svg/1200px-RoHS_logo.svg.png",
      title: "RoHS Compliance",
      description: "Restriction of Hazardous Substances"
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
            Our rigorous quality control processes and international certifications ensure that every camera module we produce meets the highest standards of performance and reliability.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Tabs defaultValue="quality-process">
            <TabsList>
              <TabsTrigger value="quality-process">Quality Process</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
              <TabsTrigger value="testing">Testing Capabilities</TabsTrigger>
            </TabsList>
            
            <TabsContent value="quality-process" className="mt-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold font-poppins text-primary mb-4">Our Quality Assurance Process</h3>
                  <p className="text-neutral-dark mb-4">
                    Every camera module goes through a comprehensive 15-step quality assurance process before receiving final approval for shipment.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                      <span className="text-neutral-dark">100% component inspection before assembly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                      <span className="text-neutral-dark">Automated optical inspection at multiple stages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                      <span className="text-neutral-dark">Environmental stress screening and reliability testing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                      <span className="text-neutral-dark">Comprehensive image quality verification and analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                      <span className="text-neutral-dark">Statistical process control for continuous improvement</span>
                    </li>
                  </ul>
                </div>
                
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1581093577421-f561a654a353?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                    alt="Quality inspection process" 
                    className="rounded-lg shadow-md"
                  />
                  <div className="mt-6 bg-neutral-light p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M2 12L7 2l5 10-5 10z"/>
                        <path d="M12 2l5 10-5 10"/>
                        <path d="M22 2v20"/>
                      </svg>
                      <h4 className="font-bold text-primary">Quality Metrics</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-neutral-dark">Defect Rate</p>
                        <p className="text-2xl font-bold text-primary">&lt; 0.1%</p>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-dark">First-Pass Yield</p>
                        <p className="text-2xl font-bold text-primary">99.3%</p>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-dark">On-time Delivery</p>
                        <p className="text-2xl font-bold text-primary">98.7%</p>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-dark">Customer Satisfaction</p>
                        <p className="text-2xl font-bold text-primary">4.9/5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="certifications" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="border border-neutral p-6 rounded-lg flex flex-col items-center text-center">
                    <div className="w-20 h-20 flex items-center justify-center mb-4">
                      {cert.logo ? (
                        <img src={cert.logo} alt={cert.title} className="max-h-full" />
                      ) : (
                        cert.icon
                      )}
                    </div>
                    <h4 className="font-bold text-primary mb-2">{cert.title}</h4>
                    <p className="text-neutral-dark text-sm">{cert.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="testing" className="mt-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold font-poppins text-primary mb-4">Advanced Testing Capabilities</h3>
                  <p className="text-neutral-dark mb-6">
                    Our state-of-the-art testing lab is equipped with the latest equipment to evaluate every aspect of camera module performance.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-neutral-light p-4 rounded-lg">
                      <h4 className="font-bold text-primary mb-2">Optical Testing</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary text-sm flex-shrink-0 mt-1">
                            <path d="M5 12h14"/>
                            <path d="m12 5 7 7-7 7"/>
                          </svg>
                          <span className="text-neutral-dark text-sm">MTF (Modulation Transfer Function) analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary text-sm flex-shrink-0 mt-1">
                            <path d="M5 12h14"/>
                            <path d="m12 5 7 7-7 7"/>
                          </svg>
                          <span className="text-neutral-dark text-sm">Color reproduction accuracy measurement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary text-sm flex-shrink-0 mt-1">
                            <path d="M5 12h14"/>
                            <path d="m12 5 7 7-7 7"/>
                          </svg>
                          <span className="text-neutral-dark text-sm">Distortion and aberration analysis</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-neutral-light p-4 rounded-lg">
                      <h4 className="font-bold text-primary mb-2">Environmental Testing</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary text-sm flex-shrink-0 mt-1">
                            <path d="M5 12h14"/>
                            <path d="m12 5 7 7-7 7"/>
                          </svg>
                          <span className="text-neutral-dark text-sm">Temperature cycling (-40°C to +85°C)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary text-sm flex-shrink-0 mt-1">
                            <path d="M5 12h14"/>
                            <path d="m12 5 7 7-7 7"/>
                          </svg>
                          <span className="text-neutral-dark text-sm">Humidity resistance testing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary text-sm flex-shrink-0 mt-1">
                            <path d="M5 12h14"/>
                            <path d="m12 5 7 7-7 7"/>
                          </svg>
                          <span className="text-neutral-dark text-sm">Salt spray corrosion testing</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-neutral-light p-4 rounded-lg">
                      <h4 className="font-bold text-primary mb-2">Reliability Testing</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary text-sm flex-shrink-0 mt-1">
                            <path d="M5 12h14"/>
                            <path d="m12 5 7 7-7 7"/>
                          </svg>
                          <span className="text-neutral-dark text-sm">Drop and impact resistance testing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary text-sm flex-shrink-0 mt-1">
                            <path d="M5 12h14"/>
                            <path d="m12 5 7 7-7 7"/>
                          </svg>
                          <span className="text-neutral-dark text-sm">Vibration and shock testing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary text-sm flex-shrink-0 mt-1">
                            <path d="M5 12h14"/>
                            <path d="m12 5 7 7-7 7"/>
                          </svg>
                          <span className="text-neutral-dark text-sm">Accelerated life testing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226033-bd5f6b45586c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                    alt="Advanced testing equipment" 
                    className="rounded-lg shadow-md mb-6" 
                  />
                     
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
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
