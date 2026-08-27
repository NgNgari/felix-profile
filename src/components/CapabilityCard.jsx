function CapabilityCard({ capability }) {
  return (
    <article className="capability-card">
      <span className="capability-card__number">
        {capability.number}
      </span>

      <div className="capability-card__content">
        <h3>{capability.title}</h3>

        <p>{capability.description}</p>
      </div>
    </article>
  );
}

export default CapabilityCard;