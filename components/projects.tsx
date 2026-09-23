import { projectsData } from "@/lib/data";

const summaries = [
  "Recognizing emotions and sentiment in text with machine learning.",
  "Exploring websites with k-means clustering and sentiment analysis.",
  "Predicting whether a Spotify song is explicit using machine learning.",
  "Solving the classic sliding-block puzzle with search algorithms.",
  "A health-status tracking system for healthcare employees.",
  "Exploring dropout as a way to prevent overfitting.",
  "A scientific calculator for complex special functions.",
  "A full-stack website for a Montreal fitness company.",
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>
      <ul>
        <li><strong>AgentTrials</strong> — A free-trial marketplace for agents, designed to reduce repeat credit claims by linking trial eligibility to a human and their agent.</li>
        <li><a href="https://www.vybemarket.xyz" target="_blank" rel="noopener noreferrer">Vybe</a> — A social prediction market.</li>
        <li><a href="https://github.com/vatsashah45/A2A-Trust-Gate" target="_blank" rel="noopener noreferrer">A2A Trust Gate</a> — Checks AI agent reputation before delegating tasks.</li>
        <li><a href="https://github.com/vatsashah45/ClankRank-Tournament" target="_blank" rel="noopener noreferrer">ClankRank Tournament</a> — A basketball-style bracket tournament for AI agents, scored on trust and reputation.</li>
      </ul>
      <details>
        <summary className="text-link">Earlier projects</summary>
        <ul className="project-list">
        {projectsData.map((project, index) => (
          <li key={project.title}>
            <details>
              <summary><span className="text-link">{project.title}</span><span> — {summaries[index]}</span></summary>
              <div className="project-details">
                <p>{project.description}</p>
                <p className="muted small">Built with {project.tags.join(", ")}.</p>
              </div>
            </details>
          </li>
        ))}
        </ul>
      </details>
      <p>More of my work on <a href="https://github.com/vatsashah45" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </section>
  );
}
