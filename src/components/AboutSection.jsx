import Intro from "./Intro";
import SkillSection from "./SkillSection";
import ProjectCarousel from "./ProjectCarousel";

export default function AboutSection() {
  return (
    <section className="flex flex-col lg:flex-row justify-center gap-8 px-4 py-12 max-w-7xl mx-auto">
      <div className="bg-white shadow-md rounded-2xl p-6 w-full lg:w-1/2 min-h-[600px] flex-shrink-0">
        <Intro />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-between min-h-[600px]">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <SkillSection />
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 mt-6">
          <ProjectCarousel />
        </div>
      </div>
    </section>
  );
}
