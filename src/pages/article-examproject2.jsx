import projects from "../data/projects";
import ArticleLayout from "../components/ArticleLayout";

export default function ExamArticle() {
  const project = projects.find((p) => p.title === "Exam Project 2");

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
        This website was created as part of my education at Noroff. It is my Exam Project 2, and the goal was
        to develop a website for a fictional holiday venue booking service. I used React to build a component-based
        structure and Tailwind CSS for modern, responsive styling and layout.
      </p>

      <p>
        Users can register as customers or venue managers. Customers can search venues, view available dates,
        and book a venue. Venue managers can publish new listings and manage bookings.
      </p>

      <img
        src="https://i.ibb.co/qL3Y6fNv/Skjermbilde-2025-06-08-155510.png"
        alt="Venue home page"
        className="my-6 rounded-lg shadow-md max-h-100"
      />

      <p>
        The home page features a clean, responsive layout with a venue search bar and dynamic cards loaded from the API.
      </p>

      <img
        src="https://i.ibb.co/nNmr2W9W/Skjermbilde-2025-06-08-160210.png"
        alt="Venue detail view"
        className="my-6 rounded-lg shadow-md max-h-100"
      />

      <p>
        Each venue has its own detail page with information, calendar-based booking, and owner details. The booking logic is built with
        local state and validates availability.
      </p>
    </ArticleLayout>
  );
}
