import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
export default function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="EXPERIENCE"
        title="From requirements to shipped experiences."
        description="Professional experience building responsive interfaces, backend functionality and client-ready applications."
      />
      <section className="container section-bottom">
        <Reveal>
          <div className="timeline-item">
            <span className="timeline-dot" />
            <div className="timeline-date">2025 · Kakinada · Freelance</div>
            <h2>Full Stack Developer — TrulyAim Technologies</h2>
            <p className="role-summary">
              Worked on responsive web interfaces, backend functionality, UI/UX
              implementation and client-ready applications.
            </p>
            <ul>
              <li>
                Built and enhanced responsive web interfaces using React.js and
                CSS.
              </li>
              <li>
                Developed and optimized backend functionalities using Node.js
                and Express.js.
              </li>
              <li>
                Worked closely with UI/UX designers to create visually
                consistent and user-friendly layouts.
              </li>
              <li>
                Ensured mobile responsiveness and cross-device compatibility.
              </li>
              <li>
                Diagnosed performance issues and improved loading speed and
                efficiency.
              </li>
              <li>
                Collaborated with the team in an agile environment to deliver
                client-ready applications on tight deadlines.
              </li>
            </ul>
          </div>
        </Reveal>
      </section>
      <section className="container section-bottom">
        <SectionTitle
          number="02"
          title="Professional focus"
          kicker="EXPERIENCE TAKEAWAYS"
        />
        <div className="value-grid three">
          <div>
            <h3>Frontend</h3>
            <p>Component-driven responsive UI with React.js and CSS.</p>
          </div>
          <div>
            <h3>Backend</h3>
            <p>Node.js, Express.js and REST API implementation.</p>
          </div>
          <div>
            <h3>Delivery</h3>
            <p>
              Debugging, collaboration, responsiveness and deadline-focused
              delivery.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
