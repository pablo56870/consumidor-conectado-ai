
import React from 'react';
import { Link } from 'react-router-dom';
import { FileEdit, MessageSquare, Check, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-consumer to-consumer-dark text-white py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Defenda seus direitos de consumidor sem complicação
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Transformamos sua experiência negativa em uma reclamação formal baseada no Código de Defesa do Consumidor
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/nova-reclamacao" className="bg-white text-consumer hover:bg-consumer-light px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center">
                  Iniciar reclamação
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/faq" className="bg-consumer-dark hover:bg-opacity-80 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Saiba como funciona
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Como podemos te ajudar</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nossa plataforma simplifica o processo de reclamação e te dá as ferramentas necessárias para defender seus direitos como consumidor
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-consumer-neutral rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-consumer rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileEdit className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reclamações formais</h3>
                <p className="text-gray-600">
                  Transformamos sua experiência em um texto formal baseado na legislação de defesa do consumidor
                </p>
              </div>
              
              <div className="bg-consumer-neutral rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-consumer rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Assistente jurídico</h3>
                <p className="text-gray-600">
                  Inteligência artificial que te ajuda a entender seus direitos e preparar sua reclamação
                </p>
              </div>
              
              <div className="bg-consumer-neutral rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-consumer rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Acompanhamento</h3>
                <p className="text-gray-600">
                  Acompanhe suas reclamações e receba sugestões para responder às empresas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Como funciona</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Três passos simples para resolver seu problema de consumo
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Timeline */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-consumer-light transform -translate-x-1/2"></div>
                
                {/* Step 1 */}
                <div className="relative mb-12 md:mb-24">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-consumer mb-3">1. Preencha o formulário</h3>
                        <p className="text-gray-600">
                          Conte-nos sobre seu problema com a empresa. Quanto mais detalhes você fornecer, melhor poderemos te ajudar.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex justify-center">
                      <div className="w-12 h-12 bg-consumer rounded-full flex items-center justify-center text-white font-bold">1</div>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <img src="/placeholder.svg" alt="Formulário" className="rounded-xl shadow-sm" width={400} height={250} />
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative mb-12 md:mb-24">
                  <div className="md:flex items-center flex-row-reverse">
                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-consumer mb-3">2. Converse com nosso assistente</h3>
                        <p className="text-gray-600">
                          Nossa IA fará perguntas para entender melhor seu caso e coletar as informações necessárias para fundamentar sua reclamação.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex justify-center">
                      <div className="w-12 h-12 bg-consumer rounded-full flex items-center justify-center text-white font-bold">2</div>
                    </div>
                    <div className="md:w-1/2 md:pr-12">
                      <img src="/placeholder.svg" alt="Assistente" className="rounded-xl shadow-sm" width={400} height={250} />
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-consumer mb-3">3. Receba sua reclamação formal</h3>
                        <p className="text-gray-600">
                          Receba um texto formal pronto para enviar ao Procon, Reclame Aqui ou diretamente à empresa, com fundamentação jurídica.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex justify-center">
                      <div className="w-12 h-12 bg-consumer rounded-full flex items-center justify-center text-white font-bold">3</div>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <img src="/placeholder.svg" alt="Documento" className="rounded-xl shadow-sm" width={400} height={250} />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Link to="/nova-reclamacao" className="primary-btn inline-flex items-center">
                  Iniciar minha reclamação
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">O que dizem nossos usuários</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Histórias reais de consumidores que resolveram seus problemas com nossa ajuda
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-medium">Maria Silva</h4>
                    <p className="text-sm text-gray-500">São Paulo, SP</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Consegui resolver meu problema com uma compra online em apenas 3 dias. A empresa me ofereceu reembolso completo após receber minha reclamação formal."
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-medium">Carlos Oliveira</h4>
                    <p className="text-sm text-gray-500">Rio de Janeiro, RJ</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Depois de meses tentando resolver um problema com minha operadora de telefonia, consegui uma solução em uma semana usando a plataforma. Excelente serviço!"
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-medium">Ana Costa</h4>
                    <p className="text-sm text-gray-500">Belo Horizonte, MG</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "O assistente jurídico me ajudou a entender meus direitos em uma situação complexa com uma loja de eletrodomésticos. Recomendo a todos que estão tendo problemas de consumo."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-consumer">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Pronto para resolver seu problema de consumo?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Comece agora e obtenha ajuda especializada para defender seus direitos.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/nova-reclamacao" className="bg-white text-consumer hover:bg-consumer-light px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center">
                  Iniciar reclamação
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/registro" className="bg-consumer-dark hover:bg-opacity-80 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Criar conta grátis
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
