import me from "../assets/me.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
        <div className="container hero-inner">
              <a href="#home"><img
                    className="hero-avatar"
                    src={me}
                    alt="Muhammad Mustafa"
              />
              </a>

              <h1>Hey, I'm <span className="highlight">Muhammad Mustafa Abubakar</span></h1>

              <p>I'm a software engineer with a passion for building web applications</p>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">View my projects</a>
                <a href="#contact" className="btn btn-secondary">Contact Me</a>
              </div>
              <div className="scroll-hint">↓</div>
        </div>
</section>

  )
}

export default Hero
