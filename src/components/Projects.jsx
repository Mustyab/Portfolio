
let projects = [
  {
    name: "Blackjack Game",
    description: "A simple blackjack game",
    link: "https://github.com/Mustyab/Blackjack-Game.git"
  },
  {
    name: "MUFAT farm poultry website", 
    description:"A website for a poultry farm",
    link: "https://github.com/yourusername/poultry-farm-management-system",
  },
  {
    name: "Portfolio Webstite", 
    description: "My portfolio website",
    link: "https://github.com/Mustyab/Portfolio.git",
  }
];
function Projects() {
  return (
    <section id="projects">
        <div className="container">
            <div className="projects-grid">
            {projects.map((project) => {
              return (
                <div className="project-card" key={project.name}>
                      <h2>{project.name}</h2> 
                      <p>{project.description}</p>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              )
            })
          }
            </div>
            
      </div>
    </section>
  );
}

export default Projects;
