import React from "react";

export default function ServicesCard({ icon, title, description }) {
  return (
    <div className="col-md-4">
      <div className="p-4 border rounded shadow-sm h-100 text-center">
        <div className="mb-3 fs-1 text-success">{icon}</div>
        <h5>{title}</h5>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  );
}
