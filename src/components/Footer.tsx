
import React from 'react';
import { Gavel, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <Gavel className="h-6 w-6 text-consumer mr-2" />
              <h2 className="text-lg font-bold text-consumer">Apoio do Consumidor</h2>
            </div>
            <p className="text-sm text-gray-600 mt-1 max-w-md">
              Simplificando seus direitos como consumidor e ajudando você a resolver problemas de consumo.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Plataforma</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-consumer">Como funciona</a></li>
                <li><a href="#" className="text-gray-600 hover:text-consumer">Recursos</a></li>
                <li><a href="#" className="text-gray-600 hover:text-consumer">Reclamações</a></li>
                <li><a href="#" className="text-gray-600 hover:text-consumer">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Suporte</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-consumer">Ajuda</a></li>
                <li><a href="#" className="text-gray-600 hover:text-consumer">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-consumer">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-consumer">Termos de Uso</a></li>
                <li><a href="#" className="text-gray-600 hover:text-consumer">Privacidade</a></li>
                <li><a href="#" className="text-gray-600 hover:text-consumer">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Apoio do Consumidor. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center mt-4 sm:mt-0 text-xs text-gray-500">
            <span>Feito com</span>
            <Heart className="h-3 w-3 text-red-500 mx-1" />
            <span>para ajudar consumidores brasileiros</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
