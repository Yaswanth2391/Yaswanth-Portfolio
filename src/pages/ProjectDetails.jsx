import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";
import PageHeader from "../components/PageHeader";
import { projects } from "../data/projects";
export default function ProjectDetails() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  if (!p)
    return (
      <PageHeader
        eyebrow="404"
        title="Project not found"
        description="The requested project is not in the portfolio data."
      />
    );
  return (
    <>
      <section className="container detail-hero">
        <Link className="back-link" to="/projects">
          <ArrowLeft size={15} /> Back to Projects
        </Link>
        <p className="eyebrow">{p.category}</p>
        <h1>{p.name}</h1>
        <p>{p.longDescription}</p>
        <div className="hero-actions">
          <a
            className="btn primary"
            href={p.live}
            target="_blank"
            rel="noreferrer"
          >
            Open Original Live Site <ExternalLink size={16} />
          </a>
          {p.github && (
            <a
              className="btn secondary"
              href={p.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon size={16} /> GitHub
            </a>
          )}
        </div>
      </section>
      <section className="container detail-grid section-bottom">
        <div>
          <Section number="01" title="What I worked on" />
          <div className="feature-list">
            {p.features.map((x) => (
              <div key={x}>
                <CheckCircle2 size={17} />
                {x}
              </div>
            ))}
          </div>
        </div>
        <div>
          <Section number="02" title="Technologies" />
          <div className="skill-cloud large">
            {p.tech.map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <div className="dark-card note">
            <h3>Portfolio principle</h3>
            <p>
              The button above opens the original deployed project, not a copy
              inside this portfolio.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
function Section({ number, title }) {
  return (
    <div className="section-title">
      <span>{number}</span>
      <div>
        <small>CASE STUDY</small>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
