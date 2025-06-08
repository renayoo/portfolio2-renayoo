import projects from "../data/projects";
import ArticleLayout from "../components/ArticleLayout";

export default function FrameworksArticle() {
  const project = projects.find(p => p.title === "JavaScript Frameworks");

  if (!project) {
    return <p className="text-red-500 text-center py-10">⚠️ Project not found.</p>;
  }

  return (
    <ArticleLayout
      title={project.title}
      image={project.image}
      liveLink={project.liveLink}
      githubLink={project.githubRepo}
      readmeLink={project.readmeLink}
    >
      <p>
        This project was built using React and Tailwind CSS as part of the JavaScript Frameworks course at Noroff. The goal was to create a modern, responsive online store.
      </p>

      <p>
        The site allows users to browse products, view details, and simulate a shopping cart. All product data is fetched from a public API, and routing is handled using React Router.
      </p>

      <p>
        I focused on clean component structure, styling with Tailwind, and managing cart state with React hooks.
      </p>
    </ArticleLayout>
  );
}
