import projects from "../data/projects";
import ArticleLayout from "../components/ArticleLayout";

export default function FrameworksArticle() {
  const project = projects.find(p => p.title === "JavaScript Frameworks");

  return (
    <ArticleLayout title={project.title} image={project.image} liveLink={project.liveLink}>
      <p>
        In this project, I built an online shop using React and Tailwind CSS...
      </p>
      {/* Legg til mer innhold her om du vil */}
    </ArticleLayout>
  );
}
