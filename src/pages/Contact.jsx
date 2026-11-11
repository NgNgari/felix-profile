import contact from "../data/contact";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-overview">
            <div className="contact-heading">
              <p className="section-label">Contact</p>

              <h1>{contact.heading}</h1>

              <p className="contact-introduction">
                <strong>{contact.introduction.emphasis}</strong>
                {contact.introduction.continuation}
              </p>
            </div>

            <aside className="contact-visual" aria-label="Idea, build, impact">
              <p className="contact-visual__label">A simple way forward</p>

              <ol className="contact-visual__steps">
                <li>
                  <span>01</span>
                  <strong>We start with an idea</strong>
                </li>
                <li>
                  <span>02</span>
                  <strong>Build something useful</strong>
                </li>
                <li>
                  <span>03</span>
                  <strong>Make an impact</strong>
                </li>
              </ol>
            </aside>
          </div>

          <div className="contact-channels">
            {contact.channels.map((channel) => (
              <a
                key={channel.name}
                href={channel.url}
                className="contact-channel"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <h2>{channel.name}</h2>

                  <p>{channel.description}</p>
                </div>

                <span className="contact-channel__arrow">↗</span>
              </a>
            ))}
          </div>

          <div className="contact-availability">
            <p>{contact.availability}</p>
            <a
              className="button button--primary"
              href={contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Reach me on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
