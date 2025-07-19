import "../components/ProjectSection2.css";

export default function ProjectSection2() {
  return (
    <div className="container">
      <div className="box">
        <img className="img-project-section" src="https://i.pinimg.com/474x/46/3a/d0/463ad0b4f2a2da7480ed5c2b3fdeb47e.jpg"></img>
        <div className="content">
          <h3 className="title">
            Titulo
          </h3>
          <span className="tag">Mobile</span>
          <span className="date">Criado em</span>
        </div>

        <hr className="divider"></hr>

        <div className="content">
          <p className="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui</p>

        </div>
        <hr className="divider"></hr>

        <div className="content">
          <button className="github-button">TESTE</button>
        </div>

      </div>
    </div>
  );
}