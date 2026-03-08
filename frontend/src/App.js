import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('projects');

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

  const skills = [
    { cat: "Backend Architecture", items: ["Java", "Spring Boot", "Microservices", "Hibernate", "JPA"] },
    { cat: "Frontend Systems", items: ["React.js", "Redux", "JavaScript (ES6+)", "CSS3"] },
    { cat: "Core Engineering", items: ["DSA", "System Design", "SQL", "Git", "Agile/Scrum"] },
    { cat: "Cloud & Testing", items: ["AWS Fundamentals", "Postman", "JUnit", "CI/CD"] }
  ];

  const projectData = [
    { 
      title: "ShopEase E-Commerce", 
      tech: "Spring Boot • React • Microservices",
      desc: "Architected a modular full-stack platform with JWT stateless authentication. Engineered RESTful APIs to handle high-concurrency requests with optimized database indexing.",
      github: "#",
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
    if(linkType=="github"){
      if(project.github=="#") tempProjectErrors[projectIndex] = "GitHub Repo is not available for this project";
      else window.location.href = project.github;
    } else {
      if(project.live=="#") tempProjectErrors[projectIndex] = "Live is not available for this project";
      else window.location.href = project.live;
    }
    setProjectErrors(tempProjectErrors);
  }

  const handleErrors = () => {
    setProjectErrors(prev => ["", ""]);
  }

  return (
    <div className="portfolio-parent">
      <div className="liquid-bg-blobs">
        <div className="blob one"></div>
        <div className="blob two"></div>
        <div className="blob three"></div>
      </div>

      <div className="main-glass">
        {/* NEW MODERN HERO DESIGN */}
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
          <div className="hero-stats">
            <div className="stat-item"><strong>8.98</strong> CGPA</div>
            <div className="stat-item"><strong>129+</strong> LeetCode</div>
            <div className="stat-item"><strong>TCS</strong> Rank 4196</div>
          </div>
        </header>

        <section className="skills-dashboard liquid-reveal">
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

        <nav className="tab-switcher liquid-reveal">
          <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => {setActiveTab('projects'); handleErrors()}}>Featured Projects</button>
          <button className={activeTab === 'achievements' ? 'active' : ''} onClick={() => {setActiveTab('achievements'); handleErrors()}}>Key Achievements</button>
        </nav>

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
                <p>{a.sub}</p>
              </div>
            ))
          )}
        </main>

        <footer className="centered-footer liquid-reveal">
          <div className="footer-socials">
            <a href="mailto:yaswanth.pellakuru08@gmail.com" className="footer-btn" onClick={handleErrors}>Email</a>
            <a href="https://www.linkedin.com/in/yaswanth-pellakuru-194a13259/" target="_blank" rel="noreferrer" className="footer-btn" onClick={handleErrors}>LinkedIn</a>
            <a href="https://github.com/Pellakuru-Yaswanth" target="_blank" rel="noreferrer" className="footer-btn" onClick={handleErrors}>GitHub</a>
          </div>
          <p className="copy">© 2026 Yaswanth Pellakuru | Nellore, AP</p>
        </footer>
      </div>
    </div>
  );
}

export default App;