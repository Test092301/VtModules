import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a camera module?",
    answer: "A camera module is a compact assembly of a lens, image sensor, and other components used in devices like smartphones, laptops, and industrial equipment.",
  },
  {
    question: "When will production start?",
    answer: "We plan to begin limited production in Q1 2026 and full-scale operations in Q2 2026.",
  },
  {
    question: "How can I place an order?",
    answer: "You can submit a Letter of Intent (LOI) or Purchase Order (PO) through our contact form or reach out to us directly via email. sales@vtmodules.com",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}