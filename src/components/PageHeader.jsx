export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="page-header container">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
