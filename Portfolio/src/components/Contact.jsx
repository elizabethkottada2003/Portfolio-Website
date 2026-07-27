import React, { useEffect, useState } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .contact-section {
          background: var(--bg);
          color: var(--text);
          padding: 80px 5%;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
        }

        .contact-container {
          width: 100%;
          max-width: 600px;
          text-align: center;
        }

        h1 {
          font-size: 60px;
          margin-bottom: 30px;
        }

        .highlight {
          border-bottom: 3px solid var(--text);
        }

        label {
          display: block;
          margin-top: 20px;
          font-size: 14px;
          text-align: left;
        }

        input, textarea {
          width: 100%;
          padding: 12px;
          margin-top: 8px;
          border: none;
          outline: none;
          background: var(--glass-bg);
          color: var(--text);
        }

        textarea {
          height: 120px;
        }

        button {
          margin-top: 25px;
          padding: 12px 20px;
          border: none;
          cursor: pointer;
          background: var(--text);
          color: var(--bg);
          width: 100%;
        }

        /* FLOATING RECTANGLE */
        .floating-box {
          position: fixed;
          top: 50%;
          right: 30px;
          transform: translateY(-50%);
          background: var(--glass-bg);
          border: 1px solid var(--border);
          padding: 15px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          backdrop-filter: blur(10px);
          transition: 0.3s;
        }

        .icon {
          font-size: 22px;
          cursor: pointer;
          transition: 0.3s;
        }

        .icon:hover {
          transform: scale(1.2);
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-container">

          {/* CENTER CONTENT */}
          <h1>
           Contact  npn<span className="highlight">Me</span>
          </h1>

          <label>Full Name</label>
          <input placeholder="Enter your full name" />

          <label>Email Address</label>
          <input placeholder="Enter your email" />

          <label>Contact Number</label>
          <input placeholder="Enter your number" />

          <label>Message</label>
          <textarea placeholder="Type your message..." />

          <button>Send Message →</button>

        </div>

        {/* FLOATING SOCIAL RECTANGLE */}
        <div
          className="floating-box"
          style={{
            transform: `translateY(calc(-50% + ${scrollY * 0.2}px))`
          }}
        >
          <a href="https://www.linkedin.com/in/elizabeth-kottada-57997a29b/" className="icon">
            <FaLinkedin />
          </a>

          <a href="https://github.com/elizabethkottada2003" className="icon">
            <FaGithub />
          </a>

          <a href="#" className="icon">
            <FaInstagram />
          </a>
        </div>

      </section>
    </>
  );
}

export default Contact;