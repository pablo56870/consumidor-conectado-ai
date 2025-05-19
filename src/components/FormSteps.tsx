
import React, { useState, useEffect } from 'react';
import { ComplaintData, Company, ComplaintType, COMPLAINT_TYPE_LABELS } from '../lib/complaintTypes';
import { Input } from './ui/input';

type ComplaintFormProps = {
  onCompleteForm: (data: Partial<ComplaintData>) => void;
};

const FormSteps: React.FC<ComplaintFormProps> = ({ onCompleteForm }) => {
  // Fix the spread type error by explicitly defining the type for formData
  const [formData, setFormData] = useState<Partial<ComplaintData>>({
    company: { name: '' },
    complaintType: 'produto_defeituoso' as ComplaintType,
    description: '',
    contactAttempt: false,
    contactDescription: '',
    occurrenceDate: '',
  });
  const [currentStep, setCurrentStep] = useState(0);
  
  // Define steps
  const steps = [
    { id: 'company', label: 'Informações da empresa' },
    { id: 'complaint', label: 'Tipo de reclamação' },
    { id: 'description', label: 'Descrição do problema' },
    { id: 'contact', label: 'Contato prévio' },
    { id: 'date', label: 'Data da ocorrência' },
  ];
  
  // Handle input changes
  const handleChange = (field: keyof ComplaintData, value: any) => {
    if (field === 'company') {
      setFormData(prev => ({ ...prev, company: { name: value } }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };
  
  // Navigate between steps
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onCompleteForm(formData);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Validate current step
  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 0: // Company
        return formData.company?.name && formData.company.name.trim() !== '';
      case 1: // Complaint type
        return formData.complaintType !== undefined;
      case 2: // Description
        return formData.description && formData.description.trim().length >= 10;
      case 3: // Contact attempt
        return formData.contactAttempt !== undefined && 
               (!formData.contactAttempt || 
                (formData.contactDescription && formData.contactDescription.trim() !== ''));
      case 4: // Date
        return formData.occurrenceDate && formData.occurrenceDate.trim() !== '';
      default:
        return false;
    }
  };
  
  // Create list of complaint types from the ComplaintType enum
  const complaintTypesList = Object.keys(COMPLAINT_TYPE_LABELS) as ComplaintType[];
  
  // Render form based on current step
  const renderFormStep = () => {
    switch (currentStep) {
      case 0: // Company information
        return (
          <div>
            <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome da empresa
            </label>
            <Input
              id="company-name"
              value={formData.company?.name || ''}
              onChange={(e) => handleChange('company', e.target.value)}
              placeholder="Ex: Loja ABC"
              className="input-field"
            />
          </div>
        );
      
      case 1: // Complaint type
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Selecione o tipo de problema
            </label>
            <div className="space-y-2">
              {complaintTypesList.map((type) => (
                <div key={type} className="flex items-center">
                  <input
                    type="radio"
                    id={type}
                    name="complaint-type"
                    value={type}
                    checked={formData.complaintType === type}
                    onChange={() => handleChange('complaintType', type)}
                    className="h-4 w-4 text-consumer focus:ring-consumer border-gray-300"
                  />
                  <label htmlFor={type} className="ml-2 block text-sm text-gray-700">
                    {COMPLAINT_TYPE_LABELS[type]}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 2: // Description
        return (
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Descreva o que aconteceu
            </label>
            <textarea
              id="description"
              value={formData.description || ''}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Descreva detalhadamente o problema que você enfrentou..."
              className="input-field h-32"
              rows={6}
            />
          </div>
        );
      
      case 3: // Contact attempt
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Você já tentou contato com a empresa antes?
              </label>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="contact-yes"
                    name="contact-attempt"
                    checked={formData.contactAttempt === true}
                    onChange={() => handleChange('contactAttempt', true)}
                    className="h-4 w-4 text-consumer focus:ring-consumer border-gray-300"
                  />
                  <label htmlFor="contact-yes" className="ml-2 block text-sm text-gray-700">
                    Sim
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="contact-no"
                    name="contact-attempt"
                    checked={formData.contactAttempt === false}
                    onChange={() => handleChange('contactAttempt', false)}
                    className="h-4 w-4 text-consumer focus:ring-consumer border-gray-300"
                  />
                  <label htmlFor="contact-no" className="ml-2 block text-sm text-gray-700">
                    Não
                  </label>
                </div>
              </div>
            </div>
            
            {formData.contactAttempt && (
              <div>
                <label htmlFor="contact-description" className="block text-sm font-medium text-gray-700 mb-1">
                  Descreva o contato realizado
                </label>
                <textarea
                  id="contact-description"
                  value={formData.contactDescription || ''}
                  onChange={(e) => handleChange('contactDescription', e.target.value)}
                  placeholder="Como você entrou em contato? Qual foi a resposta da empresa?"
                  className="input-field"
                  rows={4}
                />
              </div>
            )}
          </div>
        );
      
      case 4: // Date
        return (
          <div>
            <label htmlFor="occurrence-date" className="block text-sm font-medium text-gray-700 mb-1">
              Data da ocorrência
            </label>
            <Input
              id="occurrence-date"
              type="date"
              value={formData.occurrenceDate || ''}
              onChange={(e) => handleChange('occurrenceDate', e.target.value)}
              className="input-field"
            />
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="step-container">
      {/* Progress Indicator */}
      <div className="flex mb-6">
        {steps.map((step, index) => (
          <div key={step.id} className="flex-1">
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  index < currentStep
                    ? 'bg-consumer text-white'
                    : index === currentStep
                    ? 'bg-consumer text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-1 flex-1 ${
                    index < currentStep ? 'bg-consumer' : 'bg-gray-200'
                  }`}
                ></div>
              )}
            </div>
            <div className="text-xs mt-1 text-center">
              {step.label}
            </div>
          </div>
        ))}
      </div>
      
      {/* Form Step Content */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">
          {steps[currentStep].label}
        </h3>
        {renderFormStep()}
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button 
          type="button" 
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`px-4 py-2 rounded-md ${
            currentStep === 0 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Voltar
        </button>
        
        <button 
          type="button" 
          onClick={nextStep}
          disabled={!isCurrentStepValid()}
          className={`px-4 py-2 rounded-md ${
            isCurrentStepValid() 
              ? currentStep === steps.length - 1 
                ? 'primary-btn' 
                : 'secondary-btn'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          {currentStep === steps.length - 1 ? 'Concluir' : 'Próximo'}
        </button>
      </div>
    </div>
  );
};

export default FormSteps;
