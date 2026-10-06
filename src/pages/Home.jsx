import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Code2,
  Database,
  Server,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "REST API",
  "JWT",
  "Git",
  "GitHub",
  "Postman",
  "Bootstrap",
];
export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <div className="availability">
            <i /> Open to opportunities
          </div>
          <p className="eyebrow">FULL STACK DEVELOPER · MERN</p>
          <h1>
            YASWANTH <span>PEMMADI</span>
          </h1>
          <h2>
            I build modern web experiences that are built <em>to perform.</em>
          </h2>
          <p className="hero-lead">
            Motivated MERN Stack Developer with hands-on experience building
            responsive, scalable and user-friendly web applications. I enjoy
            clean code, real-world problem solving and learning new
            technologies.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" to="/projects">
              View My Work <ArrowRight size={17} />
            </Link>
            <a
              className="btn secondary"
              href="/Yaswanth_Pemmadi_Resume.pdf"
              download
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
          <div className="contact-strip">
            <span>
              <Mail size={15} />
              yaswanthp1156@gmail.com
            </span>
            <span>
              <MapPin size={15} />
              Kakinada, Andhra Pradesh
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-glow" />
          <img
            src="/assets/yaswanth-professional.png"
            alt="Yaswanth Pemmadi in professional attire"
          />
          <div className="hero-badge">
            <Code2 size={20} />
            <b>MERN</b>
            <small>Full Stack Developer</small>
          </div>
          <div className="hero-words">
            BUILD
            <br />
            DEVELOP
            <br />
            SOLVE
            <br />
            LEARN
          </div>
        </div>
      </section>
      <section className="stats container">
        <div>
          <strong>7+</strong>
          <span>Projects</span>
        </div>
        <div>
          <strong>MERN</strong>
          <span>Core Stack</span>
        </div>
        <div>
          <strong>2025</strong>
          <span>Professional Experience</span>
        </div>
        <div>
          <strong>∞</strong>
          <span>Learning Mindset</span>
        </div>
      </section>
      <section className="section container split-section">
        <Reveal>
          <SectionTitle number="01" title="About Me" kicker="PROFILE" />
          <p className="large-copy">
            I'm a MERN Full Stack Developer focused on building modern,
            responsive and practical web applications. My experience includes
            client-facing projects across service, healthcare and real-estate
            domains, plus a complete recruitment platform built from frontend to
            backend.
          </p>
          <Link className="text-link" to="/about">
            More about me <ArrowUpRight size={15} />
          </Link>
        </Reveal>
        <Reveal delay={0.08}>
          <SectionTitle
            number="02"
            title="Technical Stack"
            kicker="WHAT I USE"
          />
          <div className="skill-cloud">
            {skills.map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="section container">
        <Reveal>
          <div className="section-row">
            <SectionTitle
              number="03"
              title="Featured Work"
              kicker="SELECTED PROJECTS"
            />
            <Link className="text-link" to="/projects">
              View all projects <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="projects-grid">
            {projects.slice(0, 4).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </Reveal>
      </section>
      <section className="jobhub-highlight container">
        <div className="jobhub-number">01</div>
        <div>
          <p className="eyebrow">FLAGSHIP PROJECT</p>
          <h2>JobHub</h2>
          <p>
            A full-stack recruitment platform with candidate, company-admin and
            super-admin workflows, ATS shortlisting, interviews and hiring
            management.
          </p>
          <div className="skill-cloud compact">
            {projects[0].tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="jobhub-actions">
          <Link className="btn primary" to="/projects/jobhub">
            Explore JobHub <ArrowUpRight size={16} />
          </Link>
          <a
            className="btn secondary"
            href={projects[0].live}
            target="_blank"
            rel="noreferrer"
          >
            Open Live Site
          </a>
        </div>
      </section>
      <section className="section container">
        <div className="section-row">
          <SectionTitle number="04" title="Why Hire Me" kicker="VALUE" />
        </div>
        <div className="value-grid">
          <div>
            <CheckCircle2 />
            <h3>Real project experience</h3>
            <p>
              Hands-on delivery across business, healthcare, real-estate and
              recruitment products.
            </p>
          </div>
          <div>
            <CheckCircle2 />
            <h3>Full-stack mindset</h3>
            <p>
              Comfortable moving from responsive UI to REST APIs, MongoDB and
              application workflows.
            </p>
          </div>
          <div>
            <CheckCircle2 />
            <h3>Responsive by default</h3>
            <p>
              Focused on usable experiences across mobile, tablet and desktop
              screens.
            </p>
          </div>
          <div>
            <CheckCircle2 />
            <h3>Always learning</h3>
            <p>
              Curious about new technologies and committed to improving
              implementation quality.
            </p>
          </div>
        </div>
      </section>
      <section className="cta container">
        <Sparkles />
        <div>
          <p className="eyebrow">OPEN TO OPPORTUNITIES</p>
          <h2>Let's build something useful.</h2>
          <p>
            Available for MERN full-stack, frontend and web development
            opportunities.
          </p>
        </div>
        <Link className="btn primary" to="/contact">
          Contact Me <ArrowUpRight size={16} />
        </Link>
      </section>
    </>
  );
}
