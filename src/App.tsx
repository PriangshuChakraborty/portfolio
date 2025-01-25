import {
  AboutPage,
  ContactPage,
  ExperiencePage,
  FooterPage,
  HomePage,
  NavbarPage,
  ProjectPage,
  SkillsPage,
} from "./router";

const App = () => {
  return (
    <div className="w-full h-full bg-[#171717] relative">
      <NavbarPage />
      <HomePage />
      <SkillsPage />
      <AboutPage />
      <ProjectPage />
      <ExperiencePage />
      {/* <TestimonialPage /> */}
      <ContactPage />
      <FooterPage />
    </div>
  );
};

export default App;
