import profile from "../assets/profile.png";

function Home() {
  return (
    <section id="home" className="section" style={{ paddingTop: "100px" }}>
      <div style={styles.container}>
        <img src={profile} alt="profile" style={styles.img} />

        {/* 👇 Add this style */}
        <div style={styles.textBox}>
          <h1 style={styles.name} className="typing">Hello, I'm K Elizabeth Rani</h1>
          <p>
            2025 Graduate | Frontend Developer | UI Designer</p>
          <p>Skilled in Python, HTML, CSS, JavaScript, and React.
            Proficient in Git and GitHub, with hands-on experience in building responsive and user-focused web applications.
            Passionate about building modern UI and real-world apps.
          </p>
          <div style={styles.btnGroup}>
            <a href="/resume.pdf" download className="btn outline">
              Download Resume
            </a>

            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn outline">
              View Resume
            </a>
          </div>


        </div>




      </div>
    </section>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "40px",
    alignItems: "center",
    padding: "40px"
  },
  btnGroup: {
  display: "flex",
  gap: "15px",
  marginTop: "10px"
},


  // 🔥 ADD THIS
  textBox: {
    display: "flex",
    flexDirection: "column",
    gap: "20px" // controls spacing between h1, p, button
  },

  img: {
    width: "300px",
    borderRadius: "30px",
    // border: "3px solid rgba(255,255,255,0.2)"
  }
};

export default Home;