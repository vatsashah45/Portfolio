import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Experience</h2>
      <ul className="experience-list">
        {[...experiencesData].reverse().map((item) => (
          <li key={`${item.companyName}-${item.date}`}>
            <details>
              <summary>
                <span className="text-link">{item.companyName}</span> — {item.title}
                <span className="experience-date muted small">{item.date}</span>
              </summary>
              <div className="experience-details">
                <p className="muted small">{item.location}</p>
                <ul>{item.bulletPoints.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
