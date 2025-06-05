import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const galleryImages = [
  { src: "/images/lush-backyard.jpg", alt: "Lush backyard transformation" },
  { src: "/images/trimmed-hedge.jpg", alt: "Trimmed hedges and walkway" },
  { src: "/images/mulch-garden.jpg", alt: "Modern garden beds with mulch" },
  { src: "/images/mowing.jpg", alt: "Clean-cut front yard lawn" },
  { src: "/images/tree-planting.jpg", alt: "Tree planting project" },
  { src: "/images/patio-greenery.jpg", alt: "Patio surrounded by greenery" },
];

export default function Gallery() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-success">Our Work</h1>
        <p className="lead text-muted">A glimpse of gardens we’ve brought to life.</p>
      </div>

      <div className="row g-4">
        {galleryImages.map((image, idx) => (
          <div className="col-md-4 col-sm-6" key={idx}>
            <div className="border rounded shadow-sm overflow-hidden">
              <Zoom>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", height: "250px" }}
                />
              </Zoom>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
