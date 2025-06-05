// src/pages/Services.jsx
import React from "react";
import { FaTree, FaLeaf, FaWater, FaSeedling, FaTools } from "react-icons/fa";

const services = [
  {
    icon: <FaTree />,
    title: "Hedge Trimming",
    description: "Precision trimming and shaping to enhance curb appeal and plant health.",
  },
  {
    icon: <FaLeaf />,
    title: "Planting & Mulching",
    description: "Careful plant selection, layout, and protective mulching for longevity.",
  },
  {
    icon: <FaWater />,
    title: "Irrigation Setup",
    description: "Smart, efficient irrigation tailored to your landscape's needs.",
  },
  {
    icon: <FaSeedling />,
    title: "Lawn Care & Fertilizing",
    description: "Seasonal feeding, mowing, and restoration for lush, green lawns.",
  },
  {
    icon: <FaTools />,
    title: "Garden Maintenance",
    description: "Ongoing weeding, pruning, and upkeep to keep your garden flourishing.",
  },
];

export default function Services() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-success">Our Services</h1>
        <p className="lead text-muted">Everything you need for a healthy, beautiful outdoor space.</p>
      </div>

      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-4" key={index}>
            <div className="p-4 border rounded shadow-sm h-100 text-center">
              <div className="fs-1 text-success mb-3">{service.icon}</div>
              <h5>{service.title}</h5>
              <p className="text-muted">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
