import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Oops! Something went wrong. Try again later.");
        }
      );
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-success">Contact Us</h1>
        <p className="lead text-muted">Let’s bring your vision to life.</p>
      </div>

      <div className="row g-5">
        {/* Contact Form */}
        <div className="col-md-6">
          <form ref={form} onSubmit={sendEmail} className="row g-3">
            <div className="col-12">
              <label className="form-label">Name</label>
              <input type="text" name="name" required className="form-control" />
            </div>

            <div className="col-12">
              <label className="form-label">Email</label>
              <input type="email" name="email" required className="form-control" />
            </div>

            <div className="col-12">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="form-control"
              ></textarea>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-success px-4">
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Office Info / Optional Map */}
        <div className="col-md-6">
          <div className="border rounded shadow-sm p-4 h-100">
            <h5 className="mb-3">Our Office</h5>
            <p className="text-muted mb-1">123 Greenway Drive</p>
            <p className="text-muted mb-1">Wellington, NZ</p>
            <p className="text-muted">Phone: 0800-GREEN-LEAF</p>
            <hr />
            <h5 className="mb-3">Business Hours</h5>
            <p className="text-muted mb-1">Mon–Fri: 8:00 AM – 5:00 PM</p>
            <p className="text-muted">Sat: 9:00 AM – 1:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
