import React from "react";
import img1 from "../assets/pp_img1.jpg";
import img2 from "../assets/pp_img2.jpg";
import img3 from "../assets/pp_img3.jpg";
import img4 from "../assets/pp_img4.jpg";
import profile from "../assets/profile.png";

function Projects() {
  return (
    <>
      <style>{`
        .projects-section {
          background: var(--bg);
          color: var(--text);
          padding: 60px 5%;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .title {
          font-size: 42px;
          font-weight: bold;
        }

        .subtitle {
          opacity: 0.6;
          margin-bottom: 40px;
        }

        .projects-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: var(--glass-bg);
          border-radius: 16px;
          padding: 20px;
          text-align: left;
          transition: 0.4s ease;
          border: 1px solid var(--border);
        }

        .project-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 0 30px rgba(0,0,0,0.2);
        }

        /* Image Collage */
        .image-collage {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px;
          margin-bottom: 15px;
        }

        .image-collage img {
          width: 100%;
          height: 100px;
          object-fit: cover;
          filter: grayscale(100%);
          border-radius: 6px;
          transition: 0.3s;
        }

        .image-collage img:hover {
          filter: grayscale(0%);
          transform: scale(1.05);
        }

        /* Portfolio image */
        .portfolio-preview img {
          width: 100%;
          border-radius: 10px;
          margin-bottom: 15px;
          filter: grayscale(100%);
          transition: 0.3s;
        }

        .portfolio-preview img:hover {
          filter: grayscale(0%);
        }

        /* Tech stack */
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 15px 0;
        }

        .tech-stack span {
          background: transparent;
          color: var(--text);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          border: 1px solid var(--border);
          transition: 0.3s;
        }

        .tech-stack span:hover {
          background: var(--text);
          color: var(--bg);
        }

        /* Buttons */
        .buttons {
          display: flex;
          gap: 10px;
        }

        button {
          padding: 10px 15px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          background: var(--text);
          color: var(--bg);
          transition: 0.3s;
        }

        button:hover {
          opacity: 0.8;
        }

        button.outline {
          background: transparent;
          color: var(--text);
          border: 1px solid var(--text);
        }
      `}</style>

      <section id="projects" className="projects-section">
        <h2 className="title">Projects</h2>
        <p className="subtitle">
          A showcase of practical solutions I've built
        </p>

        <div className="projects-container">

          {/* QR Attendance */}
          <div className="project-card">
            <div className="image-collage">
              <img src={img1} alt="img1" />
              <img src={img2} alt="img2" />
              <img src={img3} alt="img3" />
              <img src={img4} alt="img4" />
            </div>

            <h3>QR Attendance System</h3>
            <p>
              Scan-based attendance system using QR codes with real-time tracking,
              authentication, and reporting.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>QR Code API</span>
            </div>

            <div className="buttons">
              <button>Live Demo</button>
              <button className="outline">GitHub</button>
            </div>
          </div>

          {/* Portfolio */}
          <div className="project-card">
            <div className="portfolio-preview">
              {/* <img src={profile} alt="portfolio" /> */}
            </div>

            <h3>Portfolio Website</h3>
            <p>
              Modern responsive portfolio with clean UI and smooth animations.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>Framer Motion</span>
            </div>

            <div className="buttons">
              <button>Live Demo</button>
              <button className="outline">GitHub</button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Projects;