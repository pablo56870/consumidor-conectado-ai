
import React from 'react';
import { Gavel } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Gavel className="h-8 w-8 text-consumer" />
            <div>
              <h1 className="text-xl font-bold text-consumer">Apoio do Consumidor</h1>
              <p className="text-sm text-gray-500">Simplificando seus direitos</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-consumer transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-consumer transition-colors">Minhas Reclamações</a>
            <a href="#" className="text-gray-600 hover:text-consumer transition-colors">Sobre</a>
            <a href="#" className="text-gray-600 hover:text-consumer transition-colors">Ajuda</a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <button className="hidden md:block secondary-btn">Entrar</button>
            <button className="primary-btn">Criar Conta</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
