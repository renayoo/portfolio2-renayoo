const skills = [
  { name: "HTML", logo: "/logos/html.png" },
  { name: "CSS", logo: "/logos/css.png" },
  { name: "JavaScript", logo: "/logos/js.png" },
  { name: "Figma", logo: "/logos/figma.png" },
  { name: "Tailwind", logo: "/logos/tailwind.png" },
  { name: "React", logo: "/logos/react.png" },
];

export default function SkillSection() {
  return (
    <div className=" text-center">
      <h3 className=" font-savate text-2xl font-semibold mb-6">My skills</h3>
      <div className="font-quicksand grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={skill.logo} alt={skill.name} className="h-12 w-12 mb-2" />
            <p className="text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
