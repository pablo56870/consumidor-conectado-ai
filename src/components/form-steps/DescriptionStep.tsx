
import React from 'react';

type DescriptionStepProps = {
  description: string;
  onChange: (value: string) => void;
};

const DescriptionStep: React.FC<DescriptionStepProps> = ({ description, onChange }) => {
  return (
    <div>
      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
        Descreva o que aconteceu
      </label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Descreva detalhadamente o problema que você enfrentou..."
        className="input-field h-32"
        rows={6}
      />
    </div>
  );
};

export default DescriptionStep;
