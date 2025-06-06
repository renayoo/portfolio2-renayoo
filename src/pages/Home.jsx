import AboutSection from "../components/AboutSection";
import ProjectCard from "../components/ProjectCard";

export default function Home({ projects }) {
  return (
    <>
      <AboutSection />
      <section id="projects" className="px-4 py-8 max-w-5xl mx-auto">
        <h3 className="font-savate text-2xl font-semibold mb-6">My projects</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              title={p.title}
              description={p.description}
              liveLink={p.liveLink}
              articleLink={p.articleLink}
              image={p.image}
            />
          ))}
        </div>
      </section>
    </>
  );
}
