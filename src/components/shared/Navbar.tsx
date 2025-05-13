// src/components/Shared/Navbar.tsx
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Minha Loja
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="px-3 py-2 hover:text-blue-500">
            Produtos
          </Link>
          <Link to="/cart" className="px-3 py-2 hover:text-blue-500">
            Carrinho
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;