import React from "react";

const products = [
  {
    name: "Wearable Camera Module",
    description: "High-resolution camera modules designed for Wearables, offering superior image quality and compact design.",
  },
  {
    name: "Industrial Camera Module",
    description: "Durable camera modules for industrial applications, ensuring reliability in harsh environments.",
  },
  {
    name: "Custom Camera Module",
    description: "Tailored camera modules to meet specific client requirements, from design to functionality.",
  },
  {
    name: "Rear Camera Modules (Smartphones)",
    description: "High-performance rear camera modules designed for smartphones, offering advanced features like HDR and low-light optimization.",
  },
  {
    name: "Front Camera Modules (Smartphones)",
    description: "Compact and efficient front camera modules for smartphones, ensuring superior image quality for selfies and video calls.",
  },
  {
    name: "Automotive Camera Modules (ADAS, 360° View)",
    description: "Rugged and reliable camera modules for automotive applications, including Advanced Driver Assistance Systems (ADAS) and 360° surround view.",
  },
  {
    name: "USB, MIPI, FPD-Link, GMSL2 Camera Modules",
    description: "Versatile camera modules with multiple interface options, suitable for a wide range of industrial and consumer applications.",
  },
  {
    name: "Webcam, Medical Endoscopy, Industrial Optical Sensors",
    description: "Specialized camera modules for webcams, medical endoscopy, and industrial optical sensing, ensuring precision and reliability.",
  },
  {
    name: "HDR, Low-light, Monochrome, Global Shutter Modules",
    description: "Advanced camera modules with features like HDR, low-light performance, monochrome imaging, and global shutter technology for niche applications.",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-6 text-center">
          Product Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold font-poppins text-primary mb-3">{product.name}</h3>
              <p className="text-neutral-dark">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}