
import React from 'react';

type FormNavigationProps = {
  currentStep: number;
  stepsCount: number;
  isValid: boolean;
  onNext: () => void;
  onPrev: () => void;
};

const FormNavigation: React.FC<FormNavigationProps> = ({ 
  currentStep, 
  stepsCount, 
  isValid, 
  onNext, 
  onPrev 
}) => {
  return (
    <div className="flex justify-between">
      <button 
        type="button" 
        onClick={onPrev}
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
        onClick={onNext}
        disabled={!isValid}
        className={`px-4 py-2 rounded-md ${
          isValid 
            ? currentStep === stepsCount - 1 
              ? 'primary-btn' 
              : 'secondary-btn'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        {currentStep === stepsCount - 1 ? 'Concluir' : 'Próximo'}
      </button>
    </div>
  );
};

export default FormNavigation;
