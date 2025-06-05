import React from "react";

export default function About() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8 text-center">
          <h1 className="fw-bold text-success mb-3">About GreenLeaf Gardens</h1>
          <p className="lead text-muted">
            At GreenLeaf Gardens, we’re passionate about transforming outdoor spaces into vibrant, thriving gardens. 
            With years of hands-on experience and a love for the natural world, we provide tailored solutions for every client.
          </p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="p-4 border rounded shadow-sm h-100">
            <h4 className="text-success">Our Mission</h4>
            <p>
              To enhance the beauty and sustainability of outdoor spaces through reliable, expert garden services
              while building lasting relationships with our clients.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4 border rounded shadow-sm h-100">
            <h4 className="text-success">Why Choose Us?</h4>
            <ul className="list-unstyled">
              <li>✅ Locally owned and operated</li>
              <li>✅ Eco-friendly practices</li>
              <li>✅ Affordable and flexible packages</li>
              <li>✅ Passionate, qualified staff</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
