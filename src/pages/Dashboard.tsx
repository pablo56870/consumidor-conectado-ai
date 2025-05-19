
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Plus, User, FileBarChart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComplaintHistory from '../components/ComplaintHistory';
import { ComplaintData, MOCK_COMPLAINTS } from '../lib/complaintTypes';

const Dashboard = () => {
  const [complaints, setComplaints] = useState<ComplaintData[]>(MOCK_COMPLAINTS);
  
  const handleSelectComplaint = (complaint: ComplaintData) => {
    // In a real app, this would navigate to the complaint details
    console.log('Selected complaint:', complaint);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Dashboard Header */}
        <section className="bg-gradient-to-br from-consumer to-consumer-dark text-white py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h1 className="text-3xl font-bold mb-2">Painel do Consumidor</h1>
                <p className="text-white/80">
                  Acompanhe suas reclamações e gerencie suas solicitações
                </p>
              </div>
              
              <Link to="/nova-reclamacao" className="bg-white text-consumer hover:bg-consumer-light px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center">
                <Plus className="mr-2 h-5 w-5" />
                Nova Reclamação
              </Link>
            </div>
          </div>
        </section>
        
        {/* Dashboard Stats */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-consumer-neutral rounded-lg p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-consumer/20 rounded-full flex items-center justify-center mr-4">
                    <FileText className="h-6 w-6 text-consumer" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Total de Reclamações</p>
                    <h3 className="text-2xl font-bold">{complaints.length}</h3>
                  </div>
                </div>
              </div>
              
              <div className="bg-consumer-neutral rounded-lg p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <FileBarChart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Resolvidas</p>
                    <h3 className="text-2xl font-bold">
                      {complaints.filter(c => c.status === 'resolved').length}
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="bg-consumer-neutral rounded-lg p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <User className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Perfil</p>
                    <h3 className="text-2xl font-bold">Consumidor</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Complaint History */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ComplaintHistory 
                complaints={complaints}
                onSelectComplaint={handleSelectComplaint}
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
