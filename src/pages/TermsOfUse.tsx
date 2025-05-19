
import React from 'react';
import { FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-consumer to-consumer-dark text-white py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Termos de Uso
              </h1>
              <p className="text-lg opacity-90">
                Última atualização: 19 de maio de 2025
              </p>
            </div>
          </div>
        </section>
        
        {/* Terms Content */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <FileText className="h-6 w-6 text-consumer mr-2" />
                  <h2 className="text-2xl font-bold">Termos e Condições</h2>
                </div>
                
                <div className="prose max-w-none">
                  <p>
                    Bem-vindo ao Apoio do Consumidor. Ao acessar ou usar nossos serviços, você concorda com estes termos. Por favor, leia-os cuidadosamente.
                  </p>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3">1. Aceitação dos Termos</h3>
                  <p>
                    Ao acessar e usar o Apoio do Consumidor, você afirma que é maior de idade e aceita integralmente estes Termos de Uso. Se você não concorda com quaisquer partes destes termos, não deve usar nossos serviços.
                  </p>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3">2. Descrição dos Serviços</h3>
                  <p>
                    O Apoio do Consumidor é uma plataforma que fornece assistência na elaboração de reclamações com base no Código de Defesa do Consumidor brasileiro. Nossos serviços incluem:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Análise de situações de consumo</li>
                    <li>Elaboração de textos para reclamações formais</li>
                    <li>Orientação sobre direitos do consumidor</li>
                    <li>Armazenamento e acompanhamento de reclamações</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3">3. Responsabilidades do Usuário</h3>
                  <p>
                    Ao utilizar nossos serviços, você concorda em:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Fornecer informações precisas e verdadeiras</li>
                    <li>Manter a confidencialidade de sua conta e senha</li>
                    <li>Não utilizar nossos serviços para fins ilegais ou fraudulentos</li>
                    <li>Não enviar conteúdo difamatório, ofensivo ou inadequado</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3">4. Limitação de Responsabilidade</h3>
                  <p>
                    O Apoio do Consumidor não oferece serviços jurídicos profissionais e não substitui a orientação de um advogado. Não nos responsabilizamos por:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Resultados específicos de reclamações</li>
                    <li>Interpretações legais definitivas</li>
                    <li>Ações tomadas com base em nossas sugestões</li>
                    <li>Conteúdo gerado por nossa inteligência artificial que possa conter inexatidões</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3">5. Privacidade</h3>
                  <p>
                    Nossa política de privacidade explica como coletamos, usamos e protegemos suas informações pessoais. Ao usar nossos serviços, você concorda com nossas práticas de privacidade conforme descritas em nossa <Link to="/privacidade" className="text-consumer hover:underline">Política de Privacidade</Link>.
                  </p>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3">6. Alterações nos Termos</h3>
                  <p>
                    Podemos modificar estes termos a qualquer momento. Continuando a usar nossos serviços após alterações, você aceita os termos revisados.
                  </p>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3">7. Rescisão</h3>
                  <p>
                    Reservamo-nos o direito de encerrar ou suspender contas que violem estes termos, sem aviso prévio.
                  </p>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3">8. Contato</h3>
                  <p>
                    Se você tiver dúvidas sobre estes termos, entre em contato conosco através da nossa <Link to="/contato" className="text-consumer hover:underline">página de contato</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfUse;
