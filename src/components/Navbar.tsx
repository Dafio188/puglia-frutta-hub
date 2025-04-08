
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogIn } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-10 w-auto"
                src="/logo.svg"
                alt="Puglia Frutta Hub"
              />
              <span className="ml-3 text-xl font-heading font-bold text-puglia-green-dark">
                Puglia Frutta Hub
              </span>
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link to="/termometro" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-puglia-orange-dark hover:underline">
              Termometro del Mercato
            </Link>
            <Link to="/eccellenze" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-puglia-orange-dark hover:underline">
              Eccellenze Locali
            </Link>
            <Link to="/mercato" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-puglia-orange-dark hover:underline">
              Mercato Virtuale
            </Link>
            <Link to="/notizie" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-puglia-orange-dark hover:underline">
              Notizie
            </Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <Button variant="ghost" className="flex items-center text-gray-700 hover:text-puglia-orange-dark mr-2">
              <LogIn className="h-4 w-4 mr-1" />
              Accedi
            </Button>
            <Button className="bg-puglia-green-dark hover:bg-puglia-green-light text-white">
              <User className="h-4 w-4 mr-1" />
              Registrati
            </Button>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-puglia-orange-dark focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/termometro"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-puglia-orange-dark"
              onClick={toggleMenu}
            >
              Termometro del Mercato
            </Link>
            <Link
              to="/eccellenze"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-puglia-orange-dark"
              onClick={toggleMenu}
            >
              Eccellenze Locali
            </Link>
            <Link
              to="/mercato"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-puglia-orange-dark"
              onClick={toggleMenu}
            >
              Mercato Virtuale
            </Link>
            <Link
              to="/notizie"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-puglia-orange-dark"
              onClick={toggleMenu}
            >
              Notizie
            </Link>
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start">
                <LogIn className="h-4 w-4 mr-2" />
                Accedi
              </Button>
              <Button className="bg-puglia-green-dark hover:bg-puglia-green-light text-white justify-start">
                <User className="h-4 w-4 mr-2" />
                Registrati
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
