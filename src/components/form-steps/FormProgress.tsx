
import React from 'react';

type Step = {
  id: string;
  label: string;
};

type FormProgressProps = {
  steps: Step[];
  currentStep: number;
};

const FormProgress: React.FC<FormProgressProps> = ({ steps, currentStep }) => {
  return (
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
  );
};

export default FormProgress;
