import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (    
    <header className="header">
      <img src='/assets/foto.svg' alt="Foto de perfil" width={40} height={40} />

      <button className="menu-btn" onClick={() => setMenuAberto(!menuAberto)}>
        ☰
      </button>
      
      <nav className={`navbar ${menuAberto ? "ativo" : ""}`}>
        <a href="/">Home</a>
        <a href="/">Sobre</a>
        <a href="/">Projetos</a>
        <a href="/">Contato</a>
      </nav>
    </header>
  );
};

export default Navbar;
