import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";


export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
      <h1 className="font-savate text-3xl font-bold text-center mb-14">All Projects</h1>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            elevationIndex={index}
          />
        ))}
      </div>
    </div>
  );
}



