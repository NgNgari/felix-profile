import { Link } from "react-router-dom";

import SkillCard from "../components/SkillCard";
import skills from "../data/skills";

import ProfileCard from "../components/ProfileCard";
import profile from "../data/profile";

function About() {
  return (
    <main className="about-page">
      <section className="hero container">
        <div className="hero__content">
          <p className="hero__eyebrow">{profile.title}</p>

          <h1>
            Building relationships.
            <br />
            Improving systems.
            <br />
            Creating impact.
          </h1>

          <p className="hero__description">{profile.introduction}</p>

          <div className="hero__actions">
            <Link to="/contact" className="button button--primary">
              {profile.cta}
            </Link>

            <a href="#capabilities" className="button button--secondary">
              Explore what I do
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <ProfileCard />
        </div>
      </section>

      <section id="capabilities" className="capabilities">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">What I do</p>

            <h2>
              Business Development, Technology
              <br />& Education.
            </h2>

            <p className="section-introduction">
              I work across business development, digital systems and education
              — bringing together people, processes and technology to solve
              practical problems.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <SkillCard key={skill.number} skill={skill} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
