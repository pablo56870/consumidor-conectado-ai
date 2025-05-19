
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gavel, Menu, X } from 'lucide-react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <Gavel className="h-8 w-8 text-consumer" />
              <div>
                <h1 className="text-xl font-bold text-consumer">Apoio do Consumidor</h1>
                <p className="text-sm text-gray-500">Simplificando seus direitos</p>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-gray-600 hover:text-consumer transition-colors">
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/dashboard" className="text-gray-600 hover:text-consumer transition-colors">
                    Minhas Reclamações
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/faq" className="text-gray-600 hover:text-consumer transition-colors">
                    FAQ
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contato" className="text-gray-600 hover:text-consumer transition-colors">
                    Contato
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login" className="secondary-btn">Entrar</Link>
            <Link to="/registro" className="primary-btn">Criar Conta</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-consumer"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-consumer transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/dashboard" 
                className="text-gray-600 hover:text-consumer transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Minhas Reclamações
              </Link>
              <Link 
                to="/faq" 
                className="text-gray-600 hover:text-consumer transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/contato" 
                className="text-gray-600 hover:text-consumer transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Link to="/login" className="secondary-btn text-center" onClick={() => setMobileMenuOpen(false)}>
                  Entrar
                </Link>
                <Link to="/registro" className="primary-btn text-center" onClick={() => setMobileMenuOpen(false)}>
                  Criar Conta
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
