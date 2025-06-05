import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-light text-dark pt-4 mt-5 border-top">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-success fw-bold">Demo GreenLeaf Gardens Demo</h5>
            <p className="small text-muted">
              Providing professional, reliable garden care with a personal touch across New Zealand.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
              <li><Link to="/about" className="text-decoration-none text-muted">About</Link></li>
              <li><Link to="/services" className="text-decoration-none text-muted">Services</Link></li>
              <li><Link to="/gallery" className="text-decoration-none text-muted">Gallery</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-muted">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold">Contact Us</h6>
            <p className="small text-muted mb-1">📍 Christchurch, New Zealand</p>
            <p className="small text-muted mb-1">📞 0800 GARDEN NZ</p>
            <p className="small text-muted">✉️ info@greenleafdemo.co.nz</p>
          </div>
        </div>

        <hr />

        {/* Copyright */}
        <div className="text-center pb-3 small text-muted">
          &copy; {new Date().getFullYear()} GreenLeaf Gardens Demo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
