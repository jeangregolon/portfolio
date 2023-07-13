import "./App.css";
import { ServicesSection } from "./components/servicesSection";
import { Footer } from "./components/footer";
import { MainSection } from "./components/mainSection";
import { SkillsSection } from "./components/skillsSection";
import { ProjectsSection } from "./components/projectsSection";

export const App = () => {
  return (
    <div className="App">
      <MainSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};
