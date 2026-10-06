import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
const items = [
  [
    "2019 — 2023",
    "B.Tech, Computer Science and Engineering",
    "Aditya College Of Engineering, Surampalem",
    "CGPA: 6.88",
  ],
  [
    "2017 — 2019",
    "Intermediate, MPC",
    "Narayana Junior College, Kakinada",
    "CGPA: 8.0",
  ],
  [
    "2016 — 2017",
    "School [X], SSC",
    "Suresh E.M High School, Kakinada",
    "CGPA: 9.0",
  ],
];
export default function Education() {
  return (
    <>
      <PageHeader
        eyebrow="EDUCATION"
        title="The foundation behind the work."
        description="Academic background and professional training that support my development journey."
      />
      <section className="container section-bottom">
        <SectionTitle
          number="01"
          title="Education"
          kicker="ACADEMIC BACKGROUND"
        />
        <div className="education-list">
          {items.map(([year, title, place, score]) => (
            <article key={year}>
              <span>{year}</span>
              <div>
                <h3>{title}</h3>
                <p>{place}</p>
                <b>{score}</b>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="container section-bottom">
        <SectionTitle
          number="02"
          title="Certification"
          kicker="PROFESSIONAL TRAINING"
        />
        <div className="cert-card">
          <div className="cert-mark">MERN</div>
          <div>
            <h3>MERN FULL STACK — VJSMR ODIGOS Technologies Pvt Ltd.</h3>
            <p>Feb 2024 — Aug 2024</p>
            <span>
              Certificate of appreciation for successfully completed Realtime
              Project Oriented Training.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
