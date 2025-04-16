import { motion } from "framer-motion";

export default function TimelineSection() {
  const timelineItems = [
    {
      phase: "Phase 1: Q3 2023",
      title: "Facility Planning & Design",
      description: "Comprehensive planning, facility design, and securing partnerships with international technology providers.",
      status: "Completed",
      tags: ["Site Selection", "Partnerships", "Initial Investment"]
    },
    {
      phase: "Phase 2: Q1 2024",
      title: "Infrastructure Development",
      description: "Construction of clean rooms, installation of basic infrastructure, and setup of initial production lines.",
      status: "Completed",
      tags: ["Clean Room Construction", "Basic Equipment", "Team Formation"]
    },
    {
      phase: "Phase 3: Q2 2024",
      title: "Equipment Installation & Testing",
      description: "Installation of specialized manufacturing equipment, quality control systems, and initial test production runs.",
      status: "In Progress",
      tags: ["Specialized Equipment", "Test Production", "Quality Systems"]
    },
    {
      phase: "Phase 4: Q3 2024",
      title: "Initial Production",
      description: "Beginning of limited production runs, certification processes, and first client deliveries.",
      status: "Planned",
      tags: ["Limited Production", "Certifications", "Initial Clients"]
    },
    {
      phase: "Phase 5: Q1 2025",
      title: "Full-Scale Operations",
      description: "Complete operational capacity with all product lines running, full workforce deployment, and maximum production capacity.",
      status: "Planned",
      tags: ["Full Capacity", "Export Capabilities", "R&D Expansion"]
    }
  ];

  return (
    <section id="timeline" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-6">Our Execution Timeline</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-neutral-dark">
            From initial planning to full-scale production, our strategic timeline ensures efficient implementation of our manufacturing vision.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto pl-12 md:pl-16">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-neutral-dark"></div>
          
          {timelineItems.map((item, index) => (
            <motion.div 
              key={index}
              className={`timeline-item relative mb-12 ${index === timelineItems.length - 1 ? 'last-timeline-item' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-connector"></div>
              <div className="bg-white rounded-xl shadow-md p-6 ml-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className={`${item.status === 'Planned' ? 'bg-neutral-dark' : 'bg-primary'} text-white px-4 py-2 rounded-full inline-block`}>
                    <p className="font-bold">{item.phase}</p>
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-primary">{item.title}</h3>
                </div>
                <p className="text-neutral-dark mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span 
                    className={`${
                      item.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : item.status === 'In Progress'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-neutral-dark bg-opacity-10 text-neutral-dark'
                    } px-3 py-1 rounded-full text-xs font-semibold`}
                  >
                    {item.status}
                  </span>
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-neutral-light text-primary px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
