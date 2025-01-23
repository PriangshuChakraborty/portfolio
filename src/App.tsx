import { AboutPage, HomePage, ProjectPage, SkillsPage } from "./router";

const App = () => {
  return (
    <div className="w-full h-full bg-[#171717]">
      <HomePage />
      <SkillsPage />
      <AboutPage />
      <ProjectPage />
    </div>
  );
};

export default App;
