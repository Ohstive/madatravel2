import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold">Madagascar Voyages</Link>
        <nav className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Accueil</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">À Propos</Link>
          <Link to="/admin" className="text-gray-600 hover:text-gray-900">Admin</Link>
        </nav>
      </div>
    </header>
  );
};