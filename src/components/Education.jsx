import React from "react";

function Education() {
  return (
    <section id="education" style={styles.section}>
      <div style={styles.container}>

        <div style={styles.left}>
          <h2 style={styles.heading}>Education</h2>

          <div style={styles.timelineItem}>
            <span className="star">☆</span>
            <div>
              <p style={styles.year}>2019 - 2021</p>
              <h3>Intermediate</h3>
              <p style={styles.sub}>Vandana Junior College</p>
            </div>
          </div>

          <div style={styles.timelineItem}>
            <span className="star">☆</span>
            <div>
              <p style={styles.year}>2021 - 2025</p>
              <h3>B.Tech CSE</h3>
              <p style={styles.sub}>Narsimhareddy Engineering College</p>
            </div>
          </div>
        </div>

        <div style={styles.right}>
          <h2 style={styles.heading}>Technical Skills</h2>

          <div style={styles.skillContainer}>
            {["HTML","CSS","JS","React","Python"].map((s,i)=>(
              <span key={i} className="skill-btn">{s}</span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .star {
          color: var(--text);
          cursor: pointer;
          transition: 0.3s;
        }

        .star:hover {
          transform: rotate(360deg) scale(1.3);
          text-shadow: 0 0 10px var(--text);
        }

        .skill-btn {
          border: 1px solid var(--text);
          color: var(--text);
          padding: 8px 14px;
          border-radius: 20px;
          cursor: pointer;
          transition: 0.3s;
        }

        .skill-btn:hover {
          background: var(--text);
          color: var(--bg);
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 5%",
  },

  container: {
    display: "flex",
    gap: "50px",
  },

  left: {
    flex: 1,
    borderRight: "1px solid var(--border)",
    paddingRight: "40px"
  },

  right: {
    flex: 1,
    paddingLeft: "40px"
  },

  heading: {
    borderBottom: "2px solid var(--text)",
    display: "inline-block",
    marginBottom: "20px"
  },

  timelineItem: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },

  year: {
    opacity: 0.6
  },

  sub: {
    opacity: 0.7
  },

  skillContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap"
  }
};

export default Education;