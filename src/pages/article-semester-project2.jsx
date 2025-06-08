import projects from "../data/projects";
import ArticleLayout from "../components/ArticleLayout";

export default function SemesterArticle() {
  const project = projects.find(p => p.title === "Semester Project 2");

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
        This article describes the process and results of my Semester Project 2 at Noroff. I was tasked with building an auction site where users can sign up, create listings, and bid.
      </p>

      <p>
        The site interacts with a Noroff-provided API and supports user registration, authentication, and dynamic bidding functionality. 
      </p>

      <p>
        Through this project, I strengthened my understanding of state management, API integration, and responsive design.
      </p>
      <br></br>
      <p>
        <strong>Self-assessment:</strong> This was my first larger project involving API integration and user authentication, and I’m happy with how I implemented the core functionality. One challenge was handling form validation and bid updates dynamically. If I did it again, I would improve UI feedback (like showing success/error messages) and invest more time into accessibility and responsiveness. I learned a lot about debugging API calls and working with tokens.
      </p>
    </ArticleLayout>
  );
}
