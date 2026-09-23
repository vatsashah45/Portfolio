import { skillsData } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Tools & technologies</h2>
      <p>{skillsData.join(" · ")}</p>
    </section>
  );
}
