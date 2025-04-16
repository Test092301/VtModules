import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    privacyPolicy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, privacyPolicy: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.company || !formData.email || !formData.inquiryType || !formData.message || !formData.privacyPolicy) {
      toast({
        title: "Error",
        description: "Please fill in all required fields and accept the privacy policy.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Success",
        description: "Your inquiry has been submitted successfully. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
        privacyPolicy: false
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your inquiry. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-6">Get in Touch</h2>
            <div className="w-20 h-1 bg-secondary mb-6"></div>
            <p className="text-neutral-dark mb-8">
              Interested in learning more about our manufacturing capabilities or discussing a potential partnership? Our team is ready to assist you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins text-primary mb-1">Our Location</h3>
                  <p className="text-neutral-dark">
                    CameraTech India Manufacturing Facility<br />
                    Electronic Manufacturing Cluster<br />
                    Bengaluru, Karnataka 560100<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins text-primary mb-1">Contact Information</h3>
                  <p className="text-neutral-dark">
                    Phone: +91 80 4123 5678<br />
                    Email: info@cameratechindia.com<br />
                    Office Hours: Monday - Friday, 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins text-primary mb-1">Schedule a Visit</h3>
                  <p className="text-neutral-dark">
                    We offer facility tours for potential clients and partners.<br />
                    Please contact us at least 2 weeks in advance to schedule.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold font-poppins text-primary mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="name" className="block text-neutral-dark mb-2 font-medium">Full Name *</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="block text-neutral-dark mb-2 font-medium">Company *</Label>
                    <Input 
                      type="text" 
                      id="company" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-neutral-dark mb-2 font-medium">Email Address *</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="block text-neutral-dark mb-2 font-medium">Phone Number</Label>
                    <Input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="inquiry-type" className="block text-neutral-dark mb-2 font-medium">Inquiry Type *</Label>
                  <Select 
                    onValueChange={handleSelectChange}
                    value={formData.inquiryType}
                  >
                    <SelectTrigger id="inquiry-type" className="w-full">
                      <SelectValue placeholder="Please select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="procurement">Procurement Inquiry</SelectItem>
                      <SelectItem value="investment">Investment Interest</SelectItem>
                      <SelectItem value="careers">Careers</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="message" className="block text-neutral-dark mb-2 font-medium">Message *</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <div className="flex items-start gap-2">
                    <Checkbox 
                      id="privacy-policy" 
                      checked={formData.privacyPolicy}
                      onCheckedChange={handleCheckboxChange}
                      className="mt-1" 
                      required 
                    />
                    <Label 
                      htmlFor="privacy-policy" 
                      className="text-sm text-neutral-dark"
                    >
                      I agree to the processing of my personal data in accordance with the Privacy Policy *
                    </Label>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-md transition-colors shadow-lg w-full"
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
