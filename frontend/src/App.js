import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('projects');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); 
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.liquid-reveal');
    elements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, [activeTab]);

  // Replace YOUR_FILE_ID_HERE with your actual Google Drive ID
  const resumeLink = "https://drive.google.com/file/d/1Ox6OZ5-l2nj0r55QTjtrfpGwrd10lNYj/view?usp=drive_link";

  const skills = [
    { cat: "Programming Languages", items: ["Java", "Streams API)", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3", "SQL", "Python"]},
    { cat: "Backend Technologies", items: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate ORM", "Microservices", "Node.js", "Express"] },
    { cat: "Frontend Technologies", items: ["React.js", "Redux/Context API", "Axios", "Bootstrap"] },
    { cat: "API & Web Services", items: ["RESTful APIs (Design & Dev)", "JSON"]},
    { cat: "Databases", items: ["MySQL", "MongoDB", "Database Design & Optimization"]},
    { cat: "DevOps & Cloud", items: ["Git", "GitHub", "CI/CD", "AWS Fundamentals (EC2, S3)", "Linux Basics"]},
    { cat: "Testing & QA", items: ["JUnit 5", "Unit/Integration Testing", "Test-Driven Development (TDD)", "Postman (API Testing)"]},
    { cat: "Core Engineering", items: ["Data Structures & Algorithms", "OOP", "SDLC"] },
    { cat: "Tools & Practices", items: ["Maven", "Agile/Scrum", "Debugging & Performance Optimization", "Responsive Design"] }
  ];

  const projectData = [
    { 
      title: "ShopEase E-Commerce", 
      tech: "Spring Boot • React • Microservices",
      desc: "Architected a modular full-stack platform with JWT stateless authentication. Engineered RESTful APIs to handle high-concurrency requests with optimized database indexing.",
      github: "https://github.com/Pellakuru-Yaswanth/ShopEase",
      live: "#",
    },
    { 
      title: "Notes Application", 
      tech: "React • JavaScript",
      desc: "A high-performance productivity tool built with React.js that enables users to create, search, and manage notes in real-time. This project demonstrates advanced state management and UI interactivity.",
      github: "https://github.com/Pellakuru-Yaswanth/Notes-Application",
      live: "#",
    }
  ];

  const [projectErrors, setProjectErrors] = useState(["", ""]);

  const achievementData = [
    { title: "TCS Codevita S11", detail: "Global Rank 4196", sub: "Achieved elite ranking in the top 4% of participants worldwide.", icon: "🏆" },
    { title: "LeetCode Mastery", detail: "129+ Problems", sub: "Solved 71 Easy, 52 Medium, and 6 Hard problems showcasing advanced DSA proficiency.", icon: "💻" },
    { title: "Competition Winner", detail: "1st Place", sub: "Winner of inter-collegiate coding competitions at NECN and GIST Institution.", icon: "🥇" },
    { title: "HackerRank Certifications", detail: "Certified", sub: "Certified in Java, JavaScript, and Python.", icon: "📜" }
  ];

  const handleRedirect = (project, projectIndex, linkType) => {
    const tempProjectErrors = ["", ""];
    if(linkType === "github"){
      if(project.github === "#") tempProjectErrors[projectIndex] = "GitHub Repo is not available";
      else window.open(project.github, "_blank");
    } else {
      if(project.live === "#") tempProjectErrors[projectIndex] = "Live Demo is not available";
      else window.open(project.live, "_blank");
    }
    setProjectErrors(tempProjectErrors);
  }

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`portfolio-parent ${isMenuOpen ? 'menu-visible' : ''}`}>
      
      {/* OVERLAY: Closes menu when clicking on normal screen */}
      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* HAMBURGER TRIGGER */}
      <button className={`menu-trigger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      {/* SIDE MENU */}
      <nav className={`side-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="menu-content">
          <p className="menu-label">Navigation</p>
          <button onClick={() => { setIsMenuOpen(false); window.scrollTo({top:0, behavior:'smooth'}) }}>Top</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => { setActiveTab('projects'); scrollToSection('main-content'); }}>Projects</button>
          <button onClick={() => { setActiveTab('achievements'); scrollToSection('main-content'); }}>Achievements</button>
          
          <p className="menu-label">Documents</p>
          <a href={resumeLink} target="_blank" rel="noreferrer" className="resume-btn">View Resume</a>
          <a href={resumeLink} download className="resume-btn download">Download Resume 📥</a>
        </div>
      </nav>

      {/* ANIMATED BACKGROUND */}
      <div className="liquid-bg-blobs">
        <div className="blob one"></div>
        <div className="blob two"></div>
        <div className="blob three"></div>
      </div>

      <div className="main-glass">
        {/* HERO SECTION */}
        <header className="hero-modern liquid-reveal">
          <div className="hero-badge">Available for Opportunity</div>
          <h1 className="hero-title">
            Yaswanth <span className="gradient-text">Pellakuru</span>
          </h1>
          <div className="hero-divider"></div>
          <p className="hero-desc">
            Performance-driven <strong>Software Engineer</strong>. <br/>
            Specializing in <span>Java Full Stack Development</span>, Microservices, and scalable architectures.
          </p>

          {/* MAIN SCREEN RESUME OPTIONS */}
          <div className="hero-resume-wrap">
            <a href={resumeLink} target="_blank" rel="noreferrer" className="hero-resume-btn outline">View Resume</a>
            <a href={resumeLink} download className="hero-resume-btn filled">Download Resume 📥</a>
          </div>

          <div className="hero-stats">
            <div className="stat-item"><strong>129+</strong> LeetCode</div>
            <div className="stat-item"><strong>Global Rank 4196</strong> TCS CodeVita</div>
          </div>
        </header>

        {/* SKILLS SECTION */}
        <section id="skills" className="skills-dashboard liquid-reveal">
          {skills.map((group, idx) => (
            <div className="skill-tile" key={idx}>
              <div className="tile-glow"></div>
              <span className="cat-label">{group.cat}</span>
              <div className="pill-wrap">
                {group.items.map(item => <span key={item} className="glass-pill">{item}</span>)}
              </div>
            </div>
          ))}
        </section>

        {/* TAB NAVIGATION */}
        <nav id="main-content" className="tab-switcher liquid-reveal">
          <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>Featured Projects</button>
          <button className={activeTab === 'achievements' ? 'active' : ''} onClick={() => setActiveTab('achievements')}>Key Achievements</button>
        </nav>

        {/* CONTENT GRID */}
        <main className="responsive-grid">
          {activeTab === 'projects' ? (
            projectData.map((p, i) => (
              <div key={i} className="project-card lift-card liquid-reveal">
                <span className="tech-tag">{p.tech}</span>
                <h3>{p.title}</h3>
                <p className='desc'>{p.desc}</p>
                <div className="btn-group">
                  <button className="action-btn github" onClick={() => handleRedirect(p, i, "github")}>GitHub</button>
                  <button className="action-btn live" onClick={() => handleRedirect(p, i, "live")}>Live Demo</button>
                </div>
                <p className='error'>{projectErrors[i]}</p>
              </div>
            ))
          ) : (
            achievementData.map((a, i) => (
              <div key={i} className="project-card lift-card liquid-reveal achievement">
                <div className="card-icon">{a.icon}</div>
                <span className="tech-tag">{a.detail}</span>
                <h3>{a.title}</h3>
                <p className='desc'>{a.sub}</p>
              </div>
            ))
          )}
        </main>

        {/* FOOTER */}
        <footer className="centered-footer liquid-reveal">
          <div className="footer-socials">
            <a href="mailto:yaswanth.pellakuru08@gmail.com" className="footer-btn">Email</a>
            <a href="https://www.linkedin.com/in/yaswanth-pellakuru-194a13259/" target="_blank" rel="noreferrer" className="footer-btn">LinkedIn</a>
            <a href="https://github.com/Pellakuru-Yaswanth" target="_blank" rel="noreferrer" className="footer-btn">GitHub</a>
          </div>
          <p className="copy">© 2026 Yaswanth Pellakuru | Nellore, AP</p>
        </footer>
      </div>
    </div>
  );
}

export default App;