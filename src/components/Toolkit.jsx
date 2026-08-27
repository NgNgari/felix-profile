import toolkit from "../data/toolkit";

function Toolkit() {
  return (
    <section className="toolkit">
      <div className="container">
        <div className="toolkit__heading">
          <p className="section-label">My toolkit</p>

          <h2>
            Technology that
            <br />
            supports the work.
          </h2>
        </div>

        <div className="toolkit__list">
          {toolkit.map((item) => (
            <span key={item} className="toolkit__item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Toolkit;
