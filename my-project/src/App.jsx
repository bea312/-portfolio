import { useState } from "react";
import "./App.css";
import heroImage from "./assets/WhatsApp Image 2024-12-16 at 09.55.32_9c2b3a89.jpg";

const services = [
  {
    id: "01",
    title: "Web design",
    description:
      "Creating modern website layouts with clean structure, responsive design, and strong visual presentation.",
  },
  {
    id: "02",
    title: "Graphics design",
    description:
      "Designing visual content and interface elements that improve the overall look and feel of digital products.",
  },
  {
    id: "03",
    title: "Social media",
    description:
      "Building engaging digital sections and visual content that support brand presence across platforms.",
  },
  {
    id: "04",
    title: "App design",
    description:
      "Designing app-style interfaces with user-friendly layouts and clean mobile-first presentation.",
  },
  {
    id: "05",
    title: "Digital marketing",
    description:
      "Creating landing pages and promotional sections that help present products and services clearly online.",
  },
  {
    id: "06",
    title: "Content writing",
    description:
      "Writing clean and supportive content that improves readability and strengthens website presentation.",
  },
];

const works = [
  "./assets/Capture 55.PNG",
  "./assets/capt1.PNG",
  "./assets/Capture.PNG",   
  "./assets/Capture2.PNG",
  "./assets/Capture3.PNG",
  "./assets/cpt4.PNG",
];

const skills = [
  { name: "HTML & CSS", value: "92%" },
  { name: "React JS", value: "65%" },
  { name: "JavaScript", value: "88%" },
  { name: "Next JS", value: "60%" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <header className="hero" id="home">
        <nav className="navbar">
          <a href="#home" className="brand">
            Bea<span>trice</span>
          </a>

          <button
            className="menuToggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`navLinks ${menuOpen ? "navOpen" : ""}`}>
            <a
              href="#home"
              className="activeLink"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About Me
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>

          <a href="#contact" className="gradientBtn desktopOnly">
            Connect With Me
          </a>
        </nav>

        <div className="heroBody">
          <img
            className="heroAvatar"
            src= "./assets/Mukagasirabo Beatrice _photo.JPG"
            alt="Frontend developer portrait"
          />

          <h1 className="heroTitle">
            I'm <span className="gradientText">Beatrice Mukagasirabo,</span> a frontend
            developer building clean and modern web experiences.
          </h1>

          <p className="heroText">
            I create responsive, user-friendly, and visually polished websites
            with a strong focus on frontend development, design clarity, and
            smooth user experience.
          </p>

          <div className="heroActions">
            <a href="#contact" className="gradientBtn">
              Connect with me
            </a>
            <a href="#footer" className="outlineBtn">
              My resume
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section about" id="about">
          <h2 className="sectionTitle">About me</h2>

          <div className="aboutGrid">
            <img
              className="aboutImage"
              src=" ./assets/WhatsApp Image 2024-12-16 at 09.55.32_9c2b3a89.jpg"
              alt="Frontend developer portrait"
            />

            <div className="aboutContent">
              <p>
                I am a frontend developer passionate about building modern
                websites that are clean, responsive, and easy to use. I enjoy
                turning ideas into real digital experiences through thoughtful
                layouts, reusable components, and polished interfaces.
              </p>

              <p>
                My focus is on creating websites that not only look good but
                also feel smooth and professional. I care about structure,
                spacing, responsiveness, and the small design details that
                improve the overall user experience.
              </p>

              <div className="skillList">
                {skills.map((skill) => (
                  <div className="skillRow" key={skill.name}>
                    <div className="skillHeader">
                      <span>{skill.name}</span>
                    </div>
                    <div className="skillBar">
                      <div
                        className="skillFill"
                        style={{ width: skill.value }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="stats">
            <div className="statItem">
              <h3 className="gradientText">4+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="statItem">
              <h3 className="gradientText">20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="statItem">
              <h3 className="gradientText">3+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <h2 className="sectionTitle">My Services</h2>

         

        <div className="footerBottom">
          <p>© 2026 M Beatrice. All rights reserved.</p>
          <div className="footerLinks">
            <a href="#home">Term of Services</a>
            <a href="#home">Privacy Policy</a>
            <a href="#contact">Connect with me</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
