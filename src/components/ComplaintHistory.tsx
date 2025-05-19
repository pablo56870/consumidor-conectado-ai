
import React, { useState } from 'react';
import { Calendar, Clock, FileText, Edit, AlertTriangle, CheckCircle, X, XCircle, HelpCircle } from 'lucide-react';
import { ComplaintData, COMPLAINT_TYPE_LABELS } from '../lib/complaintTypes';

interface ComplaintHistoryProps {
  complaints: ComplaintData[];
  onSelectComplaint: (complaint: ComplaintData) => void;
}

const ComplaintHistory: React.FC<ComplaintHistoryProps> = ({ complaints, onSelectComplaint }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredComplaints = filter === 'all' 
    ? complaints 
    : complaints.filter(complaint => complaint.status === filter);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'draft':
        return <Edit className="h-5 w-5 text-blue-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-amber-500" />;
      case 'replied':
        return <HelpCircle className="h-5 w-5 text-purple-500" />;
      case 'resolved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'unresolved':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'draft':
        return 'Rascunho';
      case 'pending':
        return 'Aguardando resposta';
      case 'replied':
        return 'Respondida';
      case 'resolved':
        return 'Resolvida';
      case 'unresolved':
        return 'Não resolvida';
      default:
        return 'Desconhecido';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'draft':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-amber-100 text-amber-800';
      case 'replied':
        return 'bg-purple-100 text-purple-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'unresolved':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  if (complaints.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
        <FileText className="h-12 w-12 text-gray-300 mx-auto mb-3" />
        <h3 className="text-lg font-medium text-gray-700">Nenhuma reclamação encontrada</h3>
        <p className="text-gray-500 mt-1">
          Suas reclamações aparecerão aqui após serem criadas
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="bg-consumer p-4 rounded-t-xl">
        <h3 className="text-lg font-medium text-white">Minhas Reclamações</h3>
        <div className="flex mt-3 gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
              filter === 'all' ? 'bg-white text-consumer' : 'bg-consumer-dark text-white/90'
            }`}
          >
            Todas
          </button>
          {['draft', 'pending', 'replied', 'resolved', 'unresolved'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                filter === status ? 'bg-white text-consumer' : 'bg-consumer-dark text-white/90'
              }`}
            >
              {getStatusText(status)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="p-3">
        <div className="space-y-3">
          {filteredComplaints.map(complaint => (
            <div 
              key={complaint.id} 
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => onSelectComplaint(complaint)}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-gray-800">
                  {complaint.company.name}
                </h4>
                <span className={`text-xs px-2 py-1 rounded-full flex items-center ${getStatusClass(complaint.status)}`}>
                  {getStatusIcon(complaint.status)}
                  <span className="ml-1">{getStatusText(complaint.status)}</span>
                </span>
              </div>
              
              <p className="text-sm text-gray-700 line-clamp-2 mb-3">
                {complaint.description}
              </p>
              
              <div className="flex justify-between text-xs text-gray-500">
                <span className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {COMPLAINT_TYPE_LABELS[complaint.complaintType]}
                </span>
                <span className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {formatDate(complaint.createdAt)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplaintHistory;
