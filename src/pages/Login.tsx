
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, User } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login - in a real app this would call an auth service
    setTimeout(() => {
      setIsLoading(false);
      if (email && password) {
        toast({
          title: "Login bem-sucedido",
          description: "Você foi autenticado com sucesso!",
        });
        // Redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        toast({
          title: "Erro de login",
          description: "Por favor, verifique seus dados e tente novamente.",
          variant: "destructive",
        });
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-consumer rounded-full flex items-center justify-center">
                <LogIn className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-center mb-6">Entrar na sua conta</h1>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="seu@email.com" 
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Senha
                  </label>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="••••••••" 
                    className="w-full"
                    required
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input 
                      id="remember" 
                      type="checkbox" 
                      className="h-4 w-4 text-consumer focus:ring-consumer border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                      Lembrar-me
                    </label>
                  </div>
                  
                  <div>
                    <a href="#" className="text-sm text-consumer hover:text-consumer-dark">
                      Esqueceu a senha?
                    </a>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full primary-btn flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Entrando...
                    </span>
                  ) : (
                    <span>Entrar</span>
                  )}
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Não tem uma conta?{' '}
                <Link to="/registro" className="text-consumer hover:text-consumer-dark font-medium">
                  Criar conta
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
