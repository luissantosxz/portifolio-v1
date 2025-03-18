import "./SkillsSection.css";

export default function SkillSection() {
  return (
    <div className="skill-container">
      <h1 className="skills-title">HABILIDADES</h1>
      <div className="skills-frame">
        <div className="skill-card">
        <text className="skills-text">HTML5</text>
          <img className="skill-image" src="/assets/HTML5.svg" />
        </div>

        <div className="skill-card">
        <text className="skills-text">CSS3</text>
          <img className="skill-image" src="/assets/css-3.svg" />
        </div>

        <div className="skill-card">
        <text className="skills-text">JavaScript</text>
          <img className="skill-image" src="/assets/js.svg" />
        </div>

        <div className="skill-card">
        <text className="skills-text">React.js</text>
          <img className="skill-image" src="/assets/react-1.svg" />
        </div>

        <div className="skill-card">
        <text className="skills-text">Java</text>
          <img className="skill-image" src="/assets/java.svg" />
        </div>

        <div className="skill-card">
        <text className="skills-text">Node.js</text>
          <img className="skill-image" src="/assets/node.svg" />
        </div>

        <div className="skill-card">
        <text className="skills-text">Vue.js</text>
          <img className="skill-image" src="/assets/vue.svg" />
        </div>

        <div className="skill-card">
        <text className="skills-text">PHP</text>
          <img className="skill-image" src="/assets/php.svg" />
        </div>

      </div>
    </div>
  );
}
