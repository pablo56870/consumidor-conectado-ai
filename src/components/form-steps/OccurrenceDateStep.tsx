
import React from 'react';
import { Input } from '../ui/input';

type OccurrenceDateStepProps = {
  date: string;
  onChange: (date: string) => void;
};

const OccurrenceDateStep: React.FC<OccurrenceDateStepProps> = ({ date, onChange }) => {
  return (
    <div>
      <label htmlFor="occurrence-date" className="block text-sm font-medium text-gray-700 mb-1">
        Data da ocorrência
      </label>
      <Input
        id="occurrence-date"
        type="date"
        value={date}
        onChange={(e) => onChange(e.target.value)}
        className="input-field"
      />
    </div>
  );
};

export default OccurrenceDateStep;
