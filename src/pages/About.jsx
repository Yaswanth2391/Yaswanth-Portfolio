import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT ME"
        title="Developer mindset. Product thinking."
        description="A closer look at my background, working style and the kind of developer I aim to become."
      />
      <section className="container two-col section-bottom">
        <Reveal>
          <SectionTitle number="01" title="Profile" kicker="WHO I AM" />
          <p className="large-copy">
            Motivated MERN Stack Developer with hands-on experience building
            responsive, scalable and user-friendly web applications. I have
            worked in a startup environment where I contributed to real client
            projects and built practical interfaces and backend functionality.
          </p>
          <p>
            My work combines React.js and CSS for the interface, Node.js and
            Express.js for server-side functionality, and MongoDB for data
            workflows. I also use Git, GitHub and Postman as part of the
            development workflow.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="dark-card">
            <h3>What I bring</h3>
            <ul>
              <li>Responsive frontend development</li>
              <li>REST API and backend development</li>
              <li>MongoDB CRUD workflows</li>
              <li>Cross-device UI implementation</li>
              <li>Problem-solving and debugging</li>
              <li>Team collaboration and communication</li>
            </ul>
          </div>
        </Reveal>
      </section>
      <section className="container section-bottom">
        <SectionTitle number="02" title="Soft Skills" kicker="HOW I WORK" />
        <div className="soft-grid">
          {[
            "Self-motivated",
            "Decision-Making",
            "Problem-Solving",
            "Team Collaboration",
            "Communication",
            "Deadline Adherence",
          ].map((x) => (
            <div key={x}>{x}</div>
          ))}
        </div>
      </section>
    </>
  );
}
