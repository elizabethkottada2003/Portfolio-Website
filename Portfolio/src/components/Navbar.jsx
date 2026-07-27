import React from "react";

function Navbar({ dark, setDark }) {
  return (
    <nav className="glass" style={styles.nav}>
      <ul style={styles.ul}>
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#education" className="nav-link">Education</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>

      {/* Toggle */}
      <div onClick={() => setDark(!dark)} style={styles.toggle}>
        <div
          style={{
            ...styles.circle,
            transform: dark ? "translateX(30px)" : "translateX(0px)",
          }}
        />
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 20,
    left: "50%",
    transform: "translateX(-50%)",
    width: "60%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    zIndex: 1000
  },

  ul: {
    display: "flex",
    gap: "50px",
    listStyle: "none",
  },

  toggle: {
    width: "60px",
    height: "30px",
    borderRadius: "50px",
    background: "var(--glass-bg)",
    display: "flex",
    alignItems: "center",
    padding: "5px",
    cursor: "pointer",
  },

  circle: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "var(--text)",
    transition: "0.3s",
  }
};

export default Navbar;