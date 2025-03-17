import './Navbar.css';
const Navbar = () => {

  return (
    <header className="header">
      <img src='/assets/foto.svg' alt="Foto de perfil" width={40} height={40} />
      <nav className='navbar'>
        <a href="/">Home</a>
        <a href="/">Sobre</a>
        <a href="/">Projetos</a>
        <a href="/">Contato</a>
      </nav>
    </header>
  );
};

export default Navbar;
