import React from "react";
import { Link } from "react-router-dom";
import ServicesCard from "../components/ServicesCard";
import { FaTree, FaLeaf, FaWater } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
          <h1 className="display-4 fw-bold text-success">
            Demo GreenLeaf Gardens Demo
          </h1>
          <p className="lead">
            Bringing life to your landscape with professional, reliable garden care.
          </p>
          <Link to="/contact" className="btn btn-success btn-lg mt-3">
            Get a Free Quote
          </Link>
        </div>
        <div className="col-lg-5 col-md-6">
          <img
            src="/images/hero-garden.jpg"
            alt="Garden in full bloom"
            className="img-fluid w-100 rounded shadow"
          />
        </div>
      </div>

      {/* Services Overview */}
      <div className="text-center mb-4">
        <h2 className="fw-semibold">Our Core Services</h2>
        <p className="text-muted">Tailored care for gardens of all shapes and sizes.</p>
      </div>

      <div className="row text-center g-4">
        <ServicesCard
          icon={<FaTree />}
          title="Hedge Trimming"
          description="Precision trimming and shaping to enhance curb appeal."
        />
        <ServicesCard
          icon={<FaLeaf />}
          title="Planting and Mulching"
          description="Beautiful arrangements and protective mulching for long-lasting growth."
        />
        <ServicesCard
          icon={<FaWater />}
          title="Irrigation Setup"
          description="Efficient water systems tailored to your garden's needs."
        />
      </div>
    </div>
  );
}
