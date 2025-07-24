import { useEffect, useState } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const text = "Olá meu nome é ";
  const text2 = "Luis Fernando :)";

  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [textAnimated, setTextAnimated] = useState("");
  const [textAnimated2, setTextAnimated2] = useState("");

  useEffect(() => {
    if (index < text.length) {
      const interval = setInterval(() => {
        setTextAnimated((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, 90);

      return () => clearInterval(interval);
    }
  }, [index]);

  useEffect(() => {
    if (index === text.length && index2 < text2.length) {
      const interval2 = setInterval(() => {
        setTextAnimated2((prev) => prev + text2.charAt(index2));
        setIndex2((prev) => prev + 1);
      }, 90);

      return () => clearInterval(interval2);
    }
  }, [index2, index]);

  return (
    <div className="hero-container">
      <div className="cards-container">
        <div className="name-presentaion">
          <h1 className="mynameis">{textAnimated} &nbsp; </h1>
          <h1 className="name">{textAnimated2}</h1>
          <span className="devtext">Desenvolvedor de sistemas</span>
          <div className="tags">
            <span className="tag-lang">React</span>
            <span className="tag-lang">NodeJs</span>
            <span className="tag-lang">JavaScript</span>
            <span className="tag-lang">Java</span>
            <span className="tag-lang">Vue.Js</span>
            <span className="tag-lang">PHP</span>
          </div>
      
          <div className="buttons-container">
            <button className="botao">Dowload CV</button>
            <button className="botao">Entre em contato</button>
          </div>
        </div>

        <div className="settings-card">
          <div className="card-vscode">
            <i className="fab fa-vscode"></i>
            <img className="img-vs" src="/assets/vscode.png" />
            <p className="text-settings-card">VS</p>
          </div>
          <div className="card-vscode">
            <i className="fab fa-vscode"></i>
            <img className="img-vs" src="/assets/github.png" />
            <p className="text-settings-card">GITHUB</p>
          </div>
          <div className="card-vscode">
            <i className="fab fa-vscode"></i>
            <img className="img-vs" src="/assets/spotify.png" />
            <p className="text-settings-card">SPOTIFY</p>
          </div>
        </div>
      </div>
    </div>
  );
}
