
import React, { useState } from 'react';
import { ComplaintData, ComplaintType } from '../../lib/complaintTypes';
import FormProgress from './FormProgress';
import CompanyStep from './CompanyStep';
import ComplaintTypeStep from './ComplaintTypeStep';
import DescriptionStep from './DescriptionStep';
import ContactAttemptStep from './ContactAttemptStep';
import OccurrenceDateStep from './OccurrenceDateStep';
import FormNavigation from './FormNavigation';

type FormStepsContainerProps = {
  onCompleteForm: (data: Partial<ComplaintData>) => void;
};

const FormStepsContainer: React.FC<FormStepsContainerProps> = ({ onCompleteForm }) => {
  // Define form data state
  const [formData, setFormData] = useState<Partial<ComplaintData>>({
    company: { name: '' },
    complaintType: 'produto_defeituoso' as ComplaintType,
    description: '',
    contactAttempt: false,
    contactDescription: '',
    occurrenceDate: '',
  });
  
  // Current step state
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
  
  // Render form based on current step
  const renderFormStep = () => {
    switch (currentStep) {
      case 0: // Company information
        return (
          <CompanyStep 
            companyName={formData.company?.name || ''} 
            onChange={(value) => handleChange('company', value)}
          />
        );
      
      case 1: // Complaint type
        return (
          <ComplaintTypeStep
            selectedType={formData.complaintType as ComplaintType}
            onChange={(type) => handleChange('complaintType', type)}
          />
        );
      
      case 2: // Description
        return (
          <DescriptionStep
            description={formData.description || ''}
            onChange={(value) => handleChange('description', value)}
          />
        );
      
      case 3: // Contact attempt
        return (
          <ContactAttemptStep
            contactAttempt={formData.contactAttempt || false}
            contactDescription={formData.contactDescription}
            onChangeAttempt={(value) => handleChange('contactAttempt', value)}
            onChangeDescription={(value) => handleChange('contactDescription', value)}
          />
        );
      
      case 4: // Date
        return (
          <OccurrenceDateStep
            date={formData.occurrenceDate || ''}
            onChange={(value) => handleChange('occurrenceDate', value)}
          />
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="step-container">
      {/* Progress Indicator */}
      <FormProgress steps={steps} currentStep={currentStep} />
      
      {/* Form Step Content */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">
          {steps[currentStep].label}
        </h3>
        {renderFormStep()}
      </div>
      
      {/* Navigation Buttons */}
      <FormNavigation
        currentStep={currentStep}
        stepsCount={steps.length}
        isValid={isCurrentStepValid()}
        onNext={nextStep}
        onPrev={prevStep}
      />
    </div>
  );
};

export default FormStepsContainer;
