
import React from 'react';
import { FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "O que é o Apoio do Consumidor?",
      answer: "Apoio do Consumidor é uma plataforma que orienta consumidores e ajuda na formulação de reclamações com base no Código de Defesa do Consumidor. Utilizamos inteligência artificial para ajudar o consumidor a defender seus direitos de forma eficiente."
    },
    {
      question: "Como funciona o processo de reclamação?",
      answer: "O processo é simples: você preenche um formulário com informações sobre seu problema, conversa com nosso assistente de IA para fornecer mais detalhes e recebe um texto formal de reclamação pronto para uso. Você pode acompanhar todo o processo pelo painel de controle."
    },
    {
      question: "Quanto custa usar a plataforma?",
      answer: "Atualmente, oferecemos um plano gratuito que permite criar e gerenciar reclamações básicas. Para funcionalidades avançadas e suporte jurídico especializado, temos planos pagos com diferentes preços."
    },
    {
      question: "É preciso ter conhecimento jurídico para usar?",
      answer: "Não! Nossa plataforma foi projetada justamente para ajudar pessoas sem conhecimento jurídico. Nossa IA traduz as situações em linguagem jurídica formal e também explica os conceitos em termos simples para você."
    },
    {
      question: "Como sei se minha reclamação tem fundamento legal?",
      answer: "Nossa IA analisa sua situação com base no Código de Defesa do Consumidor e indica se há violação de direitos. Explicamos quais artigos se aplicam ao seu caso e se sua reclamação tem fundamentação legal."
    },
    {
      question: "Posso editar a reclamação gerada pela plataforma?",
      answer: "Sim, você pode editar o texto gerado antes de enviá-lo. Entretanto, recomendamos manter a estrutura jurídica sugerida pela plataforma para maior eficácia."
    },
    {
      question: "A plataforma representa-me juridicamente?",
      answer: "Não, somos uma ferramenta de apoio e não substituímos advogados. Fornecemos os textos e orientações, mas não representamos consumidores legalmente em processos judiciais."
    },
    {
      question: "Como acompanho o status da minha reclamação?",
      answer: "Após registrar sua reclamação, você pode acompanhar seu status através do painel do usuário. Lá você verá se houve respostas e poderá adicionar atualizações."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-consumer to-consumer-dark text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Perguntas Frequentes
              </h1>
              <p className="text-lg opacity-90">
                Tire suas dúvidas sobre a plataforma Apoio do Consumidor
              </p>
            </div>
          </div>
        </section>
        
        {/* FAQ Content */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <FileText className="h-6 w-6 text-consumer mr-2" />
                  <h2 className="text-2xl font-bold">FAQ</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-medium mb-2">Ainda tem dúvidas?</h3>
                  <p className="text-gray-600 mb-4">
                    Entre em contato com nossa equipe de suporte. Estamos sempre prontos para ajudar.
                  </p>
                  <Link to="/contato" className="secondary-btn inline-flex">
                    Entre em contato
                  </Link>
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

export default FAQ;
