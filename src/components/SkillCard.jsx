function SkillCard({ skill }) {
  return (
    <article className="skill-card">
      <span className="skill-card__number">
        {skill.number}
      </span>

      <div className="skill-card__content">
        <h3>{skill.title}</h3>

        <p>{skill.description}</p>

        <ul className="skill-card__list">
          {skill.skills.map((item) => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default SkillCard;