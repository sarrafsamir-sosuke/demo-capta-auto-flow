export const statusFlow = [
  "Novo atendimento",
  "Aguardando diagnóstico",
  "Aguardando orçamento",
  "Orçamento enviado",
  "Aguardando aprovação",
  "Serviço agendado",
  "Em execução",
  "Pronto para retirada",
  "Finalizado",
  "Retorno pendente",
];

export const statusTone = {
  "Novo atendimento": "neutral",
  "Aguardando diagnóstico": "active",
  "Aguardando orçamento": "warning",
  "Orçamento enviado": "info",
  "Aguardando aprovação": "warning",
  "Serviço agendado": "success",
  "Em execução": "active",
  "Pronto para retirada": "success",
  Finalizado: "closed",
  "Retorno pendente": "risk",
};

export const teamMembers = [
  {
    id: "tm-recepcao",
    name: "Bianca Torres",
    role: "Recepção técnica",
    area: "Entrada, qualificação e retornos",
  },
  {
    id: "tm-pneus",
    name: "Caio Nogueira",
    role: "Consultor de pneus",
    area: "Pneus, alinhamento e balanceamento",
  },
  {
    id: "tm-orcamentos",
    name: "Helena Prado",
    role: "Orçamentista",
    area: "Orçamentos e aprovação",
  },
  {
    id: "tm-tecnico",
    name: "Equipe técnica",
    role: "Técnico responsável",
    area: "Diagnóstico, execução e OS",
  },
  {
    id: "tm-dono",
    name: "Victor",
    role: "Dono / gestor",
    area: "Indicadores e operação",
  },
];

export const leadOrigins = ["WhatsApp IA", "WhatsApp equipe", "Instagram", "Google", "Indicação", "Site"];

export const customers = [
  {
    id: "cust-lucas",
    name: "Lucas Almeida",
    phone: "(98) 98122-1408",
    origin: "WhatsApp IA",
    profile: "Cliente novo",
    notes: "Precisa resolver pneus e alinhamento no mesmo dia.",
    lastContact: "Hoje, 10:12",
  },
  {
    id: "cust-mariana",
    name: "Mariana Costa",
    phone: "(98) 98820-7721",
    origin: "WhatsApp equipe",
    profile: "Cliente recorrente",
    notes: "Recebeu orçamento e pediu retorno no fim da tarde.",
    lastContact: "Hoje, 09:40",
  },
  {
    id: "cust-rafael",
    name: "Rafael Lima",
    phone: "(98) 99110-4550",
    origin: "Google",
    profile: "Novo cliente",
    notes: "Quer clareza sobre revisão antes de aprovar itens adicionais.",
    lastContact: "Hoje, 08:48",
  },
  {
    id: "cust-patricia",
    name: "Patrícia Nunes",
    phone: "(98) 98444-1901",
    origin: "Indicação",
    profile: "Lead quente",
    notes: "Veículo familiar. Segurança é o argumento principal.",
    lastContact: "Hoje, 09:30",
  },
  {
    id: "cust-joao",
    name: "João Victor",
    phone: "(98) 98777-2319",
    origin: "WhatsApp IA",
    profile: "Comparando orçamento",
    notes: "Precisa de retorno consultivo para não perder para concorrente.",
    lastContact: "Ontem, 16:15",
  },
  {
    id: "cust-andre",
    name: "André Martins",
    phone: "(98) 98210-6034",
    origin: "Site",
    profile: "Cliente técnico",
    notes: "Pede laudo objetivo e registro do diagnóstico.",
    lastContact: "Hoje, 11:22",
  },
];

export const vehicles = [
  {
    id: "veh-corolla",
    customerId: "cust-lucas",
    model: "Corolla",
    year: "2018",
    plate: "PSL-8A42",
    km: "64.200 km",
    lastVisit: "Sem histórico anterior",
  },
  {
    id: "veh-hb20",
    customerId: "cust-mariana",
    model: "HB20",
    year: "2020",
    plate: "NHK-2B19",
    km: "39.800 km",
    lastVisit: "Alinhamento em março",
  },
  {
    id: "veh-onix",
    customerId: "cust-rafael",
    model: "Onix",
    year: "2022",
    plate: "ROX-4C77",
    km: "31.500 km",
    lastVisit: "Primeira passagem",
  },
  {
    id: "veh-compass",
    customerId: "cust-patricia",
    model: "Compass",
    year: "2021",
    plate: "QAW-1D90",
    km: "51.900 km",
    lastVisit: "Troca de óleo em abril",
  },
  {
    id: "veh-civic",
    customerId: "cust-joao",
    model: "Civic",
    year: "2019",
    plate: "PTM-7F33",
    km: "58.700 km",
    lastVisit: "Diagnóstico de suspensão em maio",
  },
  {
    id: "veh-hilux",
    customerId: "cust-andre",
    model: "Hilux",
    year: "2020",
    plate: "QNN-5H21",
    km: "72.400 km",
    lastVisit: "Sem histórico anterior",
  },
];

export const services = [
  {
    id: "srv-retifica-disco",
    nome: "Retífica de disco de freio",
    categoria: "Freios",
    descricao: "Correção técnica da superfície do disco para melhorar frenagem e reduzir ruído.",
    preco: "A partir de R$ 180",
    tempo: "1h30",
    observacao: "Indicado após diagnóstico de vibração, ruído ou desgaste irregular.",
  },
  {
    id: "srv-cambio-dialise",
    nome: "Troca de fluido de câmbio com máquina de diálise",
    categoria: "Câmbio",
    descricao: "Substituição técnica do fluido com equipamento próprio para maior precisão.",
    preco: "A partir de R$ 680",
    tempo: "2h30",
    observacao: "Serviço premium que exige orientação clara ao cliente antes da aprovação.",
  },
  {
    id: "srv-revisao",
    nome: "Revisão geral",
    categoria: "Manutenção preventiva",
    descricao: "Checklist de óleo, filtros, freios, suspensão, pneus e itens essenciais.",
    preco: "A partir de R$ 450",
    tempo: "2h",
    observacao: "Boa opção antes de viagens ou manutenção periódica.",
  },
  {
    id: "srv-oleo",
    nome: "Óleo e filtros",
    categoria: "Manutenção preventiva",
    descricao: "Troca de óleo e filtros com registro para próximo retorno.",
    preco: "A partir de R$ 220",
    tempo: "45 min",
    observacao: "Valor varia conforme óleo, filtro e modelo do veículo.",
  },
  {
    id: "srv-freios",
    nome: "Freios",
    categoria: "Segurança",
    descricao: "Avaliação de pastilhas, discos, fluido e eficiência de frenagem.",
    preco: "A partir de R$ 180",
    tempo: "1h30",
    observacao: "Prioridade alta quando há ruído ou perda de eficiência.",
  },
  {
    id: "srv-suspensao",
    nome: "Suspensão",
    categoria: "Conforto e segurança",
    descricao: "Diagnóstico de amortecedores, buchas, pivôs, bandejas e componentes.",
    preco: "A partir de R$ 250",
    tempo: "2h",
    observacao: "Recomendado quando há ruído, folga ou desgaste irregular.",
  },
  {
    id: "srv-alinhamento",
    nome: "Alinhamento",
    categoria: "Rodas e pneus",
    descricao: "Ajuste técnico para estabilidade e desgaste correto dos pneus.",
    preco: "A partir de R$ 90",
    tempo: "40 min",
    observacao: "Boa oferta complementar para pneus e suspensão.",
  },
  {
    id: "srv-balanceamento",
    nome: "Balanceamento",
    categoria: "Rodas e pneus",
    descricao: "Correção de vibração nas rodas para condução estável.",
    preco: "A partir de R$ 80",
    tempo: "35 min",
    observacao: "Indicado quando há vibração ou após troca de pneus.",
  },
  {
    id: "srv-ar",
    nome: "Ar-condicionado",
    categoria: "Conforto",
    descricao: "Avaliação de eficiência, higienização, vazamentos e carga de gás.",
    preco: "A partir de R$ 160",
    tempo: "1h",
    observacao: "Indicado quando o sistema perde refrigeração.",
  },
  {
    id: "srv-motor",
    nome: "Motor",
    categoria: "Mecânica especializada",
    descricao: "Diagnóstico e manutenção de funcionamento, ruídos e desempenho.",
    preco: "A partir de R$ 320",
    tempo: "Sob diagnóstico",
    observacao: "Precisa de triagem técnica antes do orçamento final.",
  },
  {
    id: "srv-injecao",
    nome: "Injeção eletrônica",
    categoria: "Técnico",
    descricao: "Leitura de falhas, sensores e desempenho para orientar reparo.",
    preco: "A partir de R$ 220",
    tempo: "1h30",
    observacao: "Ajuda a separar diagnóstico real de troca desnecessária de peças.",
  },
  {
    id: "srv-diagnostico",
    nome: "Diagnóstico automotivo",
    categoria: "Técnico",
    descricao: "Avaliação inicial para identificar causa provável antes do orçamento.",
    preco: "A partir de R$ 150",
    tempo: "1h",
    observacao: "Ajuda a dar transparência ao atendimento e ao orçamento.",
  },
  {
    id: "srv-pneus",
    nome: "Troca de pneus",
    categoria: "Rodas e pneus",
    descricao: "Venda e instalação com orientação sobre medida, uso e segurança.",
    preco: "A partir de R$ 320",
    tempo: "50 min",
    observacao: "Pode ser combinado com alinhamento e balanceamento.",
  },
];

export const quotes = [
  {
    id: "quote-lucas",
    leadId: "lead-lucas",
    total: 2860,
    status: "Em preparação",
    expiresAt: "Hoje, 18:00",
    items: ["4 pneus 205/55 R16", "Alinhamento", "Balanceamento", "Válvulas"],
  },
  {
    id: "quote-mariana",
    leadId: "lead-mariana",
    total: 180,
    status: "Enviado",
    expiresAt: "Hoje, 16:00",
    items: ["Alinhamento", "Balanceamento"],
  },
  {
    id: "quote-rafael",
    leadId: "lead-rafael",
    total: 620,
    status: "Aguardando aprovação",
    expiresAt: "Hoje, 17:00",
    items: ["Checklist preventivo", "Óleo", "Filtros", "Inspeção de freios"],
  },
  {
    id: "quote-patricia",
    leadId: "lead-patricia",
    total: 740,
    status: "Aprovado",
    expiresAt: "Hoje, 14:00",
    items: ["Pastilhas dianteiras", "Retífica de disco", "Fluido de freio"],
  },
  {
    id: "quote-joao",
    leadId: "lead-joao",
    total: 1350,
    status: "Em negociação",
    expiresAt: "Hoje, 17:30",
    items: ["Amortecedores", "Buchas", "Mão de obra"],
  },
  {
    id: "quote-andre",
    leadId: "lead-andre",
    total: 420,
    status: "Enviado",
    expiresAt: "Hoje, 15:00",
    items: ["Óleo", "Filtros", "Inspeção visual"],
  },
];

export const attendances = [
  {
    id: "att-lucas",
    leadId: "lead-lucas",
    channel: "WhatsApp IA",
    createdAt: "Hoje, 10:12",
    currentStep: "Montar orçamento completo",
  },
  {
    id: "att-mariana",
    leadId: "lead-mariana",
    channel: "WhatsApp equipe",
    createdAt: "Hoje, 09:40",
    currentStep: "Retorno para aprovação",
  },
  {
    id: "att-rafael",
    leadId: "lead-rafael",
    channel: "Google",
    createdAt: "Hoje, 08:48",
    currentStep: "OS em execução",
  },
  {
    id: "att-patricia",
    leadId: "lead-patricia",
    channel: "Indicação",
    createdAt: "Hoje, 09:30",
    currentStep: "Receber veículo e abrir OS",
  },
  {
    id: "att-joao",
    leadId: "lead-joao",
    channel: "WhatsApp IA",
    createdAt: "Ontem, 16:15",
    currentStep: "Aguardando aprovação do orçamento",
  },
  {
    id: "att-andre",
    leadId: "lead-andre",
    channel: "Site",
    createdAt: "Hoje, 11:22",
    currentStep: "Orçamento enviado",
  },
];

export const leads = [
  {
    id: "lead-lucas",
    customerId: "cust-lucas",
    vehicleId: "veh-corolla",
    serviceId: "srv-pneus",
    quoteId: "quote-lucas",
    attendanceId: "att-lucas",
    source: "WhatsApp IA",
    status: "Aguardando orçamento",
    priority: "Alta",
    responsibleId: "tm-pneus",
    nextAction: "Enviar orçamento completo ainda hoje",
    requestedAt: "Hoje, 10:12",
    observation:
      "IA coletou veículo, urgência e serviço desejado. Boa oportunidade para pacote com pneus, alinhamento e balanceamento.",
    forwarded: false,
    createdByAi: true,
  },
  {
    id: "lead-mariana",
    customerId: "cust-mariana",
    vehicleId: "veh-hb20",
    serviceId: "srv-alinhamento",
    quoteId: "quote-mariana",
    attendanceId: "att-mariana",
    source: "WhatsApp equipe",
    status: "Orçamento enviado",
    priority: "Média",
    responsibleId: "tm-recepcao",
    nextAction: "Retornar hoje às 16h para confirmar aprovação",
    requestedAt: "Hoje, 09:40",
    observation: "Cliente recebeu orçamento de alinhamento e balanceamento. Precisa retorno claro.",
    forwarded: false,
    createdByAi: false,
  },
  {
    id: "lead-rafael",
    customerId: "cust-rafael",
    vehicleId: "veh-onix",
    serviceId: "srv-revisao",
    quoteId: "quote-rafael",
    attendanceId: "att-rafael",
    source: "Google",
    status: "Em execução",
    priority: "Média",
    responsibleId: "tm-tecnico",
    nextAction: "Atualizar cliente após checklist da revisão",
    requestedAt: "Hoje, 08:48",
    observation:
      "Veículo em revisão geral. Cliente quer aprovação antes de serviços adicionais.",
    forwarded: true,
    createdByAi: false,
  },
  {
    id: "lead-patricia",
    customerId: "cust-patricia",
    vehicleId: "veh-compass",
    serviceId: "srv-freios",
    quoteId: "quote-patricia",
    attendanceId: "att-patricia",
    source: "Indicação",
    status: "Serviço agendado",
    priority: "Alta",
    responsibleId: "tm-tecnico",
    nextAction: "Receber veículo às 14h e abrir ordem de serviço",
    requestedAt: "Hoje, 09:30",
    observation:
      "Relatou ruído na frenagem. Atendimento precisa reforçar segurança e transparência.",
    forwarded: true,
    createdByAi: false,
  },
  {
    id: "lead-joao",
    customerId: "cust-joao",
    vehicleId: "veh-civic",
    serviceId: "srv-suspensao",
    quoteId: "quote-joao",
    attendanceId: "att-joao",
    source: "WhatsApp IA",
    status: "Aguardando aprovação",
    priority: "Alta",
    responsibleId: "tm-recepcao",
    nextAction: "Confirmar disponibilidade para avaliação presencial",
    requestedAt: "Ontem, 16:15",
    observation:
      "Cliente está comparando orçamento de suspensão. Retorno rápido pode evitar perda.",
    forwarded: false,
    createdByAi: true,
  },
  {
    id: "lead-andre",
    customerId: "cust-andre",
    vehicleId: "veh-hilux",
    serviceId: "srv-oleo",
    quoteId: "quote-andre",
    attendanceId: "att-andre",
    source: "Site",
    status: "Aguardando aprovação",
    priority: "Média",
    responsibleId: "tm-orcamentos",
    nextAction: "Confirmar aprovação de óleo e filtros",
    requestedAt: "Hoje, 11:22",
    observation: "Cliente pediu serviço objetivo, mas quer saber marcas disponíveis.",
    forwarded: false,
    createdByAi: false,
  },
];

export const serviceOrders = [
  {
    id: "os-1042",
    number: "OS #1042",
    customerId: "cust-rafael",
    vehicleId: "veh-onix",
    serviceId: "srv-revisao",
    status: "Em execução",
    technicianId: "tm-tecnico",
    entryAt: "Hoje, 09:10",
    dueAt: "Hoje às 17h",
    value: 620,
    notes: "Checklist em andamento. Avisar cliente antes de incluir item adicional.",
  },
  {
    id: "os-1043",
    number: "OS #1043",
    customerId: "cust-patricia",
    vehicleId: "veh-compass",
    serviceId: "srv-freios",
    status: "Serviço agendado",
    technicianId: "tm-tecnico",
    entryAt: "Hoje, 14:00",
    dueAt: "Hoje às 18h",
    value: 740,
    notes: "Cliente relatou ruído na frenagem. Priorizar transparência no diagnóstico.",
  },
  {
    id: "os-1044",
    number: "OS #1044",
    customerId: "cust-andre",
    vehicleId: "veh-hilux",
    serviceId: "srv-oleo",
    status: "Aguardando aprovação",
    technicianId: "tm-orcamentos",
    entryAt: "Hoje, 11:40",
    dueAt: "Hoje às 15h",
    value: 420,
    notes: "Aguardando aprovação do cliente para óleo e filtros.",
  },
];

export const followUps = [
  {
    id: "fu-mariana",
    leadId: "lead-mariana",
    customerId: "cust-mariana",
    vehicleId: "veh-hb20",
    responsibleId: "tm-recepcao",
    reason: "Orçamento enviado e ainda não aprovado",
    dueAt: "Hoje às 16h",
    channel: "WhatsApp",
    message:
      "Olá, Mariana! Passando para saber se você conseguiu avaliar o orçamento do alinhamento e balanceamento do seu HB20. Se quiser, posso te ajudar a agendar.",
  },
  {
    id: "fu-joao",
    leadId: "lead-joao",
    customerId: "cust-joao",
    vehicleId: "veh-civic",
    responsibleId: "tm-recepcao",
    reason: "Suspensão aguardando aprovação",
    dueAt: "Hoje às 17h30",
    channel: "WhatsApp",
    message:
      "Olá, João! Seu orçamento de suspensão segue em aberto. Posso confirmar sua disponibilidade para avaliação e tirar dúvidas sobre os itens?",
  },
  {
    id: "fu-andre",
    leadId: "lead-andre",
    customerId: "cust-andre",
    vehicleId: "veh-hilux",
    responsibleId: "tm-orcamentos",
    reason: "Óleo e filtros aguardando confirmação",
    dueAt: "Amanhã às 09h",
    channel: "WhatsApp",
    message:
      "Olá, André! Separei as opções de óleo e filtros da Hilux. Posso confirmar a aprovação para deixar o serviço programado?",
  },
  {
    id: "fu-rafael",
    leadId: "lead-rafael",
    customerId: "cust-rafael",
    vehicleId: "veh-onix",
    responsibleId: "tm-tecnico",
    reason: "Serviço em execução precisa atualização",
    dueAt: "Hoje às 15h30",
    channel: "WhatsApp",
    message:
      "Olá, Rafael! Sua revisão está em andamento. Assim que o checklist terminar, envio o resumo dos itens e próximos passos.",
  },
];

export const events = [
  {
    id: "evt-lucas-1",
    leadId: "lead-lucas",
    time: "Hoje, 10:12",
    actor: "IA no WhatsApp",
    title: "Atendimento recebido",
    description: "Cliente pediu cotação de pneus para Corolla 2018.",
  },
  {
    id: "evt-lucas-2",
    leadId: "lead-lucas",
    time: "Hoje, 10:16",
    actor: "CRM operacional",
    title: "Dados coletados",
    description: "Sistema registrou veículo, urgência, serviço desejado e próxima ação.",
  },
  {
    id: "evt-mariana-1",
    leadId: "lead-mariana",
    time: "Hoje, 09:55",
    actor: "Recepção técnica",
    title: "Orçamento enviado",
    description: "Cliente pediu retorno hoje às 16h.",
  },
  {
    id: "evt-rafael-1",
    leadId: "lead-rafael",
    time: "Hoje, 09:10",
    actor: "Equipe técnica",
    title: "OS #1042 aberta",
    description: "Revisão geral em execução com previsão hoje às 17h.",
  },
  {
    id: "evt-patricia-1",
    leadId: "lead-patricia",
    time: "Hoje, 09:44",
    actor: "Técnico responsável",
    title: "Serviço agendado",
    description: "Veículo será recebido às 14h para avaliação de freios.",
  },
  {
    id: "evt-joao-1",
    leadId: "lead-joao",
    time: "Ontem, 16:35",
    actor: "IA no WhatsApp",
    title: "Cliente comparando orçamento",
    description: "Retorno rápido recomendado para preservar oportunidade.",
  },
];

export const dashboardMetrics = [
  { label: "Atendimentos hoje", value: "34", note: "Entrada por WhatsApp, site e equipe" },
  { label: "Clientes atendidos pela IA", value: "28", note: "Triagem inicial no WhatsApp" },
  { label: "Orçamentos abertos", value: "12", note: "R$ 18,4 mil em negociação" },
  { label: "Serviços agendados", value: "9", note: "2 entram hoje à tarde" },
  { label: "Serviços em execução", value: "4", note: "OS em andamento" },
  { label: "Retornos pendentes", value: "6", note: "3 com prioridade alta" },
  { label: "Aguardando aprovação", value: "5", note: "Orçamentos enviados" },
  { label: "Tempo médio de resposta", value: "7 min", note: "Atendimento inicial" },
];

export const dashboardAlerts = [
  "3 clientes aguardam aprovação de orçamento",
  "2 ordens de serviço precisam atualização hoje",
  "1 oportunidade quente está sem resposta há mais de 2h",
];

export const operationSummary = [
  { label: "Visão do dia", value: "Visão clara dos atendimentos, orçamentos e retornos da operação." },
  { label: "Oportunidades quentes", value: "Lucas, João e Patrícia" },
  { label: "Fila de retornos", value: "6 contatos para hoje" },
  { label: "Maior demanda", value: "Pneus, revisão, freios e suspensão" },
  { label: "Gargalo visível", value: "Orçamentos aguardando aprovação" },
];

export const recentEvents = [
  "Lucas Almeida foi atendido pela IA no WhatsApp e entrou no CRM com dados completos",
  "OS #1042 de Rafael Lima está em execução com previsão hoje às 17h",
  "Orçamento de freios da Patrícia Nunes está agendado para atendimento às 14h",
  "João Victor precisa de retorno para aprovação do orçamento de suspensão",
];

export const ownerBars = {
  servicos: [
    ["Pneus", 84],
    ["Alinhamento", 78],
    ["Revisão geral", 72],
    ["Freios", 58],
    ["Suspensão", 46],
    ["Ar-condicionado", 38],
  ],
  origens: [
    ["WhatsApp IA", 82],
    ["WhatsApp equipe", 64],
    ["Google", 51],
    ["Instagram", 42],
    ["Indicação", 39],
  ],
  responsaveis: [
    ["Recepção técnica", 77],
    ["Consultor de pneus", 61],
    ["Orçamentista", 48],
    ["Equipe técnica", 44],
  ],
};

export const riskItems = [
  "Clientes sem resposta há mais de 24h",
  "Orçamentos enviados sem retorno programado",
  "OS em execução sem atualização ao cliente",
];

export const aiMetrics = [
  { label: "Leads atendidos pela IA hoje", value: "28" },
  { label: "Clientes qualificados", value: "17" },
  { label: "Orçamentos solicitados", value: "12" },
  { label: "Encaminhados para equipe", value: "9" },
  { label: "Tempo médio de resposta", value: "7 min" },
];

export const aiServiceDistribution = [
  ["Pneus", 28],
  ["Alinhamento", 22],
  ["Revisão geral", 19],
  ["Freios", 14],
  ["Suspensão", 11],
  ["Ar-condicionado", 8],
];

export const aiCollectedFields = [
  "Nome do cliente",
  "Telefone",
  "Veículo",
  "Placa",
  "Serviço desejado",
  "Urgência",
  "Melhor horário",
  "Status do atendimento",
  "Próxima ação",
];

export const aiFlowSteps = [
  "WhatsApp",
  "IA atende",
  "Coleta informações",
  "Qualifica cliente",
  "Registra no CRM",
  "Encaminha para equipe",
];

export const aiQualifiedLeads = [
  ["Lucas Almeida", "Corolla 2018", "Pneus + alinhamento", "Prioridade alta"],
  ["Mariana Costa", "HB20 2020", "Alinhamento", "Orçamento enviado"],
  ["Rafael Lima", "Onix 2022", "Revisão geral", "Agendar retorno"],
];

function byId(collection, id) {
  return collection.find((item) => item.id === id);
}

export function getLeadRecords(customLeads = leads) {
  return customLeads.map((lead) => {
    const customer = byId(customers, lead.customerId);
    const vehicle = byId(vehicles, lead.vehicleId);
    const service = byId(services, lead.serviceId);
    const quote = byId(quotes, lead.quoteId);
    const responsible = byId(teamMembers, lead.responsibleId);
    const attendance = byId(attendances, lead.attendanceId);
    const history = events.filter((event) => event.leadId === lead.id);

    return {
      ...lead,
      customer,
      vehicle,
      service,
      quote,
      responsible,
      attendance,
      history,
      nome: customer?.name || "Cliente sem nome",
      telefone: customer?.phone || "-",
      origem: lead.source || customer?.origin || "-",
      veiculo: vehicle ? `${vehicle.model} ${vehicle.year}` : "Veículo não informado",
      placa: vehicle?.plate || "-",
      servico: service?.nome || "Serviço a definir",
      categoria: service?.categoria || "Sem categoria",
      orcamento: quote?.total || 0,
      proximaAcao: lead.nextAction,
      responsavel: responsible?.role || "Sem responsável",
      responsavelNome: responsible?.name || "Equipe",
      prioridade: lead.priority,
      observacao: lead.observation,
    };
  });
}

export function getServiceOrderRecords() {
  return serviceOrders.map((order) => {
    const customer = byId(customers, order.customerId);
    const vehicle = byId(vehicles, order.vehicleId);
    const service = byId(services, order.serviceId);
    const technician = byId(teamMembers, order.technicianId);

    return {
      ...order,
      cliente: customer?.name || "Cliente sem nome",
      telefone: customer?.phone || "-",
      veiculo: vehicle ? `${vehicle.model} ${vehicle.year}` : "Veículo não informado",
      placa: vehicle?.plate || "-",
      servico: service?.nome || "Serviço a definir",
      responsavel: technician?.role || "Equipe",
      responsavelNome: technician?.name || "Equipe",
    };
  });
}

export function getFollowUpRecords(customLeads = leads) {
  return followUps.map((followUp) => {
    const customer = byId(customers, followUp.customerId);
    const vehicle = byId(vehicles, followUp.vehicleId);
    const responsible = byId(teamMembers, followUp.responsibleId);
    const lead = byId(customLeads, followUp.leadId);

    return {
      ...followUp,
      nome: customer?.name || "Cliente sem nome",
      veiculo: vehicle ? `${vehicle.model} ${vehicle.year}` : "Veículo não informado",
      placa: vehicle?.plate || "-",
      motivo: followUp.reason,
      retorno: followUp.dueAt,
      responsavel: responsible?.role || "Equipe",
      status: lead?.status || "Retorno pendente",
    };
  });
}

export function getActiveServiceNames() {
  return services.map((service) => service.nome).sort();
}
