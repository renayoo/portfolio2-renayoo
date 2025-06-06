import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectsPage from "./pages/projects";
import SemesterArticle from "./pages/article-semester-project2";
import FrameworksArticle from "./pages/article-javascript-frameworks";
import ExamArticle from "./pages/article-examproject2";
import projects from "./data/projects";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home projects={projects} />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout>
            <ProjectsPage />
          </Layout>
        }
      />
      <Route
        path="/article-semesterproject2"
        element={
          <Layout>
            <SemesterArticle />
          </Layout>
        }
      />
      <Route
        path="/article-javascript-frameworks"
        element={
          <Layout>
            <FrameworksArticle />
          </Layout>
        }
      />
      <Route
        path="/article-examproject2"
        element={
          <Layout>
            <ExamArticle />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
