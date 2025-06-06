import projects from "../data/projects";
import ArticleLayout from "../components/ArticleLayout";

export default function SemesterArticle() {
  const project = projects.find(p => p.title === "Semester Project 2");

  return (
    <ArticleLayout title={project.title} image={project.image} liveLink={project.liveLink}>
      <p>
        This article describes the process and results of my semester project...
      </p>
      {/* Legg til mer innhold her om du vil */}
    </ArticleLayout>
  );
}
