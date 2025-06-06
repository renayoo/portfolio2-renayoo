import projects from "../data/projects";
import ArticleLayout from "../components/ArticleLayout";

export default function ExamArticle() {
  const project = projects.find((p) => p.title === "Exam Project 2");

  return (
    <ArticleLayout title={project.title} image={project.image} liveLink={project.liveLink}>
      <p>
        Dette er en detaljert beskrivelse av Exam Project 2. Her kan du forklare hva prosjektet går ut på,
        utfordringer du møtte, teknologier du brukte, og annet relevant innhold.
      </p>
      <p>
        Placeholder
      </p>
    </ArticleLayout>
  );
}
