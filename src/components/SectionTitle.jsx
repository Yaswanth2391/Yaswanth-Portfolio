export default function SectionTitle({ number, title, kicker }) {
  return (
    <div className="section-title">
      <span>{number}</span>
      <div>
        {kicker && <small>{kicker}</small>}
        <h2>{title}</h2>
      </div>
    </div>
  );
}
