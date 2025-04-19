import React from "react";

const phases = [
  { phase: "Collecting LOIs/POs", date: "Q2 2025", isCurrent: true },
  { phase: "Cleanroom Construction", date: "Q3 2025", isCurrent: false },
  { phase: "System Installation & Testing", date: "Q4 2025", isCurrent: false },
  { phase: "Limited Production", date: "Q1 2026", isCurrent: false },
  { phase: "Full-Scale Operations", date: "Q2 2026", isCurrent: false },
];

export default function ProgressTracker() {
  return (
    <section className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-6 text-center">
          Progress Tracker
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {phases.map((item, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                  item.isCurrent ? "bg-primary text-white" : "bg-neutral-dark text-neutral-light"
                }`}
              >
                {index + 1}
              </div>
              <p className="font-bold text-primary">{item.phase}</p>
              <p className="text-sm text-neutral-dark">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}