import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '/logo.png';

const Nav = () => {
  const [mensagem, setMensagem] = useState('');
  const [menuAberto, setMenuAberto] = useState(false); 
  const [sidebarAberta, setSidebarAberta] = useState(false); 
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('senha');
    setMensagem("Usuário deslogado com sucesso!");
    setTimeout(() => {
      setMensagem('');
      navigate('/');
    }, 2000);
  };

  const handleLinkClick = () => {
    setMenuAberto(false);
    setSidebarAberta(false);
  };

  return (
    <nav className="bg-gradient-to-r from-green-500 to-green-400 text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo e nome da empresa */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10 w-auto rounded-md shadow-md" />
          <Link to="/" className="text-xl font-bold hover:text-green-200">GreenSolutions</Link>
        </div>

        {/* Menu Horizontal */}
        <div className={`hidden lg:flex items-center space-x-6`}>
          <Link to="/" className="hover:text-green-300">Início</Link>
          <Link to="/solucao" className="hover:text-green-300">Solução</Link>
          <Link to="/sobre" className="hover:text-green-300">Sobre</Link>
          <Link to="/login" className="hover:text-green-300">Login</Link>
          <Link to="/cadastrar" className="hover:text-green-300">Cadastre-se</Link>
          <button 
            onClick={handleLogout} 
            className="bg-green-300 hover:bg-green-200 text-green-900 font-semibold py-1 px-4 rounded-lg transition duration-200"
          >
            Logout
          </button>
        </div>

        {/* Menu Responsivo */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => {
              setMenuAberto(!menuAberto);
              setSidebarAberta(!sidebarAberta);
            }} 
            className="text-white focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full bg-green-500 text-white w-2/3 transform ${sidebarAberta ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-40`}
      >
        <div className="flex justify-between items-center p-4">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <button 
            onClick={() => setSidebarAberta(false)} 
            className="text-white focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-4 p-4">
          <Link to="/" onClick={handleLinkClick} className="block text-lg hover:text-green-300">Início</Link>
          <Link to="/solucao" onClick={handleLinkClick} className="block text-lg hover:text-green-300">Solução</Link>
          <Link to="/sobre" onClick={handleLinkClick} className="block text-lg hover:text-green-300">Sobre</Link>
          <Link to="/login" onClick={handleLinkClick} className="block text-lg hover:text-green-300 ">Login</Link>
          <Link to="/cadastrar" onClick={handleLinkClick} className="block text-lg hover:text-green-300">Cadastrar</Link>
          <button 
            onClick={handleLogout} 
            className="block w-full bg-green-200 hover:bg-green-200 text-green-900 font-semibold py-2 px-4 rounded-lg mt-2 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mensagem de logout */}
      {mensagem && (
        <div className="text-center bg-green-300 text-green-900 py-2">
          {mensagem}
        </div>
      )}

      {sidebarAberta && (
        <div 
          className="lg:hidden fixed inset-0 bg-black opacity-50 z-30" 
          onClick={() => setSidebarAberta(false)}
        />
      )}
    </nav>
  );
};

export default Nav;


