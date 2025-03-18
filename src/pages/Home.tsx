import HeroSection from "../components/HeroSection";
import SkillSection from "../components/SkillsSection";
import FooterSection from "../components/FooterSection"
import ProjectSection from "../components/ProjectsSection";
import ProjectSection2 from "../components/ProjectSection2";


export default function Home() {
  return (
    <div>
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <ProjectSection2 />
        <FooterSection />
    </div>
  );
}