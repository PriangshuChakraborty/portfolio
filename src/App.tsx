import { AboutPage, ContactPage, ExperiencePage, FooterPage, HomePage, ProjectPage, SkillsPage, TestimonialPage } from "./router";

const App = () => {
  return (
    <div className="w-full h-full bg-[#171717]">
      <HomePage />
      <SkillsPage />
      <AboutPage />
      <ProjectPage />
      <ExperiencePage />
      <TestimonialPage />
      <ContactPage />
      <FooterPage />
    </div>
  );
};

export default App;
