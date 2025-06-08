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
      <br></br>
      <p>
        <strong>Self-assessment:</strong> This project helped me grow more confident in working with React and routing. I was satisfied with how I structured the product views and cart logic. However, I would improve state management by introducing a context or store (like Redux or Zustand) in future projects. I also realized the importance of testing components more thoroughly before styling.
      </p>
    </ArticleLayout>
  );
}
