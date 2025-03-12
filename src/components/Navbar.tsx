import './Navbar.css';

const Navbar = () => {

  return (
    <header className="header">
      <img src='/assets/kirito.jpg' className="logo" />

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
