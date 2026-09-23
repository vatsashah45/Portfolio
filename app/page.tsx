import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Highlights from "@/components/highlights";

export default function Home() {
  return (
    <main id="main">
      <Intro />
      <hr />
      <Experience />
      <Projects />
      <Highlights />
      <Contact />
    </main>
  );
}
