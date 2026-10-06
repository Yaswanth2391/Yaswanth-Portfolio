import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function ProjectCard({ project, index = 0 }) {
  return (
    <article className={"project-card " + (index === 0 ? "featured-card" : "")}>
      <div className="project-cover">
        <div className="browser-dots">
          <i />
          <i />
          <i />
        </div>
        <div className="project-cover-inner">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{project.name}</strong>
          <em>{project.category}</em>
          <div className="cover-lines">
            <i />
            <i />
            <i />
          </div>
        </div>
        {index === 0 && <b className="flag">FLAGSHIP</b>}
      </div>
      <div className="project-content">
        <div className="project-heading">
          <div>
            <small>{project.category}</small>
            <h3>{project.name}</h3>
          </div>
          <ExternalLink size={17} />
        </div>
        <p>{project.description}</p>
        <div className="tags">
          {project.tech.slice(0, 6).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="project-actions">
          <Link to={"/projects/" + project.slug}>
            View Case Study <ArrowUpRight size={14} />
          </Link>
          <a href={project.live} target="_blank" rel="noreferrer">
            Original Live Site <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
