import "./Team.css";

export default function Team() {
  return (
    <section id="team">
      <h2>
        Without bonding and coordination, every project is a failure. Look who
        makes kicksup great ;){" "}
      </h2>
      <div className="team-cards">
        <div className="team-card">
          <img src="/assets/zidane.jpg" alt="Avatar"  />
          <div className="card-container">
              Zidane <br />
            Leadership & management
          </div>
          <div className="team-socials">
            <img src="/assets/linkedin.png" alt="linkedin" />
            <img src="/assets/medium.png" alt="medium" />
            <img src="/assets/facebook.png" alt="facebook" />
          </div>
        </div>
        <div className="team-card">
          <img src="/assets/tonikroos.jpg" alt="Avatar"  className="fix-image"/>
          <div className="card-container">
              Toni kroos <br />
            Product developer
          </div>
          <div className="team-socials">
            <img src="/assets/linkedin.png" alt="linkedin" />
            <img src="/assets/medium.png" alt="medium" />
          </div>
        </div>
        <div className="team-card">
          <img src="assets/ikercasillas.jpg" alt="Avatar"  />
          <div className="card-container">
              Iker Casillas<br />
            Marketing strategy
          </div>
          <div className="team-socials">
            <img src="/assets/medium.png" alt="medium" />
          </div>
        </div>
        <div className="team-card">
          <img src="/assets/james.jpg" alt="Avatar"  className="fix-image"/>
          <div className="card-container">
              James<br />
            Product Designer
          </div>
          <div className="team-socials">
            <img src="/assets/linkedin.png" alt="linkedin" />
            <img src="/assets/medium.png" alt="medium" />
            <img src="/assets/facebook.png" alt="facebook" />
          </div>
        </div>
        <div className="team-card">
          <img src="assets/christiano.jpg" alt="Avatar"  className="fix-image"/>
          <div className="card-container">
              Cristinao <br />
            Financial Operations
          </div>
          <div className="team-socials">
            <img src="/assets/linkedin.png" alt="linkedin" />
            <img src="/assets/facebook.png" alt="facebook" />
          </div>
        </div>
      </div>
      <h2 className="me">and you ;) </h2>
    </section>
  );
}
