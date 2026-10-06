import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Full-Stack", "Frontend", "Business"];
  const filtered = projects.filter(
    (p) =>
      filter === "All" ||
      (filter === "Full-Stack"
        ? p.slug === "jobhub"
        : filter === "Frontend"
          ? ["foodie"].includes(p.slug)
          : [
              "properties-bazar",
              "miracle-salon",
              "gl-sports",
              "anish-dental",
              "vijetha-packers",
            ].includes(p.slug)),
  );
  return (
    <>
      <PageHeader
        eyebrow="PROJECTS"
        title="Work that recruiters can actually open."
        description="Each project keeps its original live site separate from this portfolio. Open the case study for the context, skills and implementation summary."
      />
      <section className="container project-toolbar">
        <div>
          {filters.map((f) => (
            <button
              key={f}
              className={filter === f ? "selected" : ""}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <span>{filtered.length} projects</span>
      </section>
      <section className="container projects-grid all-projects section-bottom">
        {filtered.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.04}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </section>
    </>
  );
}
