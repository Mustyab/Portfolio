

function Navbar() {
  return (
    <nav className="navbar">
        <div className="container navbar-inner">
        <a href="#home" className="logo">
            Mustafa<span className="dot">.</span>
        </a>
            <div className="nav-links">
                    <a href="#home" className="nav-link" data-link="home">Home</a>
                    <a href="#projects" className="nav-link" data-link="projects">Projects</a>
                    <a href="#contact" className="nav-link" data-link="contact">Contact</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
