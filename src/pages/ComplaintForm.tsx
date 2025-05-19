
import React from 'react';
import { FileEdit } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormSteps from '../components/FormSteps';
import { ComplaintData } from '../lib/complaintTypes';

const ComplaintForm = () => {
  const handleCompleteForm = (data: Partial<ComplaintData>) => {
    // In a real app, this would navigate to the chat screen with the form data
    console.log('Form data:', data);
    // Navigate to chat
    window.location.href = `/complaint-chat?data=${encodeURIComponent(JSON.stringify(data))}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-consumer to-consumer-dark text-white py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Iniciar Nova Reclamação
              </h1>
              <p className="text-lg opacity-90">
                Preencha os dados abaixo para iniciarmos sua reclamação
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-8">
              <div className="flex items-center mb-6">
                <FileEdit className="h-6 w-6" />
                <h2 className="text-2xl font-bold ml-2">
                  Detalhes da sua reclamação
                </h2>
              </div>
              <FormSteps onCompleteForm={handleCompleteForm} />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComplaintForm;
