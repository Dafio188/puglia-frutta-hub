
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-puglia-green-dark text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Puglia Frutta Hub</h3>
            <p className="text-sm mb-4">
              Il portale per i grossisti ortofrutticoli della Puglia, con dati di mercato, 
              informazioni sulle eccellenze locali e opportunità di networking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-puglia-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-puglia-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-puglia-yellow transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Sezioni</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/termometro" className="text-sm hover:text-puglia-yellow transition-colors">
                  Termometro del Mercato
                </Link>
              </li>
              <li>
                <Link to="/eccellenze" className="text-sm hover:text-puglia-yellow transition-colors">
                  Osservatorio Eccellenze
                </Link>
              </li>
              <li>
                <Link to="/mercato" className="text-sm hover:text-puglia-yellow transition-colors">
                  Mercato Virtuale
                </Link>
              </li>
              <li>
                <Link to="/networking" className="text-sm hover:text-puglia-yellow transition-colors">
                  Networking
                </Link>
              </li>
              <li>
                <Link to="/notizie" className="text-sm hover:text-puglia-yellow transition-colors">
                  Notizie
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Link Utili</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/chi-siamo" className="text-sm hover:text-puglia-yellow transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link to="/universita" className="text-sm hover:text-puglia-yellow transition-colors">
                  Collaborazioni Universitarie
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:text-puglia-yellow transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/termini" className="text-sm hover:text-puglia-yellow transition-colors">
                  Termini di Servizio
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm">
                <Mail size={16} className="mr-2" />
                info@pugliafruttahub.it
              </li>
              <li className="flex items-center text-sm">
                <Phone size={16} className="mr-2" />
                +39 080 1234567
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Puglia Frutta Hub. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
