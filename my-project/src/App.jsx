import { useState } from "react";
import "./App.css";
import heroImage from "./assets/WhatsApp Image 2024-12-16 at 09.55.32_9c2b3a89.jpg";
import profilePhoto from "./assets/Mukagasirabo Beatrice _photo.JPG";
import capture55 from "./assets/Capture 55.PNG";
import capt1 from "./assets/capt1.PNG";
import capture from "./assets/Capture.PNG";
import capture2 from "./assets/Capture2.PNG";
import capture3 from "./assets/Capture3.PNG";
import cpt4 from "./assets/cpt4.PNG";

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
  capture55,
  capt1,
  capture,   
  capture2,
  capture3,
  cpt4,
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
            src={profilePhoto}
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
              src={heroImage}
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

          <div className="servicesGrid">
            {services.map((service) => (
              <article className="serviceCard" key={service.id}>
                <span className="serviceNumber">{service.id}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="serviceLink">
                  Read More →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="portfolio">
          <h2 className="sectionTitle">My latest work</h2>

          <div className="workGrid">
            {works.map((image, index) => (
              <div className="workCard" key={index}>
                <img src={image} alt={`Project ${index + 1}`} />
                <div className="workOverlay">
                  <h3>Frontend Project</h3>
                  <p>Responsive and modern UI design</p>
                </div>
              </div>
            ))}
          </div>

          <div className="centerAction">
            <a href="#contact" className="outlineBtn">
              Show More →
            </a>
          </div>
        </section>

        <section className="section contactSection" id="contact">
          <h2 className="sectionTitle">Get in touch</h2>

          <div className="contactGrid">
            <div className="contactInfo">
              <h3 className="gradientText">Let's talk</h3>
              <p>
                I&apos;m available to work on frontend projects, landing pages,
                portfolio websites, and modern user interfaces. If you need a
                clean and professional website, feel free to contact me anytime.
              </p>

              <div className="contactList">
                <span>mukagasirabob@gmail.com</span>
                <span>+078-178-312</span>
                <span> Rwanda</span>
              </div>
            </div>

            <form className="contactForm">
              <label>
                Your name
                <input type="text" placeholder="Enter your name" />
              </label>

              <label>
                Your Email
                <input type="email" placeholder="Enter your email" />
              </label>

              <label>
                Write your message here
                <textarea rows="7" placeholder="Enter your message"></textarea>
              </label>

              <button type="submit" className="gradientBtn submitBtn">
                Submit now
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer" id="footer">
        <div className="footerTop">
          <div>
            <a href="#home" className="brand">
              Bea<span>trice</span>
            </a>
            <p className="footerText">
              I am a frontend developer focused on building responsive, modern,
              and visually polished websites with strong attention to clean
              design and user experience.
            </p>
          </div>

          <div className="subscribeBox">
            <input type="email" placeholder="Enter your email" />
            <button className="gradientBtn" type="button">
              Subscribe
            </button>
          </div>
        </div>

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
