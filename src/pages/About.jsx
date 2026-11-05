import { Link } from "react-router-dom";

import CapabilityCard from "../components/CapabilityCard";
import Toolkit from "../components/Toolkit";
import ProfileCard from "../components/ProfileCard";

import capabilities from "../data/capabilities";
import profile from "../data/profile";

function About() {
  return (
    <main className="about-page">
      {/* =================================
          HERO
      ================================= */}

      <section className="hero container">
        <div className="hero__content">
          <p className="hero__eyebrow">{profile.title}</p>

          <h1
            className="hero__headline"
            aria-label="Building relationships. Improving systems. Creating impact."
          >
            <span className="hero__dropping-texts" aria-hidden="true">
              <span>Building relationships.</span>
              <span>Improving systems.</span>
              <span>Creating impact.</span>
            </span>
          </h1>

          <p className="hero__description">
            <span className="visually-hidden">
              From thought to impact! From concept to execution! From ideas to
              practical solutions!
            </span>
            <span className="hero__typewriter" aria-hidden="true">
              <span>
                From thought to <strong>impact!</strong>
              </span>
              <span>
                From concept to <strong>execution!</strong>
              </span>
              <span>
                From ideas to <strong>practical solutions!</strong>
              </span>
            </span>
          </p>

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

      {/* =================================
          WHAT I BRING
      ================================= */}

      <section id="capabilities" className="capabilities">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">What I bring</p>

            <h2>
              People, strategy,
              <br />
              systems and impact.
            </h2>

            <p className="section-introduction">
              I bring together business development, relationship management,
              project leadership and technology to help organisations move ideas
              forward.
            </p>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((capability) => (
              <CapabilityCard key={capability.number} capability={capability} />
            ))}
          </div>
        </div>
      </section>

      {/* =================================
          MY TOOLKIT
      ================================= */}

      <Toolkit />
    </main>
  );
}

export default About;
