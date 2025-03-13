import { useEffect, useState } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const text = "Olá meu nome é ";
  const [index, setIndex] = useState(0);
  const [textAnimated, setTextAnimated] = useState("");

  function typeWriter() {
    setIndex((prev) => prev + (1 % text.length));
    setTextAnimated((prev) => prev + text.charAt(index));
  }
  useEffect(() => {
    const interval = setInterval(typeWriter, 90);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="hero-container">
      <h1 className="mynameis">{textAnimated} &nbsp; </h1>
      <h1 className="name">Luis Fernando Dos Santos</h1>
      <span className="devtext">Desenvolvedor de sistemas</span>
      <div className="buttons-container">
        <button className="button-cv">Dowload CV</button>
        <button className="button-contate-me">Entre em contato</button>
      </div>
      <div className="presentation-frame">
        <h3>
          Tenho 19 anos e sou um entusiasta em desenvolvimento de sistemas.
          Adoro desenvolver soluções criativas e estou constantemente procurando
          por novas aprendizagens em tecnologias que possam melhorar minhas
          competências. Meu foco principal é o desenvolvimento web, mas estou
          sempre aberto a novas oportunidades e desafios.
        </h3>
      </div>

      <div className="settings-card">
        <div className="card-vscode">
          <i className="fab fa-vscode"></i>
          <h3>VSCode</h3>
          <p>VS Code</p>
        </div>
      </div>
    </div>
  );
}
