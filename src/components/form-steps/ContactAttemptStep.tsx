
import React from 'react';

type ContactAttemptStepProps = {
  contactAttempt: boolean;
  contactDescription?: string;
  onChangeAttempt: (attempted: boolean) => void;
  onChangeDescription: (description: string) => void;
};

const ContactAttemptStep: React.FC<ContactAttemptStepProps> = ({ 
  contactAttempt, 
  contactDescription = '', 
  onChangeAttempt, 
  onChangeDescription 
}) => {
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
              checked={contactAttempt === true}
              onChange={() => onChangeAttempt(true)}
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
              checked={contactAttempt === false}
              onChange={() => onChangeAttempt(false)}
              className="h-4 w-4 text-consumer focus:ring-consumer border-gray-300"
            />
            <label htmlFor="contact-no" className="ml-2 block text-sm text-gray-700">
              Não
            </label>
          </div>
        </div>
      </div>
      
      {contactAttempt && (
        <div>
          <label htmlFor="contact-description" className="block text-sm font-medium text-gray-700 mb-1">
            Descreva o contato realizado
          </label>
          <textarea
            id="contact-description"
            value={contactDescription}
            onChange={(e) => onChangeDescription(e.target.value)}
            placeholder="Como você entrou em contato? Qual foi a resposta da empresa?"
            className="input-field"
            rows={4}
          />
        </div>
      )}
    </div>
  );
};

export default ContactAttemptStep;
