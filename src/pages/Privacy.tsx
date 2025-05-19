
import React from 'react';
import { FileText, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-consumer to-consumer-dark text-white py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Política de Privacidade
              </h1>
              <p className="text-lg opacity-90">
                Última atualização: 19 de maio de 2025
              </p>
            </div>
          </div>
        </section>
        
        {/* Privacy Content */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-6 w-6 text-consumer mr-2" />
                  <h2 className="text-2xl font-bold">Política de Privacidade</h2>
                </div>
                
                <div className="prose max-w-none">
                  <p>
                    O Apoio do Consumidor está comprometido em proteger sua privacidade. Esta política explica como coletamos, usamos e protegemos seus dados pessoais.
                  </p>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3">1. Informações que Coletamos</h3>
                  <p>
                    Podemos coletar os seguintes tipos de informações:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Informações de conta:</strong> nome, endereço de e-mail, senha e dados de contato.</li>
                    <li><strong>Informações de reclamação:</strong> detalhes sobre suas reclamações, incluindo empresas envolvidas, descrições de problemas e datas de ocorrência.</li>
                    <li><strong>Registros de conversas:</strong> histórico de comunicações com nossa plataforma e assistente de IA.</li>
                    <li><strong>Dados de uso:</strong> informações sobre como você utiliza nossa plataforma, incluindo registros de acesso e interações.</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3">2. Como Usamos suas Informações</h3>
                  <p>
                    Utilizamos suas informações para:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Fornecer e personalizar nossos serviços</li>
                    <li>Processar e gerenciar suas reclamações</li>
                    <li>Gerar textos e análises baseados em suas situações específicas</li>
                    <li>Melhorar nosso sistema de inteligência artificial</li>
                    <li>Comunicar-nos com você sobre seu uso da plataforma</li>
                    <li>Cumprir obrigações legais</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3">3. Compartilhamento de Dados</h3>
                  <p>
                    Não vendemos suas informações pessoais. Podemos compartilhar dados com:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Prestadores de serviço:</strong> que nos ajudam a operar nossa plataforma e processar dados.</li>
                    <li><strong>Parceiros de confiança:</strong> quando necessário para fornecer serviços solicitados.</li>
                    <li><strong>Conformidade legal:</strong> quando exigido por lei ou para proteger direitos legais.</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3">4. Segurança de Dados</h3>
                  <p>
                    Implementamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. Entretanto, nenhum sistema é completamente seguro, e não podemos garantir a segurança absoluta dos dados.
                  </p>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3">5. Seus Direitos</h3>
                  <p>
                    De acordo com as leis de proteção de dados aplicáveis, você tem direitos sobre seus dados pessoais, incluindo:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Acessar seus dados</li>
                    <li>Corrigir informações imprecisas</li>
                    <li>Excluir seus dados em determinadas circunstâncias</li>
                    <li>Restringir ou opor-se ao processamento de seus dados</li>
                    <li>Solicitar a portabilidade de seus dados</li>
                    <li>Retirar seu consentimento a qualquer momento</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3">6. Cookies e Tecnologias Semelhantes</h3>
                  <p>
                    Utilizamos cookies e tecnologias similares para melhorar sua experiência, entender como nossa plataforma é usada e personalizar conteúdo. Você pode gerenciar preferências de cookies através das configurações do seu navegador.
                  </p>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3">7. Alterações nesta Política</h3>
                  <p>
                    Podemos atualizar esta política de privacidade periodicamente. A versão mais recente estará sempre disponível em nossa plataforma.
                  </p>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3">8. Contato</h3>
                  <p>
                    Se você tiver dúvidas sobre nossa política de privacidade ou sobre como tratamos seus dados, entre em contato conosco através da nossa <Link to="/contato" className="text-consumer hover:underline">página de contato</Link>.
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

export default Privacy;
