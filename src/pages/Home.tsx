import HeroSection from "../components/HeroSection";
import SkillSection from "../components/SkillsSection";
import FooterSection from "../components/FooterSection"
import ProjectSection from "../components/ProjectsSection";


export default function Home() {
  return (
    <div>
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <FooterSection />
    </div>
  );
}