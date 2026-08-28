import contact from "../data/contact";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-heading">
            <p className="section-label">Contact</p>

            <h1>{contact.heading}</h1>

            <p className="contact-introduction">{contact.introduction}</p>
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

          <p className="contact-availability">{contact.availability}</p>
        </div>
      </section>
    </main>
  );
}

export default Contact;
