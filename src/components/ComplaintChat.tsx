
import React, { useState, useRef, useEffect } from 'react';
import { Send, Plus, PaperclipIcon } from 'lucide-react';
import { ChatMessage } from '../lib/complaintTypes';

interface ComplaintChatProps {
  initialMessages?: ChatMessage[];
  onSendMessage: (message: string) => void;
  onCompleteChat: () => void;
}

const ComplaintChat: React.FC<ComplaintChatProps> = ({ 
  initialMessages = [], 
  onSendMessage,
  onCompleteChat
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    
    const userMessage: ChatMessage = {
      role: 'user',
      content: newMessage,
      timestamp: new Date().toISOString()
    };
    
    setMessages([...messages, userMessage]);
    onSendMessage(newMessage);
    setNewMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      const systemMessage: ChatMessage = {
        role: 'system',
        content: getAIResponse(newMessage),
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, systemMessage]);
    }, 1000);
  };

  const getAIResponse = (message: string): string => {
    // This is a simplified simulation - in a real app, this would be an API call
    const responses = [
      "Obrigado por fornecer esses detalhes. Isso me ajuda a entender melhor o seu caso.",
      "Entendi. Você poderia descrever melhor como isso afetou você?",
      "Baseado no que você me informou, parece que houve uma violação do Artigo 39 do CDC, que proíbe práticas abusivas.",
      "Mais algum detalhe sobre quando e como você tentou resolver isso com a empresa?",
      "Você possui algum comprovante ou evidência que possa fortalecer sua reclamação?",
      "Preciso de mais informações sobre o produto/serviço. Poderia descrever o que foi contratado exatamente?",
      "Acredito que já tenho informações suficientes para elaborar sua reclamação formal. Vamos prosseguir?",
    ];
    
    // For the last message, suggest moving forward
    if (messages.length > 5) {
      return "Acredito que já coletei informações suficientes para elaborar sua reclamação formal. Podemos prosseguir para a próxima etapa?";
    }
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleFinishChat = () => {
    onCompleteChat();
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-[500px]">
      <div className="bg-consumer p-4 rounded-t-xl">
        <h3 className="text-lg font-medium text-white">Assistente Jurídico</h3>
        <p className="text-sm text-white/80">Forneça mais detalhes para aprimorar sua reclamação</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <div className="bg-consumer-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <PaperclipIcon className="h-8 w-8 text-consumer" />
            </div>
            <h4 className="font-medium text-gray-700">Vamos aprimorar sua reclamação</h4>
            <p className="text-sm text-gray-500 mt-1">
              Forneça mais detalhes para gerarmos um texto de reclamação mais assertivo
            </p>
          </div>
        )}
        
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-system'}>
              <p>{msg.content}</p>
              <span className="text-xs text-gray-500 mt-1 block">
                {new Date(msg.timestamp).toLocaleTimeString('pt-BR', { 
                  hour: '2-digit', 
                  minute: '2-digit'
                })}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t p-3">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <button 
            type="button" 
            className="rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Plus className="h-5 w-5 text-gray-600" />
          </button>
          
          <input 
            type="text" 
            value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)} 
            placeholder="Digite sua mensagem..." 
            className="flex-1 border rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-consumer"
          />
          
          <button 
            type="submit" 
            className="rounded-full p-2 bg-consumer hover:bg-consumer-dark transition-colors"
            disabled={!newMessage.trim()}
          >
            <Send className="h-5 w-5 text-white" />
          </button>
        </form>
        
        {messages.length > 5 && (
          <div className="mt-3 text-center">
            <button 
              onClick={handleFinishChat}
              className="accent-btn text-sm py-2"
            >
              Finalizar e gerar reclamação
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplaintChat;
