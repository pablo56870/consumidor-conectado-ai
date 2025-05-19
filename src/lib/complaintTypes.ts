
export type ComplaintType = 
  | 'produto_defeituoso' 
  | 'servico_insatisfatorio' 
  | 'cobranca_indevida' 
  | 'publicidade_enganosa' 
  | 'cancelamento_dificil' 
  | 'atraso_entrega'
  | 'nao_entregue'
  | 'garantia_negada'
  | 'troca_recusada'
  | 'outro';

export interface Company {
  name: string;
  segment?: string;
}

export interface ComplaintData {
  id?: string;
  company: Company;
  complaintType: ComplaintType;
  description: string;
  contactAttempt: boolean;
  contactDescription?: string;
  occurrenceDate: string;
  evidence?: string[];
  userName?: string;
  userContact?: string;
  chatHistory?: ChatMessage[];
  formalComplaint?: string;
  simplifiedExplanation?: string;
  status: 'draft' | 'pending' | 'replied' | 'resolved' | 'unresolved';
  createdAt: string;
  updatedAt: string;
}

export interface ChatMessage {
  role: 'user' | 'system';
  content: string;
  timestamp: string;
}

export interface Step {
  id: string;
  title: string;
  description?: string;
  component: React.ReactNode;
  isComplete: boolean;
}

export const COMPLAINT_TYPE_LABELS: Record<ComplaintType, string> = {
  produto_defeituoso: 'Produto defeituoso',
  servico_insatisfatorio: 'Serviço insatisfatório',
  cobranca_indevida: 'Cobrança indevida',
  publicidade_enganosa: 'Publicidade enganosa',
  cancelamento_dificil: 'Dificuldade para cancelar',
  atraso_entrega: 'Atraso na entrega',
  nao_entregue: 'Produto não entregue',
  garantia_negada: 'Garantia negada',
  troca_recusada: 'Troca recusada',
  outro: 'Outro problema',
};

export const MOCK_COMPLAINTS: ComplaintData[] = [
  {
    id: '1',
    company: {
      name: 'E-commerce Express',
      segment: 'Varejo'
    },
    complaintType: 'atraso_entrega',
    description: 'Comprei um produto há mais de 30 dias e ainda não recebi.',
    contactAttempt: true,
    contactDescription: 'Entrei em contato pelo SAC e disseram que investigariam, mas não retornaram.',
    occurrenceDate: '2023-05-10',
    status: 'pending',
    createdAt: '2023-05-15T10:30:00Z',
    updatedAt: '2023-05-15T10:30:00Z',
    chatHistory: [
      {
        role: 'user',
        content: 'Comprei um celular no site e estou há mais de 30 dias esperando.',
        timestamp: '2023-05-15T10:32:00Z'
      },
      {
        role: 'system',
        content: 'Entendi. Você poderia informar se o site forneceu algum código de rastreamento?',
        timestamp: '2023-05-15T10:32:30Z'
      },
      {
        role: 'user',
        content: 'Sim, mas o código não funciona quando consulto nos Correios.',
        timestamp: '2023-05-15T10:33:00Z'
      }
    ],
    formalComplaint: 'Prezados, adquiri um aparelho celular em vossa loja virtual no dia 10/05/2023, conforme pedido #12345. Passados mais de 30 dias, o produto ainda não foi entregue, violando o prazo estabelecido pelo artigo 49 do Código de Defesa do Consumidor...',
    simplifiedExplanation: 'De acordo com o CDC, lojas virtuais têm obrigação de entregar produtos no prazo informado ou, quando não houver prazo específico, em até 30 dias. No seu caso, o prazo foi excedido, o que dá direito a exigir a entrega imediata, outro produto equivalente ou o cancelamento da compra com devolução integral do valor pago.'
  },
  {
    id: '2',
    company: {
      name: 'Telecomunicações Rápidas',
      segment: 'Telecomunicações'
    },
    complaintType: 'cobranca_indevida',
    description: 'Estou recebendo cobranças por serviços que nunca contratei.',
    contactAttempt: true,
    contactDescription: 'Já liguei 3 vezes e sempre dizem que vão resolver, mas continuam cobrando.',
    occurrenceDate: '2023-04-20',
    status: 'replied',
    createdAt: '2023-05-01T14:22:00Z',
    updatedAt: '2023-05-10T09:45:00Z',
    formalComplaint: 'À empresa Telecomunicações Rápidas, venho por meio desta formalizar reclamação referente às cobranças indevidas em minha fatura...'
  }
];
