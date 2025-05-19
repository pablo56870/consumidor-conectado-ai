
import React from 'react';
import { ComplaintData } from '../lib/complaintTypes';
import FormStepsContainer from './form-steps/FormStepsContainer';

type ComplaintFormProps = {
  onCompleteForm: (data: Partial<ComplaintData>) => void;
};

const FormSteps: React.FC<ComplaintFormProps> = ({ onCompleteForm }) => {
  return <FormStepsContainer onCompleteForm={onCompleteForm} />;
};

export default FormSteps;
