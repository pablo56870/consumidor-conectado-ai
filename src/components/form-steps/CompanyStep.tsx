
import React from 'react';
import { Input } from '../ui/input';

type CompanyStepProps = {
  companyName: string;
  onChange: (value: string) => void;
};

const CompanyStep: React.FC<CompanyStepProps> = ({ companyName, onChange }) => {
  return (
    <div>
      <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-1">
        Nome da empresa
      </label>
      <Input
        id="company-name"
        value={companyName}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ex: Loja ABC"
        className="input-field"
      />
    </div>
  );
};

export default CompanyStep;
