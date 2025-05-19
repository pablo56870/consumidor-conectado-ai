
import React, { useState } from 'react';
import { FileEdit, MessageSquare, Check, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormSteps from '../components/FormSteps';
import ComplaintChat from '../components/ComplaintChat';
import ComplaintOutput from '../components/ComplaintOutput';
import ComplaintHistory from '../components/ComplaintHistory';
import { ComplaintData, MOCK_COMPLAINTS } from '../lib/complaintTypes';

const Index = () => {
  const [step, setStep] = useState<'form' | 'chat' | 'output'>('form');
  const [formData, setFormData] = useState<Partial<ComplaintData>>({});
  const [complaints, setComplaints] = useState<ComplaintData[]>(MOCK_COMPLAINTS);
  
  const handleCompleteForm = (data: Partial<ComplaintData>) => {
    setFormData(data);
    setStep('chat');
    window.scrollTo(0, 0);
  };
  
  const handleSendMessage = (message: string) => {
    // In a real app, this would send the message to an AI API
    console.log('Message sent:', message);
  };
  
  const handleCompleteChat = () => {
    setStep('output');
    window.scrollTo(0, 0);
  };
  
  const handleSaveComplaint = () => {
    // In a real app, this would save to a database
    const newComplaint: ComplaintData = {
      id: (complaints.length + 1).toString(),
      company: formData.company || { name: '' },
      complaintType: formData.complaintType || 'outro',
      description: formData.description || '',
      contactAttempt: formData.contactAttempt || false,
      contactDescription: formData.contactDescription,
      occurrenceDate: formData.occurrenceDate || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    setComplaints([newComplaint, ...complaints]);
    
    // Show success message
    alert('Reclamação salva com sucesso!');
    
    // Reset and go back to form
    setStep('form');
    setFormData({});
    window.scrollTo(0, 0);
  };
  
  const handleSelectComplaint = (complaint: ComplaintData) => {
    // In a real app, this would load the complaint details
    console.log('Selected complaint:', complaint);
  };
  
  const renderStepIcon = () => {
    switch(step) {
      case 'form':
        return <FileEdit className="h-6 w-6" />;
      case 'chat':
        return <MessageSquare className="h-6 w-6" />;
      case 'output':
        return <Check className="h-6 w-6" />;
      default:
        return null;
    }
  };
  
  const renderStepContent = () => {
    switch(step) {
      case 'form':
        return <FormSteps onCompleteForm={handleCompleteForm} />;
      case 'chat':
        return (
          <ComplaintChat 
            onSendMessage={handleSendMessage} 
            onCompleteChat={handleCompleteChat}
          />
        );
      case 'output':
        return (
          <ComplaintOutput 
            complaintData={formData}
            onSave={handleSaveComplaint}
          />
        );
      default:
        return null;
    }
  };

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
                <button className="bg-white text-consumer hover:bg-consumer-light px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center">
                  Iniciar reclamação
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="bg-consumer-dark hover:bg-opacity-80 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Saiba como funciona
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Steps Indicator */}
        <section className="bg-white border-b py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="flex items-center">
                <div className={`flex items-center justify-center h-10 w-10 rounded-full ${step === 'form' ? 'bg-consumer text-white' : 'bg-gray-100 text-gray-500'}`}>
                  <FileEdit className="h-5 w-5" />
                </div>
                <div className={`h-1 w-10 ${step === 'form' ? 'bg-gray-300' : 'bg-consumer'}`}></div>
                <div className={`flex items-center justify-center h-10 w-10 rounded-full ${step === 'chat' ? 'bg-consumer text-white' : step === 'output' ? 'bg-consumer text-white' : 'bg-gray-100 text-gray-500'}`}>
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className={`h-1 w-10 ${step === 'output' ? 'bg-consumer' : 'bg-gray-300'}`}></div>
                <div className={`flex items-center justify-center h-10 w-10 rounded-full ${step === 'output' ? 'bg-consumer text-white' : 'bg-gray-100 text-gray-500'}`}>
                  <Check className="h-5 w-5" />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <div className="flex text-xs text-gray-600 space-x-8">
                <span className={step === 'form' ? 'font-semibold text-consumer' : ''}>Formulário</span>
                <span className={step === 'chat' ? 'font-semibold text-consumer' : ''}>Chat de detalhes</span>
                <span className={step === 'output' ? 'font-semibold text-consumer' : ''}>Reclamação</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-8">
              <div className="flex items-center mb-6">
                {renderStepIcon()}
                <h2 className="text-2xl font-bold ml-2">
                  {step === 'form' && 'Detalhes da sua reclamação'}
                  {step === 'chat' && 'Conversando com o assistente jurídico'}
                  {step === 'output' && 'Sua reclamação está pronta'}
                </h2>
              </div>
              {renderStepContent()}
            </div>
            
            {/* Complaints History */}
            <div className="max-w-3xl mx-auto mt-12">
              <ComplaintHistory 
                complaints={complaints}
                onSelectComplaint={handleSelectComplaint}
              />
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
