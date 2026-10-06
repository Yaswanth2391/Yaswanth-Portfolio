import { Code2, Server, Database, Wrench } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
const groups = [
  [
    "Frontend Development",
    ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
    Code2,
  ],
  ["Backend Development", ["Node.js", "Express.js", "REST API"], Server],
  ["Databases", ["MongoDB", "CRUD Operations", "Mongoose"], Database],
  [
    "Tools & Workflow",
    ["Git", "GitHub", "VS Code", "Postman", "Nodemon"],
    Wrench,
  ],
];
export default function Skills() {
  return (
    <>
      <PageHeader
        eyebrow="TECHNICAL SKILLS"
        title="A practical MERN toolkit."
        description="The technologies and development tools I use to turn requirements into responsive, maintainable web experiences."
      />
      <section className="container skill-groups section-bottom">
        {groups.map(([name, items, Icon], i) => (
          <Reveal key={name} delay={i * 0.06}>
            <article className="skill-group">
              <div className="skill-icon">
                <Icon />
              </div>
              <small>0{i + 1}</small>
              <h3>{name}</h3>
              <div className="skill-list">
                {items.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </section>
      <section className="container section-bottom">
        <SectionTitle
          number="02"
          title="How the stack fits together"
          kicker="WORKFLOW"
        />
        <div className="flow">
          <div>
            React.js + CSS<strong>Responsive UI</strong>
          </div>
          <b>→</b>
          <div>
            Node.js + Express<strong>REST APIs</strong>
          </div>
          <b>→</b>
          <div>
            MongoDB + Mongoose<strong>Data layer</strong>
          </div>
          <b>→</b>
          <div>
            Git + Postman<strong>Delivery & testing</strong>
          </div>
        </div>
      </section>
    </>
  );
}
