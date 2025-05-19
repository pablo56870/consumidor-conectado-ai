
import React, { useState } from 'react';
import { Calendar, Check, ChevronRight, Clock, Store, FileText, AlertCircle } from 'lucide-react';
import { ComplaintType, COMPLAINT_TYPE_LABELS } from '../lib/complaintTypes';

interface FormStepsProps {
  onCompleteForm: (formData: any) => void;
}

const FormSteps: React.FC<FormStepsProps> = ({ onCompleteForm }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    company: {
      name: '',
      segment: ''
    },
    complaintType: '' as ComplaintType,
    description: '',
    contactAttempt: false,
    contactDescription: '',
    occurrenceDate: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent as keyof typeof formData],
          [child]: value
        }
      });
    } else if (name === 'contactAttempt') {
      setFormData({
        ...formData,
        contactAttempt: (e as React.ChangeEvent<HTMLInputElement>).target.checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleNext = () => {
    // Validate current step before proceeding
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit the form
      onCompleteForm({
        ...formData,
        status: 'draft',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    {
      title: 'Empresa',
      icon: <Store className="h-6 w-6 text-consumer" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Qual empresa causou o problema?</h3>
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
              Nome da empresa
            </label>
            <input
              type="text"
              id="companyName"
              name="company.name"
              placeholder="Ex: Loja Virtual Brasil"
              value={formData.company.name}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </div>
          <div>
            <label htmlFor="companySegment" className="block text-sm font-medium text-gray-700 mb-1">
              Segmento (opcional)
            </label>
            <input
              type="text"
              id="companySegment"
              name="company.segment"
              placeholder="Ex: Varejo, Telecomunicações, Transporte"
              value={formData.company.segment || ''}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
        </div>
      )
    },
    {
      title: 'Problema',
      icon: <AlertCircle className="h-6 w-6 text-consumer" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Qual é o tipo de problema?</h3>
          <div>
            <label htmlFor="complaintType" className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de reclamação
            </label>
            <select
              id="complaintType"
              name="complaintType"
              value={formData.complaintType}
              onChange={handleInputChange}
              className="input-field"
              required
            >
              <option value="">Selecione o tipo de problema</option>
              {Object.entries(COMPLAINT_TYPE_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Descrição do problema
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Descreva com detalhes o que aconteceu"
              value={formData.description}
              onChange={handleInputChange}
              className="input-field"
              required
            ></textarea>
          </div>
        </div>
      )
    },
    {
      title: 'Contato Prévio',
      icon: <FileText className="h-6 w-6 text-consumer" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Você já tentou contato com a empresa?</h3>
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="contactAttempt"
              name="contactAttempt"
              checked={formData.contactAttempt}
              onChange={handleInputChange}
              className="mt-1"
            />
            <label htmlFor="contactAttempt" className="block text-sm font-medium text-gray-700">
              Sim, já tentei entrar em contato com a empresa
            </label>
          </div>
          
          {formData.contactAttempt && (
            <div>
              <label htmlFor="contactDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Descreva suas tentativas de contato
              </label>
              <textarea
                id="contactDescription"
                name="contactDescription"
                rows={3}
                placeholder="Ex: Liguei para o SAC no dia 10/05, falei com Maria, mas não resolveram..."
                value={formData.contactDescription}
                onChange={handleInputChange}
                className="input-field"
              ></textarea>
            </div>
          )}
        </div>
      )
    },
    {
      title: 'Data',
      icon: <Calendar className="h-6 w-6 text-consumer" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Quando o problema ocorreu?</h3>
          <div>
            <label htmlFor="occurrenceDate" className="block text-sm font-medium text-gray-700 mb-1">
              Data aproximada
            </label>
            <input
              type="date"
              id="occurrenceDate"
              name="occurrenceDate"
              value={formData.occurrenceDate}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </div>
          <div className="pt-2">
            <p className="text-sm text-gray-500">
              <Clock className="inline-block h-4 w-4 mr-1" />
              É importante fornecer uma data aproximada para verificar prazos legais aplicáveis.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-consumer-neutral rounded-xl p-6 shadow-sm">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center 
                  ${currentStep >= index 
                    ? 'bg-consumer text-white' 
                    : 'bg-white border border-gray-300 text-gray-400'}`}
              >
                {currentStep > index ? (
                  <Check className="h-5 w-5" />
                ) : (
                  step.icon
                )}
              </div>
              <span className={`text-xs mt-2 ${currentStep >= index ? 'text-consumer font-medium' : 'text-gray-500'}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2 relative">
          <div className="absolute top-0 left-0 h-1 bg-consumer" style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}></div>
          <div className="h-1 w-full bg-gray-200"></div>
        </div>
      </div>

      <div className="step-container">
        {steps[currentStep].content}
      </div>

      <div className="flex justify-between mt-6">
        <button 
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`secondary-btn ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Voltar
        </button>
        <button 
          onClick={handleNext} 
          className="primary-btn flex items-center"
        >
          {currentStep < steps.length - 1 ? 'Próximo' : 'Finalizar'}
          <ChevronRight className="ml-1 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default FormSteps;
