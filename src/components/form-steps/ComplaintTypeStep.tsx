
import React from 'react';
import { ComplaintType, COMPLAINT_TYPE_LABELS } from '../../lib/complaintTypes';

type ComplaintTypeStepProps = {
  selectedType: ComplaintType;
  onChange: (type: ComplaintType) => void;
};

const ComplaintTypeStep: React.FC<ComplaintTypeStepProps> = ({ selectedType, onChange }) => {
  // Create list of complaint types from the ComplaintType enum
  const complaintTypesList = Object.keys(COMPLAINT_TYPE_LABELS) as ComplaintType[];
  
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
              checked={selectedType === type}
              onChange={() => onChange(type)}
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
};

export default ComplaintTypeStep;
